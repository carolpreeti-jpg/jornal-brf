/**
 * Helper para gerar URLs de assets considerando o base path do Vite
 */
export const asset = (path) => {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) return path;

  const base = import.meta.env.BASE_URL || '/';
  // Remove barra inicial do path se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Garante que base termina com /
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export const page = asset;
