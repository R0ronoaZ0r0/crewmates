import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components.jsx/Home'
import AddCrewmates from './Components.jsx/AddCrewmates'
import ViewCrewmates from './Components.jsx/ViewCrewmates';
// import GetCrewmates from './Components.jsx/GetCrewmates'
// import AddCrewmates from './Components.jsx/AddCrewmates'
// import UpdateCrewmates from './Components.jsx/UpdateCrewmates'
// import DeleteCrewmates from './Components.jsx/DeleteCrewmates'
// import supabase from './client'
// import { useEffect, useState } from 'react'

const NotFound = () => {return <h1>404 Not Found</h1>}

function App() {

  // const [crewmate, setCrewmate] = useState(null);

  // useEffect(() => {
  //   const getCrewmate = async () => {
  //     const data = await supabase.from('crewmates').select().eq('id', '1');
      
  //     setCrewmate(data.data[0]);
      
      
  //   }
  //   getCrewmate();
  // },[])
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<Home />}>

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

          </Route>
            

            
          
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App


