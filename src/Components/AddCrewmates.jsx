import { useState } from 'react';
import supabase from '../client';

function AddCrewmates() {

    // const [data, setData] = useState({name: '', color: '', speed: ''});
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [speed, setSpeed] = useState('');

    

    // useEffect(() => {

    //     const addCrewmate = async () => {
    //         await supabase
    //             .from('crewmates')
    //             .insert([
    //                 { name: data.name, color: data.color, speed: data.speed },
    //             ]);
           
    //     }
    //     addCrewmate();
    // }, [data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setData({name: name, color: color, speed: speed});
        const addData = async () => {
            await supabase
                .from('crewmates')
                .insert([
                    { name: name, color: color, speed: speed },
                ]);
        }
        addData();
    }
  
    return (
      <div>

        <h1 style={{textAlign:"center"}}>Add a Crewmate</h1>
        <form onSubmit={handleSubmit} className='form'>
            <div className='form-element'>
                <label >
                    Enter Name:
                    <input 
                        type="text" 
                        value={name} 
                        placeholder='Enter the name'
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
            </div>
            <div className='form-element'>
                <label >
                    Select color:
                    <select 
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                    >
                        <option value='' disabled>Select color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Purple">Purple</option>
                        <option value="Brown">Brown</option>
                    </select>
                </label>
            </div>
            <div className='form-element'>
                <label >
                    Select speed:
                    <input
                        type='number'
                        defaultValue={0}
                        onChange={(event) => setSpeed(event.target.value)}
                    />
                    
                </label >
            </div>
            <div className='form-element'>
                <input type="submit" />
            </div>
            
            
            
            
        </form>
        
      </div>
    )
  }
  
  export default AddCrewmates