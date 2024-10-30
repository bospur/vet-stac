import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
    borderRadius: 6,
    colorTextHeading: "#fff",
  },
  components: {
    Menu: {
      fontSize: 12,
      colorBgBase: "#090979",
      colorBgContainer: "#090979",
      colorText: "#fff",
      colorTextDescription: "#fff",
      itemHoverBg: "rgba(0,212,255, 0.3)",
      itemSelectedBg: "rgba(0,212,255, 0.5)",
      itemSelectedColor: "#fff",
      groupTitleFontSize: 14,
    },
  },
};
