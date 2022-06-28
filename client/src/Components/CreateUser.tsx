import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation";
import Spinner from "./Spinner";
import Input from "./Input";
import Button from "./Button";

function CreateUser() {
  const [state, setState] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [createUser, { data, error, loading, called, client, reset }] =
    useMutation(CREATE_USER);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await createUser({
      variables: {
        name: state.name,
        username: state.username,
        password: state.password,
      },
    });
  };

  const handleOnchange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setState({
      ...state,
      [e.currentTarget.name]: value,
    });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <Input
          type={"text"}
          placeholder={"name"}
          name={"name"}
          value={state.name}
          onChange={handleOnchange}
        />
        <br />
        <br />
        <Input
          type={"text"}
          placeholder={"username"}
          name={"username"}
          value={state.username}
          onChange={handleOnchange}
        />
        <br />
        <br />

        <Input
          type={"password"}
          placeholder={"password"}
          name="password"
          value={state.password}
          onChange={handleOnchange}
        />

        <br />
        {loading ? <Spinner /> : <Button />}
      </form>
    </div>
  );
}

export default CreateUser;
