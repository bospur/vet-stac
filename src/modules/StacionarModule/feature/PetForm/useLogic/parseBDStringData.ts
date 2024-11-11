import { Dict, Service } from "../../../domain";

const filteredServices = (el: Service, dict: Dict) => {
  if (el.price <= 100) {
    dict.light.push(el);
    return;
  }

  if (el.price <= 1000) {
    dict.medium.push(el);
    return;
  }

  dict.premium.push(el);
};

const parsingData = (data: string) =>
  data
    .split("`")
    .map((el) => {
      const elements = el.split("~");

      return {
        id: elements[0],
        name: elements[1] ?? null,
        price: Number(elements[2]) ?? null,
      };
    })
    .filter((el) => Boolean(el.price));

export const parseBDStringData = (data: string) => {
  const parsingDataDict: Dict = {
    light: [],
    medium: [],
    premium: [],
  };
  const dataArray = parsingData(data);

  dataArray.forEach((el) => filteredServices(el, parsingDataDict));

  return parsingDataDict;
};
