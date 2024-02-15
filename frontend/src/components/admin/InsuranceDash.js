import React, { useContext } from 'react';
import DashboardContext from '../../context/Dashboard/DashBoardContext';
import InsuranceBox from './InsuranceBox';

const InsuranceDash = () => {
  const { insurance } = useContext(DashboardContext);

  // Sort the insurance array based on the createdAt key in descending order
  const sortedInsurance = [...insurance].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {sortedInsurance.map((data, index) => (
        <InsuranceBox data={data} key={index} />
      ))}
    </div>
  );
}

export default InsuranceDash;
