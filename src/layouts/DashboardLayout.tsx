import React, { useState, useEffect } from 'react';
import {
  Home,
  Users,
  ShoppingCart,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  count?: number;
  path?: string;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/' },
  {
    name: 'Usuarios',
    icon: <Users className="w-5 h-5" />,
    count: 12,
    path: '/users',
  },
  {
    name: 'Productos',
    icon: <ShoppingCart className="w-5 h-5" />,
    count: 8,
    path: '/products',
  },
  {
    name: 'Configuración',
    icon: <Settings className="w-5 h-5" />,
    path: '/settings',
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Cerrar sidebar al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Manejar el cierre del sidebar al hacer clic fuera
  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  // Prevenir scroll cuando el sidebar está abierto en móvil
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center h-16 px-4 bg-gray-800">
        <span className="text-2xl font-bold text-white">PuertoChenta</span>
      </div>
      <nav className="flex-1 px-2 mt-5 overflow-y-auto">
        {sidebarItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            {item.icon}
            <span className="ml-3">{item.name}</span>
            {item.count && (
              <span className="ml-auto bg-gray-200 text-gray-800 py-0.5 px-2 rounded-full text-xs">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => console.log('logout')}
          className="flex items-center w-full px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          <span className="ml-3">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar Mobile */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
          onClick={handleOverlayClick}
        />

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 flex w-64 transform bg-white transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}>
              <span className="sr-only">Cerrar sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex grow flex-col overflow-y-auto">
            <SidebarContent />
          </div>
        </div>
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
          <SidebarContent />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top Navigation */}
        <header className="z-10 py-4 bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <button
              className="lg:hidden p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsSidebarOpen(true)}>
              <span className="sr-only">Abrir sidebar</span>
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center flex-1 gap-x-4 justify-end">
              <div className="max-w-xs flex items-center">
                <div className="hidden sm:flex items-center rounded-lg bg-gray-100 p-2">
                  <Search className="h-5 w-5 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Buscar..."
                    className="ml-2 bg-transparent outline-none text-sm text-gray-700"
                  />
                </div>
              </div>

              <button className="relative p-2 text-gray-500 hover:text-gray-600">
                <span className="sr-only">Ver notificaciones</span>
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Usuario"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
