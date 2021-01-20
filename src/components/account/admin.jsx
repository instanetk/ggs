import React, { useRef, useState, useEffect, useCallback } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import List from './list';
import Stats from './stats';
import { getSchedule } from '../../services/scheduleService';
import '../../styles/dateRange.css';
import { io } from 'socket.io-client';

const Admin = () => {
  useEffect(() => {
    const socket = io('http://localhost:9000', { transports: ['websocket'] });

    socket.on('connect', (count) => {
      console.log('connected', socket.connected, 'count', count);
    });
  }, []);
  // Set calendar to span the current week beginning on a Monday.
  const today = new Date();
  const weekFirst = today.getDate() - today.getDay() + 1;
  const weekLast = weekFirst + 6;
  const firstDay = new Date(today.setDate(weekFirst));
  const lastDay = new Date(today.setDate(weekLast));

  const [value, onChange] = useState([firstDay, lastDay]);

  const ref = useRef([]);
  ref.current = value;

  const [hide, setState] = useState(true);
  // eslint-disable-next-line
  const [schedule, setSchedule] = useState([]);

  const fetchSchedule = useCallback(async () => {
    const { data } = await getSchedule(ref.current);
    setSchedule(data);
  }, [ref]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  const showCalendar = () => {
    setState(!hide);
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="px-0 min-h-screen">
      <Stats value={ref.current} />
      <div className="bg-green-400 text-center">
        <button
          onClick={showCalendar}
          type="button"
          className="select-none w-full h-6 uppercase text-sm font-semibold text-green-900 focus:outline-none focus:ring-0">
          {new Date(value[0]).toLocaleDateString('en-US', options) +
            ' — ' +
            new Date(value[1]).toLocaleDateString('en-US', options)}
        </button>
      </div>
      <div className={hide ? 'hidden' : 'text-center'}>
        <DateRangePicker
          onChange={onChange}
          value={ref.current}
          calendarIcon={null}
          clearIcon={null}
          closeWidgets={true}
          onCalendarClose={showCalendar}
        />
      </div>
      {/* <AppointmentCard /> */}
      <List value={ref.current} hide={hide} />
    </div>
  );
};

export default Admin;
