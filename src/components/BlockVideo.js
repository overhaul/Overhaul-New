import * as React from 'react'

class Vimeo extends React.Component {
    render() {
      const cfg = {
        title: 0,
        byline: 0,
        muted: 1,
        playsinline: 1,
        loop: 1,
        controls: 0,
        autopause: 0,
        background: 1
      };
      const allowed = [];

      if (+this.props.autoplay) {
        allowed.push('autoplay');
      }

      let fit = ''
      if (this.props.fit === 'full'){
        fit = 'fit-full'  
      }

      return (
        <div className={this.props.mobileImage ? 'video-container mobile' : 'video-container'}>
         {this.props.title
            ? <h5 className="title container">{this.props.title}</h5>
            : ''
          }
          {this.props.mobileImage
            ? <div className="mobile-image">
                <img src={this.props.mobileImage} alt={this.props.mobileImage.alt}/>
              </div>
            : ''
          }
          <div class="player">
            <iframe
              title='vimeo video'
              className={"play-vimeo " + fit }
              type="text/html"
              src={`https://player.vimeo.com/video/${this.props.video}?${Object.keys(cfg).map(prop => `${prop}=${cfg[prop]}`).join('&')}`} width="100%" height="100%" allow={allowed.join('; ')}
              allowAutoPlay
              muted={'muted'}
              autoPlay
              frameborder={this.props.border || 0}
              />
              { this.props.autoplay ? (<div class="video-overlay">
                { this.props.overlayContent ? (<div className="overlay-text container">{this.props.overlayContent}</div>) : '' }
              </div>) : '' }
            </div>
        </div>
      );
    }
};

export default Vimeo