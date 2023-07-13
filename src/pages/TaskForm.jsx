import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TASK } from '../utils/mutations';
import { ME_QUERY } from '../utils/queries';
import DatepickerDisplay from '../components/Datepicker'

const Task = ({ profileId }) => {

    // The states that will access the form data
    const [description, setDescription] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [contactDate, setContactDate] = useState();

    const [addTask, { error }] = useMutation(ADD_TASK);
    const { loading, profileData } = useQuery(ME_QUERY);

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        console.log('description -> ', description);
        console.log('firstName -> ', firstName);
        console.log('lastName -> ', lastName);
        console.log('emailAddress -> ', emailAddress);
        console.log('phoneNumber -> ', phoneNumber);
        console.log('contactDate -> ', contactDate);
        try {
            console.log('profileData -> ', profileData);
            const data = await addTask({
                variables: {
                    profileId: profileData._id,
                    taskDescription: description,
                    contactFirstName: firstName,
                    contactLastName: lastName,
                    contactPhone: phoneNumber,
                    contactEmail: emailAddress,
                    reminderDate: contactDate
                }
            })
            console.log('data -> ', data);
            //reference code (activity 15 week 21) has this, which reloads the page, but i'm using state to set the form back to "", so it isn't necessary?
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
        <div className='task-form'>
            <form>
                <h3>Create a Task</h3>
                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>What would you like to do?</label>
                    <input
                        value={description}
                        name='description'
                        onChange={(event) => setDescription(event.target.value)}
                        className='form-control'
                        id='task-name'
                        placeholder='Make a call, Send an email, etc.'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='first-name' className='form-label'>Who would you like to collaborate with? What is their first name?</label>
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
                        placeholder='(555) 867-5309'
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
                    <DatepickerDisplay />
                </div>
                <button type='submit' className='btn btn-danger' onClick={handleFormSubmit}>Submit</button>
                {error && (
                    <div>
                        Something went wrong... 😭
                    </div>
                )}
                {!loading && (
                    <div>
                        {profileData}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Task
