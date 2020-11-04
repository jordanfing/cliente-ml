/**
 * Vista Lista de productos
 */

import React from 'react'
import Item from '../components/Item'
import Loader from '../components/Loader';
import LoadMore from '../components/LoadMore';


export default class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            //paginado
            limit:4,
            offset:1,
            query:'',
            loading:''
            
        }
    }

    componentDidMount(){
        this.reloadProductList();        
    }

    componentDidUpdate(prevProps) {
        //Si la url cambia, volvemos a consultar los productos
        if (this.props.location.search !== prevProps.location.search) {
            console.log("UPDATE: "+ this.props);
            this.reloadProductList();
        }
      }

    /**
     * Mapea los resultados a componentes Item
     */
    mapPoducts=()=>{
        var items = this.props.data.items;
        var ProductList = items.map(item=> {
            return(
                <Item key={item.id} item={item}/>
            );
        })

        return ProductList;
    }


    /**
     * Actualiza la lista de productos actual
     */
    updateProductList=()=>{

        //obtengo el parámetro de búsqueda de la url
        var query = this.props.location.search.substr(3);
        this.setState({
            query:query
        },()=>{
            //Llamo a función de actualización que ejecuta el padre
            this.props.updateProductList(this.state.query, this.state.limit, this.state.offset);
            
        })

    }

    /**
     * Vuelve a cargar la lista de productos desde cero.
     */
    reloadProductList=()=>{

        var query = this.props.location.search.substr(3);
        this.setState({
            query:query,
            limit:4,
            offset:1
        },()=>{
            //Llamo a función de recarga que ejecuta el padre
            this.props.reloadProducts(this.state.query, this.state.limit, this.state.offset);
            
        })

    }

    /**
     * Carga los siguientes 4 productos
     */
    loadMore=()=>{
        this.setState((state, props) => ({
            offset: state.offset + this.state.limit,
          }),()=>{

            console.log("query: "+JSON.stringify({
                query:this.state.query,
                limit:this.state.limit,
                offset:this.state.offset
            }))
            
            
            this.updateProductList(this.state.query, this.state.limit, this.state.offset)
          })
    }
    

    render(){
        if (this.props.data == null) return <Loader />;
        return(
            <div>
                <div className='container'>
                    {this.mapPoducts()}
                </div>
                
                <LoadMore loadMore={()=>this.loadMore()}/>

            </div>
        );
    }
}

