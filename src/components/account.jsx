import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getSchedule } from '../services/scheduleService';
import List from './account/list';
import Stats from './account/stats';

const Account = () => {
  const [value, onChange] = useState(new Date());
  // const { data } = await getSchedule();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function fetchSchedule() {
      const { data } = await getSchedule();
      setSchedule(data);
    }

    fetchSchedule();
  }, []);

  console.log(schedule);

  return (
    <main className="bg-gray-300">
      <div className="px-0">
        <Stats schedule={schedule} />
        <List schedule={schedule} />
        {/* <Calendar onChange={onChange} value={value} /> */}
        {/* <ul>
          {schedule.map((appointment) => {
            return <li key={appointment._id}>{appointment.name}</li>;
          })}
        </ul> */}
      </div>
    </main>
  );
};

export default Account;
