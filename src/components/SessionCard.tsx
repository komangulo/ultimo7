import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SessionCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const SessionCard = ({
  title,
  imageSrc,
  description
}: SessionCardProps) => {
  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden card-zoom">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover filter grayscale transition-all duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link to="/contactanos">
          <Button className="w-full">Solicitar Sesión</Button>
        </Link>
      </div>
    </div>
  );
};

export default SessionCard;
