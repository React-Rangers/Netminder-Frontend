import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../utils/mutations';

const Task = () => {
    // The states that will access the form data
    const [description, setDescription] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [contactDate, setContactDate] = useState();


    const [addTask, { error }] = useMutation(ADD_TASK);

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        try {
            const { data } = await addTask({
                variable: {
                    description,
                    firstName,
                    lastName,
                    phoneNumber,
                    emailAddress,
                    contactDate
                }
            })
            //reference code (activity 15 week 21) has this, which reloads the page, but i'm using state to set the form back to "", so it isn't necessairy?
            //window.location.reload();
        } catch (err) {
            console.error(err);
        }

        //setting states back to default (?)
        setDescription('');
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmailAddress('');
        setContactDate('');
    };

    return (
        <form>

            <div className='mb-3'>
                <label htmlFor='description' className='form-label'>What sort of networking do you need to do?</label>
                <input
                    value={description}
                    name='description'
                    onChange={(event) => setDescription(event.target.value)}
                    className='form-control'
                    id='task-name'
                    placeholder='Make a Call'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='first-name' className='form-label'>What's their first name?</label>
                <input
                    value={firstName}
                    name='firstName'
                    onChange={(event) => setFirstName(event.target.value)}
                    className='form-control'
                    id='last-name'
                    placeholder='Alex'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='last-name' className='form-label'>What is their last name?</label>
                <input
                    value={lastName}
                    name='lastName'
                    onChange={(event) => setLastName(event.target.value)}
                    className='form-control'
                    id='last-name'
                    placeholder='Doe'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='phone-number' className='form-label'>What is their phone number?</label>
                <input
                    value={phoneNumber}
                    name='phoneNumber'
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className='form-control'
                    id='phone-number'
                    placeholder='867-5309'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='email-address' className='form-label'>What is their email address?</label>
                <input
                    value={emailAddress}
                    name='emailAddress'
                    onChange={(event) => setEmailAddress(event.target.value)}
                    className='form-control'
                    id='email-address'
                    placeholder='email@email.com'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='contact-date' className='form-label'>When do you need to contact them?</label>
                <input
                    value={contactDate}
                    name='contactDate'
                    onChange={(event) => setContactDate(event.target.value)}
                    className='form-control'
                    id='contact-date'
                    placeholder='01/01/1010'
                />
            </div>

            <button type='submit' className='btn btn-primary' onClick={handleFormSubmit()}>Submit</button>

            {error && (
                <div>
                    Something went wrong... 😭
                </div>
            )}

        </form>
    )
}

export default Task
