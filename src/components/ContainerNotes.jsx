import React from "react";
import ListNote from "./ListNote";

function ContainerNotes({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-container">
            <div className="notes-card">
                <h2>Daftar Catatan</h2>
                <div className="active-notes">
                    <ListNote
                        notes={notes.filter((note) => !note.archived)}
                        onArchive={onArchive}
                        onDelete={onDelete}
                        archived={false}
                    />
                </div>
            </div>
            <div className="notes-card">
                <h2>Arsip Catatan</h2>
                <div className="archived-notes">
                    <ListNote
                        notes={notes.filter((note) => note.archived)}
                        onArchive={onArchive}
                        onDelete={onDelete}
                        archived={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContainerNotes;
