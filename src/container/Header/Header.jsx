import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="chase the new flavour" />
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Chase the new flavour with the key to fine dining with gericht resturant
        and enjoy the tasty food and drinks we have to offer in our resturant.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} className="app__image" alt="header img" />
    </div>
  </div>
);

export default Header;
