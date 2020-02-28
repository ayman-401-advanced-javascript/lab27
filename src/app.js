import React from 'react';
import './app.scss';
import Header from './components/Header/Header.js'
import Counter from './components/Counter/Counter.js'
import Footer from './components/Footer/Footer.js'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
