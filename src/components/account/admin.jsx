import React, { useRef, useState, useEffect, useCallback } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import List from './list';
import Stats from './stats';
import { getSchedule, updateStatus } from '../../services/scheduleService';
import '../../styles/dateRange.css';

const Admin = ({ socket }) => {
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
  // Set current online user count from Socket.IO
  const [userCount, setUserCount] = useState(0);

  const fetchSchedule = useCallback(async () => {
    const { data } = await getSchedule(ref.current);
    setSchedule(data);
  }, [ref]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  const onStatus = async (id) => {
    await updateStatus(id);
    return () => {
      socket.off();
    };
  };

  useEffect(() => {
    // Listening to the server emit an "update-requested" event
    socket.on('update-requested', (message) => {
      // Log to the console
      console.log('connected:', socket.connected, 'socket id:', socket.id, 'type:', message, new Date());
      // Query the Schedule collection
      fetchSchedule();
    });
    return () => {
      socket.off();
    };
  });

  useEffect(() => {
    // Listening to the server emit an "userCount" event - live online users count
    socket.on('userCount', (count) => {
      // console.log('remainder:', count % 2);
      if (count % 2 === 0) setUserCount(count / 2);
    });
    return () => {
      socket.off();
    };
  });

  const showCalendar = () => {
    setState(!hide);
    fetchSchedule();
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="px-0 min-h-screen">
      <Stats value={ref.current} data={schedule} userCount={userCount} />
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
      <List data={schedule} onStatus={onStatus} />
    </div>
  );
};

export default Admin;
