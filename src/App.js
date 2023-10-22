import './App.css';
import Employee from './components/employee';

function App() {
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    
    <div className="App">
      
      {showEmployees ? 
      <div>
        <Employee name = "Yusuf" age={20} role="Intern"/>
        <Employee name="abby" age={5}/>
        <Employee name = "john"/>
        <Employee/>
      </div>
      :<p>you cant see the employees</p> }
    </div>
    
  );
}

export default App;
