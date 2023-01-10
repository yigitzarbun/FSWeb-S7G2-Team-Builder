import React from "react";

export default function NewMemberForm(props) {
  const {
    handleSubmit,
    handleChange,
    member,
    clearList,
    buttonDisabled,
    clearListButtonDisabled,
  } = props;

  return (
    <div>
      <button disabled={clearListButtonDisabled}>Clear List</button>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={member.name}
              onChange={handleChange}
              autoFocus
            />
          </label>
        </p>
        <p>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              id="age"
              value={member.age}
              onChange={handleChange}
              autoFocus
            />
          </label>
        </p>
        <p>
          <label htmlFor="position">
            Position:
            <input
              type="text"
              id="position"
              value={member.position}
              onChange={handleChange}
              autoFocus
            />
          </label>
        </p>
        <button type="submit" disabled={buttonDisabled}>
          Add
        </button>
      </form>
    </div>
  );
}
