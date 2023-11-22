import Carousel from 'react-bootstrap/Carousel';
import sliderImg2 from '../images/anne-laure-p-yYOKNUK5AWE-unsplash.jpg';
import sliderImg3 from '../images/redcharlie-tmLb1wWd9x8-unsplash.jpg';
import sliderImg1 from '../images/anna-hunko-TjxjFl9nWlc-unsplash.jpg';
import { Image } from 'react-bootstrap';
function MainSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src={sliderImg1} text="First slide" fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={sliderImg2} text="Second slide" fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={sliderImg3} text="Third slide" fluid/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;