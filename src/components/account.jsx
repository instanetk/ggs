import React, { useState, useEffect, useCallback } from 'react';
import useStateRef from 'react-usestateref';
// import Calendar from 'react-calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { getSchedule } from '../services/scheduleService';
import List from './account/list';
import Stats from './account/stats';
import '../styles/dateRange.css';

const Account = () => {
  const today = new Date();
  const weekFirst = today.getDate() - today.getDay() + 1;
  const weekLast = weekFirst + 6;
  const firstDay = new Date(today.setDate(weekFirst)).toUTCString();
  const lastDay = new Date(today.setDate(weekLast)).toUTCString();

  // console.log(today, firstDay, lastDay);

  const [value, onChange, ref] = useStateRef([firstDay, lastDay]);
  const [schedule, setSchedule] = useState([]);
  const [hide, setState] = useState(true);

  const fetchSchedule = useCallback(async () => {
    const { data } = await getSchedule(ref.current);
    setSchedule(data);
  }, [ref]);

  useEffect(() => {
    fetchSchedule();
    const interval = setInterval(() => fetchSchedule(), 5000);
    return () => clearInterval(interval);
  }, [fetchSchedule]);

  const showCalendar = () => {
    setState(!hide);
    fetchSchedule();
  };

  // console.log(
  //   new Date(ref.current[0]).toLocaleDateString('en-US', { timeZone: 'UTC' }),
  //   new Date(ref.current[1]).toLocaleDateString('en-US', { timeZone: 'UTC' })
  // );

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <main className="bg-gray-300">
      <div className="px-0">
        <Stats schedule={schedule} />
        <div className="bg-green-400 text-center">
          <button
            onClick={showCalendar}
            type="button"
            className="select-none w-full h-6 uppercase text-sm font-semibold text-green-900 focus:outline-none focus:ring-0">
            {new Date(firstDay).toLocaleDateString('en-US', options) +
              ' — ' +
              new Date(lastDay).toLocaleDateString('en-US', options)}
          </button>
        </div>
        <div className={hide ? 'hidden' : 'text-center'}>
          <DateRangePicker
            onChange={onChange}
            value={value}
            calendarIcon={null}
            clearIcon={null}
            closeWidgets={true}
            onCalendarClose={showCalendar}
          />
          {/* <Calendar onChange={onChange} value={value} onClickDay={showCalendar} /> */}
        </div>

        <List schedule={schedule} />
      </div>
    </main>
  );
};

export default Account;
