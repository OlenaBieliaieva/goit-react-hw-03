import { useEffect, useState } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

const LS_KEY = "saved-contacts";

function App() {
  let initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const stringifiedContact = localStorage.getItem(LS_KEY);
    return JSON.parse(stringifiedContact) || initialContacts;
  });

  const [search, setSearch] = useState("");
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContacts = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalContacts]);
  };

  const onDelete = (ContactId) => {
    console.log(ContactId);
    setContacts((prevContacts) =>
      prevContacts.filter((prevContact) => prevContact.id !== ContactId)
    );
  };

  const filteredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContact} onDelete={onDelete} />
    </div>
  );
}

export default App;
