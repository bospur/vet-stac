import { DataType, FAKE_PETS_DATA } from "../../../domain";
import { useRouter } from "@/shared";
import { useEffect, useMemo, useState } from "react";

import { getTotalServices } from "./services";
import { Dict } from "./parseBDStringData";

export const useLogic = () => {
  const [totalServices, setTotalServices] = useState<Dict>();
  const [filterValue, setFilterValue] = useState("");
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

  const lightServices = useMemo(() => {
    return totalServices?.light.filter(
      ({ name }) =>
        filterValue.length &&
        name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue, totalServices?.light]);

  useEffect(() => {
    getTotalServices()
      .then((data) => setTotalServices(data))
      .catch(() => setTotalServices(undefined));
  }, []);

  return {
    mainInfoData: petData,
    router,
    lightServices,
    filterValue,
    setFilterValue,
  };
};
