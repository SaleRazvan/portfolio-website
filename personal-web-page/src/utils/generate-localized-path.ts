export const generateLocalizedPath = (path: string, language: string) => {
  const lastSegment = path.match(/[^/]+$/)?.[0];

  if (lastSegment) return path.replace(lastSegment, language);

  return path;
};
