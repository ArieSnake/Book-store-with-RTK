import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "./books.api"
import { Link, useNavigate } from "react-router-dom"

export const Books = () => {
    const books = useSelector(state => state.books.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddBook = () => {
        navigate('/add')
    }

    useEffect(() => {
        dispatch(getBooks())
    },[])
    
    return <>
    <div className="home-container">
        <h3>Books are  {books.length}</h3>
        <div className="book-list">
        <button style={{marginBottom:10}} onClick={handleAddBook}>Add new Book</button>
        
        {
            books.map(book => 
                <div key={book.id} className="book-item">
                    <img src={book.photo} style={{width:150, height:200}} />
                    <p>{book.title}</p>
                    <Link to={'/book/' + book.id}>Comments</Link>
                </div>
            )
        }
        </div>
    </div>   
    </>
}