import React, { useContext } from 'react';
import DashboardContext from '../../context/Dashboard/DashBoardContext';
import NewsBox from './NewsBox';

const NewsletterDash = () => {
    const { news } = useContext(DashboardContext);

    const sortedData = [...news].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return (
        <div style={{ height: "100%", overflow: "auto" }}>
            {sortedData.map((data, index) => (
                <NewsBox data={data} key={index} />
            ))}
        </div>
    );
}

export default NewsletterDash
