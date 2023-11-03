/* eslint-disable react/prop-types */
const Card = (props) => {


    return (
        <div className="card">
            <h3>Name: {props.crewmate.name}</h3>
            <p>id: {props.crewmate.id}</p>
            <p>Speed: {props.crewmate.speed}</p>
            <p>Color: {props.crewmate.color}</p>
       </div>
       
    )
}

export default Card;