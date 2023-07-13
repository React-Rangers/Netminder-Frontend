import CalendarDisplay from '../components/Calendar';
import TaskTable from '../components/TaskTable'
import Task from './TaskForm'
import { useParams } from 'react-router';

const Dashboard = () => {
  return (
    <section>
      <div className='dashboard-header'>
        <h1>
          Dashboard
</h1>
      <Task />
      </div>
      <body>
        <div>
          {/* <CalendarDisplay /> */}
        </div>
      </body>
      <column>
        <div>
          {/* <TaskTable /> */}
        </div>
      </column>
    </section>
  )
}

export default Dashboard
