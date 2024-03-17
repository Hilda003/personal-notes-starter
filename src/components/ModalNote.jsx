import React from 'react';

function Modal({
    onConfirm, onCancel, message,
}) {
    return (
        <div className="modal-container">
            <div className="modal-card">
                <h2 className="modal-title">Konfirmasi Hapus</h2>
                <p>Apakah anda yakin ingin menghapus catatan?</p>
                <div className="modal-button">
                    <button
                        type="button"
                        className="modal-button-delete"
                        onClick={() => onConfirm()}>
                        Hapus
                    </button>
                    <button
                        type="button"
                        className="modal-button-cancel"
                        onClick={() => onCancel()}
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;