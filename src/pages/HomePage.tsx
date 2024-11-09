// src/pages/HomePage.tsx
import {
  Terminal,
  Palette,
  Blocks,
  Zap,
  Github,
  Coffee,
  Settings,
} from 'lucide-react';
import PuertoChenta from '@assets/puertochenta.svg';

const HomePage = () => {
  const features = [
    {
      icon: <Blocks className="h-6 w-6" />,
      title: 'Estructura Escalable',
      description:
        'Organización de carpetas optimizada para el crecimiento del proyecto.',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Tailwind CSS',
      description:
        'Estilos modernos y responsivos con utilidades pre-configuradas.',
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: 'TypeScript Ready',
      description: 'Desarrollo tipado seguro con configuración optimizada.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Fast Refresh',
      description: 'Desarrollo ágil con recarga instantánea mediante Vite.',
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Configuración Lista',
      description: 'ESLint, Prettier y otras herramientas pre-configuradas.',
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Productividad',
      description:
        'Aliases de importación, componentes base y utilidades comunes.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            PuertoChenta Template
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            Desarrolla más rápido con nuestro template optimizado para React +
            Vite + TypeScript
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/viroruga/puertochenta-template-base"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="mb-4 inline-block p-3 bg-blue-600 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Inicio Rápido</h2>
          <div className="space-y-4">
            <code className="block bg-gray-900 p-4 rounded-lg">
              <p className="text-green-400"># Clona el repositorio</p>
              <p className="text-gray-300">
                git clone
                https://github.com/viroruga/puertochenta-template-base.git
              </p>

              <p className="text-green-400 mt-4"># Instala las dependencias</p>
              <p className="text-gray-300">npm install</p>

              <p className="text-green-400 mt-4">
                # Inicia el servidor de desarrollo
              </p>
              <p className="text-gray-300">npm run dev</p>
            </code>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            <a
              href="https://puertochenta.com"
              className="text-blue-400 hover:text-blue-300 transition-colors flex justify-center">
              <img
                src={PuertoChenta}
                alt="PuertoChenta"
                className="h-10 w-auto"
              />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
