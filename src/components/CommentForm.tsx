
import React, { useState } from 'react';

interface CommentFormProps {
  pageId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ pageId }) => {
  const [author, setAuthor] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [displayedWhatsapp, setDisplayedWhatsapp] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Normalize WhatsApp number by removing all non-digit characters
  const normalizePhoneNumber = (phone: string) => {
    // Remove all non-digit characters except leading +
    const normalized = phone.replace(/[^\d+]/g, '');
    // If it starts with +, keep it, otherwise ensure it's just digits
    return normalized.startsWith('+') ? normalized : normalized.replace(/\D/g, '');
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Allow any input but store the normalized version
    setDisplayedWhatsapp(input);
    setWhatsapp(normalizePhoneNumber(input));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedWhatsapp = normalizePhoneNumber(whatsapp);
    
    if (!author.trim() || !content.trim() || !age || !city || !normalizedWhatsapp) {
      setError('Por favor completa todos los campos obligatorios');
      return;
    }
    
    if (normalizedWhatsapp.length < 8) {
      setError('Por favor ingresa un número de WhatsApp válido');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const formData = new FormData();
      formData.append('name', author);
      formData.append('age', age);
      formData.append('city', city);
      formData.append('whatsapp', normalizedWhatsapp);
      formData.append('message', content);
      
      const response = await fetch('https://formspree.io/f/xkgzdelo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setAuthor('');
        setAge('');
        setCity('');
        setWhatsapp('');
        setContent('');
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo más tarde.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
          <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">¡Mensaje enviado con éxito!</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Gracias por contactarme. Me pondré en contacto contigo lo antes posible.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
          placeholder="Tu nombre"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Edad
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="18"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
            placeholder="Tu edad"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Ciudad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
            placeholder="Tu ciudad de residencia"
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Número de WhatsApp (con código de país)
        </label>
        <div className="mt-1">
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={displayedWhatsapp}
            onChange={handleWhatsappChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
            placeholder="Ej: +34123456789"
            disabled={isSubmitting}
          />
        </div>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Ejemplo: +34123456789 (código de país + número)
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
          placeholder="Escribe tu mensaje aquí..."
          rows={4}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting || !author.trim() || !content.trim() || !age || !city || !whatsapp}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar mensaje'
          )}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
