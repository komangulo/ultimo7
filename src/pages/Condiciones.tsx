import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Condiciones = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Condiciones de Uso</h1>
            
            <div className="bg-white dark:bg-card rounded-lg shadow-md p-6 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Aceptación de las Condiciones</h2>
                <p>Al acceder y utilizar este sitio web, aceptas estar sujeto a estas condiciones de uso. Si no estás de acuerdo con alguna parte de estas condiciones, no debes usar este sitio.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Uso del Servicio</h2>
                <p>Este sitio web está destinado únicamente a personas mayores de 18 años. Al utilizar este sitio, confirmas que eres mayor de edad y que tienes la capacidad legal para aceptar estas condiciones.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Contenido del Sitio</h2>
                <p>Todo el contenido de este sitio web es para adultos y de naturaleza erótica. Al acceder, confirmas que no te ofende el contenido para adultos y que es legal ver dicho contenido en tu jurisdicción.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Propiedad Intelectual</h2>
                <p>Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y software está protegido por derechos de autor y otros derechos de propiedad intelectual.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Limitación de Responsabilidad</h2>
                <p>El sitio web se proporciona "tal cual" y no ofrecemos garantías de ningún tipo, expresas o implícitas. No nos hacemos responsables de cualquier daño que pueda surgir del uso de este sitio.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Modificaciones</h2>
                <p>Nos reservamos el derecho de modificar estas condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Ley Aplicable</h2>
                <p>Estas condiciones se rigen por la legislación española. Cualquier disputa relacionada con estas condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de Madrid.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Condiciones; 