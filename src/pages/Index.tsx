
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SessionGrid from '@/components/SessionGrid';
import Sidebar from '@/components/Sidebar';
import CommentSection from '@/components/CommentSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          {/* SEO Headings Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Amo Dominante Madrid - Experto en Dominación Femenina y el BDSM</h1>
            <h2 className="text-2xl font-semibold mb-4">Descubre el Arte de la Sumisión con el Amo Dominante de Madrid</h2>
            <h3 className="text-xl font-medium">Adéntrate a ser mi sumisa en una relación BDSM y podré ser tu Amo Dominante Madrid</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <SessionGrid />
              
              {/* Additional SEO Section */}
              <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 rounded-lg my-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                  <h1 className="text-3xl md:text-4xl font-bold">Amo Dominante Madrid - Líder en Dominación Femenina y BDSM</h1>
                  <h2 className="text-2xl md:text-3xl font-semibold">Experiencias Únicas con el Amo Dominante de Madrid</h2>
                  <h3 className="text-xl md:text-2xl font-medium">Descubre el Verdadero Significado de la Sumisión con el Amo Dominante Madrid</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    Como Amo Dominante Madrid, me especializo en crear experiencias personalizadas que exploran los límites del placer y el control. 
                    Cada sesión está diseñada para sumergirte en el mundo del BDSM de manera segura, consensuada y profesional.
                  </p>
                </div>
              </section>
              
              <CommentSection pageId="index" />
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

export default Index;
