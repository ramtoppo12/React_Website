import React,{Component} from "react"
import {Link} from "react-router-dom"
class Header extends Component{
    render(){
        return(
            <div id="page-top">
                
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
        <div className="masthead-subheading">{this.props.title}</div>
        <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.links}>{this.props.btnText}</Link>
            </div>
        </header>
            </div>
        )
    }
}
export default Header