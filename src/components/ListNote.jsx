import React from 'react';
import NotesItem from './ItemNotes';

function ListNote({ notes, onArchive, onDelete }) {
    const emptyNotesComponent = (
        <div className="notes-empty">
            <div className="notes-empty__image"></div>
            <div className="notes-empty__text">Tidak ada catatan.</div>
        </div>
    );

    const notesListComponent = (
        <div className="notes-list">
            {notes.map((note) => (
                <NotesItem
                    key={note.id}
                    onArchive={onArchive}
                    onDelete={onDelete}
                    {...note}
                />
            ))}
        </div>
    );

    return notes.length === 0 ? emptyNotesComponent : notesListComponent;
}

export default ListNote;
