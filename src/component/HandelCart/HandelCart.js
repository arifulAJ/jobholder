import React from 'react';

const HandelCart = (props) => {

   console.log(props.Cart);
//    const {cart}=props.Cart;
let total=0;
   for(const product of props.Cart){
       console.log(product);
       total=total+ product.salary

     
   }
    return (
        <div>
            <h4><i class="fas fa-user"></i> Employer Added:{props.Cart.length} </h4>
              <h6>Total Cost:{total} </h6>
        </div>
    );
};

export default HandelCart;