'use client';

import { useState } from 'react';
import Image from 'next/image';

const Donate = () => {
  const [donationType, setDonationType] = useState('regular');
  const [donationValue, setDonationValue] = useState('50');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  
  const handleDonationTypeChange = (type: string) => {
    setDonationType(type);
  };
  
  const handleDonationValueChange = (value: string) => {
    setDonationValue(value);
  };
  
  const handleCustomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado pela doação de R$ ${donationValue}! Você será redirecionado para a página de pagamento.`);
  };
  
  const donationImpactImages = [
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (4).jpeg',
      alt: 'Construção de moradias para famílias necessitadas'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Essa casa será substituída por uma de alvenaria próximo projeto(10).jpeg',
      alt: 'Casa que será substituída por uma de alvenaria'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira Entregando cestas(5).jpeg',
      alt: 'Entrega de cestas básicas para famílias'
    },
    {
      src: '/images/Fotos_obras_e_projetos_peidade_sem_fronteira (11)Entregando cestas pra crianças.jpeg',
      alt: 'Entrega de cestas básicas para crianças'
    }
  ];
  
  return (
    <section id="doar" className="section-padding bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça uma Doação</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-primary-100 max-w-3xl mx-auto">
            Sua contribuição ajuda a transformar vidas e construir um futuro mais justo e solidário
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary-700 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Por que doar?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>100% do valor é destinado para nossas ações sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Doações mensais ajudam a planejar ações de longo prazo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Qualquer valor faz diferença na vida das pessoas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Sua contribuição é fundamental para continuarmos nosso trabalho</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Escolha como deseja doar</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-full ${
                        donationType === 'regular'
                          ? 'bg-primary-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                      onClick={() => handleDonationTypeChange('regular')}
                    >
                      Mensal
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-full ${
                        donationType === 'once'
                          ? 'bg-primary-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                      onClick={() => handleDonationTypeChange('once')}
                    >
                      Única
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-center mb-3">Escolha um valor:</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {['20', '50', '100'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`p-3 rounded-lg border ${
                          donationValue === value
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600'
                        }`}
                        onClick={() => handleDonationValueChange(value)}
                      >
                        R$ {value}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <label htmlFor="customValue" className="block mb-2 text-center">
                      Ou digite um valor:
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <span className="bg-slate-100 dark:bg-slate-700 px-3 py-2 border-r">R$</span>
                      <input
                        type="number"
                        id="customValue"
                        value={donationValue}
                        onChange={handleCustomValueChange}
                        className="flex-1 px-4 py-2 bg-white dark:bg-slate-700 focus:outline-none"
                        min="1"
                        step="1"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  {donationType === 'regular' 
                    ? `Doar R$ ${donationValue} mensalmente` 
                    : `Doar R$ ${donationValue} agora`}
                </button>

                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                  Processamos pagamentos de forma segura. Seus dados estão protegidos.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Seção de Impacto das Doações */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">O Impacto da Sua Doação</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {donationImpactImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-48">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-primary-700">
                  <p className="text-sm text-white">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-primary-100 mb-4">Outras formas de ajudar:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-primary-700 rounded-lg p-6 w-full sm:w-64">
              <h4 className="text-xl font-bold mb-2">Doação de Alimentos</h4>
              <p className="text-primary-100">Entre em contato para combinar a entrega de alimentos não perecíveis</p>
            </div>
            <div className="bg-primary-700 rounded-lg p-6 w-full sm:w-64">
              <h4 className="text-xl font-bold mb-2">Doação de Roupas</h4>
              <p className="text-primary-100">Aceitamos roupas em bom estado para distribuição nas comunidades</p>
            </div>
            <div className="bg-primary-700 rounded-lg p-6 w-full sm:w-64">
              <h4 className="text-xl font-bold mb-2">Materiais de Construção</h4>
              <p className="text-primary-100">Contribua com materiais para nossas obras de reforma de moradias</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
                onClick={() => setSelectedImage(null)}
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

export default Donate; 