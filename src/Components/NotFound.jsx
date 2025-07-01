import { Link } from "react-router";

function NotFound(){
    return (
        <div className="p-10 text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page not Found</h1>
            <p className="mb-6">Page you are looking for does not exist</p>
            <Link to="/" className="border rounded-xl px-4 py-2 bg-red-400 hover:bg-red-700">Go to home</Link>
        </div>
    )
}
export default NotFound;
