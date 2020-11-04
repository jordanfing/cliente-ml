/**
 * Renderiza el logo de Mercado Libre en background
 */


import React from 'react';
import '../css/main.css';
import Logo_ML_2x from '../resources/Logo_ML@2x.png'

export default function Background (){

        return(
              <div className='bg'>
                    <div className='column center'>
                        <div className='gray'>
                        <img className='helper-img_2x' alt='' src={Logo_ML_2x}></img>
                        </div>
                        <div className='gray mt16'>
                        Nunca dejes de buscar
                        </div>
                    
                    </div>
                </div>
        );
}