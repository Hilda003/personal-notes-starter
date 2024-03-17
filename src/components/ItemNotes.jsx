import React from 'react';
import { showFormattedDate } from '../utils/helper';



function ItemNotes({
    id, 
    title,
    body,
    archived,
    onArchive,
    onDelete,
    createdAt,
}) {
    const archiveButtonClassName = archived ? "unarchive-button" : "archive-button";
    const archiveButtonIconClassName = archived ? "bi bi-arrow-counterclockwise" : "bi bi-file-earmark-zip";

    return (
        <div className="notes-item">
            <h3 className="notes-title">{title}</h3>
            <p className="notes-date">{showFormattedDate(createdAt)}</p>
            <p className="notes-body">{body}</p>
            <div className="notes-button">
                <button className={archiveButtonClassName} onClick={() => onArchive(id)}>
                    <i className={archiveButtonIconClassName}></i>
                </button>
                <button className="delete-button" onClick={() => onDelete(id)}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default ItemNotes;
