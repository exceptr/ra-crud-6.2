interface NoteProps {
    content: string,
    id: string,
    onDeleteNote: (text: string) => void;
}

export default function Note({content, id, onDeleteNote}: NoteProps) {
    return (
        <div className="note">
            <button onClick={() => onDeleteNote(id)} className="note-dell">X</button>
            <div className="note-content">{content}</div>
        </div>
    )
}