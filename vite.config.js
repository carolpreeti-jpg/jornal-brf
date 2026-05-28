import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jornal/',
  build: {
    // Não apaga dist/ antes de buildar (evita conflito com .DS_Store do macOS).
    // Os assets hasheados garantem que arquivos atualizados sempre têm nomes novos.
    emptyOutDir: false,
  },
})
