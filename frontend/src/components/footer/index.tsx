import React from 'react';
import {FooterProps} from "../../interface";


const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Footer;
