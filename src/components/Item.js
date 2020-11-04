import React from 'react';
import '../css/main.css';
import utils from '../utils/utils';
import { Link} from "react-router-dom";

import ic_shipping from '../resources/ic_shipping.png'

export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='card-item'>
                <div className='row'>
                    <div className='column-img'>
                        <Link to={'/items/'+this.props.item.id}  className='redirect'>
                        {/* imagen */}
                        <div >
                            <div className='card-image'>
                            
                            <img className='img' alt='' src={this.props.item.picture}/>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className='column'>
                        {/* descripción */}
                        <Link to={'/items/'+this.props.item.id} className='redirect'>
                            <div className='card-subtitle'>{this.props.item.title}</div>
                        </Link>
                        <div className='card-city'>{this.props.item.address}</div>
                        <div className='row'>
                            
                            <div className='card-title'>{utils.currencyFormatES(this.props.item.price.amount)}</div>
                            {/* Sólo se muestra si es envío gratis */}
                            {this.props.item.free_shipping && <img className='icon' alt='' src={ic_shipping}/>}
                        </div>
                        
                       
                        <div className='card-spacing'></div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
