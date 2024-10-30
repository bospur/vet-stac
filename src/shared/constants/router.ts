export const APP_ROUTES = {
  home: {
    path: "/",
    getRoutePath: () => "/",
  },
  stacionarPets: {
    path: "/stacionar/pets",
    getRoutePath: () => "/stacionar/pets",
  },
  stacionarCurators: {
    path: "/stacionar/curators",
    getRoutePath: () => "/stacionar/curators",
  },
  stacionarArchive: {
    path: "/stacionar/archive",
    getRoutePath: () => "/stacionar/archive",
  },
  petInfo: {
    path: "/stacionar/pets/id",
    getRoutePath: (id: string) => `/stacionar/pets/${id}`,
  },
};
