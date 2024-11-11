// TODO создать словарь переменных для темы
import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#40ced2",
    borderRadius: 6,
    colorTextHeading: "#fff",
  },
  components: {
    Menu: {
      fontSize: 12,
      colorBgBase: "#40ced2",
      colorBgContainer: "#40ced2",
      colorText: "#fff",
      colorTextDescription: "#fff",
      itemHoverBg: "#748f92",
      itemSelectedBg: "#004b4f",
      itemSelectedColor: "#fff",
      groupTitleFontSize: 14,
    },
    Table: {
      headerColor: "000000",
    },
    Form: {
      colorText: "000000",
      labelColor: "000000",
    },
    Collapse: {
      colorTextHeading: "000000",
    },
  },
};
