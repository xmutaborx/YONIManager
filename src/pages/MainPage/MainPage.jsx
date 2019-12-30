import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import List from '../../components/List/List'

const MainPage = () => {
  return (
      <main>
          <Navbar />
          <div className="container">
              <h1>Main page</h1>
              <List/>
          </div>
      </main>
  )
};

export default MainPage;
