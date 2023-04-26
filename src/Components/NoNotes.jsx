import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function NoNotes() {

    return (
        <div className='no-notes-sec page'>
            <div className='no-notes note'>
                <h1>NOTES APP</h1>
                <h2 className="not_found">No Saved Notes.</h2>
                <Link to="/create-note" className="btn add_btn"><BsPlusLg /></Link>
            </div>
        </div>
    )
}


