import React, { useState } from 'react';
import { Table } from 'antd';
import { useQuery } from '@apollo/client';
import { USER_TASKS } from '../utils/queries';

const TaskTable = () => {
    //const [taskList, setTaskList] = useState([]);
    const { loading, data } = useQuery(USER_TASKS);
    console.log('data -> ', data);
    const dataSource = data ? data.me.tasks.map(task => ({
        key: data.me.tasks._id,
        contactEmail: data.me.tasks.contactEmail,
        contactFirstName: data.me.tasks.contactFirstName,
        contactLastName: data.me.tasks.contactLastName,
        contactPhoneNumber: data.me.tasks.contactPhoneNumber,
        reminderDate: data.me.tasks.reminderDate,
        taskDescription: data.me.tasks.taskDescription,
      })) : [];

    // Define the table columns
    const columns = [
        {
            title: 'Task',
            children: [
                {
                    title: 'Task',
                    dataIndex: 'taskDescription',
                    key: 'taskDescription'
                },
                {
                    title: 'Date',
                    dataIndex: 'reminderDate',
                    key: 'reminderDate'
                }
            ]
        },
        {
            title: 'Contact',
            children: [
                {
                    title: 'First Name',
                    dataIndex: 'contactFirstName',
                    key: 'contactFirstName'
                },
                {
                    title: 'Last Name',
                    dataIndex: 'contactLastName',
                    key: 'contactLastName'
                },
                {
                    title: 'Phone Number',
                    dataIndex: 'contactPhoneNumber',
                    key: 'contactPhoneNumber'
                },
                {
                    title: 'Email',
                    dataIndex: 'contactEmail',
                    key: 'contactEmail'
                }
            ]
        }
    ];



    return (
        <div className='task-table'>
            <h3>Current Tasks</h3>
            {/* Render the task table */}
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default TaskTable;
