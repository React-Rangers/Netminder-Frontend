import React from "react";

const Task = () => {
    return (
        <form>

        <div className="mb-3">
            <label for="task-name" className="form-label">What sort of networking do you need to do?</label>
            <input 
            className="form-control" 
            id="task-name"
            placeholder="Make a Call"
            />
        </div>

        <div className="mb-3">
            <label for="person-contacted" className="form-label">Who do you need to contact?</label>
            <input 
            className="form-control" 
            id="person-contacted"
            placeholder="John Doe and Jane Smith"
            />
        </div>

        <div className="mb-3">
            <label for="description" className="form-label">Tell me about how you know the person?</label>
            <input 
            className="form-control" 
            id="description"
            placeholder="The two people from the React Conference"
            />
        </div>

        <div className="mb-3">
            <label for="contact-date" className="form-label">When do you need to contact them?</label>
            <input 
            className="form-control" 
            id="contact-date"
            placeholder="01/01/1010"
            />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

    </form>
    )
}

export default Task;