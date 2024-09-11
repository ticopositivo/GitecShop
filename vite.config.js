import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Especifica a raiz do projeto
  base: '/',   // Base para todos os caminhos, pode ajustar conforme necessário
  build: {
    outDir: 'dist',  // Diretório de saída para os arquivos de build
  },
});
