import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import AddCrewmates from './Components/AddCrewmates'
import ViewCrewmates from './Components/ViewCrewmates';
import HomeContent from './Components/HomeContent';
import UpdateCrewmates from './Components/UpdateCrewmates';

const NotFound = () => {return <h1>404 Not Found</h1>}

function App() {

  return (
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>

              <Route
                path='/home'
                element={<HomeContent />}
              />
            <Route
                path='/addcrewmate'
                element={<AddCrewmates />}
              />
              <Route
                path='/viewcrewmates'
                element={<ViewCrewmates />}
              />
              <Route
                path='*'
                element={<NotFound />}
              />
              <Route
                path='/update'
                element={<UpdateCrewmates/>}
              />

            </Route>        
        </Routes>
    </BrowserRouter>
      
      
    
  )
}

export default App


