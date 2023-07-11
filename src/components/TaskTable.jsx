import React from 'react'
import { Table } from 'antd'
import { useQuery } from '@apollo/client';

function TaskTable() {
  const query = useQuery(GET_TASKS);
  const dataSource = [
    {
      key: query._id,
      contactEmail: query.contactEmail,
      contactFirstName: query.contactFirstName,
      contactLastName: query.contactLastName,
      contactPhoneNumber: query.contactPhoneNumber,
      reminderDate: query.reminderDate,
      taskDescription: query.taskDescription,
    },
  
  ];

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