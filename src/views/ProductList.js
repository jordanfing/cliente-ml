import React from 'react'
import Item from '../components/Item'
import Loader from '../components/Loader';
import LoadMore from '../components/LoadMore';


export default class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            limit:4,
            offset:1,
            query:'',
            
        }
    }

    componentDidMount(){
        
        this.reloadProductList();        
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            console.log("UPDATE: "+ this.props);
            this.reloadProductList();
        }
      }

    mapPoducts=()=>{
        var items = this.props.data.items;

    
        var ProductList = items.map(item=> {
            return(
                <Item key={item.id} item={item}/>
            );
        })

        return ProductList;
    }


    updateProductList=()=>{

        var query = this.props.location.search.substr(3);
        this.setState({
            query:query
        },()=>{
            //Llamo a función que ejecuta el padre
            this.props.updateProductList(this.state.query, this.state.limit, this.state.offset);
            
        })

    }

    reloadProductList=()=>{

        var query = this.props.location.search.substr(3);
        this.setState({
            query:query,
            limit:4,
            offset:1
        },()=>{
            //Llamo a función que ejecuta el padre
            this.props.reloadProducts(this.state.query, this.state.limit, this.state.offset);
            
        })

    }

    loadMore=()=>{
        this.setState((state, props) => ({
            offset: state.offset + this.state.limit
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

