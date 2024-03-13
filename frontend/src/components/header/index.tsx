// import library 
import React from 'react';


// import assets 
import { Clock } from '../clock';
import styles from "./styles.module.css"
import { CurrentDate } from '../date';
import { HeaderDropdown } from '../dropdown';



const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.date_time}>
        <CurrentDate />
        <Clock />
      </div>
      <div>
        <HeaderDropdown />
      </div>
    </header>
  );
};

export default Header;
