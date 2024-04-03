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
            if (user?.getid2()) {
                console.log("llegar");
                const userLikedGenres = await getLikedGenres(user?.id2);
                if (userLikedGenres.length > 0) {
          
                    const topAnimesPromises = userLikedGenres.map((genre: string) => fetchLatestAnimesByGenre(genre));
                    const topAnimes = await Promise.all(topAnimesPromises);
                    const flattenedAnimes = topAnimes.flat(); // Aplanar el array de arrays
                    setRecommendedAnimes(flattenedAnimes);
                }
            }
        };
        fetchData();
    }, []);
     // Empty dependency array ensures useEffect runs only once after the component mounts
     // Dependencia user?.id2 para que se ejecute el efecto cuando cambie el ID del usuario

    return (
        <div className="bg-base-100 max-h-screen ">
      
        <AnimeList animes={animes} />

        {recommendedAnimes.length > 0 && (
    <div className="bg-base-100"><h1 className="text-center text-2xl">Recomendaciones</h1>
        <AnimeList animes={recommendedAnimes} key={100} />
    </div>
)}
    </div>
    );
}
