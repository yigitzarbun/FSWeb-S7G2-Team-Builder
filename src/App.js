import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import NewMemberForm from "./components/NewMemberForm";
import MembersList from "./components/MembersList";

function App() {
  const [membersList, setMembersList] = useState([]);
  const [member, setMember] = useState({ name: "", age: null, position: "" });
  let buttonDisabled = true;
  let clearListButtonDisabled = true;

  function handleSubmit(event) {
    event.preventDefault();
    setMembersList([...membersList, member]);
    setMember({ name: "", age: null, position: "" });
  }

  function handleChange(event) {
    setMember({ ...member, [event.target.id]: event.target.value });
  }

  function clearList() {
    setMembersList([]);
  }

  if (member.name !== "" && member.age !== null && member.position !== "") {
    buttonDisabled = false;
  }

  if (membersList.length > 0) {
    clearListButtonDisabled = false;
  }
  return (
    <div className="App">
      <Header />
      <NewMemberForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        member={member}
        clearList={clearList}
        buttonDisabled={buttonDisabled}
      />
      <MembersList membersList={membersList} member={member} />
    </div>
  );
}

export default App;
