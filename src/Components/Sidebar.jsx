import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, Menu } from 'lucide-react';

const Sidebar = () => {
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Barra Superior */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-gray-200 flex items-center justify-between px-4 h-14 z-50 border-b border-gray-700 shadow-lg">
        <div className="flex items-center space-x-2">
          {/* Ícono hamburguesa sólo en pantallas pequeñas */}
          <button
            onClick={() => setShowSidebarMobile(!showSidebarMobile)}
            className="sm:hidden p-2 rounded bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
          >
            <Menu size={24} className="text-gray-200" />
          </button>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            CRE
          </h1>
        </div>
      </header>

      {/* Sidebar:
          - Siempre se coloca debajo del header (top-14), por lo tanto el header no la tapa.
          - Por defecto, en pantallas pequeñas, la sidebar está oculta (-translate-x-full).
          - A partir de sm: se muestra (sm:translate-x-0).
       */}
      <div
        className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-gray-900 text-gray-200 flex flex-col justify-between w-64 border-r border-gray-700 transform transition-transform duration-300 z-40
        ${showSidebarMobile ? 'translate-x-0' : '-translate-x-full'}
        sm:translate-x-0`}
      >
        <nav className="flex flex-col gap-1 mt-4 flex-1 overflow-auto">
          <SidebarLink
            to="/"
            icon={<Home size={24} />}
            label="Inicio"
            active={location.pathname === '/'}
            onClick={() => setShowSidebarMobile(false)}
          />
          <SidebarLink
            to="/mapa"
            icon={<Settings size={24} />}
            label="Mapa"
            active={location.pathname === '/mapa'}
            onClick={() => setShowSidebarMobile(false)}
          />
        </nav>

        <div className="flex items-center justify-center p-4 text-xs text-gray-500 border-t border-gray-700">
          © 2024 CRE
        </div>
      </div>

      {/* Overlay oscuro en pantallas pequeñas cuando la sidebar está abierta */}
      {showSidebarMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden transition-opacity duration-300"
          onClick={() => setShowSidebarMobile(false)}
        ></div>
      )}

      {/* Contenido principal:
          - pt-14 para no quedar debajo del header
          - sm:ml-64 en pantallas grandes para dejar espacio a la sidebar
          - overflow-auto si es necesario para mostrar todo el contenido
      */}
      <main className="pt-14 sm:ml-64 transition-all duration-300">
        {/* Aquí tu contenido principal */}
      </main>
    </>
  );
};

const SidebarLink = ({ to, icon, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`relative flex items-center p-3 text-sm font-medium rounded-md transition-colors 
    ${active ? 'bg-gray-800 text-orange-400' : 'text-gray-300 hover:bg-gray-800 hover:text-orange-300'}
    focus:outline-none focus:ring-2 focus:ring-orange-500`}
  >
    {active && <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r-md" />}
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </Link>
);

export default Sidebar;
