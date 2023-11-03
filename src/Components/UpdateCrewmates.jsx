/* eslint-disable react/prop-types */
import supabase from "../client";
import { useState } from "react";

const UpdateCrewmates = (props) => {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [speed, setSpeed] = useState('');


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const updateData = async () => {
            // eslint-disable-next-line no-unused-vars
            const {data, error} = await supabase
                .from('crewmates')
                .update(
                    {name:name, speed:speed, color:color }
                )
                .eq('id', props.id);
            
            if(error) console.log('error', error);
            
        }
        updateData();
        alert('Crewmate updated');
        
    }

    return(
        <div className="center">
            <h3>Update the crewmate</h3>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Enter Name:
                    <input 
                        type="text" 
                        value={name} 
                        placeholder='Enter new name'
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Select new color:
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
                <label>
                    Select new speed:
                    <input
                        type='number'
                        value={speed}
                        onChange={(event) => setSpeed(event.target.value)}
                    />
                    
                    
                </label>
                <input type="submit" />
                
            </form>
        
        </div>
    );
}

export default UpdateCrewmates;