import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
          <div class="nav">
            <div class="content-container">
                <div>
                    <div class="brand">
                        <a href="/">
                            Readables
                        </a>
                    </div>

                    <div class="tagline">
                        This is a Udacity React-Redux course
                    </div>

                </div>
            </div>
        </div>


        <div class="tabs ">
            <div class="content-container">

                <a class="light-link active" href="/">
                    Home
                </a>
                <a class="light-link " href="#">
                    Bla bla
                </a>

                <a class="light-link " href="#">
                    Maybe something else
                </a>
            </div>
        </div>

        <div class="book-section book-section-cta">
            <div class="content-container book-section-cta-inner">
                <div class="ama-content">
                    <div class="ama-content-title">
                        We're a community of self driven learners, innovators and advancers
                    </div>
                    <div class="ama-content-subtitle">
                        Join us in the journey of self improvement, growth and knowledge
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};

export default Nav;