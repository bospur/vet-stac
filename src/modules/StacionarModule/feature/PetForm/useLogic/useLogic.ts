import { DataType, FAKE_PETS_DATA } from "../../../domain";
import { useRouter } from "@/shared";
import { useMemo } from "react";

export const useLogic = () => {
  const router = useRouter();

  const petData = useMemo(() => {
    const id = router.query?.id;
    const pet = FAKE_PETS_DATA.find((pet) => pet.id === id);

    if (pet) {
      return Object.keys(pet).map((key) => {
        return {
          name: key,
          value: pet[key as keyof DataType],
        };
      });
    }
  }, [router.query.id]);

  return {
    mainInfoData: petData,
    router,
  };
};
