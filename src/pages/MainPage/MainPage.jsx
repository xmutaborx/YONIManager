import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import List from '../../components/List/List'
import { PAGES_NAME } from '../../constants/constants'

const MainPage = () => {
  return (
      <main>
          <Navbar
            activePage={PAGES_NAME.mainPage}
          />
          <div className="container">
              <h3>Заказы</h3>
              <List/>
          </div>
      </main>
  )
};

export default MainPage;
