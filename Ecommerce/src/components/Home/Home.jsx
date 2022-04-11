import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllProducts } from '../../redux/actions';
import ProductCard from '../ProductCard/ProductCard'

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount(){
    this.props.getAllProducts()
  }
  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src='main-image-cp2.jpg' alt='main-img'/>
        <h3>Products</h3>
        {this.props.products?.map(p => (
            <ProductCard 
            id={p.id}
            name={p.name}
            price={p.price}
            stock={p.stock}
            />
        ))
        }
      </div>
      )
  }
}

export const mapStateToProps = (state) =>{
  return {
    products: state.products
  }
} ;

export const mapDispatchToProps = (dispath) =>{
  return{
    getAllProducts: () => dispath(getAllProducts())
  }
} ;

export default connect(mapStateToProps,mapDispatchToProps)(Home)
