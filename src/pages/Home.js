import React from 'react';
import Card from '../components/Card';
import useSequentialBackground from '../hooks/useSequentialBackground';
import appStoreBadge from '../assets/badges/Download_on_the_App_Store_Badge.svg.png';
import googlePlayBadge from '../assets/badges/GetItOnGooglePlay_Badge_Web_color_English.png';
import './Home.css';

const Home = () => {
  // Change background every time Home page loads
  useSequentialBackground();

  const cards = [
    {
      id: 1,
      title: 'Boncuk Hayvan Kliniği',
      content: 'Kötekli',
      imageUrl: 'https://live.staticflickr.com/7103/7280793906_7096766728_b.jpg',
      phone: '0252 000 00 00'
    },
    {
      id: 2,
      title: 'Sevgi Veterinerlik',
      content: 'Emirbeyazıt',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Lower_Umpqua_Veterinary_Clinic_-_panoramio.jpg',
      phone: '0252 000 00 00'
    },
    {
      id: 3,
      title: 'Veteriner Güven Kliniği',
      content: 'Toki',
      imageUrl: 'https://live.staticflickr.com/5478/9281972929_208ea02e99_b.jpg',
      phone: '0252 000 00 00'
    }
  ];

  return (
    <div className="home-page">
      
      <p className="home-text">Carry us in your pocket, download our app on:</p>
      
      <div className="download-badges">
        <a href="#" className="badge-link" aria-label="Download on the App Store">
          <img src={appStoreBadge} alt="Download on the App Store" className="store-badge" />
        </a>
        <a href="#" className="badge-link" aria-label="Get it on Google Play">
          <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge" />
        </a>
      </div>
      
      <section className="cards-section">
        <p className="home-text">Clinics Near You</p>
        <div className="cards-container">
          {cards.map(card => (
            <Card 
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
              phone={card.phone}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 