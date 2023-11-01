import FormNote from "./FormNote"
import NotesWidget from "./NotesWidget"
import Note from "./Note"
import axios from "axios"
import { useState, useEffect } from "react"
import { nanoid } from 'nanoid';

export interface NoteData {
    id: string;
    content: string;
  }

export default function MainPage() {
    const [notes, setNotes] = useState<NoteData[]>([]);

    useEffect(() => {
            axios.get("http://localhost:7070/notes")
            .then(response => {
                setNotes(response.data)
            })
            .catch(error => {
                console.error(error)
            })
        },[])

    function handlerSubmit(currentText:string) {
        axios.post("http://localhost:7070/notes", {
            "id": nanoid(),
            "content": currentText,
        })
        updateNotes();
    }

    function updateNotes() {
        axios.get("http://localhost:7070/notes")
        .then(response => {
            setNotes(response.data)
            console.log(notes)
        })
    }

    function onDeleteNote(id:string) {
        axios.delete("http://localhost:7070/notes/" + id)
        updateNotes();
    }
        
    return (
        <div className="main-page">
            <div className="form-header">
                <div className="form-title">Notes</div>
                <button className="form-update" onClick={updateNotes}>Обновить</button>
            </div>
            <NotesWidget notes={notes} onDeleteNote={onDeleteNote}/>
            <FormNote handlerSubmit={handlerSubmit}/>
        </div>
    )
}