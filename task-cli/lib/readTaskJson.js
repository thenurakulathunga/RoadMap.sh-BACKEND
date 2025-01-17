import { readFileSync } from "node:fs";
import { JSONFILE } from "./Enum.js";

const readTaskJson = () => {
  try {
    const data = readFileSync(JSONFILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

export default readTaskJson;
