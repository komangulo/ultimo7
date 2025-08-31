import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[450px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/images/harness-design.jpg')" }}
      />
      <div className="absolute inset-0 overlay-gradient z-10"></div>
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl text-white">
          <div className="inline-block bg-primary px-3 py-1 mb-4">PRESENTACIÓN</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Presentación</h1>
          <p className="text-lg mb-6 whitespace-pre-line">
            Dominante y Amo de 36 años con más de 14 años de experiencia real en el mundo del BDSM, explorando múltiples dinámicas D/s, desde la obediencia más sutil hasta la entrega más intensa.

He guiado, entrenado y tutelado sumisas en su proceso de descubrimiento, en sesiones que abarcan desde el juego sensorial y el bondage, hasta el control mental, la disciplina o la humillación erótica, siempre dentro de un marco de confianza, consentimiento y respeto.

Cuento con un espacio privado y discreto en Madrid para sesiones seguras y auténticas.

No cobro. Busco conexión, entrega real y juego sin máscaras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
