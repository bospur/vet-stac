import { DataType, FAKE_PETS_DATA } from "../../../domain";
import { useRouter } from "@/shared";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getTotalServices } from "./services";
import { Dict, Service } from "./parseBDStringData";

type DayServices = Service & {
  count: number;
  total?: number;
};

export const useLogic = () => {
  const [totalServices, setTotalServices] = useState<Dict>();
  const [filterValue, setFilterValue] = useState("");
  const [dayServices, setDayServices] = useState<DayServices[]>([]);
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

  const handleAddService = useCallback(
    (el: Service) => {
      const isSome = dayServices.some((service) => service.id === el.id);

      if (!isSome) {
        setDayServices([...dayServices, { ...el, count: 1 }]);
      } else {
        const newDayServices = dayServices.map((service) => {
          if (service.id === el.id) {
            service.count++;
          }

          return service;
        });

        setDayServices(newDayServices);
      }
    },
    [dayServices]
  );

  return {
    mainInfoData: petData,
    router,
    lightServices,
    filterValue,
    setFilterValue,
    dayServices,
    setDayServices,
    handleAddService,
  };
};
