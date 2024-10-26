import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getBook } from "../features/books/books.api"

export const BookItem  = () => {
    const {id}  = useParams()
    const current = useSelector(state => state.books.current)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBook(id))

    }, [id])

    return <>
        <h3>Book Item</h3>
        {
            current && <div>
                <img src={current.photo} style={{height:300}} />
                <p>{current.title}</p>
                <strong>by {current.author}</strong>
            </div>
        }
    </>
}