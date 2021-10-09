import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form, Checkbox } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import SemanticLoadError from "./SemanticLoadError"

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [house, setHouse] = useState(false)
  const [costume, setCostume] = useState(false)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const { handleRegister, error, setError } = useContext(AuthContext);


  const handleCheckbox = () => {

  }

  const handleSubmit = (e) => {
    if (password !== passwordConfirmation) {
      alert("passwords do not match")
      return;
    } else {
    handleRegister( { email, password, name, house, costume }, history )
    }

  };


  return (
    <div>
      <h1>Create an Account</h1>
      {error && <SemanticLoadError />}
      <Form onSubmit={handleSubmit}>
        <Form.Input
        value={name}
        onChange={(e, {value}) => {
          setName(value);
        }}
        label={"Name"} />
        <Form.Input
        value={email}
        onChange={(e, {value}) => {
          setEmail(value);
        }}
        label={"Email"} />
        <Form.Input
        value={password}
        onChange={(e, {value}) => {
          setPassword(value);
        }}
        label={"Password"} />
        <Form.Input
        value={passwordConfirmation}
        onChange={(e, {value}) => {
          setPasswordConfirmation(value);
        }}
        label={"Password Confirmation"} />
          <h3> Are you going trick-or-treating? </h3>
          <Form.Field>
            <Checkbox
        label="I am a trick-or-treater"
        control="input"
        type="checkbox"
        value={house}
        onChange={(e) => {
          setCostume(!costume)
        }} />
          <Checkbox
            label="I will be passing out treats"
            control="input"
            type="checkbox"
            value={house}
            onChange={(e) => {
              setHouse(!house)
            }}
          />
          </Form.Field>
        <Button>Create Account</Button>
      </Form>
    </div>
  )
}

export default Register;