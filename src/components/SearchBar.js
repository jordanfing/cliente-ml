/**
 * Contiene la implementación de la barra de búsqueda
 * 
 */

import React from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";
import Logo_ML from '../resources/Logo_ML.png'
import ic_Search from '../resources/ic_Search.png'


export default class  SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            mounted:false
        }
    }

    componentDidMount(){
        this.setState({
            mounted:true
        })
    }

    //manejador submit del formulario
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("value: "+ this.state.value);
        //redireccionamos a la vista de productos y le mandamos la query por url
        this.props.history.push("/items?q="+this.state.value);
        
    }

    handleInputChange=(event)=>{
        this.setState({value: event.target.value});
    }

    clearInput=()=>{
        this.setState({
            value:""
        })
    }

    render(){
    
    if (this.state.mounted===false) return null;
    return(
        <div className='navbar'>
            <div className='container'>
                <div className='box'>
                    <div className='helper cursor-pointer' onClick={this.clearInput}>
                        <Link to='/'>
                            <img className='helper-img' alt='' src={Logo_ML}></img>
                        </Link>
                    </div>
                    <div className='nav-search-container'>
                        <form className='nav-search' onSubmit={this.handleSubmit}>
                            <input className='nav-search-input' name='value' value={this.state.value} onChange={this.handleInputChange} type="text" placeholder={"Buscar productos, marcas y más..."} />
                            <button className='nav-search-button' type='submit'><img src={ic_Search} alt=''></img></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
}


