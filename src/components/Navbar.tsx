'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup quando componente desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 transition-all duration-300 z-50 ${
      scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 relative z-20">
          <Image 
            src="/images/logo_piedade_sem_fronteira_menor_somentesimbolo.png" 
            alt="Piedade Sem Fronteira" 
            width={50} 
            height={50}
            className="h-10 w-auto"
            priority
          />
          <span className="text-primary-600 font-bold text-xl">Piedade Sem Fronteira</span>
        </Link>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium hover:text-primary-500 transition-colors">
            Início
          </Link>
          <Link href="#sobre" className="font-medium hover:text-primary-500 transition-colors">
            Sobre Nós
          </Link>
          <Link href="#projetos" className="font-medium hover:text-primary-500 transition-colors">
            Projetos
          </Link>
          <Link href="#voluntarios" className="font-medium hover:text-primary-500 transition-colors">
            Seja Voluntário
          </Link>
          <Link href="#contato" className="font-medium hover:text-primary-500 transition-colors">
            Contato
          </Link>
          <Link href="#doar" className="btn-primary">
            Doar Agora
          </Link>
        </nav>

        {/* Menu mobile - botão */}
        <button 
          className="md:hidden p-2 rounded-md relative z-30 focus:outline-none transition-colors hover:bg-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`}></span>
            <span className={`absolute h-0.5 w-6 bg-slate-800 transition-all duration-300 top-3 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Menu mobile - overlay e links */}
      <div className={`fixed inset-0 z-20 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Menu lateral */}
        <nav 
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header do menu */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <span className="text-primary-600 font-bold text-lg">Menu</span>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Fechar menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Links do menu */}
            <div className="flex-1 py-4">
              <Link 
                href="/" 
                className="block py-4 px-6 font-medium hover:text-primary-500 hover:bg-primary-50 transition-all border-b border-slate-50"
                onClick={closeMenu}
              >
                Início
              </Link>
              <Link 
                href="#sobre" 
                className="block py-4 px-6 font-medium hover:text-primary-500 hover:bg-primary-50 transition-all border-b border-slate-50"
                onClick={closeMenu}
              >
                Sobre Nós
              </Link>
              <Link 
                href="#projetos" 
                className="block py-4 px-6 font-medium hover:text-primary-500 hover:bg-primary-50 transition-all border-b border-slate-50"
                onClick={closeMenu}
              >
                Projetos
              </Link>
              <Link 
                href="#voluntarios" 
                className="block py-4 px-6 font-medium hover:text-primary-500 hover:bg-primary-50 transition-all border-b border-slate-50"
                onClick={closeMenu}
              >
                Seja Voluntário
              </Link>
              <Link 
                href="#contato" 
                className="block py-4 px-6 font-medium hover:text-primary-500 hover:bg-primary-50 transition-all border-b border-slate-50"
                onClick={closeMenu}
              >
                Contato
              </Link>
            </div>
            
            {/* Botão de doação no rodapé */}
            <div className="p-6 border-t border-slate-100">
              <Link 
                href="#doar" 
                className="btn-primary w-full text-center flex justify-center py-3"
                onClick={closeMenu}
              >
                Doar Agora
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 