import React from 'react';
import SessionCard from './SessionCard';

const sessions = [
  {
    id: 1,
    title: "Asiste a una de mis sesiones como sumisa en Madrid",
    imageSrc: "/images/rope-art-1.jpg",
    description: "Puedes elegir de mis sesiones una que se adapte a tus necesidades. Aunque te vas a someter, debes tener claro qué quieres experimentar en la sesión. Todas las primeras visitas son ligeras."
  },
  {
    id: 2,
    title: "Ser Dominante Amo en Madrid",
    imageSrc: "/images/chain-portrait.jpg",
    description: "Llevo años en el mundo del dominio y es una de las experiencias que más placer me proporcionan. Sentir ese poder creciendo en mi, ese dominio absoluto, ver cómo ellas disfrutan, son sensaciones incomparables."
  },
  {
    id: 3,
    title: "Playroom e instrumentos",
    imageSrc: "/images/rope-hands.jpg",
    description: "Este es mi rincón de juegos y espacios de mis sesiones y entrenamientos. Los instrumentos que utilizamos como complementos imprescindibles. Todos los objetos siempre protegidos en los guantes."
  },
  {
    id: 4,
    title: "Vídeos de sesiones de esclavas y sumisas",
    imageSrc: "/images/cupping-art.jpg",
    description: "Aquí podrás ver los vídeos más destacados de mi trabajo. Son totalmente reales, no preparados ni con actrices. Contacta a través del e-mail o WhatsApp para entrar a ver los vídeos."
  },
  {
    id: 5,
    title: "Imágenes de sesiones con esclavas y sumisas",
    imageSrc: "/images/suspension-art.jpg",
    description: "Aquí verás como trato a las sumisas, cómo juego con sus cuerpos, cuando las castigo, cómo logro que se entreguen por completo, diciendo sí a mi palabra sapiente directora, soy yo."
  },
  {
    id: 6,
    title: "Todos los vídeos del mes",
    imageSrc: "/images/leather-restraints.jpg",
    description: "Te acercan tanto hacia las vidas de los sumisos que incluso puedes sentirlo en tu propia piel. Te muestran todas las fases de mi trabajo, desde la forma como 'le hablo'..."
  }
];

const SessionGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sessions.map((session) => (
        <SessionCard 
          key={session.id}
          title={session.title}
          imageSrc={session.imageSrc}
          description={session.description}
        />
      ))}
    </div>
  );
};

export default SessionGrid;
