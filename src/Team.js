import React,{Component} from "react"
import {Link} from "react-router-dom"
import TeamItem from "./TeamItem"
import img1 from "./team/2.jpg";
import img2 from "./team/1.jpg";
import img3 from "./team/3.jpg";




const teams=[
    {img:img1,name:"Ram ",designation:"React devloper"},
    {img:img2,name:"Emma",designation:"Express devloper"},
    {img:img3,name:"Helena ",designation:"Web designer"},

]

class Team extends Component{
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                      {teams.map((team,index)=>{
                          return(
                          <TeamItem {...team} key={index}/>
                          )
                      })}
                   

                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        {/* <!-- Clients--> */}
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link to="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link to="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link to="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link to="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
export default Team