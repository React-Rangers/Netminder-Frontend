import TaskTable from '../components/TaskTable'
import Task from './TaskForm'
import { useParams } from 'react-router';

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
