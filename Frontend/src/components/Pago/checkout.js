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
          name: "Gemiled",
          description: "Pproductos para mejorar dolores",
          currency: "cop",
          amount: '10000',
          tax_base: '9000',
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
