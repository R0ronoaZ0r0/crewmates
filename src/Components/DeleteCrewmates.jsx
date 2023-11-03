/* eslint-disable react/prop-types */
import supabase from "../client";

const DeleteCrewmates = (props) => {
   
    const handleOnClick = () => {
        let crewmate = props.crewmate;
        const deleteData = async () => {
            // eslint-disable-next-line no-unused-vars
            const { data, error } = await supabase
                .from('crewmates')
                .delete()
                .eq('id', crewmate.id);
            
            if(error) console.log('error', error);
            
        }
        deleteData();
    }
   
    return (

        

        <div>
            <button onClick={handleOnClick}>delete crewmate</button>
        </div>
    )
}

export default DeleteCrewmates;