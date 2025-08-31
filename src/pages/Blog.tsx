import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import CommentSection from '@/components/CommentSection';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-[#a51c30] text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl">Descubre nuestros artículos sobre el mundo BDSM</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Sumisión 24/7: Vivir la Dinámica D/s a Tiempo Completo</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Explora el mundo de la sumisión 24/7 en el BDSM: una guía completa sobre cómo vivir la dinámica D/s de manera constante, con consejos prácticos, beneficios y desafíos.
                    </p>
                    <a href="/blog/sumision-24-7-vivir-la-dinamica-ds-a-tiempo-completo" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">El Arte de la Dominación: La Belleza de Ser un Amo Dominante en Madrid</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Descubre el verdadero significado de ser un Amo Dominante en Madrid. Una mirada profunda a la dominación consciente y el estilo de vida BDSM.
                    </p>
                    <a href="/blog/dominante-madrid-bdsm" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Dominación y Vínculos Profundos: Las Relaciones a Largo Plazo en el BDSM</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Explora la profundidad de las relaciones D/s a largo plazo en Madrid, donde la dominación consciente trasciende lo físico para convertirse en un vínculo emocional duradero.
                    </p>
                    <a href="/blog/dominante-largo-plazo" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Iniciación, Orientación y Formación BDSM para Sumisas en Madrid</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Descubre un enfoque único de formación BDSM para sumisas en Madrid, centrado en la seguridad, el consentimiento y el crecimiento personal a través de la guía de un mentor experimentado.
                    </p>
                    <a href="/blog/iniciacion-orientacion-y-formacion-bdsm-para-sumisas-en-madrid-mi-trayectoria-como-mentor" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Mentor BDSM en Madrid: Mi Experiencia Guiando a Principiantes y Expertos</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Descubre cómo un mentor BDSM en Madrid puede guiarte en tu viaje de autodescubrimiento, desde principiantes hasta practicantes avanzados, con un enfoque en seguridad, ética y disfrute mutuo.
                    </p>
                    <a href="/blog/mentor-bdsm-en-madrid-mi-experiencia-guiando-a-principiantes-y-expertos" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Límites, Barreras y Normas: El Arte de la Dominación Consciente en las Relaciones D/s</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Descubre cómo los límites, barreras y normas son los verdaderos pilares de una relación D/s saludable y cómo el dominante consciente los utiliza para crear vínculos profundos y seguros.
                    </p>
                    <a href="/blog/bdsm-limites-barreras-normas" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">De Sumisa a Esclava: Un Viaje Guiado por un Amo con Experiencia en Madrid</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Descubre el profundo viaje de transformación de sumisa a esclava, guiado por un amo dominante con experiencia en Madrid. Un proceso de entrega total y crecimiento mutuo.
                    </p>
                    <a href="/blog/de-sumisa-a-esclava-un-viaje-guiado-por-un-amo-con-experiencia-en-madrid" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Humillación y Degradación: Tu Camino al Entrenamiento de Obediencia</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Explora cómo la humillación y la degradación, guiadas por un amo dominante con experiencia en Madrid, pueden convertirse en herramientas poderosas para el entrenamiento de obediencia y crecimiento personal.
                    </p>
                    <a href="/blog/humillacion-y-degradacion-tu-camino-al-entrenamiento-de-obediencia-con-un-amo-dominante-en-madrid" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Sumisa Servicial, Esclava y Roles Afines en el BDSM</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Una guía completa sobre los diferentes roles de sumisión en el BDSM, incluyendo sumisa servicial, esclava, pequeña y babygirl, basada en experiencia real como mentor.
                    </p>
                    <a href="/blog/sumisa-servicial-esclava-y-roles-afines-en-el-bdsm-guia-completa" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">El Dominante como Guía del Deseo: Filias, Fetiches y la Belleza de Aceptarlo Todo</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    En un mundo que aún arrastra prejuicios sobre lo sexual, ser un amo dominante en Madrid es mucho más que dirigir o controlar. 
                    </p>
                    <a href="/blog/filias-fetiches-bdsm" className="text-[#a51c30] font-medium hover:underline" target="_blank" rel="noopener noreferrer">Leer más</a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">Preguntas y Respuestas: La Sumisión en el BDSM</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Descubre el verdadero significado de la sumisión en el BDSM, más allá de los estereotipos. Aprende qué significa ser sumisa y cómo se vive esta experiencia.
                    </p>
                    <a href="/blog/preguntas-y-respuestas-la-sumision-en-el-bdsm-mas-alla-del-significado" className="text-[#a51c30] font-medium hover:underline">Leer más</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <CommentSection pageId="blog" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
