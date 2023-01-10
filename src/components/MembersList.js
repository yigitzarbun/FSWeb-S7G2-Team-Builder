import React from "react";
import styled from "styled-components";

export default function MembersList(props) {
  const { membersList } = props;
  const StyledMembersContainer = styled.div`
    display: flex;
    background-color: yellow;
    flex-direction: column;
    border: 0.2rem solid white;
    width: 20%;
    margin: 1rem auto;
    row-gap: 1rem;
  `;

  const StyledMemberCard = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledMembersContainer>
      <h2>Team Members</h2>
      {membersList.map((member) => (
        <StyledMemberCard>
          <p>Name: {member.name}</p>
          <p>Age: {member.age}</p>
          <p>Position: {member.position}</p>
        </StyledMemberCard>
      ))}
    </StyledMembersContainer>
  );
}
