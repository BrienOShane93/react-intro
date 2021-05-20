import React from "react";
import { Header, List } from 'semantic-ui-react';

const OrderSummary = (props) => {

    let summary = null;

    if(props.styles.length > 0){

        summary = (
            <div>
                <Header as='h3'>
                    Your Hurleys: 
                </Header>

                <List divided verticalAlign='middle'>
                    {props.styles.map((style) => {
                        return( 
                            <List.Item key={style.id}>
                                {style.name}: {style.count}
                            </List.Item>
                        )
                    })}
                </List>

                <Header as='h4' className='h4margin'>
                    Total Price: &euro; {props.price.toFixed(2)}
                </Header>
            </div>
        );
    }
    else{
        summary = (
            <div>
                <Header as='h4' className="h4margin">
                    Start adding some hurleys! 
                </Header>
            </div>
        );
    }


    return (
        <div>
            {summary}
        </div>
    );
};

export default OrderSummary;