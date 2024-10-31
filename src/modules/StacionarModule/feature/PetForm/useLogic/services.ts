import axios from "axios";
import { parseBDStringData } from "./parseBDStringData";
const PARAMS = {
  form: "i_get_services_list",
  id_warehouse: 2,
};
const URL = "https://www.vetsnz.ru/2c/ajax_query.php";
const HEADERS = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const getTotalServices = async () => {
  const data = await axios.post(URL, PARAMS, HEADERS);

  const parsingData = parseBDStringData(data.data);

  return parsingData;
};
