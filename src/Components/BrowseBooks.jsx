//List all books, search bar
import { Link, useParams } from "react-router";
// import { books } from "../utils/Books";
import { useState } from "react";
import { useSelector } from "react-redux";
function BrowseBooks(){
    const books = useSelector((state)=>state.books);
    const {category} = useParams();
    const [searchItem, setSearchItem] = useState("");
    //Filter Books based on cat or title or author
    let filteredBooks = [];
    for(let book of books){
        let matchCat = true;
        let matchSearch = true;
        //checking for cat
        if(category){
            //returning weather entered cat matches
            matchCat = book.category.toLowerCase() === category.toLowerCase();
        }
        //checking for title or author
        const titleMatch = book.title.toLowerCase().includes(searchItem.toLowerCase());
        const authorMatch = book.author.toLowerCase().includes(searchItem.toLowerCase());
        matchSearch = titleMatch || authorMatch; // returning true if any one is true

        //if both match, add
        if(matchCat && matchSearch){
            filteredBooks.push(book);
        }
    }

    return(
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Browse Books</h1>
            <input type="text" placeholder="Search by Title or Author..." value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className="border rounded px-4 py-2 mb-6 w-full"/>

            {filteredBooks.length===0 ? (
                <p className="text-red-500">No Books found</p>
            ):(
                <ul className="space-y-4">
                    {filteredBooks.map((book)=>(
                        <li key={book.id} className="border rounded p-3 shadow-lg">
                            <h2 className="text-lg font-semibold">{book.title}</h2>
                            <p className="text-gray-800">{book.author}</p>
                            <p className="text-sm text-gray-600">{book.category}</p>
                            <Link to={`/book/${book.id}`} className="text-blue-600 underline mt-1.5 inline-block">View Details</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default BrowseBooks;