import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import User from "../Class/User";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, database } from "./Configuracion";

export async function signUp(user: User): Promise<string | null> {
   
    try {
        // Verifica si el correo electrónico ya está registrado


        // Registra al usuario en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, user.getEmail(), user.getPassword());

        // Obtén el ID único del usuario creado
        const userId = userCredential.user?.uid;

        if (!userId) {
            throw new Error("No se pudo obtener el ID del usuario");
        }

        // Agrega los datos del usuario a la colección "users" en Firestore

        await setDoc(doc(collection(database, 'users'), userId), {
            email: user.getEmail(),
            password: user.getPassword(),
        });

        // Sube la imagen y guarda la referencia
   
        return userId;
    } catch (error) {
    
        console.error("Error al registrar usuario:", error);
        return null;
        throw new Error("Error al registrar usuario.");
    }
}

export async function signInWithEmailAndPasswordAndFetchUserData(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Autenticar al usuario
      // Una vez autenticado, obtener el ID del usuario
      const userId = userCredential.user.uid;
  
      // Consultar Firestore para obtener los datos del usuario utilizando el ID
      const userDocRef = doc(database, "users", userId);
      const userDocSnap = await getDoc(userDocRef)
        
      if (userDocSnap.exists()) {

        const userData = userDocSnap.data();
        console.log(userData)
    
            const user = new User( email, password);
            user.setId( userId)
     
        
        

        return user;
    }

    } catch (error) {
      console.error("Error al autenticar al usuario:", error);
      return ["El usuario no tiene datos asociados / Los datos son invalidos",false];

   
    }
  }