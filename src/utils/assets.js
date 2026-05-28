/**
 * Helper para gerar URLs de assets considerando o base path do Vite
 */
export const asset = (path) => {
  if (!path || /^(https?:|mailto:|tel:|#|data:)/.test(path)) return path;

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  // URL já resolvida pelo Vite (import de módulo)
  if (typeof path === 'string' && path.startsWith(cleanBase)) return path;

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const page = asset;
