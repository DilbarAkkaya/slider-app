import {Component, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

 class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay:false,
      slide: 0
    }
  }
  changeSlide = (i) => {
    this.setState(({slide}) => ({
      slide: slide + 1
    }))
  }
  toggleAutoplay = () => {
    this.setState(({autoplay}) => ({
      autoplay: !autoplay
    }))
  }
  render () {
    return (
      <Container>
        <div className='slider w-50 m-auto'>
          <img className='d-block w-100' src="http://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
          <div className="text-center mt-5">Active slide {this.state.slide}<br/> {this.state.autoplay ? 'auto' : null}</div>
          <div className="buttons mt-3">
            <button className="btn btn-primary me-2" onClick={() => this.changeSlide(-1)}>-1</button>
            <button className="btn btn-primary me-2" onClick={() => this.changeSlide(1)}>+1</button>
            <button className="btn btn-primary me-2" onClick={this.toggleAutoplay}>toggle Autoplay</button>
          </div>
        </div>
      </Container>
    )
}
} 

/* const Slider = (props)=> {
    const {slide, setSlide} = useState(0);
    const {autoplay, setAutoplay} = useState(false);
    function changeSlide(i) {
      setSlide(slide=> slide + i);
    }
function toggleAutoplay (){
  setAutoplay(!autoplay);
}
    return (
      <Container>
        <div className='slider w-50 m-auto'>
          <img className='d-block w-100' src="http://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
          <div className="text-center mt-5">Active slide {slide}<br/> {autoplay ? 'auto' : null}</div>
          <div className="buttons mt-3">
            <button className="btn btn-primary me-2" onClick={() => changeSlide(-1)}>-1</button>
            <button className="btn btn-primary me-2" onClick={() => changeSlide(1)}>+1</button>
            <button className="btn btn-primary me-2" onClick={toggleAutoplay}>toggle Autoplay</button>
          </div>
        </div>
      </Container>
    )
}
 */
function App () {
  return (
    <Slider/>
  )
}
export default App;
