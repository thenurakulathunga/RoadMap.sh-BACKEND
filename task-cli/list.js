import { DONE, INPROGRESS, TODO } from "./lib/Enum.js";
import readTaskJson from "./lib/readTaskJson.js";

function list() {
  const jsonData = readTaskJson();
  console.log(jsonData);
}
function listDone() {
  let jsonData = readTaskJson();
  jsonData = jsonData.filter((task) => task.status === DONE);
  console.log(jsonData);
}
function listTodo() {
  let jsonData = readTaskJson();
  jsonData = jsonData.filter((task) => task.status === TODO);
  console.log(jsonData);
}
function listInProgress() {
  let jsonData = readTaskJson();
  jsonData = jsonData.filter((task) => task.status === INPROGRESS);
  console.log(jsonData);
}

export { list, listDone, listTodo, listInProgress };
