
/**
 * Vista de detalle del producto
 */

import React from 'react';
import axios from 'axios';
import utils from '../utils/utils';
import Loader from '../components/Loader';
import { Redirect } from 'react-router-dom';
import { ITEM_DETAIL } from '../api/endpoints';


export default class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            error:null
        }
        
    }

    //Actualizo los datos que trajo la API
    updateData=(response)=>{
        this.setState({
            data: response.data
        })
    }

    /**
     * Consulta a la API por Id de item
     * @param {String} value 
     */
    fetchItem=(value)=>{

        //endpoint API de items
        axios.get(ITEM_DETAIL+value)
        .then(response =>{
            if (response.status===200){ //responde ok
                this.updateData(response);
            }

        } )
        .catch(error => {
            this.setState({
                error:error
            })
          
        });
    }


    componentDidMount=()=>{
        var id = this.props.match.params.id;
        this.fetchItem(id);
    }

    render(){
        //si hubo un error, redireccionamos
        if (this.state.error!=null) return <Redirect to='/not-found' />
        //si está consultando. Mostramos el loader
        if (this.state.data==null) return <Loader />;
        
        return(
             <div>
                <div className='container mb32'>
                    <div className='card-item border-shadow'>
                        <div className='grid'>
                            {/* Imagen Principal */}
                            <div className='one'>
                                <div className='photo'>
                                    {/* Sólo mostramos la primera imagen */}
                                    <img src={this.state.data.pictures[0]} alt='' />
                                </div>
                                
                            </div>
                            {/* Datos generales del producto */}
                            <div className='two'>
                                <div className='product-condition'>{this.state.data.condition+' | '+this.state.data.sold_quantity + ' vendidos'}</div>
                                <div className='product-title'>{this.state.data.item.title}</div>
                                <div className='row'>
                                    <div className='product-price'>{utils.currencyFormatES(this.state.data.item.price.amount)}</div>
                                    <div className='product-price-cents'>{this.state.data.item.price.decimals.toString().padStart(2,'0')}</div>
                                    
                                </div>
                                {
                                    this.state.data.free_shipping===true &&
                                    <div>
                                        <div className='free-shipping'>Envío gratis</div> 
                                         
                                    </div>
 
                                }
                                <div className='mb16'></div> 
                                <div>
                                    <button className='ml-button'>Comprar</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Desdcripción del producto */}
                        <div className='grid'>
                                <div className='one-desc'>
                                    <div className='pl32 pb32'>
                                        <div className='content-title'>
                                            Descripción
                                        </div>
                                        <div className='product-content' >
                                            {this.state.data.description}
                                        </div>
                                    </div> 
                                </div> 
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}


        
