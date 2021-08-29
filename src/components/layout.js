/** @jsx jsx */
import { useState } from 'react';

import { jsx } from 'theme-ui';
import Sticky from 'react-stickynode';
import cx from 'classnames';

import Header from 'components/header';
import Footer from 'components/footer';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const getIsSticky = (state) => {
    switch (state.status) {
      case Sticky.STATUS_FIXED:
        return true;
      case Sticky.STATUS_ORIGINAL:
        return false;
      default:
        return false;
    }
  };

  const handleStateChange = (state) => {
    setIsSticky(getIsSticky(state));
  };
  
  return (
    <>
      <Sticky
        innerZ={1001} 
        top={0} 
        onStateChange={handleStateChange}
      >
        <Header className={cx({ sticky: isSticky, unSticky: !isSticky })} />
      </Sticky>
      <main
        id="content"
        sx={{ variant: 'layout.main', }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
