import logo from './logo.svg';
import './App.css';
import Employee from "./Compoents/Employee";
import { useState } from 'react';

function App() {
    const [role, setRole] = useState('Intern');
    const showEmployees = true;
  return (
    <div className="App">

      <h1 className="text-3xl font-bold underline">Hello React</h1>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
          {showEmployees ? (
              <>
              <input type='text' onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}/>
              <div className=''>
                  <Employee name = 'Taiko' role = 'Software Engineer, Dev-Ops and Cyper Sec'/>
                  <Employee  name = 'Abby' role = {role}/>
                  <Employee name = 'Ivara'/>
                  <Employee name = 'Leon' />
              </div>
                
              </>

              ) : (
                  <p> You cannot see the employees</p>
          )
          }

      </header>
    </div>
  );
}

export default App;
