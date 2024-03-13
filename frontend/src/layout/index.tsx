import React from 'react';
import { Header, Footer } from '../components';
import {LayoutProps} from "../interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <main className="content p-8">
          {children}
        </main>
      <Footer title={"Share your feedback on ahsan.sabir@yahoo.com to help us improve."} />
    </>
  );
};

export default Layout;
