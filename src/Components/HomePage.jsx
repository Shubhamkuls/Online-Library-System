import { books } from "../utils/Books";
import { Link } from "react-router";
function HomePage(){

//To get categories
const categories = [];
for (let book of books){
    if(!categories.includes(book.category)){
        categories.push(book.category);
    }
}
//to display popular books :get top 5 based on rating
const booksCopy = [...books];
booksCopy.sort((a,b)=>b.rating - a.rating);
const popularBooks = booksCopy.slice(0,5);


return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Online Library</h1>

        {/* books catagories section */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Book Categories:</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
                {categories.map((cat, index)=>(
                    <li key={index}>{cat}</li>
                ))}
            </ul>
        </section>
        {/* popular books section */}
        <section>
            <h2 className="text-xl font-semibold mb-3">Popular Books</h2>
            <ul className="space-y-3">
                {popularBooks.map((book) => (
            <li key={book.id} className="p-3 border rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-gray-800 text-sm"> by {book.author} ({book.category}) - {book.rating}
              </p>
              <Link to={`/book/${book.id}`} className="text-blue-600 text-sm hover:underline">View Details</Link>
              </li>
                ))}
            </ul>
        </section>

    </div>
)
}

export default HomePage