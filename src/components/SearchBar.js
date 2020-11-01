import React from 'react';
import '../css/main.css';
import Logo_ML from '../resources/Logo_ML.png'
import ic_Search from '../resources/ic_Search.png'

function SearchBar(){
    return(
        <div className='navbar'>
            <div className='container'>
            <div className='box'>
                <div className='helper'>
                    <img className='helper-img' src={Logo_ML}></img>
                </div>
                <div className='nav-search-container'>
                
                <form className='nav-search'>
                   
                <input className='nav-search-input' type="text" placeholder={"Buscar productos, marcas y más..."} />
                <button className='nav-search-button' type='submit'><img src={ic_Search}></img></button>
                
                </form>
                
                </div>
            </div>
            </div>
        </div>
    );
}

export default SearchBar;
