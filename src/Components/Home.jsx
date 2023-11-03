import { Link, Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container">
            <nav className="side-nav">
                <Link to="/home" > Home </Link>
                <Link to="/addcrewmate"> Add a Crewmate </Link>
                <Link to="/viewcrewmates"> View All Crewmates </Link>            
            </nav>

            <Outlet/>
        </div>
    );
}

export default Home;