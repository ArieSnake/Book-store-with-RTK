import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addBook } from "../features/books/books.api"

export const AddBook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = async(data) => {
        dispatch(addBook(data))
        .unwrap()
        .then(() => {
            navigate('/')
        })
        .catch((error)=>{
            console.error('Failed to add a book:', error);
            
        })
    }
    const handleHomeNav = () => {
        navigate('/')
    }


    return (
        <div className="container">
            <h2>Add a new book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                    <label>Title:</label>
                    <input {...register("title", { required: true })} />
                    {errors.title && <span>This field is required</span>}
                </div>
                <div>
                    <label>Author:</label>
                    <input {...register("author", { required: true })} />
                    {errors.author && <span>This field is required</span>}
                </div>
                <div>
                    <label>Photo URL:</label>
                    <input {...register("photo", { required: true })} />
                    {errors.photo && <span>This field is required</span>}
                </div>
                <button type="submit">Add Book</button>
            </form>
            <button onClick={handleHomeNav}>Home</button>
        </div>
    )
}