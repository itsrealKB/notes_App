import { Link, useNavigate, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useState } from "react"
import useCreateDate from "./useCreateDate"

export const EditNote = ({ notes, setNotes }) => {
    const { id } = useParams()
    const note = notes.find(note => note.id === id)
    const date = useCreateDate()
    const navigate = useNavigate()

    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details)

    const submitForm = (e) => {
        e.preventDefault()
        if (title || details) {
            const newNote = { ...note, title, details, date }

            const newNotes = notes.map(item => {
                if (item.id === id) {
                    item = newNote
                }
                return item
            })

            setNotes(newNotes)
        }
        navigate("/")
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")) {
            const newNotes = notes.filter(item => item.id !== id)
            setNotes(newNotes)
            navigate("/")
        }
    }

    return (
        <div className="notes-sec page">
            <div className="note">
                <div className="create_note_header">
                    <Link to="/" className="btn"><IoIosArrowBack /></Link>
                    <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
                    <button className="btn lg primary" onClick={submitForm}>Save</button>
                </div>
                <form className="create_note_form" onSubmit={submitForm}>
                    <input type="text" placeholder='Title' value={title}
                        onChange={(e) => setTitle(e.target.value)} autoFocus />
                    <textarea placeholder='Note...' value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                </form>
            </div>
        </div>
    )
}
