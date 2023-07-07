import React from 'react';

const Task = () => {
    return (
        <form>

            <div className='mb-3'>
                <label for='description' className='form-label'>What sort of networking do you need to do?</label>
                <input
                    className='form-control'
                    id='task-name'
                    placeholder='Make a Call'
                />
            </div>

            <div className='mb-3'>
                <label for='first-name' className='form-label'>What's their first name?</label>
                <input
                    className='form-control'
                    id='last-name'
                    placeholder='Alex'
                />
            </div>

            <div className='mb-3'>
                <label for='last-name' className='form-label'>What is their last name?</label>
                <input
                    className='form-control'
                    id='last-name'
                    placeholder='Doe'
                />
            </div>

            <div className='mb-3'>
                <label for='phone-number' className='form-label'>What is their phone number?</label>
                <input
                    className='form-control'
                    id='phone-number'
                    placeholder='867-5309'
                />
            </div>

            <div className='mb-3'>
                <label for='email-address' className='form-label'>What is their email address?</label>
                <input
                    className='form-control'
                    id='email-address'
                    placeholder='email@email.com'
                />
            </div>

            <div className='mb-3'>
                <label for='contact-date' className='form-label'>When do you need to contact them?</label>
                <input
                    className='form-control'
                    id='contact-date'
                    placeholder='01/01/1010'
                />
            </div>

            <button type='submit' className='btn btn-primary'>Submit</button>

        </form>
    )
}

export default Task
