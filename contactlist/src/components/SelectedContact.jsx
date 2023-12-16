import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const contactDetails = await response.json();
        setSelectedContact(contactDetails);
      } catch (error) {
        console.error('Error fetching contact details:', error.message);
      }
    };

    if (selectedContactId !== null) {
      fetchContactDetails();
    } else {
      setSelectedContact(null);
    }
  }, [selectedContactId]);

  if (!selectedContact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default SelectedContact;
