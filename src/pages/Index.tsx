
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <SessionGrid />
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
