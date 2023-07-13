import Task from './TaskForm'
// import TaskTable from '../components/TaskTable'

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard-header'>
        <h3>Create a Task</h3>
      </div>
      <div className='task-section'>
        <Task />
      </div>
      <br></br>
      <div className='current-tasks'>
        <h3>Current Tasks</h3>
        {/* <TaskTable /> */}
      </div>
    </div>
  )
}

export default Dashboard
