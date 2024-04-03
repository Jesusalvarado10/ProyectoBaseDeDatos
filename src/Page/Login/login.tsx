
import { useState } from 'react';
import './login.css'
import User from '../../Class/User';
import { signInWithEmailAndPasswordAndFetchUserData, signUp } from '../../Config/confiFIrebase';
import { useAuth } from '../../Context/contex';
import { useNavigate } from 'react-router-dom';
import { addNodeUser, getNodeUser } from '../../Config/confi2';

export function Login() {
  const { login } = useAuth();
const navigate=useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleAdcept = async (event: React.MouseEvent) => {
  event.preventDefault();

  const user= new User (email,password)
  const userid = await signUp(user)

  if(userid){
    const id2= addNodeUser(email,password,userid)
  user.setId(userid) 
  user.setid2(await id2)
  login(user)
  navigate('/')
}
}
const handleAdceptIniciar = async (event: React.MouseEvent) => {
  event.preventDefault();
const result= await signInWithEmailAndPasswordAndFetchUserData(email,password)
  if (!(result instanceof User)) {
    // Handle the case when result is not a User instance
    return;
  }
  const user = result;
if(user){
  const id2= await getNodeUser(user.getId());
   if (id2 !== null) {
     user.setid2(id2)
   }
login(user)  
navigate('/')
}

}
      // const navigate = useNavigate();
      // const [isLoading, setIsLoading] = useState(true); // Estado de carga inicialmente true
      // const [showAlert, setShowAlert] = useState(false);
      // const [error, setError] = useState('');
      // const [email, setEmail] = useState('');
      // const [password, setPassword] = useState('');
    
    return(

        <div className="hero min-h-screen bg-base-200">
           

  <div id="card"className="hero-content flex-col ">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Registro</h1>
    </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required        value={email}
                  onChange={(ev) => setEmail(ev.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required         value={password}
                  onChange={(ev) => setPassword(ev.target.value)}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">No tienes cuenta?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleAdcept}>Registrar</button>
          <br />
          <br />
          <button className="btn btn-primary" onClick={handleAdceptIniciar}>Iniciar</button>
        </div>
      </form>
    </div>

  </div>
  
</div>

    


    )
    
    }