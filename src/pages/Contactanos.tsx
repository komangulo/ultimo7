import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';
import { WhatsAppModal } from "@/components/WhatsAppModal";
import { Button } from "@/components/ui/button";

const Contactanos = () => {
  return <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
            
            <div className="bg-white dark:bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Información de contacto</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-bold">Mi tel.: </span>
                  <WhatsAppModal />
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="font-bold">Formulario de contacto</span>
                  <a href="https://eu.jotform.com/build/251222460195349" target="_blank" rel="noopener noreferrer">
                    <Button style={{ backgroundColor: '#22c55e', color: 'white' }}>Formulario de contacto</Button>
                  </a>
                </div>
                
                <p className="mt-4">
                  Si deseas consultarme cualquier duda o cuestión puedes usar el formulario arriba indicado.
                </p>
                
                <p className="mt-2">
                  Igualmente utiliza uno de estos dos métodos para solicitarme la clave para entrar en la sección de «esclavas VIPs»
                </p>
              </div>
            </div>
            
            <CommentSection pageId="contactanos" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default Contactanos;
