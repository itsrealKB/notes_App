import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { useState } from "react"
import { nanoid } from "nanoid"
import useCreateDate from "./useCreateDate"

export const CreateNote = ({ setNotes }) => {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const date = useCreateDate()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title || details) {
            const note = {
                id: nanoid(), title, details, date
            }

            setNotes(prevNotes => [note, ...prevNotes])

            navigate("/")
        }
    }


    return (
        <div className="notes-sec page">
            <div className="note">
                <div className="create_note_header">
                    <Link to="/" className="btn"><IoIosArrowBack /></Link>
                    <button className="btn lg primary" onClick={handleSubmit}>Save</button>
                </div>
                <form className="create_note_form" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Title' autoFocus
                        onChange={(e) => setTitle(e.target.value)} value={title}
                    />
                    <textarea placeholder='Note...'
                        onChange={(e) => setDetails(e.target.value)} value={details}>
                    </textarea>
                </form>
            </div>
        </div>
    )
}
