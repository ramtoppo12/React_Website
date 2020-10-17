import React from "react"
import { Component } from "react";
import {Link} from "react-router-dom"

class PortfolioItem extends Component{
    render(){
        return(
            <div className={`${this.props.class}`}>
                        <div class="portfolio-item">
                            <Link class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={this.props.img} alt="" />
                            </Link>
                            <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">{this.props.title}</div>
                            <div class="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                            </div>
                        </div>
                        </div>
                    
       )
    }
}
export default PortfolioItem