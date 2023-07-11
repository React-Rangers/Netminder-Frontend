import React from 'react'
import { Table } from 'antd'
import { useQuery } from '@apollo/client';

function TaskTable() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
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
  function taskQueryHandler() {
    const query = useQuery(GET_TASKS);
  }

  <Table dataSource={dataSource} columns={columns} />;
  return (
    <div>
      <Table />
    </div>
  )
}

export default TaskTable