import CalendarDisplay from '../components/Calendar';
import TaskTable from '../components/TaskTable'
import DatePickerDisplay from '../components/Datepicker'

const Dashboard = () => {
  return (
    <section>
      <div className='dashboard-header'>
        <h1>
          Dashboard
        </h1>
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
