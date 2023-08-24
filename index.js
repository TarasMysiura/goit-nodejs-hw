import { program } from "commander";
import {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
} from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log("Contacts: ");
      console.table(contacts);
      break;

    case "getContactById":
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

program
  .option("-a, --action <type>")
  // .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .action("-p, --phone <type>");

program.parse();

const options = program.opts();
// invokeAction(options);

invokeAction({ action: "list" });

// invokeAction({ action: "getContactById", id: "vza2RIzNGIwutCVCs4mCL" });

// invokeAction({
//   action: "add",
//   name: "Taras",
//   email: "taras_as@ukr.net",
//   phone: "(067) 684-02-63",
// });

// invokeAction({
//   action: "update",
//   id: "8e-vFl1zoZ0E1sBL3TO5k",
//   name: "Taras Mysiura",
//   email: "taras_as@ukr.net",
//   phone: "(067) 684-0263",
// });

// invokeAction({
//   action: "remove",
//   id: "8e-vFl1zoZ0E1sBL3TO5k",
// });
