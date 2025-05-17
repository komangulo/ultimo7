import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';

const EsclavaBuscanAmo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Esclavas buscan AMO</h1>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="mb-4">
                Un espacio para sumisas que buscan ser compartidas y observadas.
              </p>
              
              <p className="mb-4">
                Aquí, las esclavas y sumisas que aparecen han decidido dar un paso más: mostrarse y estar disponibles para ser «adoptadas» por uno o varios dominantes, ya sea en una dinámica presencial o a distancia.
              </p>
              
              <p className="mb-4">
                Solo los dominantes elegidos tendrán acceso a los perfiles.
              </p>
              
              <p className="mb-4">
                Si eres sumisa o esclava y deseas formar parte de esta lista, necesitaré que me envíes tu wassap, me autorices a mostrar una imagen tuya (no tiene por qué ser a cara descubierta) y me facilites un correo electrónico para confirmar tu inclusión.
              </p>
              
              <p className="mb-4">
                Tu privacidad será respetada en todo momento: el correo no se compartirá ni será visible.
              </p>
              
              <p className="mb-4">
                Al final de esta página tienes un enlace directo para resolver cualquier duda o escribirme si deseas formar parte.
              </p>
              
              <p className="mb-6">
                Si sientes que este es tu lugar, estaré esperando tu decisión.
              </p>
              
              <p className="mt-6 text-red-600 font-bold">
                GALERÍA DE ESCLAVAS:
              </p>
              
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
                Próximamente: Galería de esclavas disponibles
              </div>
            </div>
            
            <CommentSection pageId="esclavas-buscan-amo" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EsclavaBuscanAmo;
