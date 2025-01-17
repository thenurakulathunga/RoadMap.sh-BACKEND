#!/usr/bin/env node
import addTask from "./addTask.js";
import deleteTask from "./deleteTask.js";
import { list, listDone, listInProgress, listTodo } from "./list.js";
import markDone from "./markDone.js";
import markInProgress from "./markInProgress.js";
import updateTask from "./updateTask.js";

const args = process.argv.slice(2);

if (args[0].toLowerCase() === "add") {
  addTask(args[args.length - 1]);
}

if (args[0].toLowerCase() === "update") {
  updateTask(args[1], args[args.length - 1]);
}

if (args[0].toLowerCase() === "delete") {
  deleteTask(args[args.length - 1]);
}

if (args[0].toLowerCase() === "mark-in-progress") {
  markInProgress(args[args.length - 1]);
}

if (args[0].toLowerCase() === "mark-done") {
  markDone(args[args.length - 1]);
}

if (args[0].toLowerCase() === "list" && !args[1]) {
  list();
}
if (
  args[0].toLowerCase() === "list" &&
  args[args.length - 1].toLowerCase() === "done"
) {
  listDone();
}
if (
  args[0].toLowerCase() === "list" &&
  args[args.length - 1].toLowerCase() === "todo"
) {
  listTodo();
}
if (
  args[0].toLowerCase() === "list" &&
  args[args.length - 1].toLowerCase() === "in-progress"
) {
  listInProgress();
}
