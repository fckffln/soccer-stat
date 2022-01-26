export function routerDescriptorOptions(str: string) {
  const obj: any = {};
  if (str && str !== 'null') {
    str.split('&').forEach(s => {
      const [key, value] = s.split('=');
      obj[key] = [value, 'GET'];
    })
  }
  return obj;
}
