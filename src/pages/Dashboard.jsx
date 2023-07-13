import TaskTable from '../components/TaskTable'

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard-header'>
        <h1>
          Dashboard
        </h1>
      </div>
      <div>
        <TaskTable />
      </div>
    </div>
  )
}

export default Dashboard
