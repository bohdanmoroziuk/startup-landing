import ButtonGroup from 'components/button-group';

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export const sliderParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: '',
  slidesToSlide: 1,
  items: 3,
  containerClass: 'carousel-container',
  customButtonGroup: <ButtonGroup />,
  dotListClass: '',
  focusOnSelect: false,
  infinite: false,
  keyBoardControl: false,
  itemClass: '',
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: '',
};
