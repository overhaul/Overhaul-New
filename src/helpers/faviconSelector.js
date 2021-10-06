import iconCall from  '../images/favicons/call-me-hand.png'
import iconPinched from  '../images/favicons/pinched-fingers.png'
import iconHorns from  '../images/favicons/love-you-gesture.png'
import iconGesture from  '../images/favicons/raised-fist.png'
import iconRaised from  '../images/favicons/sign-of-the-horns.png'
import iconVulcan from  '../images/favicons/vulcan-salute.png'

//Dynamic Favicons

export default function() {
  const icons = [ iconCall, iconPinched, iconHorns, iconGesture, iconRaised, iconVulcan ]
  const iconIndex = Math.floor(icons.length * Math.random())
  return icons[iconIndex]
}