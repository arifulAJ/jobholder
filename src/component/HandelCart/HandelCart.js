import React from 'react';
import './HandelCart.css'


const HandelCart = (props) => {
  //const {cart}=props.Cart;
let total=0; 
   for(const product of props.Cart){
       console.log(product.img);
       total=total+ product.salary
       

     
   }
    return (
        
            <div className="sideCart">
                <h3>Monthly cost Report cart :- </h3>
            <h4 className="pt-5"><i class="fas fa-user"></i> Employer Added:{props.Cart.length} </h4>
              <h6 className="pt-5">Total Monthly Salary:{total} </h6>
        </div>
        
        
    );
};

export default HandelCart;