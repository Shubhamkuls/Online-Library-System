import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router";

//to display form 
function AddBooks(){
    const books = useSelector((state)=>state.books);// to get the last book id
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        rating: "",
        description: "",
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleChange(e){
        const name = e.target.name; //name of fields(title,author,desc)
        const value = e.target.value; // value to be updated
        setFormData({...formData, [name]:value});
    }
    function handleSubmit(e){
        e.preventDefault();
        //validation
        const {title, author, category, rating, description} = formData;

        if(!title || !author || !category || !rating || !description){
            return setError("All fields are required");
        }
        if (isNaN(rating) || rating <0 || rating >5){
            return setError("Rating must be between 0 and 5");
        }
        //Create a new book obj
        const newBook ={
            id: books.length +1,
            title,
            author,
            category,
            rating: parseFloat(rating),
            description
        }
        //sending to redux
        dispatch(addBook(newBook));
        navigate("/browse");
    }
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add a new Book</h1>
            {error && <p className="mb-2">{error}</p>}
            <form className="space-y-4">
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border rounded px-4 py-2"/>
                <input type = "text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="w-full border rounded px-4 py-2"/>
                <input type = "text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="w-full border rounded px-4 py-2"/>
                <input type = "text" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="w-full border rounded px-4 py-2"/>
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border rounded px-4 py-2"/>
                <button onClick={handleSubmit} className="bg-blue-500 px-4 py-2 rounded-xl text-white hover:bg-blue-800">Add Book</button>
            </form>
        </div>
    )
}
export default AddBooks;
