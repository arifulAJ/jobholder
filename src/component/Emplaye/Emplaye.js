import React, { useEffect, useState } from 'react';
import Destructre from '../DestructerOfEmploy/Destructre';
import HandelCart from '../HandelCart/HandelCart';
import './Emplaye.css'

const Emplaye = () => {
    const [employs,setEmploys]=useState([]);
    const [addWithCart,setAddWithCart]=useState([])
    useEffect(()=>{
        fetch('./employData.JSON')
        .then(res=>res.json())
        .then(data=>setEmploys(data))
    },[])

    const onChangeHandel=employ=>{
       const newAdd=[...addWithCart,employ];
       setAddWithCart(newAdd);
     
    }
    return (
        <div className="divideByGrid container pt-5 ">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-3  gx-4 gy-4  ">
          {
              employs.map(employ=><Destructre key={employ.name} onChangeHandel={onChangeHandel} employ={employ}></Destructre>)
          } 
          </div>
          <div>
              <HandelCart Cart={addWithCart} ></HandelCart>

          </div>
         
            
        </div>
    );
};


export default Emplaye;