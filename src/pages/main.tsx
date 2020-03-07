import * as React from 'react';
import styled from 'styled-components';
import ConfigOption from '../components/configOption';
import { configOptionData } from '../config/config';

interface RootProps {}

const MainContainer = styled.div`
  width: 540px;
  height: 700px;
  background-color: #ccc;
  margin: 0 auto;
  position: relative;
`;

const InputBar = styled.div`
  width: 300px;
  height: 80px;
  background-color: #ffa;
  padding-top: 30px;
  position: absolute;
  top: 20px;
  left: 120px;
`;

const ConfigBar = styled.div`
  width: 300px;
  height: 120px;
  background-color: #faf;
  padding-top: 20px;
  position: absolute;
  top: 145px;
  left: 120px;
`;

const DisplayArea = styled.div`
  width: 300px;
  height: 340px;
  background-color: #aff;
  padding-top: 20px;
  position: absolute;
  top: 300px;
  left: 120px;
`;

export default class Main extends React.Component<RootProps> {
  render() {
    return (
      <>
        <h2>My Todos App</h2>
        <MainContainer className="main-container">
          <InputBar className="input-bar">
            <label htmlFor="itemInput">Please Input a item</label>
            <input type="text" name="itemInput" onChange={e => e.target.value}></input>
            <button> Add </button>
          </InputBar>
          <ConfigBar className="config-bar">
            {configOptionData.map((item: any, index: number) => (
              <div key={index}>
                <ConfigOption itemName={item.itemName} optionValues={item.optionValues} />
              </div>
            ))}
          </ConfigBar>
          <DisplayArea className="display-area">
            <p>this part is to display all the todo items</p>
          </DisplayArea>
        </MainContainer>
        <h3>@mytodoapp</h3>
      </>
    );
  }
}
