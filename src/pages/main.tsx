import * as React from 'react';
import styled from 'styled-components';
import ConfigOption from '../components/configOption';
import { configOptionData } from '../config/config';
import { observer, inject } from 'mobx-react';
import { Formik, Form, Field } from 'formik';
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
  padding-top: 5px;
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
    console.log(store.todos[0]);
    return (
      <>
        <h2>My Todo App</h2>
        <MainContainer className="main-container">
          <Formik
            initialValues={{ todoItem: '' }}
            validate={values => {
              const errors: any = {};
              if (!values.todoItem) {
                errors.todoItem = 'task can not be empty';
              }
              return errors;
            }}
            onSubmit={(values, action) => {
              store.createNewItem(values.todoItem);
              setTimeout(() => {
                action.setSubmitting(false);
              }, 500);
              values.todoItem = '';
            }}
          >
            {(errors: any, isSubmitting: any) => (
              <Form>
                <InputBar className="input-bar">
                  <label htmlFor="todoItem">
                    <h4>Add a task</h4>
                  </label>
                  <Field
                    component={TextField}
                    name="todoItem"
                    type="text"
                    error={errors.inputItem}
                    placeholder="Please Add Task"
                  />
                  {isSubmitting && <LinearProgress />}
                  <Button variant="contained" color="primary" disabled={isSubmitting} type="submit" size="small">
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
            <h2>Tasks to do</h2>
            {store.todos.map((todo: any, index: number) => (
              <p key={index} onClick={() => store.deleteItem(todo.id)}>
                {todo.content}
              </p>
            ))}
          </DisplayArea>
        </MainContainer>
        <h3>@mytodoapp</h3>
      </>
    );
  }
}
