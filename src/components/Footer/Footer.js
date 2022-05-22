import React from "react";
import {Link} from "react-router-dom";

const Footer=()=>{
    return(
        <div>
            <footer className="bg-dark py-4 text-white">
                <div className="container">
                    <nav className="row">
                        <Link to={'/'} className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
                             DHATextil
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-uppercase">products</li>
                            <li className="d-flex justify-content-between">
                               <i>Poliamyde</i>
                               <i>Poliyester</i>
                               <i>Acrylic</i>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-uppercase">follow us</li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-twitter"/>
                                <i className="bi bi-youtube"/>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-uppercase">create by</li>
                            <li className="d-block">
                                Ing.Damian Almada
                            </li>
                            <li className="d-block">
                                &#169; 2022
                            </li>
                        </ul>
                    </nav>
                </div>
           </footer>
        </div>

    )
}
export default Footer;