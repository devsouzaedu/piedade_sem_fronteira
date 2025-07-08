'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProjectCard = ({ title, description, icon }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
        <span className="text-3xl text-primary-500">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-slate-600 text-center">{description}</p>
    </div>
  );
};

interface ProjectImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ProjectImage = ({ src, alt, onClick }: ProjectImageProps) => {
  return (
    <div 
      className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
      onClick={onClick}
    >
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />
    </div>
  );
};

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, alt, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button 
            className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
            onClick={onClose}
          >
            ✕
          </button>
          <Image 
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-white text-center mt-4 text-lg">{alt}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  
  const projects = [
    {
      title: 'Cestas Básicas',
      description: 'Distribuição de alimentos para famílias em situação de vulnerabilidade social, garantindo segurança alimentar.',
      icon: '🍲'
    },
    {
      title: 'Moradias Dignas',
      description: 'Construção e reforma de casas para proporcionar moradia adequada para famílias necessitadas.',
      icon: '🏠'
    },
    {
      title: 'Educação Infantil',
      description: 'Programas educativos e atividades recreativas para crianças em áreas carentes.',
      icon: '📚'
    },
    {
      title: 'Apoio ao Idoso',
      description: 'Auxílio e assistência para pessoas idosas, incluindo visitas, ajuda médica e atividades sociais.',
      icon: '👵'
    },
    {
      title: 'Capacitação Profissional',
      description: 'Cursos e treinamentos para desenvolvimento de habilidades profissionais e geração de renda.',
      icon: '💼'
    },
    {
      title: 'Assistência Médica',
      description: 'Acesso a cuidados médicos básicos, medicamentos e orientação em saúde para comunidades carentes.',
      icon: '🩺'
    }
  ];

  const projectImages = [
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Entregando cestas(5).jpeg',
      alt: 'Entrega de cestas básicas para famílias'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (11)Entregando cestas pra crianças.jpeg',
      alt: 'Entrega de cestas básicas para crianças'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Entregando mini cesta pra crianças(13).jpeg',
      alt: 'Entrega de mini cestas para crianças'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteiraEntrega de cesta (14).jpeg',
      alt: 'Entrega de cestas básicas para comunidade'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Terminando telhado(2).jpeg',
      alt: 'Projeto de construção - Terminando o telhado'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Essa estamos terminando telhado(4).jpeg.jpeg',
      alt: 'Projeto de construção - Finalização de telhado'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Essa casa será substituída por uma de alvenaria próximo projeto(10).jpeg',
      alt: 'Casa que será substituída por uma de alvenaria'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (1).jpeg',
      alt: 'Projeto de assistência comunitária'
    }
  ];

  // Imagens do "ANTES" - condições difíceis
  const beforeImages = [
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (9).jpeg',
      alt: 'Condições precárias de moradia - situação antes da intervenção'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (10).jpeg',
      alt: 'Família em situação de vulnerabilidade - antes do projeto'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (11).jpeg',
      alt: 'Condições difíceis de habitação - situação inicial'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (12).jpeg',
      alt: 'Moradia em condições precárias - antes da transformação'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (13).jpeg',
      alt: 'Situação de vulnerabilidade habitacional - estado inicial'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (14).jpeg',
      alt: 'Condições inadequadas de moradia - antes do projeto'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (15).jpeg',
      alt: 'Habitação em estado precário - situação original'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (16).jpeg',
      alt: 'Família em condições difíceis - antes da intervenção'
    },
    {
      src: '/images/piedade_sem_fronteira_ AQUI ERA A MORADIA DE UMA FAMÍLIA , TRISTEZA  (17).jpeg',
      alt: 'Moradia inadequada - condições antes do projeto'
    }
  ];

  // Imagens do "DEPOIS" - nova realidade
  const afterImages = [
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (1).jpeg',
      alt: 'Nova realidade - transformação completa da moradia'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (2).jpeg',
      alt: 'Alegria da família - novo começo após o projeto'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (3).jpeg',
      alt: 'Moradia digna conquistada - nova vida para a família'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (4).jpeg',
      alt: 'Resultado da transformação - esperança renovada'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (5).jpeg',
      alt: 'Casa renovada - sonho realizado'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (6).jpeg',
      alt: 'Novo porvir - vida transformada'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (7).jpeg',
      alt: 'Recomeço digno - impacto do projeto social'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (8).jpeg',
      alt: 'Transformação realizada - gratidão e alegria'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (9).jpeg',
      alt: 'Esperança renovada - vida com dignidade'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (10).jpeg',
      alt: 'Projeto concluído - nova realidade construída'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (11).jpeg',
      alt: 'Sonho perdido no passado agora realizado'
    },
    {
      src: '/images/piedade_sem_fronteira_ ESSA É A NOVA REALIDADE DE UM NOVO PORVIR , ALEGRIA , UMA NOVA VIDA UM RECOMEÇO (12).jpeg',
      alt: 'Gesto nobre realizado - família transformada'
    }
  ];

  return (
    <section id="projetos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image 
              src="/images/logo_piedade_sem_fronteira_menor_somentesimbolo.png"
              alt="Logo Símbolo Piedade Sem Fronteira"
              width={80}
              height={80}
              className="w-auto h-20"
              priority
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Projetos</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Conheça as iniciativas que desenvolvemos para transformar vidas nas comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title}
              description={project.description}
              icon={project.icon}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Galeria de Projetos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectImages.map((image, index) => (
              <ProjectImage 
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        
        {/* Seção Antes e Depois */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Transformação que Fazemos</h3>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Veja como transformamos vidas, tirando famílias da miséria e oferecendo dignidade, esperança e um novo recomeço
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ANTES */}
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
                <h4 className="text-2xl font-bold text-red-700 mb-2">😢 ANTES</h4>
                <p className="text-red-600 font-medium">
                  Tristeza, miséria e falta de esperança
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {beforeImages.map((image, index) => (
                  <ProjectImage 
                    key={`before-${index}`}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            
            {/* DEPOIS */}
            <div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
                <h4 className="text-2xl font-bold text-green-700 mb-2">😊 DEPOIS</h4>
                <p className="text-green-600 font-medium">
                  Alegria, nova vida e um recomeço digno
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {afterImages.map((image, index) => (
                  <ProjectImage 
                    key={`after-${index}`}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-primary-700 mb-4">💙 Você Pode Fazer Parte Desta Transformação</h4>
              <p className="text-primary-600 mb-6">
                Com sua ajuda, mais famílias podem sair da situação de vulnerabilidade e conquistar uma vida digna. 
                Juntos, transformamos sonhos perdidos em realidade!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#doar" className="btn-primary">
                  Fazer uma Doação
                </Link>
                <Link href="#voluntarios" className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                  Ser Voluntário
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="#contato" className="btn-primary">
            Quero Participar
          </Link>
        </div>
      </div>
      
      <ImageModal 
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default Projects; 