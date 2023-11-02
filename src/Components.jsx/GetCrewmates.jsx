import { useState } from 'react';
import supabase from '../client';

function GetCrewmates() {

    const [data, setData] = useState(null);
  
    const handleOnClick = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('');
  
      if (error) console.log('error', error);
      setData(data);
    };

    
  
    return (
      <div>
        <button onClick={handleOnClick}>click</button>
        {data && 
          data.map(crewmate => {
            return (
              <div key={crewmate.id}>
                <h2>{crewmate.name}</h2>
                <p>{crewmate.id}</p>
                <p>{crewmate.color}</p>
                <p>{crewmate.speed}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
  
  export default GetCrewmates