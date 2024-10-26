import { useParams } from "react-router-dom";
import { BookItem } from "../../components/book-item"
import { CommentList } from "../../components/comment-list"
import CommentModal from "../../components/CommentModal"
import { useState } from "react";
/*--------------------------------*/
export const Comments = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const bookId = useParams().id

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }
    return <>
        <BookItem/>
        <CommentList/>
        <button onClick={handleOpenModal}>Add Comment</button>
        <CommentModal isOpen={isModalOpen} onClose={handleCloseModal} bookId={bookId} />
    </>
}