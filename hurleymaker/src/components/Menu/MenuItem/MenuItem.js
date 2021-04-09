import React from "react";
import { Grid, Image, Label } from 'semantic-ui-react';

const MenuItem = (props) => {
  return (
    <Grid.Column mobile={4} computer={2} textAlign='center'>
        <Image src={props.image} alt={props.alt} size='tiny' centered />
        <Label pointing>{props.name} </Label>
    </Grid.Column>
  )
};

export default MenuItem;
