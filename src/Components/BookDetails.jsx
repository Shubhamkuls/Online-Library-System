import { Link, useParams } from "react-router"
import { books } from "../utils/Books";

//when we click on view details it will show details and show back to browse button
function BookDetails(){
    const {id} = useParams();
    const bookId = parseInt(id);
    const book = books.find((b)=>b.id===bookId);

    if(!book){
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold text-red-600 mb-5">Book Not Found</h1>
                <Link to ="/browse" className="hover:underline border rounded-xl px-2 py-1 hover:bg-cyan-300">Back to Browse Books</Link>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="mb-3 font-bold text-2xl">{book.title}</h1>
            <p className="text-base mb-1">Author: {book.author}</p>
            <p className="text-base mb-1">Category: {book.category}</p>
            <p className="text-base mb-1">Rating: {book.rating}</p>
            <p className="text-base mb-6">Description: {book.description}</p>
            <Link to="/browse" className="hover:underline border rounded-xl px-2 py-1 hover:bg-cyan-300">Back To Browser</Link>
        </div>
    )
}
export default BookDetails