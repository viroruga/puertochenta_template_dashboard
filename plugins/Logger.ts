// plugins/customLogger.ts
import type { Plugin } from 'vite';
import chalk from 'chalk';

function Logger(): Plugin {
  const timestamp = () => {
    const now = new Date();
    return chalk.gray(`${now.toLocaleTimeString()}`);
  };

  const transformMessage = (msg: string) => {
    // Mensajes de reinicio del servidor
    if (msg.includes('vite.config.ts changed')) {
      return `${timestamp()} ${chalk.blue(
        '🔄 [PuertoChenta]'
      )} Configuración actualizada, reiniciando servidor...`;
    }
    if (msg.includes('server restarted')) {
      return `${timestamp()} ${chalk.green(
        '✨ [PuertoChenta]'
      )} Servidor reiniciado correctamente.`;
    }
    // Mensaje por defecto
    return `${timestamp()} ${chalk.blue('🚀 [PuertoChenta]')} ${msg}`;
  };

  return {
    name: 'logger',
    configureServer(server) {
      // Interceptar console.log
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        if (typeof args[0] === 'string') {
          const message = args[0];
          if (message.includes('[vite]')) {
            originalConsoleLog(
              transformMessage(message.replace('[vite]', '').trim())
            );
            return;
          }
        }
        originalConsoleLog(...args);
      };

      // Personalizar mensajes del servidor
      const originalPrintUrls = server.printUrls;
      server.printUrls = () => {
        console.clear();
        console.log(chalk.cyan('\n🌟 PuertoChenta Development Server\n'));
        originalPrintUrls();
        console.log(chalk.green('\n  ✅ Listo para desarrollar!\n'));
      };
    },
    handleHotUpdate({ file }) {
      const relativePath = file.split('/src/')[1] || file;
      console.log(
        `${timestamp()} ${chalk.blue(
          '📦 [PuertoChenta]'
        )} Actualizando: ${chalk.cyan(relativePath)}`
      );
      return;
    },
  };
}

export default Logger;
