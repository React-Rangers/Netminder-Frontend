import React from 'react'

const NewTask = ({ setCurrentPage }) => {
    return (
        <div>
            <a onClick={() => setCurrentPage('Task')} href='#'>Create a New Task</a>
        </div>
    )
}

export default NewTask
