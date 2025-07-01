import {Link} from "react-router-dom";
function Navbar(){
    return (
        <nav className="bg-blue-500 text-white px-6 py-4 flex gap-6">
            <Link to='/'>Home</Link>
            <Link to='/browse'>Browse Books</Link>
            <Link to='/add'>Add Books</Link>
        </nav>
    )
}
export default Navbar;