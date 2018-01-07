import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
          <div className="nav">
            <div className="content-container">
                <div>
                    <div className="brand">
                        <a href="/">
                            Readables
                        </a>
                    </div>

                    <div className="tagline">
                        This is a Udacity React-Redux course
                    </div>

                </div>
            </div>
        </div>


        <div className="tabs ">
            <div className="content-container">

                <a className="light-link active" href="/">
                    Home
                </a>
                <a className="light-link " href="#">
                    Bla bla
                </a>

                <a className="light-link " href="#">
                    Maybe something else
                </a>
            </div>
        </div>

        <div className="book-section book-section-cta">
            <div className="content-container book-section-cta-inner">
                <div className="ama-content">
                    <div className="ama-content-title">
                        We're a community of self driven learners, innovators and doers
                    </div>
                    <div className="ama-content-subtitle">
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