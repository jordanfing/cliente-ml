import React from 'react';
import '../css/main.css';

export default class Categories extends React.Component{
    

    mapCategories=(categories)=>{
        
        var myCategories="";
        for (var i = 0; i < categories.length; i++){
            myCategories+=categories[i];
            if (i+1<=categories.length-1){
                myCategories+=" > ";
            }
        }

        return(
            <div>{myCategories}</div>
        );
    }

    render(){
        
        return(
            <div className='container'>
                
                <div className='categories'>
                {this.props.categories!=null && this.mapCategories(this.props.categories)}
                </div>
            </div>
        );
    }
}
