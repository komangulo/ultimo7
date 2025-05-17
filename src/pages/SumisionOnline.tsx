
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';

const SumisionOnline = () => {
  return <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Sumisión online</h1>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="mb-4">Si quieres que te domine online, para que te castigues en tu propia casa, puedo hacerlo. Te enviaré un vídeo demostrativo de lo que quiero que hagas, puedes luego enviármelo a mí, o no, como prefieras. Pero debes asegurarme que vas a llevar a cabo todo lo que en el vídeo veas. </p>
              
              <p className="mb-4">IGUALMENTE: Si quieres ser humillada por teléfono también lo puedo hacer</p>
              
              <p className="mb-4">
                Envíame un correo, indicando que clase de castigo te mereces y te indico como proceder al tributo
                económico y el envío del vídeo, o en su caso la forma para contactar por teléfono y humillarte.
              </p>
              
              <p className="font-bold">
                NOVEDAD: Puedo realizar en mi sala la sesión que pactemos previamente y cuando acabemos te
                pongo un coñito, cerrado con llave, para que te marches a casa y hasta que vuelvas no puedas
                quitártelo.
              </p>
            </div>
            
            <CommentSection pageId="sumision-online" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default SumisionOnline;
