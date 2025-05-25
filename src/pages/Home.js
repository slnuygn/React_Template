import React from 'react';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      content: 'This is an example card.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'Here is the second card content.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Card 3',
      content: 'Third card content is here.',
      imageUrl: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p className="welcome-text">Welcome! This is the home page of the React Template project.</p>
      
      <section className="cards-section">
        <h2>Example Cards</h2>
        <div className="cards-container">
          {cards.map(card => (
            <Card 
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 