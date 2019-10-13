import React from 'react';
import './App.scss';
import { Wrapper } from 'components/wrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introduction from 'lessons/01.introduction';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Route exact path="/" component={Introduction} />
          </Wrapper>
        </ThemeProvider>
      </Router>
    )
  }
}