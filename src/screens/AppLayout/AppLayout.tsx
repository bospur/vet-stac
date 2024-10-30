import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

import { Flex, Layout } from "@/shared";
import { NavMenu } from "@/modules/SidebarModule";
const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  color: "#000",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#40ced2",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
};

type Props = {
  children: ReactNode;
};

export const AppLayout = observer(({ children }: Props) => {
  return (
    <Flex wrap>
      <Layout style={layoutStyle}>
        <Sider width="10%" style={siderStyle}>
          <NavMenu />
        </Sider>
        <Layout>
          <Content style={contentStyle}>{children}</Content>
        </Layout>
      </Layout>
    </Flex>
  );
});
