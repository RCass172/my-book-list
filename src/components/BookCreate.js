import { useState } from "react";

function BookCreate({onCreate}) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle("");
    }

    return (
        <div className="book-create">
            <h3>Add A Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input className="input" value={title} onChange={handleChange} /><br/>
                <button className="button">Add</button>
            </form>
        </div>
    )
}

export default BookCreate;