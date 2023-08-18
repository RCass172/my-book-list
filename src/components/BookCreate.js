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
        <div>
            <h1>Add A Book</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input value={title} onChange={handleChange} /><br/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default BookCreate;