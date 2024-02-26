const fs = require("fs");
const yargs = require("yargs");
let x = require("./allData");
let fun = require("./fun");

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    fname: {
      describe: "this is the first name description in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name description in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    fun.additem(x.id, x.fname, x.lname, x.age, x.city);
  },
});

yargs.command({
  command: "del",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "this is the first name description in add command",
      demandOption: true,
      type: "numer",
    },
  },
  handler: (x) => {
    fun.Deleteitem(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to read an item",
  builder: {
    id: {
      describe: "this is the first name description in add command",
      demandOption: true,
      type: "numer",
    },
  },
  handler: (x) => {
    fun.Read(x.id);
  },
});
yargs.command({
  command: "list",
  describe: "to get an list",
  handler: () => {
    fun.list();
  },
});

yargs.parse();
