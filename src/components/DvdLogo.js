import React, {Component} from 'react'

const scaleFactor = 0.85; // use to resize
const logoW = Math.round(451 * scaleFactor)
const logoH = Math.round(108 * scaleFactor)

class DvdLogo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      xPos: DvdLogo.getRandomNumber(0, this.props.width - logoW),
      yPos: DvdLogo.getRandomNumber(0, this.props.height - logoH),
      xSpeed: 1,
      ySpeed: 1,
      r: DvdLogo.getRandomNumber(100, 256),
      g: DvdLogo.getRandomNumber(100, 256),
      b: DvdLogo.getRandomNumber(100, 256),
      interval: null
    }
  }

  static getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    this.setState({interval: setInterval(() => this.animateLogo(), 5)})
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  animateLogo() {
    this.setState({
      xPos: this.state.xPos + this.state.xSpeed,
      yPos: this.state.yPos + this.state.ySpeed
    });

    if (this.state.xPos + logoW >= this.props.width || this.state.xPos <= 0) {
      this.setState({xSpeed: -this.state.xSpeed});
      this.changeColor();
    }

    if (this.state.yPos + logoH >= this.props.height || this.state.yPos <= 0) {
      this.setState({ySpeed: -this.state.ySpeed});
      this.changeColor();
    }
  }

  changeColor() {
    this.setState({
      r: DvdLogo.getRandomNumber(100, 256),
      g: DvdLogo.getRandomNumber(100, 256),
      b: DvdLogo.getRandomNumber(100, 256)
    })
  }

  render() {
    const {r, g, b, xPos, yPos} = this.state;
    return (
      <g>
        <g fill={`rgb(${r}, ${g}, ${b})`} transform={`translate(${xPos}, ${yPos}) scale(${scaleFactor})`}>
          <path d="M146.25,43l.05.13h0A.24.24,0,0,0,146.25,43Z"/>
          <path d="M146.25,43l.05.13h0A.24.24,0,0,0,146.25,43Z"/>
          <path
            d="M324.36,0l-35.5,53.77L297.23.87H279l-3.64,23.19H254.59L258.24.87H240.08l-9.9,62.53h18.16l3.82-24.14h20.75L269.09,63.4h32.26l5.12-8.25h19l2.6,8.25h18.85L325.23,0ZM313.42,43.34c1.39-2.35,6.25-11.64,6.42-11.64a87.92,87.92,0,0,0,2.61,11.64Z"/>
          <path
            d="M389.33,1.52l-5.82,35.76c-1,6.39-4.86,10-11.55,10s-9.29-3.62-8.25-10l5.82-35.76H351.38l-6.17,37.69c-2.35,14.39,6.43,24.15,24.14,24.15s29.71-9.76,32-24.15l6.17-37.69Z"/>
          <polygon points="422.04 48.11 429.51 0.87 411.35 0.87 401.45 63.4 447.57 63.4 450 48.11 422.04 48.11"/>
          <path
            d="M233.93,19.37c0-12.33-9.3-18.5-23.11-18.5H126.71L113.54,22.18c-3.21,5.25-10,17.14-11.56,19.71-.86-5.57-3-12.54-5-19.71L90.42.87H44.51c-.64,0-1.28,0-1.91,0C18.77,1.76,0,18.49,0,38,0,53.75,12.61,66,32.79,66c24.93,0,44.6-16.85,44.6-36.91a26.92,26.92,0,0,0-.33-4.33L95.65,79.05h.87L138,16.18h71.32c3.31,0,6,1.47,6,5.47,0,6-3.91,7.9-8.09,7.9h-6.76l1.4-9H184.17L177.39,63.4h17.72l3-19.45h5.13l6.16,19.45h18.85L219.68,41C228.36,37.09,233.93,30,233.93,19.37ZM35.77,49.42c-9.35,0-14.7-6.6-14.7-14.29,0-9.58,8.94-19,20.46-19,9.33,0,14.7,6.77,14.7,14.27C56.23,40.11,47.49,49.42,35.77,49.42Z"/>
          <polygon
            points="152.62 38.82 172.94 38.82 175.2 24.49 154.88 24.49 155.49 20.57 137.33 20.57 130.55 63.4 173.72 63.4 176.15 48.12 151.14 48.12 152.62 38.82"/>
          <path
            d="M241.48,85.87a10.5,10.5,0,0,0-6.29-1.65h-1.6V96h1.6a11.73,11.73,0,0,0,5.9-1.3A5.4,5.4,0,0,0,243.62,90,5.07,5.07,0,0,0,241.48,85.87Z"/>
          <polygon points="286.84 92.69 293.26 92.69 290.07 86.22 286.84 92.69"/>
          <path
            d="M229,72.7c-67.81,0-122.78,7.79-122.78,17.4s55,17.4,122.78,17.4,122.78-7.79,122.78-17.4S296.79,72.7,229,72.7Zm-48.88,27L178,88.24l-6.49,11.5h-2.1L163,88.24l-2.06,11.5h-6l4.16-19.27h5L170.5,92,177,80.47h5l4.15,19.27Zm34.77-15.52h-11.2V88h10.77v3.76H203.67V96h11.2v3.76H197.69V80.47h17.18Zm31.35,12.63c-3.57,2.69-8,2.89-10.22,2.89h-8.39V80.47h8.2c3.42,0,7,.37,10.22,2.65a8.3,8.3,0,0,1,.19,13.73Zm19.87,2.89h-6V80.47h6Zm30.74,0-1.94-3.64H285.1l-2,3.64H276.9l10.45-19.27h5.48l10.22,19.27Z"/>
          <path d="M123.94,31.57q-.72,0-1.44,0l0,0Z"/>
          <path d="M146.32,43.11h0l-.05-.13A.24.24,0,0,1,146.32,43.11Z"/>
        </g>
      </g>
    )
  }
}
export default DvdLogo