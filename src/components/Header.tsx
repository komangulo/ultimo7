
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-[#a51c30] text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/">
                <Button 
                  variant="link" 
                  className="text-2xl font-bold text-white p-0 hover:no-underline"
                >
                  Amo Dominante Madrid
                </Button>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="hover:underline font-bold">HOME</Link>
              <Link to="/contactame" className="hover:underline font-bold">CONTÁCTAME</Link>
              <Link to="/presentacion" className="hover:underline font-bold">PRESENTACIÓN</Link>
              <Link to="/esclavas-vips" className="hover:underline font-bold">ESCLAVAS VIPS</Link>
              <Link to="/esclavas-buscan-amo" className="hover:underline font-bold">ESCLAVAS BUSCAN AMO</Link>
              <Link to="/sumision-online" className="hover:underline font-bold">SUMISIÓN ONLINE</Link>
              <Link to="/blog" className="hover:underline font-bold">BLOG</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
