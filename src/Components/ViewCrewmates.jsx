import supabase from "../client";
import { useState, useEffect } from "react";
import Card from "./Card";


const ViewCrewmates = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        const getCrewmates = async () => {
            const { data, error} = await supabase
                                        .from('crewmates')
                                        .select('');
            if (error) console.log('error', error);
            else setData(data);
        }
        getCrewmates();
    },[]);

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Crewmates</h1>
            <div className="card-container">
            
                {
                    data && data.map((crewmate) =>{
                        return(
                            <Card key={crewmate.id} crewmate={crewmate}/>
                        )
                        
                    })
                }
            </div>
        </div>
        
    )
}

export default ViewCrewmates;