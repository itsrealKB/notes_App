import { useState, useEffect } from "react"
import { CreateNote } from "./Components/CreateNote"
import NoNotes from "./Components/NoNotes"
import { SavedNotes } from "./Components/SavedNotes"
import { EditNote } from "./Components/EditNote"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {notes.length === 0 && <Route path="/" element={<NoNotes />} />}
          <Route path={notes.length === 0 ? "saved-notes" : "/"} element={<SavedNotes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
          <Route path="edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
