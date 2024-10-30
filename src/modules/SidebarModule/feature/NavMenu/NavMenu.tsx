import { APP_ROUTES, Flex, Menu, Typography, useRouter } from "@/shared";
import { namMenuItems } from "../../domain";

const { Title } = Typography;

export const NavMenu = () => {
  const router = useRouter();
  const handleMenuClick = ({ key }: { key: string }) => router.push(key);
  const returnHomePage = () => router.push(APP_ROUTES.home.path);

  return (
    <Flex gap="middle" wrap vertical justify="center">
      <Title level={5} onClick={returnHomePage} style={{ cursor: "pointer" }}>
        Ветпрактика
      </Title>
      <Menu mode="inline" items={namMenuItems} onClick={handleMenuClick} />
    </Flex>
  );
};
