import React from 'react';
import TitleCard from '../components/TitleCard/TitleCard';
import Navigation from '../components/Navigation/Navigation';
import PremiumCards from '../components/PremiumCards/PremiumCards';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <TitleCard />
      <Navigation />
      <PremiumCards />
      <Footer />
    </div>
  );
};

export default Home;

