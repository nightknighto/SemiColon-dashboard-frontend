import React from 'react';

interface CardProps {
  title: string;
  value: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rectangle' | 'rounded' | 'circle';
}

const Card: React.FC<CardProps> = ({ title, value, sizes, shapes }) => {
  let cardStyle = {};
  let titleStyle = {};
  let valueStyle = {};

  switch (sizes) {
    case 'small':
      cardStyle = { width: '200px', height: '150px' };
      titleStyle = { fontSize: '16px' };
      valueStyle = { fontSize: '24px' };
      break;
    case 'medium':
      cardStyle = { width: '300px', height: '200px' };
      titleStyle = { fontSize: '20px' };
      valueStyle = { fontSize: '32px' };
      break;
    case 'large':
      cardStyle = { width: '400px', height: '250px' };
      titleStyle = { fontSize: '24px' };
      valueStyle = { fontSize: '40px' };
      break;
    default:
      break;
  }

  switch (shapes) {
    case 'rectangle':
      cardStyle = { ...cardStyle, borderRadius: '8px' };
      break;
    case 'rounded':
      cardStyle = { ...cardStyle, borderRadius: '50px' };
      break;
    case 'circle':
      cardStyle = { ...cardStyle, borderRadius: '50%' };
      break;
    default:
      break;
  }

  return (
    <div className="card" style={{ ...cardStyle, backgroundColor: '#FFFFFF', padding: '16px', margin: '16px' }}>
      <h3 style={{ ...titleStyle, marginBottom: '8px' }}>{title}</h3>
      <p style={{ ...valueStyle, fontWeight: 'bold' }}>{value}</p>
    </div>
  );
};

export default Card;