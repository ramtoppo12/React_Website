import React from "react"
import { Component } from "react";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <div>
 <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <Link class="btn btn-dark btn-social mx-2" to="#!"><i class="fab fa-twitter"></i></Link>
                        <Link class="btn btn-dark btn-social mx-2" to="#!"><i class="fab fa-facebook-f"></i></Link>
                        <Link class="btn btn-dark btn-social mx-2" to="#!"><i class="fab fa-linkedin-in"></i></Link>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <Link class="mr-3" to="#!">Privacy Policy</Link>
                        <Link to="#!">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
            </div>
        )
    }
}
export default Footer;