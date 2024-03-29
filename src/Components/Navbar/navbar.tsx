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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  Parent
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    )}