import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './styles.css'

const App = () => {

  const[datas,setData] = useState([])
  
  useEffect(() => {
      axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(res => {
      setData(res.data.data)
      console.log(res.data);
    })
  
  },[])

  return (

    <div>
    
      <nav class="navbar or bg-dark mt-1 ml-1 mr-1 rounded text-center">
        <span class="navbar-brand mb-0 h1">Wodo Developer</span>
      </nav>

      <div className="container justify-content-center">
         <div className="row br rounded">
          {datas.map(dat => 
          <div className="text-center col-md-4" key={dat.id}>
          <div className="card text-center mt-2 mb-2 rounded">
             <div className="card-body text-center bg-dark">

                <div className="card-header">
                  <h4 className="or">Employee Details</h4>
                </div>
             
             <ul class="list-group list-group-flush">
              
              <li class="list-group-item or bg-dark">ID: {dat.id}</li>
              <li class="list-group-item or bg-dark">Name: {dat.employee_name}</li>
              <li class="list-group-item or bg-dark">Salary: {dat.employee_salary}</li>
              <li class="list-group-item or bg-dark">Age: {dat.employee_age}</li>
              
             </ul>
             </div>
          </div>    
         </div>
      )}
         </div>
    </div>
    
    </div>

   
  )
}

export default App
