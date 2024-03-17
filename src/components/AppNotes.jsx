import React, { Component } from 'react';
import Header from './HeaderNote';
import Modal from './ModalNote';
import NotesInput from './InputNotes';
import NotesContainer from './ContainerNotes';
import Footer from './FooterNote';
import { getInitialData } from '../utils/helper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NotesApp extends Component {
    state = {
        notes: getInitialData(),
        unfilteredNotes: getInitialData(),
        showModal: false,
        confirmDelete: null,
        message: '',
    };

    onAddNotesHandler = ({ title, body }) => {
        const newNote = {
            id: +new Date(),
            title,
            createdAt: +new Date(),
            body,
            archived: false,
        };

        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
            unfilteredNotes: [...prevState.unfilteredNotes, newNote],
        }));
    };

    onArchiveHandler = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
            unfilteredNotes: prevState.unfilteredNotes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    };

    onSearchHandler = (keyword) => {
        this.setState({
            notes: keyword.length > 0 ? this.state.unfilteredNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase())) : this.state.unfilteredNotes,
        });
    };

    onConfirmDeleteHandler = (id) => {
        const message = this.state.unfilteredNotes.find((note) => note.id === id).title;
        this.setState({ showModal: true, confirmDelete: id, message });
    };

    onDeleteHandler = () => {
        this.setState((prevState) => {
            const confirmDelete = prevState.confirmDelete;
            return {
                notes: prevState.notes.filter((note) => note.id !== confirmDelete),
                unfilteredNotes: prevState.unfilteredNotes.filter((note) => note.id !== confirmDelete),
                showModal: false,
                confirmDelete: null,
            };
        });

        toast.success('Catatan Berhasil Dihapus', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            className: 'toast',
        });
    };

    onCancelDeleteHandler = () => {
        this.setState({ showModal: false, confirmDelete: null });
    };

    render() {
        const { notes, showModal, message } = this.state;

        return (
            <div className="notes-app">
                <Header onSearch={this.onSearchHandler} />
                <NotesInput addNotes={this.onAddNotesHandler} />
                <NotesContainer notes={notes} onArchive={this.onArchiveHandler} onDelete={this.onConfirmDeleteHandler} />
                <Footer />
                {showModal && <Modal onConfirm={this.onDeleteHandler} onCancel={this.onCancelDeleteHandler} message={message} />}
            </div>
        );
    }
}

export default NotesApp;
