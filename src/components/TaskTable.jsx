import React from 'react'
import { Table } from 'antd'
import { useQuery } from '@apollo/client';
import { USER_TASKS } from '../utils/queries';

function TaskTable() {
  const query = useQuery(USER_TASKS);
  const dataSource = query.map(task => ({
    key: task._id,
    contactEmail: task.contactEmail,
    contactFirstName: task.contactFirstName,
    contactLastName: task.contactLastName,
    contactPhoneNumber: task.contactPhoneNumber,
    reminderDate: task.reminderDate,
    taskDescription: task.taskDescription,
  }));
console.log(dataSource)
  const columns = [
    {
      title: 'Contact To Email',
      dataIndex: 'contactEmail',
      key: 'contactEmail',
    },
    {
      title: 'Contact First Name',
      dataIndex: 'contactFirstName',
      key: 'contactFirstName',
    },
    {
      title: 'Contact Last Name',
      dataIndex: 'contactLastName',
      key: 'contactLastName',
    },
    {
      title: 'Contact Phone Number',
      dataIndex: 'contactPhoneNumber',
      key: 'contactPhoneNumber',
    },
    {
      title: 'Reminder Date',
      dataIndex: 'reminderDate',
      key: 'reminderDate',
    },
    {
      title: 'Task Description',
      dataIndex: 'taskDescription',
      key: 'taskDescription',
    },
  ];

  <Table dataSource={dataSource} columns={columns} />;
  return (
    <div>
      <Table />
    </div>
  )
}

export default TaskTable