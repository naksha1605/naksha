import React,{useEffect} from 'react'
import{useNavigate} from'react-router-dom';


function Child({users}) {
  // useEffect(()=>{
  //      console.log("enter in Child Component")
  //   },[users])

  //       useEffect(()=>{
  //                return () => console.log("exist in Child Component")
  //   },[]) 
  id(users){
    ssName='card-container'>
    className="row mb=4"
    <div className='text-center'>
        {users.map((user)=>(
                <div className="col-3 gap-2"key={user.id}>
                  <div className="card" style={{width:"18rem;",height:"400px"}}>
                    <img src={user.images} className="card-img-top" ait="..."style={{width:"18rem;"}}
                    )<div className="card-body"/><div/>
                  </div>0}

            <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  
}
}
export default Child