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

        <div className="post-section post-section-cta">
            <div className="content-container post-section-cta-inner">
                <div className="ama-content">
                    <div className="ama-content-title">
                        Udacity
                    </div>
                    <div className="ama-content-subtitle">
                        Learning React-Redux
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};

export default Nav;