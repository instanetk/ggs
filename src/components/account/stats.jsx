import React from 'react';

const Stats = ({ schedule }) => {
  return (
    <section className="bg-purple-900 select-none">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">{schedule.length}</span>
            {/* <span className="text-indigo-200">+</span> */}
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Appointments</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">
              {
                schedule.filter((item) => {
                  if (!item.completed) {
                    return item;
                  }
                  return null;
                }).length
              }
            </span>
            {/* <span className="text-indigo-200">+</span> */}
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Active</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">
              {
                schedule.filter((item) => {
                  if (item.completed) {
                    return item;
                  }
                  return null;
                }).length
              }
            </span>
            {/* <span className="text-indigo-200">+</span> */}
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Completed</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">39</span>
            {/* <span className="text-indigo-200">+</span> */}
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">ONLINE</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
