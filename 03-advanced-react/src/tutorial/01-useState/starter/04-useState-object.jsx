import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Reed",
    age: 22,
    hobby: "Coding",
  });

  const displayPerson = () => {
    setPerson({ ...person, name: "John", age: 30, hobby: "Reading" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoy to: {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        Change Person
      </button>
    </>
  );
};

export default UseStateObject;
