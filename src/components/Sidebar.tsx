import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return <div className="w-full space-y-8">
      <div className="bg-white dark:bg-card rounded-md shadow-md p-4">
        <h3 className="text-lg font-semibold mb-3">Perfiles de sumisa esperando instrucciones</h3>
        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="font-medium">Carla, 23 años, desconoce BDSM, pero dispuesta a ser introducida en este mundo gradualmente</p>
            <div className="mt-2">
              <img src="/images/corset-portrait.jpg" alt="Perfil sumisa" className="rounded-md w-full h-40 object-cover" />
            </div>
          </div>
          
          <div className="border-b pb-3">
            <p className="font-medium">¿Quieres demostrar que tu entrega es auténtica?</p>
            <p className="font-medium">Si estás buscando a alguien que sepa leerte, guiarte y llevarte al límite con respeto y firmeza, estás en el lugar correcto.</p>
            <p className="font-medium">Si estás lista para explorar tus límites, para dejarte guiar y descubrir hasta dónde puedes llegar… Contactame.</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="font-medium">Te mostraré cómo sobrellevar cada etapa hasta tu entrega más absoluta. Prepararte para ser una buena sumisa pasa por aprender a limpiar mi casa y comportarte como te mando mientras hago las cosas cotidianas.</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="font-medium">Se puede crear vínculos de todo tipo, aunque no seas perfecta. Primero aprendes a servir en privado y luego en público. Tu educación como esclava requiere aprendizaje.</p>
          </div>
        </div>
        
        <div className="mt-4">
          <Link to="/contactanos">
            <Button className="w-full bg-primary hover:bg-primary/90">Sométete a mi</Button>
          </Link>
        </div>
      </div>
    </div>;
};

export default Sidebar;