import { INPROGRESS } from "./lib/Enum.js";
import readTaskJson from "./lib/readTaskJson.js";
import writeJson from "./lib/writeJson.js";

function markInProgress(id) {
  const tasks = readTaskJson();
  let data = tasks.filter((task) => {
    if (Number(task.id) === Number(id)) task.status = INPROGRESS;
    return task;
  });

  writeJson(data, `change status to ${INPROGRESS} Task ${id} (#id)`);
}
export default markInProgress;
