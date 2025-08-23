import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contactanos = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgzdelo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
            
            <div className="bg-white dark:bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Formulario de contacto</h2>
              
              {isSubmitted ? (
                <div className="p-4 bg-green-100 text-green-800 rounded-md">
                  ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </form>
              )}
              
              <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                Si deseas consultarme cualquier duda o cuestión, completa el formulario y me pondré en contacto contigo a la mayor brevedad posible.
              </p>
            </div>
            
            <CommentSection pageId="contactanos" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contactanos;
