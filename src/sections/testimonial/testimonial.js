/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import Carousel from 'react-multi-carousel';

import ReviewCard from 'components/review-card';
import SectionHeader from 'components/section-header';

import { reviews } from 'sections/testimonial/data';
import { carouselParams } from 'sections/testimonial/config';

export default function TestimonialCard() {
  const renderReviewCard = (review) => (
    <ReviewCard
      key={review.id}
      review={review}
    />
  );

  return (
    <section
      sx={{ variant: 'section.testimonial' }}
      id="testimonial"
    >
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader
          slogan="Testimonial"
          title="Meet Client Satisfaction"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {reviews.map(renderReviewCard)}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
};
