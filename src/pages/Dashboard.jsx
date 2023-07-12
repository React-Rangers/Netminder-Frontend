// import CalendarDisplay from '../components/Calendar';
import TaskTable from '../components/TaskTable'
import DatePickerDisplay from '../components/Datepicker'
import Task from './TaskForm'

const Dashboard = () => {
  return (
    <section>
      <div>
        <p>
          Dashboard
        </p>
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
      <column>
        <div>
          {/* <DatePickerDisplay /> */}
        </div>
      </column>
    </section>
  )
}

export default Dashboard


