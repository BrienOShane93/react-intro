import React from "react";
import { Table, List } from "semantic-ui-react";

const TableRow = (props) => {
  return (
    <Table.Row verticalAlign="top">
      <Table.Cell>{props.date}</Table.Cell>
      <Table.Cell>
        <List>
          {props.styles.map((style) => {
            return (
              <List.Item key={style.id}>
                {style.name} : {style.count}
              </List.Item>
            );
          })}
        </List>
      </Table.Cell>
      <Table.Cell>&euro;{props.price.toFixed(2)}</Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
