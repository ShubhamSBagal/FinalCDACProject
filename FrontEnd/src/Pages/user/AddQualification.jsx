import React from "react";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from 'axios';
const AddQualification=()=>{


   const[firstName, setFirstName] = useState('');
   const[lastName,setLastName]=useState('');
   const[sex, setSex] = useState('');
   const[maritalStatus, setMaritalStatus] = useState('');
   const[email, setEmail] = useState('');
   
   const[experience, setExperience] = useState('');
   const[interestedFields, setInterestedFields] = useState('');

   const[graduationMarks, setGraduationMarks] = useState('');
   const[passoutYear,setPassoutYear]=useState('');
   
   const[qualification, setQualification] = useState('');
   const[university,setUniversity] = useState('');
   const[applyingForJob, setApplyingForJob] = useState('');
   const[id,setId]=useState('');
   
   
   
   
   
   const saveChange=(e)=>{
   
      
   
      const postApp =  {firstName, lastName,sex, maritalStatus,email,experience,interestedFields,graduationMarks,passoutYear,qualification,university,applyingForJob, id};
   
       e.preventDefault();
   
       const p=(window.localStorage.getItem('edit'));
   console.log(p)
   
   
   
   if (id) {
      //update

      

      axios.put(`http://localhost:8080/api/Company/put/`,postApp)
          .then(response => {
              
              console.log('data updated successfully', response.data.id);
            
              alert("details edited successfully", response.data);
         
          })
          .catch(error => {
              console.log('Something went wrong', error);
          }) 
  }
else{

 
   axios.post('http://localhost:8080/api/Company/add',postApp)
  .then(
      response => {
          alert("details edited successfully", response.data);
         
      }
  )
  .catch(error => {
      console.log('something went wroing', error);
  })




}



  
}
useEffect(() => {
   

   console.log(JSON.parse(window.localStorage.getItem('user')));  


       axios.get(`http://localhost:8080/api/Applicant/${JSON.parse(window.localStorage.getItem('user'))}`)
           .then(appData => {

            console.log('data updated successfully',appData.data);
            console.log('data updated successfully',appData.data.id);
               setId(appData.data.id)
               setFirstName(appData.data.firstName)
               setLastName(appData.data.lastName)
               setSex(appData.data.sex)
               setMaritalStatus(appData.data.maritalStatus)
               setEmail(appData.data.email)
               setExperience(appData.data.experience)
               setInterestedFields(appData.data.interestedFields)
               setApplyingForJob(appData.data.applyingForJob)

              setGraduationMarks(appData.data.graduationMarks);
              setPassoutYear(appData.data.passoutYear);
              setQualification(appData.data.qualification);
              setUniversity(appData.data.university);
             
           })
           .catch(error => {
               console.log('Something went wrong', error);
           })

}, [])


   
   
   
   
   
   
   
   
   
   return(
      <>
    <section className="col-lg-11 col-md-10 mx-auto d-block pt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 d-sm-block">                
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/ajc/FEAK3HS2RKR4S3L7WBJ4KMSVDA.jpg" alt="" className="img-responsive img-fluid  " />
                </div>
                <div className="col-sm ">
                <form>                       
                        <div><h2 className="fw-bold pb-3">Plase add Your Educational Qualification</h2></div>                        
                        <div className="row g-3 pt-3">
                        <div className="col-sm-6">                        
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"   type="text"   placeholder=""
                           id="qualification" 
                           value={qualification}
                           onChange={(e) => setQualification(e.target.value)}
                          
                                  /><label className="label">Qualification</label>
                        </div>                        
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text"
                           
                           id="university" 
                           value={university}
                           onChange={(e) => setUniversity(e.target.value)}
                           
                           /><label className="label">Board/university</label>
                        </div> 
                        </div>
                        </div>
                        <div className="row g-3 pt-3">
                        <div className="col-sm-6">                        
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" 
                           
                           id="passoutYear" 
                           value={passoutYear}
                           onChange={(e) => setPassoutYear(e.target.value)}
                           
                           
                           
                           /><label className="label">Passing Year</label>
                        </div>                        
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" 
                           
                             
                           id="graduationMarks" 
                           value={graduationMarks}
                           onChange={(e) => setGraduationMarks(e.target.value)}
                           
                           /><label className="label">Percentage/CGPA</label>
                        </div> 
                        </div>
                        </div>  
                        
                    <div className="d-grid gap-2 p-3">
                           <button onClick={(e) => saveChange(e)}className="btn btn-success rounded-pill" type="button" >Add Qualification</button>                  
                        </div>  
                                                                                   
                     </form>           
                </div>                
            </div>
        </div>
        </section>
      
    </>
  );
   
   
   }
   export default AddQualification;