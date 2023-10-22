import './App.css';
import Employee from './components/employee';

function App() {
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <div>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
      </div>
      :<p>you cant see the employees</p> }
    </div>
  );
}

export default App;
