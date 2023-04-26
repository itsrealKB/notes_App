import { Link } from "react-router-dom"

const NotesItem = ({ note }) => {
    return (
        <Link to={`/edit-note/${note.id}`} className="notes">
            <h3>{note.title.length > 30 ? (note.title.substr(0, 30)) + "..." : note.title}</h3>
            <h5>{note.details.length > 150 ? (note.details.substr(0, 150)) + "..." : note.details}</h5>
            <p>{note.date}</p>
        </Link>
    )
}

export default NotesItem