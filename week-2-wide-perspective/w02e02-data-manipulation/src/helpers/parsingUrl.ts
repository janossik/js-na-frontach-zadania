export const getPath = (url: string): string => {
  const path = url.split('?')[0];
  return path;
};

export const getEndpoint = (url: string): string | undefined => {
  const path = getPath(url);
  const [, ...endpoint] = path.replace('https://', '').split('/');
  return endpoint.join('/');
};

export const getQueryParams = (url: string): { [key: string]: string } => {
  const [, query] = url.split('?');
  if (!query) return {};
  const params = query.split('&');
  const queryParams = params.reduce((acc, param) => {
    const [key, value] = param.split('=');
    return { ...acc, [key]: value };
  }, {});
  return queryParams;
};
