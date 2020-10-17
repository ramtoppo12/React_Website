import React,{Component} from "react"
import PortfolioItem from "./PortfolioItem"
import img1 from "./portfolio/01-thumbnail.jpg";
import img2 from "./portfolio/02-thumbnail.jpg";
import img3 from "./portfolio/03-thumbnail.jpg";
import img4 from "./portfolio/04-thumbnail.jpg";
import img5 from "./portfolio/05-thumbnail.jpg";
import img6 from "./portfolio/06-thumbnail.jpg";




const portfolio=[
    {title:"Threads",subtitle:"Illustration",img:img1,class:"col-lg-4 col-sm-6 mb-4"},
    {title:"Explore",subtitle:"Graphic design",img:img2,class:"col-lg-4 col-sm-6 mb-4"},
    {title:"Finish",subtitle:"Indentity",img:img3,class:"col-lg-4 col-sm-6 mb-4"},
    {title:"Lines",subtitle:"Branding",img:img4,class:"col-lg-4 col-sm-6 mb-4  mb-lg-0"},
    {title:"Southwest",subtitle:"Web design",img:img5,class:"col-lg-4 col-sm-6 mb-4  mb-sm-0"},
    {title:"Window",subtitle:"Photography",img:img6,class:"col-lg-4 col-sm-6"},

]

class Portfolio extends Component{
    render(){
        return(
                <section className="page-section bg-light" id="portfolio">
            <div className="container ">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    
                    {portfolio.map((item,index) => {
                        return(
                            <PortfolioItem
                            {...item} key={index}
                            />
                        )
                    })}

                        </div>
                    </div>
        </section>
        )
    }
}


export default Portfolio