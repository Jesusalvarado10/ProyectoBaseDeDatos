import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { Anime } from "./api2";

export function AnimeCard({ anime }: { anime: Anime }) {
    const [liked, setLiked] = useState<boolean>(false);
  
    const toggleLike = () => {
      setLiked(!liked);
    };
  
    return (
      <Card
        key={anime.id}
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px] h-100 mx-auto my-4 relative"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-large font-medium mt-2">
                    {anime.title.romaji}
                  </h1>
                  <p className="text-small text-foreground/80">
                    Géneros: {anime.genres.join(", ")}
                  </p>
                  <p className="text-small text-foreground/80">
                    Puntuación promedio: {anime.averageScore}
                  </p>
                </div>
                
              </div>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <div onClick={toggleLike} style={{ cursor: "pointer" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke={liked ? "red" : "currentColor"}
                  fill={liked ? "red" : "none"}
                  height="20"
                  width="24"
                >
                  <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }