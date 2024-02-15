import React, { useContext } from 'react';
import DashboardContext from '../../context/Dashboard/DashBoardContext';
import HotelBox from './HotelBox';

const HotelDash = () => {
  const { hotels } = useContext(DashboardContext);

  // Sort the hotels array based on the createdAt key in descending order
  const sortedHotels = [...hotels].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {sortedHotels.map((data, index) => (
        <HotelBox data={data} key={index} />
      ))}
    </div>
  );
}

export default HotelDash;
