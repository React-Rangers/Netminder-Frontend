import CalendarDisplay from "../components/Calendar";
// import Reminders from '../../../../test/Reminders'

const Dashboard = () => {
  return (
    <section>
      <div>
        <p>
          Dashboard
        </p>
      </div>
      <body>
        <div>
          <CalendarDisplay />
        </div>
      </body>
      {/* <column>
        <div>
          <Reminders />
        </div>
      </column> */}
    </section>
  )
}

export default Dashboard
