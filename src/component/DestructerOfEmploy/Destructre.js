import React from 'react';
import './Destructre.css'

const Destructre = (props) => {
    //  console.log(props);
 
    const {name,role,salary,age,country,img}=props.employ
    return (
        <div className="cart p-3 m-3">
            <div className="images pb-3">
                <img  src={img} alt="employer pic" />
            </div>
            <div>
                <h6>Name: {name}</h6>
                <h6>Role: {role}</h6>
                <h6>Age: {age}</h6>
                <h6>Country: {country}</h6>
                <h6>Salary: {salary}</h6>
                <button onClick={()=>props.onChangeHandel(props.employ)}  className="btn btn-danger"><i class="fas fa-cart-arrow-down"></i> Add to cart</button>
            </div>
        </div>
    );
};

export default Destructre;