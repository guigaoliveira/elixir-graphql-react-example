import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String) {
    createUser(name: $name, email: $email) {
      id
    }
  }
`;

const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createUser({ variables: { name, email } });
      }}
    >
      <input
        name="name"
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        name="email"
        type="text"
        placeholder="What's your email?"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <input type="submit" value="Add" />
    </form>
  );
};

export default NewUser;
