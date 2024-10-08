import React, { Component } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from 'gatsby-image';

gsap.registerPlugin(ScrollTrigger);

class TypingSlide extends Component {
  constructor() {
    super();

    this.state = {
      revealProgress: 0,
    };

    this.slideEl = React.createRef();
  }

  componentDidMount() {
    this.scrollWatcher = ScrollTrigger.create({
      trigger: this.slideEl.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (trigger) => {
        this.setState({
          revealProgress: trigger.progress,
        });
      },
    });
  }

  componentWillUnmount() {
    this.scrollWatcher.kill();
  }

  render() {
    const height = this.props.height ?? 200;
    const textStep = 1 / (this.props.text.length - 1);
    const { revealProgress } = this.state;

    return (
      <div
        style={{ height: `${height}vh` }}
        className="fixed-slide typing-slide"
        ref={this.slideEl}
      >
        <div className="fixed-slide__clip">
          <div className="fixed-slide__inner">
            {this.props.nextSlide?.gatsbyImageData ? (
              <Img
                className="fixed-slide__bg"
                {...this.props.nextSlide.gatsbyImageData}
              />
            ) : null}
            <div className="typing-slide__content-bg">
              <div className="fixed-slide__content">
                <div className="container">
                  <h1 className="fixed-slide__title">
                    {this.props.text.map((text, i) => {
                      const start = (i - 1) * textStep;
                      const position = (revealProgress - start) / textStep;
                      return (
                        <span key={i} style={{ opacity: position }}>
                          {text}
                        </span>
                      );
                    })}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TypingSlide;
