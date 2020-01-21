import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import List from '../../components/List/List';
import SortPanel from '../../components/SortPanel/SortPanel';
import { PAGES_NAME } from '../../constants/constants';

const MainPage = () => {
  return (
      <main>
          <Navbar
            activePage={PAGES_NAME.mainPage}
          />
          <SortPanel/>
          <div className="container custom-container">
              <List/>
          </div>
      </main>
  )
};

export default MainPage;
