import  { useState, useEffect } from "react";
import { Anime, AnimeList } from "../../Config/api2";
import { fetchLatestAnimesByGenre, fetchTopAnimes } from "../../Config/api";

import { getLikedGenres } from "../../Config/confi2";
import { useAuth } from "../../Context/contex";





export function Home() {
    const [animes, setAnimes] = useState<Anime[]>([]);

    const [recommendedAnimes, setRecommendedAnimes] = useState<Anime[]>([]);
    const {user}=useAuth();
    useEffect(() => {
        const fetchData = async () => {
            
            const topAnimes = await fetchTopAnimes();
            setAnimes(topAnimes);
        };
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once after the component mounts
    useEffect(() => {
        const fetchData = async () => {
            // Obtener los géneros que le gustan al usuario
            const userLikedGenres = await getLikedGenres(user?.id2);
            console.log(userLikedGenres);
            
            // Si el usuario tiene géneros que le gustan, obtener los animes recomendados
            if (userLikedGenres.length > 0) {
                const topAnimesPromises = userLikedGenres.map((genre: string) => fetchLatestAnimesByGenre(genre));
                const topAnimes = await Promise.all(topAnimesPromises);
                const flattenedAnimes = topAnimes.flat(); // Aplanar el array de arrays
                setRecommendedAnimes(flattenedAnimes);
                console.log(flattenedAnimes)
            }
        };

        fetchData();
    }, [user?.id2]); // Dependencia user?.id2 para que se ejecute el efecto cuando cambie el ID del usuario

    return (
        <div className="bg-base-100 max-h-screen ">
      
        <AnimeList animes={animes} />

        {recommendedAnimes.length > 0 && <AnimeList animes={recommendedAnimes}key={100} />}
    </div>
    );
}
