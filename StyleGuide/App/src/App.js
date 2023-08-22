import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './setup/AppRoutes';
import { Layout } from './components/Layout';

const App = () => {

	useEffect(() => {
		document.body.classList.remove('no-transitions');
	}, []); 

    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }

export default App;
