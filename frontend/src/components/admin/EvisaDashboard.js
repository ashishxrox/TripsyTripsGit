import React, { useContext } from 'react';
import DashboardContext from '../../context/Dashboard/DashBoardContext';
import EvisaBox from './EvisaBox';

const EvisaDashboard = () => {
  const { visa, docs } = useContext(DashboardContext);

  // Sort the visa array based on the createdAt key in descending order
  const sortedVisa = [...visa].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {sortedVisa.map((data, index) => (
        <EvisaBox data={data} docs={docs} key={index} />
      ))}
    </div>
  );
};

export default EvisaDashboard;
