import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="h-16 bg-black w-full absolute text-white flex items-center justify-center overflow-x-hidden">
      <div className="flex flex-row justify-between items-center w-full max-w-[768px]">
        <img src="/images/Logo.png" className="h-12" alt="Logo" />
        <nav className="flex gap-16">
          <p>Discovery</p>
          <p>Sobre</p>
          <p>Contate-nos</p>
        </nav>
        <div className="flex gap-2">
          <img src="/icons/user-icon.svg" className="w-6 h-6" alt="User Icon" />
          <img src="/icons/cart-shopping.svg" className="w-6 h-6" alt="Cart Icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
