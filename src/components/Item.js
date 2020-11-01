import React from 'react';
import '../css/main.css';

function Item(){
    return(
        <div className='card-item'>
            <div className='row'>
                <div className='column-img'>
                    <div className='card-image'>
                    <img className='img' src={"http://http2.mlstatic.com/D_605204-MLA31040454909_062019-O.jpg"}/>
                    </div>
                    
                 {/* imagen */}
                </div>
                <div className='column'>
                 {/* descripción */} descripción
                </div>

            </div>

        </div>
    );
}

export default Item;