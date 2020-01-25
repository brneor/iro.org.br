import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'blog/nenad-spasojevic-Hf3i5itAlvs-unsplash.jpg',
    altText: 'O início do fim da era cristã',
    header: 'O início do fim da era cristã',
    link: 'https://iro.org.br/blog/?p=45'
  },
  {
    src: 'blog/Jesus-e-Marx.jpg',
    altText: 'Jesus e Marx: o diálogo impossível',
    header: 'Jesus e Marx: o diálogo impossível',
    link: 'https://iro.org.br/blog/?p=56'
  },
  {
    src: 'blog/patrick-fore-b_SHPU5M3nk-unsplash.jpg',
    altText: 'A essência singular da fé',
    header: 'A essência singular da fé',
    link: 'https://iro.org.br/blog/?p=60'
  }
];

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a href={item.link}><img src={item.src} alt={item.altText} className="w-100"/></a>
          <a href={item.link}><CarouselCaption captionHeader={item.header}/></a>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="w-100"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CustomCarousel;
