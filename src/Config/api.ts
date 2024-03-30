export async function fetchTopAnimesByGenre(genre: string) {
    const query = `
      query {
        Page(page: 1, perPage: 10) {
          media(type: ANIME, genre: "${genre}", sort: SCORE_DESC) {
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