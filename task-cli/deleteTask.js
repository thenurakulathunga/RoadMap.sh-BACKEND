import readline from "node:readline";
import readTaskJson from "./lib/readTaskJson.js";
import writeJson from "./lib/writeJson.js";

function deleteTask(id) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Are you want to delete this task? (y or yes)`, (answer) => {
    if (
      answer.toLocaleLowerCase() === "yes" ||
      answer.toLocaleLowerCase() === "y" ||
      answer.toLocaleLowerCase() === ""
    ) {
      let Tasks = readTaskJson();

      writeJson(
        Tasks.filter((task) => task.id !== Number(id)),
        `#(id) : ${id} Task deleted`
      );
    }
    rl.close();
  });

  console.log(id, "#Id");
}

export default deleteTask;
