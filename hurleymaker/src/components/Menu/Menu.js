import React from "react";
import { Grid, Header, Segment } from 'semantic-ui-react';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  return (
    <Grid.Column width={12}>
        <Segment color='yellow'>
            <Header as='h2' textAlign='center' color='blue'>
                Hurley Maker Menu
            </Header>
        </Segment>
    
        <Header as='h3' textAlign='center'>
            Price: &euro; 30
        </Header>

        <Grid>
            {props.menu.map((styles, index) => {
            return <MenuItem 
                key={styles.id}
                image={styles.image}
                name={styles.name}
                alt={styles.alt}
                price={styles.price}
            />
            })}
        </Grid>
    </Grid.Column>
  )
};

export default Menu;
