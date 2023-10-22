import './App.css';
import Myhook from './components/hook';
import Employee from './components/employee';
import {useState} from 'react';

function App() {
  const [role,setRole] = useState('dev');
  const showEmployees = true;
  
  return (
    
    <div className="App">
      
      {showEmployees ? 
      <div>
        <input type='text'onChange={(e)=> {
          console.log(e.target.value);
          setRole(e.target.value)
        }}/>
        <Employee name = "Yusuf" age={20} role="Intern"/>
        <Employee name="abby" age={5} role={role}/>
        <Employee name = "john"/>
        <Employee/>
        <Myhook></Myhook>
      </div>
      :<p>you cant see the employees</p> }
    </div>
    
  );
}

export default App;
