import React, { useState,useEffect } from "react";

import axios from 'axios';



const CheckResponse=()=>{

 

const [user,setUser]=useState([]);
const init=()=>{

    const e=JSON.parse(window.localStorage.getItem('user'));

console.log(e);

  axios.get(`http://localhost:8080/api/Company/selected/${e}`)
.then(response=>{
    console.log('Printing  data', response.data);
    setUser(response.data);
})
.catch(error => {
    console.log('Something went wrong', error);
  }) 

}

useEffect(() => {

  
    init();
   
  }, []);




    return(
    
    <div className="container">
    <h3>Response</h3>
    <hr/>
    <div>
    
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Company name</th>
            <th>Message</th>
           
           
          </tr>
        </thead>
        <tbody>
        {
         // user.map(user => (
            <tr key={user.id}>
              <td>{user.companyName}</td>
              <td>{user.comment}</td>
             
                        
             
            </tr>
         // ))
        }
        </tbody>
      </table>
      
    </div>
  </div>
);
}
export default CheckResponse;