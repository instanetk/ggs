import React from 'react';
import Admin from './account/admin';
import AppointmentCard from './account/appointmentCard';

const Account = ({ user }) => {
  // console.log(user);
  return <main>{user.isAdmin ? <Admin /> : '<AppointmentCard />'}</main>;
};

export default Account;
