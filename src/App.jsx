import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import AddCrewmates from './Components/AddCrewmates'
import ViewCrewmates from './Components/ViewCrewmates';

import EditCrewmate from './Components/EditCrewmate';


const NotFound = () => {return <h1>404 Not Found</h1>}

function App() {

  return (
    <div>
      <div className='home-container'>
        <nav className="side-nav">
          <Link to="/" > Home </Link>
          <Link to="/addcrewmate"> Add a Crewmate </Link>           
        </nav>

        <Routes>
          <Route 
            path='/' 
            element={<ViewCrewmates/>}
          />

          <Route
            path='/addcrewmate'
            element={<AddCrewmates />}
          />

          <Route
            path='*'
            element={<NotFound />}
          />
          <Route
            path='/edit/:id'
            element={<EditCrewmate />}
          />
        </Routes>   
      </div>
    </div>
    
      
      
    
  )
}

export default App


