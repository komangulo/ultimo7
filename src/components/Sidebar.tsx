import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return <div className="w-full space-y-8">
      <div className="bg-white dark:bg-card rounded-md shadow-md p-4">
        <h3>Perfiles de sumisa esperando instrucciones</h3>
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
          <Link to="/contactame">
            <Button className="w-full bg-primary hover:bg-primary/90">Sométete a mi</Button>
          </Link>
          
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-center">Servicios y Experiencias con Amo Dominante Madrid Sin Coste Alguno y Totalmente Gratuitas</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Como <strong>Amo Dominante Madrid</strong>, quiero dejar claro que <strong>no cobro por mis servicios</strong>. Mi objetivo es crear conexiones auténticas basadas en la confianza y el respeto mutuo, no en transacciones económicas.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Cada sesión con el <strong>Amo Dominante Madrid</strong> es completamente <strong>gratuita</strong>. No hay tarifas ocultas, ni costes por mensajes, ni cargos por sesión. Mi dedicación a la comunidad BDSM se basa en la pasión por el arte de la dominación y la sumisión, no en intereses económicos.
            </p>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-3 text-center">Aprendizaje Guiado con un Amo Dominante Madrid Experimentado</h2>
            <h3 className="text-lg font-semibold mb-3 text-center text-[#a51c30]">Mentoría y Entrenamiento para Sumisas Novatas</h3>
            <div className="h-1 w-16 bg-[#a51c30] mx-auto mb-4"></div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Como <strong>Amo Dominante Madrid</strong>, me especializo en ser mentor, tutor y entrenador de sumisas novatas o primerizas. Mi enfoque es guiarte desde el principio en el fascinante camino del BDSM, ayudándote a descubrir y desarrollar tu sumisión de manera segura y satisfactoria.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              Si eres nueva en este mundo, te ofrezco un espacio de aprendizaje donde podrás explorar tus límites, entender tus deseos y crecer como sumisa bajo la guía de un Amo experimentado. Cada paso se dará a tu ritmo, con absoluto respeto a tus límites y necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>;
};

export default Sidebar;