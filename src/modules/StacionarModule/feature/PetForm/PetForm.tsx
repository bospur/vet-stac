import { useRouter } from "@/shared";

export const PetForm = () => {
  const router = useRouter();

  return <>Животное: {router.query.id}</>;
};
