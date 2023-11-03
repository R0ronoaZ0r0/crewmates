import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = (props) => {


    return (
        <div className="card">
            <h3>Name: {props.crewmate.name}</h3>
            <p>Id: {props.crewmate.id}</p>
            <p>Speed: {props.crewmate.speed}</p>
            <p>Color: {props.crewmate.color}</p>
            {/* <Link to="/update"> update </Link> */}
            
        </div>
    )
}

export default Card;