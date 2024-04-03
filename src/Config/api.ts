export async function fetchLatestAnimesByGenre(genre: string) {
  const query = `
    query {
      Page(page: 1, perPage: 5) {
        media(type: ANIME, genre: "${genre}", sort: START_DATE_DESC) {
          id
          title {
            romaji
            english
            native
          }
          averageScore
          genres
  
        }
      }
    }
  `;

  try {
    const response = await fetch('https://graphql.anilist.co/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    });

    const responseData = await response.json();
    if (responseData.data && responseData.data.Page && responseData.data.Page.media) {
      const animesWithDescription = responseData.data.Page.media.map((anime: any) => ({
        id: anime.id,
        title: anime.title,
        averageScore: anime.averageScore,
        genres: anime.genres,
        description: anime.description ? anime.description : "No description available"
      }));
      console.log(animesWithDescription);
      return animesWithDescription;
    } else {
      console.error('Error: Invalid response data format');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
  export async function fetchTopAnimes() {
    // Construir la consulta GraphQL para obtener los mejores animes sin un género específico
    const query = `
      query {
        Page(page: 1, perPage: 20) {
          media(type: ANIME, sort: SCORE_DESC) {
            id
            title {
              romaji
              english
              native
            }
            averageScore
            genres
            description
          }
        }
      }
    `;
  
    try {
      // Realizar la solicitud POST a la API de AniList con la consulta GraphQL
      const response = await fetch('https://graphql.anilist.co/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: query,
        }),
      });
  
      // Analizar la respuesta JSON
      const responseData = await response.json();
  
      // Verificar si la respuesta contiene datos válidos
      if (responseData.data && responseData.data.Page && responseData.data.Page.media) {
        // Mapear los datos de los animes y formatearlos como se desee
        const animesWithDescription = responseData.data.Page.media.map((anime: any) => ({
          id: anime.id,
          title: anime.title,
          averageScore: anime.averageScore,
          genres: anime.genres,
          description: anime.description ? anime.description : "No description available"
        }));
  
        // Devolver los animes con sus descripciones
        return animesWithDescription;
      } else {
        console.error('Error: Invalid response data format');
        return [];
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }