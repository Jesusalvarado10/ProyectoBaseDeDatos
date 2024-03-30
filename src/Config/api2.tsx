import { Card, CardBody, Image } from '@nextui-org/react';
import './api.css';
import { useState } from 'react';
import { AnimeCard } from './api3';
export interface Anime {
    imageUrl: string | undefined;
    id: number;
    title: {
      romaji: string;
      english: string;
      native: string;
    };
    averageScore: number;
    genres: string[];
  }
  
  interface AnimeListProps {
    animes: Anime[];
  }
  export function AnimeList({ animes }: AnimeListProps) {
    return (
      <div className="bg-base-100 p-10">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    );
  }
  
  