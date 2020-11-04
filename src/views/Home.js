import React from 'react';
import axios from 'axios';
import '../App.scss';
import { Route, Switch} from "react-router-dom";
import SearchBox from './SearchBox';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Categories from '../components/Categories';
import Background from '../components/Background';
import NotFound from '../components/NotFound';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:null,
            error:null,
            invalidSearch:null
        }
    }

    /**
     * Guarda la respuesta de la API de items
     * @param {Object} response 
     */
    updateData=(response)=>{
        
         if (this.state.data!=null){
            var newArray = this.state.data.items.concat(response.data.items);
            //console.log("NEW ARRAY "+JSON.stringify(newArray));
              this.setState({
                  data:{
                      items:newArray,
                  }
              })
         }else{
             this.setState({
                 data: response.data
             })
         }

    }

    /**
     * Maneja los errores que pudo haber devuelto la API de ML
     * @param {Object} error 
     */
    handleError=(error)=>{
        this.setState({
            error: error.data.APIErrors.error
        })
    }

    /**
     * Consulta a la API de items
     * @param {String} value 
     */
    fetchProducts=(value, limit, offset)=>{

       
        const params={
                limit:limit,
                offset:offset,
            }
        
        axios.get("http://127.0.0.1:5000/api/items?q="+value,{params:params})
        .then(response =>{
            //console.log(JSON.stringify(response));
            if (response.status===200){
                this.updateData(response);
                
            }
        } )
        .catch(error => {
            
            this.setState({
                error:error,
                
            })
          
        });
     
    
    }

    reloadProducts=(value,limit,offset)=>{
        this.setState({
            data:null
        },()=>
            this.fetchProducts(value,limit,offset))

    }

    componentDidMount(){
        //console.log(this.props);
    }


    render(){
        
        return (
            <div>
                {/* Buscador */}
                <Route path="/" render={(props) => <SearchBox  {...props} />} /> 
                 {/* Categorías de los items buscados */}
                <Route 
                    path={["/items","/items/:id"]}
                    render={(props)=> this.state.data!=null && <Categories categories={this.state.data.categories}  />}
                />
                <Switch>
                    {/* renderizo el background sólo en la raíz */}
                    <Route exact path="/"render={(props) => <Background />}/> 
                   
                    {/* Vista de lista de productos */}
                    <Route
                        exact
                        path="/items"
                        render={(props) => <ProductList data={this.state.data} updateProductList={(value, limit, offset)=>this.fetchProducts(value,limit, offset)} reloadProducts={(value,limit,offset)=>this.reloadProducts(value,limit,offset)} {...props} />}
                        
                    />
                    {/* Vista de detalle del item */}
                    <Route path="/items/:id" render={(props) => <ProductDetail {...props} />} />
                    
                    <Route path='/not-found' render={(props) => <NotFound errorCode={404} errorMessage={"Ups! No existe este producto"}/>}/>
                    <Route render={(props) => <NotFound errorCode={404} errorMessage={"Ups! No existe esta página"} />}/>
                    
                </Switch>
            
            </div>
        );
    }
}


