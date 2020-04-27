import '../styles/landing.css';
import React, { Component } from 'react';
import { Row, Col, Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const cityPics = [
    {
        src: '/img/ny.jpg',
        altText: 'New York',
        caption: 'New York'
    },
    {
        src: '/img/sd.jpg',
        altText: 'San Diego',
        caption: 'San Diego'
    },
    {
        src: '/img/sf.jpg',
        altText: 'San Francisco',
        caption: 'San Francisco'
    }
];

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            animating: false
        }
    }

    render() {

        const next = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === cityPics.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({
                activeIndex: nextIndex
            });
        }

        const previous = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? cityPics.length - 1 : this.state.activeIndex - 1;
            this.setState({
                activeIndex: nextIndex
            });
        }

        const goToIndex = (newIndex) => {
            if (this.state.animating) return;
            this.setState({
                activeIndex: newIndex
            });
        }

        const slides = cityPics.map((cityPic) => {
            return (
                <CarouselItem
                    className="carousel-item"
                    onExiting={() => this.setState({animating: true})}
                    onExited={() => this.setState({animating: false})}
                    key={cityPic.src}
                    cssModule={{'max-width': '50%'}}
                >
                    <img src={cityPic.src} alt={cityPic.altText}/>
                    <CarouselCaption captionText={cityPic.caption} />
                </CarouselItem>
            );
        });


        return (
            <Container>
                <br/>
                <Row md="12">
                    <Carousel
                        activeIndex={this.state.activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={cityPics} activeIndex={this.state.activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Row>
                <br />
                <Row noGutters={false}>
                    <Col md='4'>
                        <h4>Topic 1</h4>
                        <p>Reverse psychology is an awesome tool. I don't know if you guys know about it, but, basically, you make someone think the opposite of what you believe. And that tricks them into doing something stupid. Works like a charm.</p>
                    </Col>
                    <Col md='4'>
                        <h4>Topic 1</h4>
                        <p>Toby has been leaving radon test kits everywhere like he owns the place. The first time I threw mine away I thought it was an ant trap. But I figured I'd rather live with ants than with this creepy little disc. The second time, I thought it was one of those, you know, the things you turn over and it moo's like a cow thing but upon closer examination it was another ant trap so I threw it away. And the third time, I did it out of spite.</p>
                    </Col>
                    <Col md='4'>
                        <h4>Topic 1</h4>
                        <p>Guess what? I have flaws. What are they? Oh I donno, I sing in the shower? Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me-- no, don't sue me. That is opposite the point I'm trying to make.</p>
                        <p>I feel like all my kids grew up, and then they married each other. It's every parent's dream.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Landing;