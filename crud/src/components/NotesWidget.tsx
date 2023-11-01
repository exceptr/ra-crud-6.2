import Note from "./Note"
import { NoteData } from "./Main";

interface NotesWidgetProps {
    notes: NoteData[];
    onDeleteNote: (text: string) => void;
}

export default function NotesWidget({notes, onDeleteNote}: NotesWidgetProps) {
    return (
        <div className="NotesWidget">
            {notes.map(item => {
                return <Note
                content={item.content}
                key={item.id}
                id={item.id}
                onDeleteNote={onDeleteNote}
                />
            })}
        </div>
    )
}