import React from 'react';
import axios from 'axios';
import utils from '../utils/utils';
import Loader from '../components/Loader';
import { Redirect } from 'react-router-dom';


export default class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            error:null
        }
        
    }

    updateData=(response)=>{
        this.setState({
            data: response.data
        })
    }

    fetchItem=(value)=>{
        console.log("Home: "+value)

        axios.get("http://127.0.0.1:5000/api/items/"+value)
        .then(response =>{
            //console.log(JSON.stringify(response));
            if (response.status===200){
                this.updateData(response);
                //console.log(JSON.stringify(response.data))
                
            }

        } )
        .catch(error => {
            this.setState({
                error:error
            })
          console.log("este es un error desde el servidor: "+ JSON.stringify(error));
          
        });
    }

    componentDidMount=()=>{
        //console.log(this.props);
        var id = this.props.match.params.id;
        this.fetchItem(id);
    }

    render(){
        if (this.state.error!=null) return <Redirect to='/not-found' />
        if (this.state.data==null) return <Loader />;
        
        return(
             <div>
                <div className='container mb32'>
                    <div className='card-item border-shadow'>
                        <div className='grid'>
                            <div className='one'>
                                <div className='photo'>
                                    <img src={this.state.data.pictures[0]} alt='' />
                                </div>
                                
                            </div>
                            <div className='two'>
                                <div className='product-condition'>{this.state.data.condition+' | '+this.state.data.sold_quantity + ' vendidos'}</div>
                                <div className='product-title'>{this.state.data.item.title}</div>
                                <div className='row'>
                                    <div className='product-price'>{utils.currencyFormatES(this.state.data.item.price.amount)}</div>
                                    <div className='product-price-cents'>{this.state.data.item.price.decimals.toString().padStart(2,'0')}</div>
                                    
                                    </div>
                                {
                                    this.state.data.free_shipping==true &&
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


        
