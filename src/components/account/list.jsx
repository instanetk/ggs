import React from 'react';
import { NavLink } from 'react-router-dom';

const List = ({ schedule }) => {
  return (
    <div className="mx-auto px-4 sm:px-8 max-w-4xl">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-200">
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Service Request
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Appointment Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"></th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((appointment) => {
                  return (
                    <tr key={appointment._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          {/* <div className="flex-shrink-0">
                            <a href="#" className="block relative">
                              <img alt="profil" src="/images/person/8.jpg" className="mx-auto rounded-full h-10 w-10 " />
                            </a>
                          </div> */}
                          <div className="ml-0">
                            <p className="text-gray-900 whitespace-no-wrap">{appointment.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{appointment.service}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{new Date(appointment.date).toDateString()}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 ${
                              appointment.completed ? 'bg-yellow-200' : 'bg-green-200'
                            }  opacity-50 rounded-full`}></span>
                          <span className="relative">{appointment.completed ? 'completed' : 'active'}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <NavLink
                          className="text-indigo-600 hover:text-indigo-900"
                          to={`/appointment?id=${appointment._id}`}>
                          View
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full px-1 py-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-1 py-1 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 px-4 py-2">
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-1 py-1 border text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-1 py-1 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-1 py-1 border text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                  4
                </button>
                <button
                  type="button"
                  className="w-full px-1 py-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
