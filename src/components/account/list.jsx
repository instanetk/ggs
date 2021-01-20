import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { getSchedule, updateStatus } from '../../services/scheduleService';
import Status from './status';
// import Pagination from './pagination';

const List = ({ value }) => {
  const [schedule, setSchedule] = useState([]);

  const fetchSchedule = useCallback(async () => {
    const { data } = await getSchedule(value);
    setSchedule(data);
    // console.log('call api');
  }, [value]);

  const onStatus = async (id) => {
    await updateStatus(id);
    fetchSchedule();
  };

  useEffect(() => {
    fetchSchedule();
    // console.log('useEffect');
  }, [fetchSchedule]);

  const style = {
    mainDiv: 'mx-auto px-4 sm:px-8 max-w-4xl',
    secondDiv: 'py-8',
    thirdDiv: '-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto',
    fourthDiv: 'inline-block min-w-full shadow rounded-lg overflow-hidden',
    table: 'min-w-full leading-normal',
    tr: 'bg-gray-200',
    th: 'px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal',
    td: 'px-5 py-5 border-b border-gray-200 bg-white text-sm',
    p: 'text-gray-900 whitespace-no-wrap',
    navLink: 'text-indigo-600 hover:text-indigo-900',
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.secondDiv}>
        <div className={style.thirdDiv}>
          <div className={style.fourthDiv}>
            <table className={style.table}>
              <thead>
                <tr className={style.tr}>
                  <th scope="col" className={style.th}>
                    Customer
                  </th>
                  <th scope="col" className={style.th}>
                    Service Request
                  </th>
                  <th scope="col" className={style.th}>
                    Appointment Date
                  </th>
                  <th scope="col" className={style.th}>
                    status
                  </th>
                  <th scope="col" className={style.th}></th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((appointment) => {
                  return (
                    <tr key={appointment._id}>
                      <td className={style.td}>
                        <div className="flex items-center">
                          {/* <div className="flex-shrink-0">
                            <a href="#" className="block relative">
                              <img alt="profil" src="/images/person/8.jpg" className="mx-auto rounded-full h-10 w-10 " />
                            </a>
                          </div> */}
                          <div className="ml-0">
                            <p className={style.p}>{appointment.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className={style.td}>
                        <p className={style.p}>{appointment.service}</p>
                      </td>
                      <td className={style.td}>
                        <p className={style.p}>{new Date(appointment.date).toDateString()}</p>
                      </td>
                      <td className={style.td}>
                        <Status completed={appointment.completed} onStatus={onStatus} id={appointment._id} />
                      </td>
                      <td className={style.td}>
                        <NavLink className={style.navLink} to={`/appointment?id=${appointment._id}`}>
                          View
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
