import React from 'react';
import { Header, Footer } from '../components';
import {LayoutProps} from "../interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header title={"Header"} />
      <main className="content">
        {children}
      </main>
      <Footer title={"Footer"} />
    </>
  );
};

export default Layout;
