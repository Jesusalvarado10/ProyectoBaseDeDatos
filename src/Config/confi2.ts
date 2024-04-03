import express, { Request, Response } from 'express';
import neo4j, { Driver, Session, Record } from 'neo4j-driver';



const driver: Driver = neo4j.driver(
  'neo4j+s://e342daf9.databases.neo4j.io',
  neo4j.auth.basic('neo4j', 'YZcjHZ7G0pnD_XlCYmWxQ-zfK3ZrZ5KIg2pdm-CP0vI')
);

export async function addNodeUser( email:string, password:string,id:string){
      const session: Session = driver.session();
      let useridString: any;
        try{
          const useresult = session.run(
            "MERGE (u:User { email: $email, idFire: $id }) SET u.password = $password RETURN u",
            { email, password, id }
        );
        
      const userid = (await useresult).records[0].get('u').identity; 
      useridString=userid;
   


      }
      catch(error){
        console.log(error)
      } 
      finally{
        
        await session.close();
  
      }
      return useridString;
    }
    export async function addNoderAnime(name: string, genre: string, id: any) {
      const session: Session = driver.session();
      try {
          // Verificar si el nodo Anime ya existe
          const animeCheckResult = await session.run("MATCH (a:Anime {name: $name}) RETURN a", { name });
          let animeId;
          if (animeCheckResult.records.length > 0) {
              animeId = animeCheckResult.records[0].get('a').identity;
              console.log("El nodo Anime ya existe.");
          } else {
              // Crear nodo de Anime
              const animeresult = await session.run("CREATE (a:Anime {name: $name}) RETURN a", { name });
              animeId = animeresult.records[0].get('a').identity; // Obtener el ID del nodo Anime
              console.log("Nodo Anime creado exitosamente.");
          }
  
          // Verificar si el nodo Género ya existe
          const genreCheckResult = await session.run("MATCH (g:Genre {genre: $genre}) RETURN g", { genre });
          let genreId;
          if (genreCheckResult.records.length > 0) {
              genreId = genreCheckResult.records[0].get('g').identity;
              console.log("El nodo Género ya existe.");
          } else {
              // Crear nodo de Género
              const genreresult = await session.run("CREATE (g:Genre {genre: $genre}) RETURN g", { genre });
              genreId = genreresult.records[0].get('g').identity; // Obtener el ID del nodo Género
              console.log("Nodo Género creado exitosamente.");
          }
  
          // Crear relación BELONG_TO
          await session.run("MATCH (a:Anime),(g:Genre) WHERE id(a) = $animeId AND id(g) = $genreId MERGE (a)-[:BELONG_TO]->(g)", { animeId, genreId });

          // Crear relación LIKE solo si no existe
          await session.run("MATCH (u:User), (a:Anime) WHERE id(a) = $animeId MERGE (u)-[:LIKE]->(a)", { id, animeId });
          console.log("Nodos y relaciones creados exitosamente.");
      } catch (error) {
          console.error("Error al crear nodos y relaciones:", error);
      } finally {
          await session.close();
      }
  }
  
  
export async function getNodeUser( id: string): Promise<Record | null> {
  const session: Session = driver.session();
  try {
      const result = await session.run(
          "MATCH (u:User {idFire: $id}) RETURN u",
          { id }
      );

      // Comprueba si hay registros devueltos
      if (result.records.length > 0) {
          // Devuelve el primer registro (ya que solo debería haber uno)
          const id = result.records[0].get('u').toString()
          return id;
      } else {
          // Si no se devolvió ningún registro, devuelve null
          return null;
      }
  } catch (error) {
      console.error(error);
      return null; // Si ocurre un error, devuelve null
  } finally {
      // Cierra la sesión y el driver al finalizar
      await session.close();
  }
}
export async function getLikedGenres(userId: any): Promise<string[]> {
  const session: Session = driver.session();
  console.log(userId)
  try {
    const result = await session.run(`
      MATCH (u:User)-[:LIKE]->(a:Anime)-[:BELONG_TO]->(g:Genre)
      WHERE id(u) = $userId
      RETURN DISTINCT g.genre as genreName
    `, { userId });

    // Mapear los nombres de los géneros desde los resultados
    console.log(result.records)
    const genres = result.records.map(record => record.get('genreName'));

    return genres;
  } catch (error) {
    console.error("Error al obtener los géneros que le gustan al usuario:", error);
    throw error;
  } finally {
    // Cerrar la sesión de Neo4j después de ejecutar la consulta
    await session.close();
  }
}