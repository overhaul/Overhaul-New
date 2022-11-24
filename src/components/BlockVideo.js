import * as React from 'react'

class Vimeo extends React.Component {
    render() {
      const cfg = {
        title: 0,
        byline: 0,
        muted: 1,
        playsinline: 0,
        controls: 0,
        background: 1
      };
      const allowed = [];
      if (+this.props.autoplay) {
        allowed.push('autoplay');
      }
      return (
        <div className="video-container">
          <div class="player">
            <iframe
              title='vimeo video'
              className="play-vimeo"
              type="text/html"
              src={`https://player.vimeo.com/video/${this.props.video}?${Object.keys(cfg).map(prop => `${prop}=${cfg[prop]}`).join('&')}`} width="100%" height="100%" allow={allowed.join('; ')}
              allowFullScreen
              frameborder={this.props.border || 0}
              />
              { this.props.autoplay ? (<div class="video-overlay"></div>) : '' }
            </div>
        </div>
      );
    }
};

export default Vimeo