'use client';

import { useState } from 'react';
import Image from 'next/image';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário para um backend
    console.log(formData);
    alert('Obrigado por se inscrever como voluntário! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };
  
  const volunteerImages = [
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (6).jpeg',
      alt: 'Voluntários em ação'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (8).jpeg',
      alt: 'Equipe de voluntários'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (12).jpeg',
      alt: 'Voluntários em projeto comunitário'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (15).jpeg',
      alt: 'Voluntários em ação social'
    }
  ];

  return (
    <section id="voluntarios" className="section-padding bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Seja Voluntário</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Junte-se à nossa equipe de voluntários e faça parte da mudança positiva nas comunidades
          </p>
        </div>
        
        {/* Galeria de Voluntários */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Nossos Voluntários em Ação</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {volunteerImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={() => {
                  setSelectedImage(image);
                  setShowGalleryModal(true);
                }}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Por que ser voluntário?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">Impacto real na vida de pessoas necessitadas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">Desenvolvimento de novas habilidades</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">Construção de uma rede de contatos com propósito</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">Experiência transformadora e enriquecedora</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">Flexibilidade para contribuir de acordo com sua disponibilidade</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-600 text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">Áreas de atuação:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-primary-700/50 p-3 rounded">
                  <p>Distribuição de alimentos</p>
                </div>
                <div className="bg-primary-700/50 p-3 rounded">
                  <p>Apoio em construções</p>
                </div>
                <div className="bg-primary-700/50 p-3 rounded">
                  <p>Atividades recreativas</p>
                </div>
                <div className="bg-primary-700/50 p-3 rounded">
                  <p>Campanhas de arrecadação</p>
                </div>
                <div className="bg-primary-700/50 p-3 rounded">
                  <p>Comunicação e divulgação</p>
                </div>
                <div className="bg-primary-700/50 p-3 rounded">
                  <p>Gestão administrativa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Inscreva-se como Voluntário</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-slate-300">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-slate-700 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-slate-700 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-slate-300">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-slate-700 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block mb-1 font-medium text-slate-300">Área de interesse</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-slate-700 text-white"
                  required
                >
                  <option value="">Selecione uma área</option>
                  <option value="distribuição">Distribuição de alimentos</option>
                  <option value="construção">Apoio em construções</option>
                  <option value="recreação">Atividades recreativas</option>
                  <option value="arrecadação">Campanhas de arrecadação</option>
                  <option value="comunicação">Comunicação e divulgação</option>
                  <option value="administração">Gestão administrativa</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-slate-300">Mensagem (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-slate-700 text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Enviar Inscrição
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Modal de Galeria */}
      {showGalleryModal && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGalleryModal(false)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
                onClick={() => setShowGalleryModal(false)}
              >
                ✕
              </button>
              <Image 
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Volunteer; 