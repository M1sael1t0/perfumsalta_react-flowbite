import React, { useState } from 'react';
import { TextInput, Textarea, Label, Alert } from 'flowbite-react';
import { HiCheckCircle, HiMail } from 'react-icons/hi';

function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 5000);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert(`¡Gracias! Te suscribiste con: ${newsletter}`);
    setNewsletter('');
  };

  return (
    <>
      {/* Newsletter */}
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Mantente Informado
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            Suscríbete a nuestro newsletter y recibe ofertas personalizadas
          </p>
          <form onSubmit={handleNewsletter} className="flex gap-0">
            <input
              type="email"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-yellow-500 rounded-l-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-sm uppercase tracking-wide transition-colors rounded-r-sm"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section id="contacto" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-600 text-xs uppercase tracking-[0.4em] font-medium">
              Escríbenos
            </span>
            <h2
              className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Contacto
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-yellow-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <div className="h-px w-12 bg-yellow-500" />
            </div>
          </div>

          {enviado && (
            <Alert color="success" icon={HiCheckCircle} className="mb-6">
              ¡Mensaje enviado! Te contactaremos a la brevedad.
            </Alert>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <Label htmlFor="nombre" value="Nombre" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" />
                <TextInput
                  id="nombre"
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className="rounded-sm"
                />
              </div>
              <div>
                <Label htmlFor="email" value="Email" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" />
                <TextInput
                  id="email"
                  type="email"
                  icon={HiMail}
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-sm"
                />
              </div>
              <div>
                <Label htmlFor="mensaje" value="Mensaje" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" />
                <Textarea
                  id="mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-sm uppercase tracking-widest transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
