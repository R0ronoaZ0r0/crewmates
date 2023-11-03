import { useParams } from "react-router-dom";
import UpdateCrewmates from "./UpdateCrewmates";
import DeleteCrewmates from "./DeleteCrewmates";
import { useEffect, useState } from "react";
import supabase from "../client";
import Card from "./Card";

const EditCrewmate = () => {
    let params = useParams();

    const [data, setData] = useState('');

    useEffect(() => {
        const getOneCrewmate = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('')
                .eq('id', params.id);
            if(error) console.log('error', error);
            setData(data[0]);
        }
        getOneCrewmate();
    },[data]);

    return(
        <div className="edit-page-content">
            <Card crewmate={data}/>
            <UpdateCrewmates id={params.id}/>
            <DeleteCrewmates id={params.id}/>
        </div>
    );
}

export default EditCrewmate;