import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Resume from "./components/ResumePDF.pdf";

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Main} exact/>
             <Route path="/projects" component={Projects}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/resume" component={Resume}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;