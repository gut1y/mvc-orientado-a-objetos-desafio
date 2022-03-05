import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
test("Testeo el constructor del controller", (t) => {
  const contactControl = new ContactsController();
  const contactCollect = new ContactsCollection();
  contactCollect.load();
  t.deepEqual(contactCollect.data, contactControl.contacts.data);
});

test("Testeo el método processOptions", (t) => {
  const controlador = new ContactsControllerOptions();
  controlador.action = "get";
  controlador.params = { id: 2 };

  const contactControl = new ContactsController();
  const resul = contactControl.processOptions(controlador);
  const contactCollect = new ContactsCollection();
  contactCollect.load();
  const resul2 = contactCollect.getOneById(2);
  t.deepEqual(resul, resul2);
});
