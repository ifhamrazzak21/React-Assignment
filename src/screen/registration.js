import React from 'react';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div style={{width: "80%",margin:"10px auto"}}>
        <div style={{textAlign:"center"}}>
            <h1>Registeration</h1>
        </div>
            <FormGroup>
          <Label for="Fullname">Full Name</Label>
          <Input type="text" name="full name" id="Fullname" placeholder="Enter Full Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="PassWord" />
        </FormGroup>
        <FormGroup>
          <Label for="ConfirmPass">Confirm Password</Label>
          <Input type="password" name="ConfirmPass" id="ConfirmPass" placeholder="Confirm Your PassWord" />
        </FormGroup>
        <FormGroup>
          <Label for="Age">Age</Label>
          <Input type="number" name="Age" id="Age" placeholder="Your Age" />
        </FormGroup>
        <FormGroup>
          <Label for="Country">Select Country</Label>
          <Input type="select" name="select" id="Country">
            <option>Pakistan</option>
            <option>India</option>
            <option>China</option>
            <option>Afghanistan</option>
            <option>Bangladesh</option>
            </Input>
        </FormGroup>
        <div style={{textAlign:"right"}}>
        <Button color="primary">Register</Button>
        </div>
        </div>
        );
    }
  }