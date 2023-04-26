import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NotesItem from './NotesItem'
import { useEffect, useState } from 'react'

export const SavedNotes = ({ notes }) => {

    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if (note.title.toLowerCase().match(searchText.toLowerCase())) {
                return note
            }
        }))
    }

    useEffect(handleSearch, [searchText])


    const toggleSearch = () => {
        setShowSearch(prevSearch => !prevSearch)
        setSearchText("")
    }


    return (
        <div className='saved-notes-sec page'>
            <div className="saved_notes note">
                <div className="notes_header">
                    <h1 className={showSearch ? "my_header_hide" : ""}>My Notes</h1>
                    <input type="text" autoFocus placeholder='Search...' className={showSearch ? "search_feild show" : "search_feild"}
                        onChange={(e) => { setSearchText(e.target.value), handleSearch() }} value={searchText} />
                    <button className="btn search" onClick={toggleSearch}>{showSearch ? <MdClose /> : <CiSearch />}</button>
                </div>
                <div className="saved_notes_container">
                    {filteredNotes.map(note => <NotesItem key={note.id} note={note} />)}
                </div>
                <Link to="/create-note" className="btn add_btn"><BsPlusLg /></Link>
                {filteredNotes.length === 0 && <h2 className='not_found'>No Match Found.</h2>}
            </div>
        </div>
    )
}
