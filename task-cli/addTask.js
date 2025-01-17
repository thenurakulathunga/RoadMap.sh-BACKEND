import { readFile } from "node:fs";
import { JSONFILE, TODO } from "./lib/Enum.js";
import writeJson from "./lib/writeJson.js";

const addTask = (description) => {
  writeTask(description);
};
function writeTask(description) {
  readFile(JSONFILE, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    const tasks = createTask(
      data === "" || data === null || data === undefined
        ? []
        : JSON.parse(data),
      description
    );
    writeJson(tasks, "Task created successfully");
  });
}

function createTask(data, description) {
  if (!data.length > 0) {
    data.push({
      id: 1,
      description: description,
      status: TODO,
      createdAt: new Date().getDate(),
      updatedAt: new Date().getDate(),
    });
    return data;
  } else {
    const lastElement = data[data.length - 1];
    data.push({
      id: Number(lastElement.id) + 1,
      description: description,
      status: TODO,
      createdAt: new Date().getDate(),
      updatedAt: new Date().getDate(),
    });
    return data;
  }
}

export default addTask;
