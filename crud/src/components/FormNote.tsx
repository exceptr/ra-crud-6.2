import React, { useState } from "react"

interface FormNoteProps {
    handlerSubmit: (text: string) => void;
  }

export default function FormNote({handlerSubmit}: FormNoteProps) {

    const [currentText, setCurrentText] = useState('')

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handlerSubmit(currentText);
        setCurrentText('');
      };
    return (
        <form className="form-note" onSubmit={handleFormSubmit}>
            <div className="form-name">New Note</div>
            <textarea
                className="form-input"
                name="content" 
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
                />
            <button className="form-add">Добавить</button>
        </form>
    )
}