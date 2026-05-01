import {Link} from 'react-router-dom' 
const Navbar = () => {
    return(
        <nav>
            <Link to = "/home">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/dashboard">Dashboard</Link>    
        </nav>
    )
}
export default Navbar