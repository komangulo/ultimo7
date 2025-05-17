import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacidad = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
            
            <div className="bg-white dark:bg-card rounded-lg shadow-md p-6 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Información que Recopilamos</h2>
                <p>Recopilamos la siguiente información cuando nos la proporcionas a través del formulario de contacto:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Nombre</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Contenido de los mensajes que nos envías</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Uso de la Información</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Proporcionarte los servicios que solicitas</li>
                  <li>Mantener la seguridad de nuestro sitio web</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Protección de Datos</h2>
                <p>Tus datos personales están protegidos por el Reglamento General de Protección de Datos (RGPD). No compartiremos tu información con terceros sin tu consentimiento expreso, excepto cuando sea requerido por ley.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Tus Derechos</h2>
                <p>Tienes derecho a:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al tratamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
                <p>Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar todas las cookies, aunque esto puede afectar a la funcionalidad del sitio.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Contacto</h2>
                <p>Para cualquier consulta relacionada con el tratamiento de tus datos personales, puedes contactarnos a través del formulario de contacto en nuestra web o por email a dominantemadridbdsm.amo@gmail.com</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Cambios en la Política de Privacidad</h2>
                <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacidad; 