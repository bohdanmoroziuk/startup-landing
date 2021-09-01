/** @jsx jsx */
import { useState } from 'react';

import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import Carousel from 'react-multi-carousel';
import cx from 'classnames';

import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';

import { sliderParams } from 'sections/package/config';
import { packages } from 'sections/package/data';

export default function Package() {
  const { monthly, annual } = packages;

  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlanChange = (plan) => {
    if (plan === 'annual') {
      setState({
        active: 'annual',
        pricingPlan: annual,
      });
    } else {
      setState({
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  return (
    <section sx={{ variant: 'section.pricing' }} id="pricing">
      <Container>
        <SectionHeader
          slogan="Pricing Plan"
          title="Choose your pricing plan"
        />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={cx({ active: state.active === 'monthly' })}
              aria-label="Monthly"
              onClick={() => handlePricingPlanChange('monthly')}
            >
              Monthly Plan
            </button>
            <button
              className={cx({ active: state.active === 'annual' })}
              aria-label="Annual"
              onClick={() => handlePricingPlanChange('annual')}
            >
              Annual Plan
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((pkg) => (
              <Box sx={styles.pricingItem} key={pkg.id}>
                <PriceCard data={pkg} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
