import React, { useContext } from 'react';
import DashboardContext from '../../context/Dashboard/DashBoardContext';
import FlightBox from './FlightBox';

const FlightDash = () => {
  const { flights } = useContext(DashboardContext);

  // Sort the flights array based on the createdAt key in descending order
  const sortedFlights = [...flights].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {sortedFlights.map((data, index) => (
        <FlightBox data={data} key={index} />
      ))}
    </div>
  );
}

export default FlightDash;
