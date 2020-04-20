// React Basic and Bootstrap
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";


const Root = React.lazy(() => import('../index'));


const Home = () => {
  const [open, isOpen] = useState(false);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  

  useEffect(() => {
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation);
    };
  }, []);

 

  return (
    <React.Fragment>
      {/* Hero Start */}
      <div>
        <h1>HOME TEST</h1>
        <h1>HOME TEST</h1>
      </div>
      <div>
                <p>Clicker ici bande de pdinho.</p>
                <ul>
                    <li><Link to="/Khalid">Khalid</Link></li>
                    <li><Link to="/Luana">Luana</Link></li>
                </ul>
            </div>
            
    </React.Fragment>
  );
};

export default withRouter(Home);
