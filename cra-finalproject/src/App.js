import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Images from './Images';
import ImageInformation1 from './ImageInformation1';
import ImageInformation2 from './ImageInformation2';
import ImageInformation3 from './ImageInformation3';
import ImageInformation4 from './ImageInformation4';
import ImageInformation5 from './ImageInformation5';
import ImageInformation6 from './ImageInformation6';
import Services from './Services';
import Blog from './Blog';
import Footer from './Footer';
import Error from './Error';

const App = () => {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/ImageInformation1" component={ImageInformation1} />
          <Route path="/ImageInformation2" component={ImageInformation2} />
          <Route path="/ImageInformation3" component={ImageInformation3} />
          <Route path="/ImageInformation4" component={ImageInformation4} />
          <Route path="/ImageInformation5" component={ImageInformation5} />
          <Route path="/ImageInformation6" component={ImageInformation6} />
          <Route path="/images" component={Images} />
          <Route path="/services" component={Services} />
          <Route path="/blog" component={Blog} />
          <Route component={Error} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;