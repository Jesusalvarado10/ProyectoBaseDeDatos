
import './login.css'
export function Login() {


      // const navigate = useNavigate();
      // const [isLoading, setIsLoading] = useState(true); // Estado de carga inicialmente true
      // const [showAlert, setShowAlert] = useState(false);
      // const [error, setError] = useState('');
      // const [email, setEmail] = useState('');
      // const [password, setPassword] = useState('');
    
    return(

        <div className="hero min-h-screen bg-base-200">
           
    <img src="https://sso-v2.crunchyroll.com/assets/images/log-in-hime.png"/>
  <div id="card"className="hero-content flex-col ">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">No tienes cuenta?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

  </div>
  
</div>

    


    )
    
    }