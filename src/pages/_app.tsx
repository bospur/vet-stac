import React, { ReactElement, ReactNode } from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { theme } from "@/shared";
import type { NextPage } from "next";
import { AppLayout } from "@/screens";
import ru from "antd/locale/ru_RU";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ConfigProvider theme={theme} locale={ru}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ConfigProvider>
  );
};

export default App;
