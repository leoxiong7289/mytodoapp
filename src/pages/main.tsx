import * as React from 'react';
import styled from 'styled-components';
import ConfigOption from '../components/configOption';
import { configOptionData } from '../config/config';
import { observer, inject } from 'mobx-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, LinearProgress } from '@material-ui/core';

interface RootProps {
  store?: any;
}

// interface Error {
//   inputItem?: any;
// }

const MainContainer = styled.div`
  width: 540px;
  height: 700px;
  background-color: #ccc;
  margin: 0 auto;
  position: relative;
`;

const InputBar = styled.div`
  width: 300px;
  height: 120px;
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
  top: 180px;
  left: 120px;
`;

const DisplayArea = styled.div`
  width: 300px;
  height: 340px;
  background-color: #aff;
  padding-top: 20px;
  position: absolute;
  top: 330px;
  left: 120px;
`;

@inject('store')
@observer
export default class Main extends React.Component<RootProps> {
  constructor(props: any) {
    super(props);
    console.log(this.props);
  }
  render() {
    const { store } = this.props;
    return (
      <>
        <h2>My Todos App</h2>
        <MainContainer className="main-container">
          <Formik
            initialValues={{ itemInput: 'new task' }}
            validate={values => {
              const errors: any = {};
              if (!values.itemInput) {
                errors.inputItem = 'task can not be empty';
              }
              console.log(errors);
              return errors;
            }}
            onSubmit={(values, action) => {
              setTimeout(() => {
                action.setSubmitting(false);
                store.createNewItem(values.itemInput);
              }, 500);
              values.itemInput = '';
            }}
          >
            {(errors: any, isSubmitting: any) => (
              <Form>
                <InputBar className="input-bar">
                  <label htmlFor="itemInput">Add a task</label>
                  <br />
                  <Field component={TextField} name="itemInput" type="text" error={errors.inputItem} />
                  {/* <ErrorMessage name="inputItem" component="div" /> */}
                  {isSubmitting && <LinearProgress />}
                  <Button variant="contained" color="primary" disabled={isSubmitting} type="submit">
                    Submit
                  </Button>
                </InputBar>
                <ConfigBar className="config-bar">
                  {configOptionData.map((item: any, index: number) => (
                    <div key={index}>
                      <ConfigOption itemName={item.itemName} optionValues={item.optionValues} />
                    </div>
                  ))}
                </ConfigBar>
              </Form>
            )}
          </Formik>
          <DisplayArea className="display-area">
            <p>this part is to display all the todo items</p>
          </DisplayArea>
        </MainContainer>
        <h3>@mytodoapp</h3>
      </>
    );
  }
}
