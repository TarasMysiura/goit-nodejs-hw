import { Command } from "commander";

import {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
} from "./contacts.js";

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log("Contacts: ");
      console.table(contacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      return console.log("oneContact: ", oneContact);

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log("newContact: ", newContact);
    
    case "update":
      const updateContact = await updateContactById(id, { name, email, phone });
      return console.log("updateContact: ", updateContact);

    case "remove":
      const removeContact = await removeContactById(id);
      return console.log("removeContact: ", removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

