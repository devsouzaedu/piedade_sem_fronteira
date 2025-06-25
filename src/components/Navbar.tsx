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
          className="md:hidden p-2 rounded-md relative z-20 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile - links */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-10" onClick={() => setIsMenuOpen(false)}>
          <nav 
            className="absolute right-0 top-0 h-screen w-[80%] max-w-sm bg-white py-4 px-6 shadow-xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Link 
              href="/" 
              className="block py-3 font-medium hover:text-primary-500 transition-colors border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="#sobre" 
              className="block py-3 font-medium hover:text-primary-500 transition-colors border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              href="#projetos" 
              className="block py-3 font-medium hover:text-primary-500 transition-colors border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link 
              href="#voluntarios" 
              className="block py-3 font-medium hover:text-primary-500 transition-colors border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Seja Voluntário
            </Link>
            <Link 
              href="#contato" 
              className="block py-3 font-medium hover:text-primary-500 transition-colors border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              href="#doar" 
              className="mt-6 btn-primary w-full text-center flex justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Doar Agora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 