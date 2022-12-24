import Blog from 'components/Blog';
//import Contact from 'components/Contact';
//import Footer from 'components/Footer';
//import Home from 'components/Home';
///import Milestones from 'components/Milestones';
import Navbar from 'components/Navbar';
import Portfolio from 'components/Portfolio';
import Pricing from 'components/Pricing';
import ScrollToTop from 'components/ScrollToTop';
//import Services from 'components/Services';
import Skills from 'components/Skills';
import Testimonials from 'components/Testimonials';
import Video from 'components/Video';
import { motion } from 'framer-motion';
import React from 'react';
import Services from './pages/Services'
import Contact from './pages/contact'
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {

  return (
    <motion.div initial="hidden" animate="show">
      <Navbar/>
     
    {/* <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
  <Footer /> */}

<Router>
            
            <Switch>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route  path='/services' > <Services/></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
           </Switch>
</Router>

      <ScrollToTop />
    </motion.div>
  )
}

export default App