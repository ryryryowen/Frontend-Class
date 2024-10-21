import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [fillterdList, setFillteredList] = useState([]);
  const { contactList, keyword } = useSelector((state) => state);
  console.log(contactList, keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
    } else {
      setFillteredList(contactList);
    }
  }, [keyword]);

  return (
    <>
      <h6>Friend List</h6>
      <SearchBar />
      {fillterdList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
