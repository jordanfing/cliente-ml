import React from 'react'
import Item from '../components/Item'


function ProductList(){
    return(
        <div>
            <div className='container' style={{marginBottom:16+'px'}}>
                <div className='categories'>
                Hogar, muebles y cocina
                </div>
            </div>
            
            <div className='container'>
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default ProductList;