import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
          <header>
              <h1>SPACE</h1>
          </header>
          <div id="leftPane">
              <div id="post">
                  <h3><center>SpaceX - Dragon Resupply Mission</center></h3>
                  <h5 align="left">Date : 3rd April 2018</h5>
                  <h4>
                      <p> The successful litoff of 14th CommercialResupply Services mission (CRS-14) to International Space Station has left people astonished
                          For more detail information <a href="http://www.spacex.com/webcast">read. </a>
                      </p>
                  </h4>
              </div>

              <div id="post">
                  <h3><center>Elon Musk's Tesla Roadster</center></h3>
                  <h5 align="left">Date : 10th Feb. 2018</h5>
                  <h4>
                      <p> As per the update, Tesla Roadster is going farther out in Solar System.
                          The car was supposed to be put on a path around the Sun that would take the vehicle
                          <a href="https://www.theverge.com/2018/2/6/16983744/spacex-tesla-falcon-heavy-roadster-orbit-asteroid-belt-elon-musk-mars">(...)</a>
                          </p>
                  </h4>
              </div>

              <div id="post">
                  <h3><center>ReactJS</center></h3>
                  <h5 align="left">Date : 04th Sept. 2016</h5>
                  <h4>
                      <p> ReactJS is a JavaScript Library for building UIs. It is maintained by Facebook,
                          Instagram and others. For more information click
                          <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"> here.</a> </p>
                  </h4>
              </div>
          </div>
          <div id="rightpane">
              <nav>
                  <h1>More Information</h1>
                  <ul>
                      <li><a href="https://www.theverge.com/2018/2/6/16983744/spacex-tesla-falcon-heavy-roadster-orbit-asteroid-belt-elon-musk-mars"> Tesla Roadster</a></li>
                      <li><a href="https://www.youtube.com/watch?v=pCWH5OW9lDo"> SpaceX's Tesla Roadster Launch</a></li>
                      <li><a href="http://www.spacex.com/webcast"> Dragon Resupply Mission</a></li>
                      <li><a href="https://www.youtube.com/watch?v=nusgoj74a3Y"> Getting Started with ReactJS</a></li>
                      <li><a href="https://reactjs.org/tutorial/tutorial.html"> Sample ReactJS App</a></li>
                  </ul>
              </nav>
          </div>

          <footer>Copyright © AnkitaJawale  </footer>

      </div>
    );
  }
}

export default App;
