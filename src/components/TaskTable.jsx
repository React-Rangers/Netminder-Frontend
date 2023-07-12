import React from 'react'
import { Table } from 'antd'
import { useQuery } from '@apollo/client';
import { USER_TASKS } from '../utils/queries';

function TaskTable() {
  const tasks = useQuery(USER_TASKS);
  console.log('tasks -> ', tasks);
  const dataSource = tasks.data.profile.task.map(task => ({
    key: task.data.profile._id,
    contactEmail: task.data.profile.contactEmail,
    contactFirstName: task.data.profile.contactFirstName,
    contactLastName: task.data.profile.contactLastName,
    contactPhoneNumber: task.data.profile.contactPhoneNumber,
    reminderDate: task.data.profile.reminderDate,
    taskDescription: task.data.profile.taskDescription,
  }));
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