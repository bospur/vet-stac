export type Service = {
  id: string;
  name: string;
  price: number;
};

export type Dict = {
  light: Service[];
  medium: Service[];
  premium: Service[];
};

export const parseBDStringData = (data: string) => {
  const parsingDataDict: Dict = {
    light: [],
    medium: [],
    premium: [],
  };
  const dataArray = data
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

  dataArray.forEach((el) => {
    if (el.price <= 100) {
      parsingDataDict.light.push(el);
      return;
    }

    if (el.price <= 1000) {
      parsingDataDict.medium.push(el);
      return;
    }

    parsingDataDict.premium.push(el);
  });

  console.log(parsingDataDict);

  return parsingDataDict;
};
