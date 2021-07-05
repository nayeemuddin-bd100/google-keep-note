import React, { useState } from "react";
import shortid from "shortid";

export const Area = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: "",
  });

  const [isExpand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        id: shortid(),
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNote({
      title: "",
      content: "",
      id: "",
    });
    if (note.content) {
      onAdd(note);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleChange}
          onClick={handleExpand}
        />
        <p>
          {isExpand && (
            <textarea
              placeholder="Take a note"
              name="content"
              value={note.content}
              onChange={handleChange}
            ></textarea>
          )}
        </p>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};
