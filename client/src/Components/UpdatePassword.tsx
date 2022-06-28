import React, { useState } from "react";
import Spinner from "./Spinner";
import { UPDATE_PASSWORD } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import Button from "./Button";
import Input from "./Input";

function UpdatePassword() {
  const [state, setState] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
  });

  const [UpdatePassword, { error, loading, called, client, reset, data }] =
    useMutation(UPDATE_PASSWORD);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    UpdatePassword({
      variables: {
        username: state.username,
        oldPassword: state.currentPassword,
        newPassword: state.newPassword,
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
      <div>
        <h2>Update Password</h2>
        <form onSubmit={handleSubmit}>
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
            placeholder={"currentPassword"}
            name={"currentPassword"}
            value={state.currentPassword}
            onChange={handleOnchange}
          />
          <br />
          <br />

          <Input
            type={"password"}
            placeholder={"newPassword"}
            name="newPassword"
            value={state.newPassword}
            onChange={handleOnchange}
          />

          <br />
          {loading ? <Spinner /> : <Button />}
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
