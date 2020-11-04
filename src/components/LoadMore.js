
/**
 * 
 * Componente Navbar
 * contiene el buscador de productos
 * 
 */


import React from 'react'
import SearchBar from '../components/SearchBar';

export default class LoadMore extends React.Component{
    render(){
        return(
            <div className='container mb32 mt32'>
                <div className='column centered' onClick={()=>this.props.loadMore()}>
                    <div className='text-center ver-mas'>Ver mas</div>
                    
                </div>
            </div>
        );
    }
}

