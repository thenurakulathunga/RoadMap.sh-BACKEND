import { DONE, JSONFILE, TODO } from "./lib/Enum.js";
import readTaskJson from "./lib/readTaskJson.js";
import { writeFile } from "node:fs";
import writeJson from "./lib/writeJson.js";

function markDone(id) {
  const tasks = readTaskJson();
  let data = tasks.filter((task) => {
    if (Number(task.id) === Number(id)) task.status = DONE;
    return task;
  });

  writeJson(data, `change status to ${TODO} Task ${id} (#id)`);
}

export default markDone;
