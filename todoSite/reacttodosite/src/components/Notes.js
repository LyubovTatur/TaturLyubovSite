import React from "react";

export const Notes = ({ notes, onRemove }) => (
    <ul className="list-group">
        {notes.map(note => (
            <li className="list-group-item note" key={note.id}>
                <strong>{note.title}</strong>
                <small>{note.date}</small>
                <button type="button" onClick={() => onRemove(note.id)} className="btn btn-outline-danger btn-sm">
                    &times;
                </button>
            </li>
        ))}
    </ul>
)
