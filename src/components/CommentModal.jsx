import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComment } from "../features/comments/comments.api";

const CommentModal = ({isOpen, onClose, bookId}) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onSubmit = async(data) => {
        await dispatch(addComment({...data, book:bookId}))
        .unwrap()
        .then(() => {
            onClose()
            navigate(`/book/${bookId}`)
        })
        .catch((error) => {
            console.error('Failed to add a comment:', error)
        })
    }

    if (!isOpen) return null

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add a Comment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Comment:</label>
                        <textarea {...register('text', { required: true })} />
                        {errors.text && <span>This field is required</span>}
                    </div>
                    <div>
                        <label>Rating:</label>
                        <select {...register('rate', { required: true })}>
                            <option value="">Select a rating</option>
                            {[1, 2, 3, 4, 5].map((rate) => (
                                <option key={rate} value={rate}>{rate}</option>
                            ))}
                        </select>
                        {errors.rate && <span>This field is required</span>}
                    </div>
                    <button type="submit">Submit Comment</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
export default CommentModal