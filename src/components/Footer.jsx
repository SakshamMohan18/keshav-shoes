import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="text-center">
            <p className="text-sm md:text-center">
              Copyright <sup className="text-base font-bold">&copy;</sup> All Reserved Rights{' '}
              <span className="font-semibold">Keshav Shoes {year}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
