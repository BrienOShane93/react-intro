import React from "react";
import { Grid, Header } from 'semantic-ui-react';
import Control from './Control/Control';

const Controls = (props) => {

  return (
    <Grid.Column width={8}>
      <Header as='h2' textAlign='center' className='step'>
          Step 1: Choose your styles
      </Header>
      <Grid>
          {props.menu.map((styles, index) => {
          return <Control 
              key={styles.id}
              alt={styles.alt}
              added={() => props.styleAdded(styles.id)}
              removed={() => props.styleRemoved(styles.id)}
          />
          })}
      </Grid>
  </Grid.Column>
  )
};

export default Controls;
