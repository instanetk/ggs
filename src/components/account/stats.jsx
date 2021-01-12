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
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Total Requests</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">
              {
                schedule.filter((item) => {
                  if (!item.completed) {
                    return item;
                  }
                }).length
              }
            </span>
            {/* <span className="text-indigo-200">+</span> */}
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Active Requests</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">
              {
                schedule.filter((item) => {
                  if (item.completed) {
                    return item;
                  }
                }).length
              }
            </span>
            {/* <span className="text-indigo-200">+</span> */}
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Completed</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">3987</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Visitors</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
