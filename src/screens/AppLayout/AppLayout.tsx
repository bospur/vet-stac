import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

import { Layout } from "@/shared";

type Props = {
  children: ReactNode;
};

export const AppLayout = observer(({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <main>{children}</main>
    </Layout>
  );
});
