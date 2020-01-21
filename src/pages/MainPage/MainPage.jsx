import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import List from '../../components/List/List'

const MainPage = () => {
  return (
      <main>
          <Navbar />
          <div className="container">
              <h3>Заказы</h3>
              <List/>
          </div>
      </main>
  )
};

export default MainPage;
