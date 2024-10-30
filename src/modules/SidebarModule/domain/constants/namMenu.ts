import { APP_ROUTES, MenuItem } from "@/shared";

export const namMenuItems: MenuItem[] = [
  {
    key: "stacionar",
    label: "Стационар",
    type: "group",
    children: [
      { key: APP_ROUTES.stacionarPets.path, label: "Животные" },
      { key: APP_ROUTES.stacionarCurators.path, label: "Кураторы" },
      { key: APP_ROUTES.stacionarArchive.path, label: "Архив" },
    ],
  },
];
