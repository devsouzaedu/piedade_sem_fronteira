import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Conheça nossa história, valores e missão que guiam nosso trabalho diário
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden h-auto order-2 md:order-1">
            <Image 
              src="/images/presidente_ong_piedade_sem_fronteira.jpeg"
              alt="Presidente da ONG Piedade Sem Fronteira"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto object-cover shadow-lg"
              priority
            />
            <div className="mt-4 bg-white rounded-lg p-4 shadow-xl">
              <p className="text-lg font-semibold text-primary-500">Antônio Miranda</p>
              <p className="text-slate-600">Presidente e Fundador</p>
              <blockquote className="text-lg italic text-slate-700 mt-2">
                &ldquo;Acreditamos que pequenas ações podem gerar grandes mudanças. Por isso, trabalhamos com amor, compromisso e responsabilidade social.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="space-y-6">
              <p className="text-slate-700">
                Somos uma organização não governamental voltada para a ajuda humanitária, com o propósito de transformar vidas por meio da solidariedade e da ação social. Atuamos diretamente em comunidades em situação de vulnerabilidade, oferecendo suporte essencial como a distribuição de cestas básicas, construção de moradias dignas, além de outras iniciativas que visam promover o bem-estar, a dignidade e a esperança para quem mais precisa.
              </p>
              
              <p className="text-slate-700">
                Acreditamos que pequenas ações podem gerar grandes mudanças. Por isso, trabalhamos com amor, compromisso e responsabilidade social, unindo voluntários, parceiros e doações para levar ajuda concreta a quem enfrenta dificuldades diárias. Mais do que assistência, oferecemos cuidado, escuta e presença.
              </p>
              
              <p className="text-slate-700">
                Nosso objetivo é construir, junto com a sociedade, um futuro mais justo, humano e solidário.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white shadow p-4 rounded-lg text-center">
                <h4 className="text-primary-500 font-bold text-xl mb-2">Missão</h4>
                <p className="text-slate-700 text-sm">Transformar vidas por meio da solidariedade e do apoio humanitário</p>
              </div>
              
              <div className="bg-white shadow p-4 rounded-lg text-center">
                <h4 className="text-primary-500 font-bold text-xl mb-2">Visão</h4>
                <p className="text-slate-700 text-sm">Uma sociedade mais justa, humana e solidária</p>
              </div>
              
              <div className="bg-white shadow p-4 rounded-lg text-center">
                <h4 className="text-primary-500 font-bold text-xl mb-2">Valores</h4>
                <p className="text-slate-700 text-sm">Amor, compromisso e responsabilidade social</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 