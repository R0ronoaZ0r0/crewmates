/* eslint-disable react/prop-types */
import supabase from "../client";
import { Link } from "react-router-dom";

const DeleteCrewmates = (props) => {
   
    const handleOnClick = () => {
        
        const deleteData = async () => {
            // eslint-disable-next-line no-unused-vars
            const { data, error } = await supabase
                .from('crewmates')
                .delete()
                .eq('id', props.id);
            
            if(error) console.log('error', error);
            
        }
        deleteData();
        alert('Crewmate deleted');
    }
   
    return (

        <div> 
            <Link 
                onClick={handleOnClick} 
                to='/viewcrewmates'
                style={{border: '1px solid black', borderRadius: '5px', padding:'5px'}}
            >
                Delete Crewmate
            </Link>
        </div>
    )
}

export default DeleteCrewmates;