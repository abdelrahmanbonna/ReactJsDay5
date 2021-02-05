import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

constructor(history){
    super()
    this.h = history
}

 goToDetails(){
        this.h.push(`/`)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/"><h1 className="navbar-brand" >Students DB</h1></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                          <Link to="/"> <h6 className="nav-link">Home <span className="sr-only">(current)</span></h6></Link>
                        </li>
                    </ul>
                    
                    <Link to="/addstudent">
                           <button type="button" className="btn btn-outline-info btn-md" >
                               Add Student
                           </button>
                    </Link>
                </div>
            </nav>
        )
    }
}
