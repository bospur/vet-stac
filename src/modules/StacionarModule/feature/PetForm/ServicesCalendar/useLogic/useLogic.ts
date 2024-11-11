import { DayServices, Dict, Service } from "../../../../domain";
import { useRouter } from "@/shared";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { getTotalServices } from "../../useLogic/services";

export const useLogic = () => {
  const [totalServices, setTotalServices] = useState<Dict>();
  const [filterValue, setFilterValue] = useState("");
  const [dayServices, setDayServices] = useState<DayServices[]>([]);
  const router = useRouter();

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

  const handleSetFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value),
    []
  );

  return {
    router,
    lightServices,
    filterValue,
    handleSetFilter,
    dayServices,
    setDayServices,
    handleAddService,
  };
};
