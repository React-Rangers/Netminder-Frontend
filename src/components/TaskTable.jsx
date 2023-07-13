import React, { useState } from 'react';
import { Table } from 'antd';

const TaskTable = () => {
    const [taskList, setTaskList] = useState([]);

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

    const dataSource = taskList.map((task, index) => ({ ...task, key: index.toString() }));

    return (
        <div className='task-table'>
            <h3>Current Tasks</h3>
            {/* Render the task table */}
            <Table dataSource={taskList} columns={columns} />
        </div>
    );
};

export default TaskTable;
