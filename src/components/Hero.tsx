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
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Image 
              src="/images/logo_piedade_sem_fronteira_menor_somentesimbolo.png" 
              alt="Logo Piedade Sem Fronteira" 
              width={100} 
              height={100}
              className="mx-auto md:mx-0 mb-8 w-auto h-auto"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformando vidas com <span className="text-primary-500">solidariedade</span>
            </h1>
            
            <p className="text-slate-700 text-lg md:text-xl mb-8">
              Somos uma organização não governamental voltada para a ajuda humanitária, com o propósito de transformar vidas por meio da solidariedade e da ação social.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#doar" className="btn-primary">
                Doar Agora
              </Link>
              <Link href="#voluntarios" className="btn-secondary">
                Seja Voluntário
              </Link>
            </div>
          </div>
          
          <div className="relative h-64 md:h-auto order-first md:order-last">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden h-full">
              {/* Slideshow */}
              <div className="relative w-full h-[400px]">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image 
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <p className="text-sm md:text-base">{slide.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Indicadores de slide */}
              <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? 'bg-primary-500' : 'bg-white bg-opacity-50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              {/* Informações */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 items-center justify-center">
                  <div className="bg-white shadow p-3 rounded-lg">
                    <p className="text-3xl font-bold text-primary-500">250+</p>
                    <p className="text-sm">Famílias Atendidas</p>
                  </div>
                  <div className="bg-white shadow p-3 rounded-lg">
                    <p className="text-3xl font-bold text-primary-500">50+</p>
                    <p className="text-sm">Voluntários</p>
                  </div>
                  <div className="bg-white shadow p-3 rounded-lg">
                    <p className="text-3xl font-bold text-primary-500">5+</p>
                    <p className="text-sm">Anos de Atuação</p>
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