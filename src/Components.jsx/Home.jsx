import { Link, Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/" > Home </Link>
                <Link to="/viewcrewmates"> View All Crewmates </Link>
                <Link to="/addcrewmate"> Add a Crewmate </Link>
            </nav>
            
            <Outlet/>
        </div>
    );
}

export default Home;