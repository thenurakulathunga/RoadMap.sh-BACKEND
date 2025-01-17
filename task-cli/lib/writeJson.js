import { writeFileSync } from "node:fs";
import { JSONFILE } from "./Enum.js";
function writeJson(data, message) {
  try {
    writeFileSync(JSONFILE, JSON.stringify(data, null, 2));
    console.log(message);
  } catch (error) {
    console.error(error.message);
  }
}

export default writeJson;
