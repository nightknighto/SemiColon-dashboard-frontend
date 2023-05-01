import React from 'react';
import Card from '../Card/Card';
import Sidebar from './SideBar/Sidebar';
//import Chart from './Chart';

// memic the cards in array so I can pass it to the card component
const cards = [
  { title: 'Sales', value: '$10,000', size: 'medium', shape: 'rectangle' },
  { title: 'Customers', value: '500', size: 'small', shape: 'rectangle' },
  { title: 'Orders', value: '1,000', size: 'large', shape: 'rectangle' },
  { title: 'asfasf', value: '1,000', size: 'large', shape: 'rectangle' },
  { title: 'Ordsafasfasers', value: '1,000', size: 'large', shape: 'rectangle' },
  { title: 'asfasf', value: '1,000', size: 'large', shape: 'rectangle' },
];


const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="cards">
        {cards.map((card) => (
            <Card title={card.title} value={card.value} sizes={card.size} shapes={card.shape} />
    
      </div>
      <div className="charts">
        {/* <Chart type="line" data={...} />
        <Chart type="bar" data={...} /> */}
      </div>
    </div>
  );
};

export default Dashboard;