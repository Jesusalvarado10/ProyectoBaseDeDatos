import React, { useState, useEffect } from "react";
import { Anime, AnimeList } from "../../Config/api2";
import { fetchTopAnimesByGenre } from "../../Config/api";
import { Card, CardHeader, Divider, CardBody, CardFooter, Button, Slider } from "@nextui-org/react";
import { Link } from "react-router-dom";





export function Home() {
    const [animes, setAnimes] = useState<Anime[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const topAnimes = await fetchTopAnimesByGenre("");
            setAnimes(topAnimes);
        };
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

    return (
        <div className="bg-base-100 max-h-screen ">
      
        <AnimeList animes={animes} />

    </div>
    );
}
