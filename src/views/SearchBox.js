
/**
 * 
 * Componente Navbar
 * contiene el buscador de productos
 * 
 */


import React from 'react'
import SearchBar from '../components/SearchBar';

export default class SearchBox extends React.Component{
    render(){
        return(
            <div>
                <SearchBar {...this.props}/>
               
            </div>
        );
    }
}


        

