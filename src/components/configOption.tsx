import * as React from 'react';
import style from 'styled-components';

interface RootProps {
  itemName: string;
  optionValues: [];
}

const OptionItemCard = style.div`
  width: 260px;
  width: 30ox;
  background-color: transparent;
`;

export default class ConfigOption extends React.Component<RootProps> {
  // constructor(props:any) {
  //   super(props)
  // }

  render() {
    // const { optionItem } = this.props.OptionItem
    // console.log(this.props)
    return (
      <OptionItemCard>
        <label htmlFor={this.props.itemName}>{this.props.itemName}</label>
        <select defaultValue="" name={this.props.itemName}>
          {this.props.optionValues.map((value: string, index: number) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </OptionItemCard>
    );
  }
}
