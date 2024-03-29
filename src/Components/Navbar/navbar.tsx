import { useNavigate, Link } from "react-router-dom";



import { useAuth } from "../../Context/contex";
import PrivateRouteUser from "../Private/privateguest";
import PrivateRoute from "../Private/privateNav";
import { homeURL, loginURL } from "../../Constant/url";


export function NavBar() {
    const navigate = useNavigate();
    const { user } = useAuth()
    
  
    const handleLogout = async () => {
        navigate(homeURL);
    }
    const handleprofile = () => {
      navigate('/profile');
    }
    return ( 
    
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MetroVibe</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <li > <Link to={homeURL}>Home</Link></li>
          <PrivateRouteUser>
          <li > <Link to={loginURL}>Login</Link></li>
          </PrivateRouteUser>
          <PrivateRoute>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component"  />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={handleprofile}>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={handleLogout}><a>Logout</a></li>
            </ul>

            </div>
          </PrivateRoute>
          
          </ul>
        </div>
      </div>
    )}