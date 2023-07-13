import Task from './JaskForm'
import TaskTable from '../components/JaskTable'

const Dashboard = () => {
  return (
    <>
      <br></br>
      <div className='dashboard-container'>
        <div className='task-form-section'>
          <Task />
        </div>
        <div className='task-table-section'>
          <TaskTable />
        </div>
      </div>
    </>
  )
}

export default Dashboard
