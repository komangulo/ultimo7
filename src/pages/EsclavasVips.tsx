
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CommentSection from '@/components/CommentSection';

const EsclavasVips = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // This is just a simple client-side password check
  // In a real app, this would be done server-side
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set the password here - for demo purposes using "demo123"
    const correctPassword = "demo123";
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Protegido: Esclavas Vips</h1>
            
            {!isAuthenticated ? (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <p className="mb-6">
                  Este contenido está protegido por contraseña. Para verlo, por favor, introduce tu contraseña a continuación:
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Contraseña:
                      </label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    
                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}
                    
                    <Button 
                      type="submit"
                      className="bg-[#a51c30] hover:bg-[#8a1728] text-white"
                    >
                      Entrar
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Contenido Exclusivo</h2>
                <p>Bienvenido a la sección exclusiva de Esclavas VIPs.</p>
                {/* Add protected content here */}
                <div className="mt-6">
                  <p>El contenido protegido aparecerá aquí.</p>
                </div>
                
                <CommentSection pageId="esclavas-vips" />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EsclavasVips;
