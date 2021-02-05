import React,{ useState } from 'react'
import { addstudent } from "../actions";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';


 function Addstudent ({addstudent}) {
let id=100;
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');
    

let render = () =>{
    return (
        <div className="text-left text-light bg-dark m-3 rounded p-5">
                <div className="form-group w-25 mx-auto">
                  <label for="name">Name</label>
                  <input type="text"
                   onChange={e => setName(e.target.value)} className="form-control" name="name" id="name" aria-describedby="namehelp" placeholder="enter a name" />
                  <small id="namehelp" className="form-text text-muted">enter a name</small>
                </div>
                <div className="form-group w-25 mx-auto">
                  <label for="email">email</label>
                  <input type="email"
                  onChange={e => setEmail(e.target.value)} className="form-control" name="email" id="email" aria-describedby="emailhelp" placeholder="enter an email" />
                  <small id="emailhelp" className="form-text text-muted">Enter an email</small>
                </div>
                <div className="form-group w-25 mx-auto">
                  <label for="city">City</label>
                  <input type="text"
                  onChange={e => setCity(e.target.value)}  className="form-control" name="city" id="city" aria-describedby="cityhelp" placeholder="enter a city" />
                  <small id="cityhelp" className="form-text text-muted">Enter a city</small>
                </div>
                <div className="form-group w-25 mx-auto" ><Link to="/"><button onClick={() => addstudent({name:name,email:email,city:city})} type="button" class="btn btn-outline-primary w-25">Add</button></Link></div>
            </div>
    )
    
}
   
   return (<div className="alert alert-light">
        {render()}
    </div>);
        
    
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addstudent }, dispatch)
}
export default connect(null, mapDispatchToProps)(Addstudent)