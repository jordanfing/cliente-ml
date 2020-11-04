import React from 'react';
import '../css/main.css';
import Logo_ML_2x from '../resources/Logo_ML@2x.png'

export default class NotFound extends React.Component{
 

render(){
            return(
                <div className='bg'>
                        <div className='column center'>
                        
                        { this.props.errorCode!=null && 
                            <div className='error-code' >
                            <h1>{this.props.errorCode}</h1> 
                            </div>
                        }
                            <div className='error-desc'>    
                                <h3>{this.props.errorMessage}</h3>
                            </div>

                            <div className='gray'>
                            <img className='helper-img_2x' alt='' src={Logo_ML_2x}></img>
                            </div>

                            
                        
                        </div>
                    </div>
        );
        }
}