'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (1).jpeg',
      alt: 'Projeto de assistência comunitária'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (3).jpeg',
      alt: 'Projeto de construção de moradias'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (7).jpeg',
      alt: 'Projeto de assistência a famílias'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (9).jpeg',
      alt: 'Projeto de assistência comunitária'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Slide mais rápido: 3 segundos ao invés de 5
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Container com margens reduzidas para mobile */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="text-center md:text-left">
            <Image 
              src="/images/logo_piedade_sem_fronteira_menor_somentesimbolo.png" 
              alt="Logo Piedade Sem Fronteira" 
              width={80} 
              height={80}
              className="mx-auto md:mx-0 mb-4 sm:mb-6 md:mb-8 w-auto h-auto"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Transformando vidas com <span className="text-primary-500">solidariedade</span>
            </h1>
            
            <p className="text-slate-700 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 sm:px-0">
              Somos uma organização não governamental voltada para a ajuda humanitária, com o propósito de transformar vidas por meio da solidariedade e da ação social.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-2 sm:px-0">
              <Link href="#doar" className="btn-primary text-sm sm:text-base">
                Doar Agora
              </Link>
              <Link href="#voluntarios" className="btn-secondary text-sm sm:text-base">
                Seja Voluntário
              </Link>
            </div>
          </div>
          
          {/* Área do slideshow */}
          <div className="relative order-first md:order-last">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Slideshow sem indicadores */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image 
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 sm:p-3 md:p-4">
                      <p className="text-xs sm:text-sm md:text-base">{slide.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Informações - layout responsivo melhorado */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3">
                  <div className="bg-white shadow p-2 sm:p-3 rounded-lg text-center">
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-500">250+</p>
                    <p className="text-xs sm:text-sm">Famílias Atendidas</p>
                  </div>
                  <div className="bg-white shadow p-2 sm:p-3 rounded-lg text-center">
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-500">50+</p>
                    <p className="text-xs sm:text-sm">Voluntários</p>
                  </div>
                  <div className="bg-white shadow p-2 sm:p-3 rounded-lg text-center">
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-500">5+</p>
                    <p className="text-xs sm:text-sm">Anos de Atuação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decoração de ondas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            className="text-slate-50"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
  };
  
  export default Hero; 