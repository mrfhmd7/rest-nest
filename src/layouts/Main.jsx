import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Main = () => {
     return (
          <div>
               <Header></Header>
               <main>
                    <Outlet></Outlet>
               </main>
               <Footer></Footer>
          </div>
     );
};

export default Main;