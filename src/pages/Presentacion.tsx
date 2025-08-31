import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';

const Presentacion = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="relative h-[450px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/images/chain-composition.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Presentación</h1>
              <p className="text-lg mb-6 whitespace-pre-line">
                Dominante y Amo de 36 años con más de 14 años de experiencia real en el mundo del BDSM, explorando múltiples dinámicas D/s, desde la obediencia más sutil hasta la entrega más intensa.

He guiado, entrenado y tutelado sumisas en su proceso de descubrimiento, en sesiones que abarcan desde el juego sensorial y el bondage, hasta el control mental, la disciplina o la humillación erótica, siempre dentro de un marco de confianza, consentimiento y respeto.

Cuento con un espacio privado y discreto en Madrid para sesiones seguras y auténticas.

No cobro. Busco conexión, entrega real y juego sin máscaras.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white dark:bg-card rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>
            <p className="mb-4">
              Dominante y Amo de 36 años con más de 14 años de experiencia real en el mundo del BDSM. He explorado diferentes dinámicas D/s, desde la obediencia más sutil hasta formas de entrega mucho más profundas. A lo largo del tiempo he acompañado, entrenado y guiado sumisas en su camino, adaptando cada sesión a su proceso, a su ritmo, y a sus límites. Trabajo desde el juego sensorial, el bondage o la disciplina, hasta el control mental o la humillación erótica, siempre dentro de un marco claro: confianza, consentimiento y respeto.
            </p>
            <p className="mb-4">
              Dispongo de un espacio privado y discreto en Madrid, preparado para sesiones reales, seguras y sin interrupciones. No hay tarifas ni promesas vacías. Busco una conexión auténtica, entrega sincera… y juego sin máscaras.
            </p>
          </div>
          
          <CommentSection pageId="presentacion" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Presentacion;
