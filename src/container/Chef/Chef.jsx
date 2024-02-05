import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote" />
              <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti id in quasi?</p>
        </div>
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius cumque perferendis est, nam unde voluptates dignissimos tenetur numquam eaque.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
