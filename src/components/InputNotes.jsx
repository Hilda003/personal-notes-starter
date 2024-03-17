import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NotesInput extends Component {
    state = {
        title: '',
        body: '',
        lettersCount: 0,
        inputValue: '',
        countLimit: 50,
        loaderCompleted: 0,
        errorLimit: false
    };

    onTitleChangeEventHandler = (event) => {
        const inputLength = event.target.value;
        if (inputLength.length <= this.state.countLimit) {
            this.setState((prevState) => ({
                title: event.target.value,
                lettersCount: inputLength.length,
                inputValue: inputLength,
                errorLimit: false,
                loaderCompleted: Math.floor(inputLength.length / prevState.countLimit * 100, 2)
            }));
        } else {
            this.setState({ errorLimit: true });
            toast.error('Karakter Tidak Boleh Lebih Dari 50', this.toastOptions);
        }
    };

    onBodyChangeEventHandler = (event) => {
        this.setState({ body: event.target.value });
    };

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        if (!title.trim()) {
            toast.error('Judul Catatan Kosong', this.toastOptions);
        } else if (!body.trim()) {
            toast.error('Isi Catatan Kosong', this.toastOptions);
        } else {
            this.props.addNotes(this.state);
            this.setState({
                body: "",
                inputValue: "",
                lettersCount: 0,
            });
            toast.success('Catatan Berhasil Ditambahkan', this.toastOptions);
        }
    };

    toastOptions = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        className: "toast",
    };

    render() {
        const { lettersCount, inputValue } = this.state;
        const remainingChars = 50 - lettersCount;
        const charCountClass = lettersCount >= 40 ? "red" : "green";

        return (
            <div className="notes-input-area">
                <div className="body-image"></div>
                <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
                    <div className="add-notes">Tambah Catatan</div>
                    <label>
                        <h2>Title</h2>
                        <input type="text" placeholder="Isi Judul Catatan..." value={inputValue} onChange={this.onTitleChangeEventHandler} />
                        <p className={`title-length ${charCountClass}`}>Sisa Karakter : {remainingChars}</p>
                    </label>
                    <label>
                        <h2>Isi Catatan</h2>
                        <textarea placeholder="Isi Catatan Disini..." cols="10" rows="10" name="text_body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    </label>
                    <button type="submit" className="button">Tambah</button>
                </form>
                <ToastContainer {...this.toastOptions} />
            </div>
        )
    }
}

export default NotesInput;
