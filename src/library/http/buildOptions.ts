import {Options} from "./options.model";

export function buildOptions(options: Options) {
  let output = "";
  const route: any = {};
  const get: string[] = [];
  Object.keys(options).forEach(key => {
    const [value, param] = options[key];
    if (param === 'ROUTE') route[key] = value;
    if (param === 'GET') get.push(`${key}=${value}`)
  });
  Object.values(route).forEach(r => output += `/${r}`)
  get.forEach((g, i) => {
    if (i === 0) output += `?${g}`
    if (i > 0) output += `&${g}`
  })
  return output;
}
