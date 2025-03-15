import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, topratesales, highlight, sneaker, story, footerAPI } from './data/data.js';
import Shop from './components/Shop';

const App = () => {
  const location = useLocation(); // Get current route

  return (
    <>
      {/* ✅ Hide Navbar on "/shop" and "/product" */}
      {location.pathname !== '/shop' && location.pathname !== '/product' && <Navbar />} 

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Cart />
              <main className="flex flex-col gap-16 relative">
                <Hero heroapi={heroapi} />
                <Sales endpoint={popularsales} ifExists />
                <FlexContent endpoint={highlight} ifExists />
                <Sales endpoint={topratesales} />
                <FlexContent endpoint={sneaker} />
                <Stories story={story} />
              </main>
              <Footer footerAPI={footerAPI} />
            </>
          }
        />
        
        {/* ✅ Shop Page */}
        <Route path="/shop" element={<Shop />} />

        {/* ✅ Product Page (linked to "Buy Now" button) */}
        <Route path="/product" element={<FlexContent />} />
      </Routes>
    </>
  );
};

// ✅ Wrap in Router at top level
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
