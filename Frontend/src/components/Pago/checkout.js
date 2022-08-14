import React, {Component} from 'react';
import '../../Styles/checkout.css'

export default class Checkout extends Component {

    openchekout = e =>{
        e.preventDefault();

        var handler = window.ePayco.checkout.configure({
            key: 'efef92030f96cd757fa9d11d0e026571',
            test: true
        });
        
    let data = {
          name: this.props.dato.nombre,
          description: this.props.dato.nombre,
          currency: "cop",
          amount: (this.props.dato.precio * this.props.dato.cantidad) + 1000,
          tax_base: this.props.dato.precio * this.props.dato.cantidad,
          tax:'1000',
          country: "co",
          lang: "en",
          external: "false"
          }
        handler.open(data);
    }
    render(){
        return(
        <React.Fragment>
             <button className='btn1' type="button" class="btn btn-danger"
                onClick={this.openchekout}
                >Pagar</button>
        </React.Fragment>
       
        )
    } 
   
}
