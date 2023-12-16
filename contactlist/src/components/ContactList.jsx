import React, { useState, useEffect } from "react";
import ContactRow from "./Contactrow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);

  const handleRowClick = (contactId) => {
    setSelectedContactId(contactId);
  };

useEffect(() => {
   async function fetchContacts() {
     try {
       const response = await fetch(
         "https://jsonplaceholder.typicode.com/users"
       );

       if (!response.ok) {
          throw new Error("ERROR");
        }

        const data = await response.json();
        console.log(data);
        setContacts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

fetchContacts();
  }, []);

return (
  <table>
    <thead>
      <tr>
        <th colSpan="3">Contact List</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <tr key={contact.id} onClick={() => handleRowClick(contact.id)}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
}
