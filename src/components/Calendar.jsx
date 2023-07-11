import React,{useState} from "react"
import {Calendar} from "antd"
import dayjs from "dayjs";

function CalendarDisplay() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [calendarValues, setCalendarValues] = useState({
    month: null,
    date: null,
    year: null,
  });

  console.log(currentMonth);
  console.log(calendarValues)
  const onPanelChange = (value, mode) => {
    // console.log(value.format('MM-YYYY'), mode);
    // console.log('Date', value.date());
    const date = value.date();
    const year = value.get('year');
    const month = value.get('month')+1;
    console.log('date', date);
    console.log('year', year);
    console.log('month', month);
    const newDate = {
      month, date, year
    }
    setCalendarValues(newDate)
  };

  const onDateSelect = (value, info) => {
    // console.log('value', value);
    console.log('hi');
  };
  const tasks = [
          {
                type: "success",
                taskDescription: "Task 1",
                contactPhone: "0000000000",
                contactEmail: "crian@email.com",
                contactFirstName: "crian",
                contactLastName: "cernighan",
                reminderDate: "07/18/2023",
              },
              {
                type: "warning",
                taskDescription: "Task 12",
                contactPhone: "0000002000",
                contactEmail: "xrian2@email.com",
                contactFirstName: "xrianx",
                contactLastName: "xernighan",
                reminderDate: "07/19/2023",
              },
              {
                type: "success",
                taskDescription: "Task 3",
                contactPhone: "0000034000",
                contactEmail: "x2@email.com",
                contactFirstName: "xrianx",
                contactLastName: "xernighan",
                reminderDate: "07/19/2023",
              },
              {
                type: "success",
                taskDescription: "Task 4",
                contactPhone: "0000034000",
                contactEmail: "x2@email.com",
                contactFirstName: "xrianx",
                contactLastName: "xernighan",
                reminderDate: "08/19/2023",
              },
      ]
  const calendarCurrentMonth = dayjs().month();
  console.log(calendarCurrentMonth)

    
    return(
       <div className="Calendar">
        <Calendar
          onPanelChange={onPanelChange}
            // onSelect={(value)=>{
            //     console.log("Selected date", value)
            // }}

        //     dateCellRender={(date)  => {
        //         if(new Date(date).getDate() === new Date().getDate())
        //         return <h5>Hello!</h5>
        // }}
        
        />
       </div>
    )
}

// export default CalendarDisplay


// import { uniq } from "lodash";
// import 'dayjs/locale/es'


// const listOfMonths = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const nameOfCurrentMonth = listOfMonths[calendarCurrentMonth];

// const tasks = [
//          {
//   "type": "success",
//   "taskDescription": "Task 1",
//   "contactPhone": "0000000000",
//   "contactEmail": "crian@email.com",
//   "contactFirstName": "crian",
//   "contactLastName": "cernighan",
//   "reminderDate": new Date("07/18/2023")
// },
// {
//   "type": "warning",
//   "taskDescription": "Task 12",
//   "contactPhone": "0000002000",
//   "contactEmail": "xrian2@email.com",
//   "contactFirstName": "xrianx",
//   "contactLastName": "xernighan",
//   "reminderDate": new Date("07/19/2023")
// },
// {
//     "type": "success",
//     "taskDescription": "Task 3",
//     "contactPhone": "0000034000",
//     "contactEmail": "x2@email.com",
//     "contactFirstName": "xrianx",
//     "contactLastName": "xernighan",
//     "reminderDate": new Date("07/19/2023")
//   },    
//   {
//     "type": "success",
//     "taskDescription": "Task 4",
//     "contactPhone": "0000034000",
//     "contactEmail": "x2@email.com",
//     "contactFirstName": "xrianx",
//     "contactLastName": "xernighan",
//     "reminderDate": new Date("08/19/2023")
//   },
// ];

// /*
// 1. Figure out what month the calendar is displaying
// - That value is going to need to be kept in state

// 2. Find the tasks that match the current month displayed


// const currentMonthsTasks = tasks.filter((task) => {
//   return new Date(task.reminderDate).getMonth() === calendarCurrentMonth;
// });

// console.log(currentMonthsTasks);

// const getDaysOfCurrentMonth = currentMonthsTasks.map((task) =>
//   new Date(task.reminderDate).getDate()
// );

// console.log(getDaysOfCurrentMonth);

// const tester = [1, 2];

// Lo_.uniq([], true);
// const uniqueDaysWithTasks = uniq([getDaysOfCurrentMonth, true]);


export default CalendarDisplay