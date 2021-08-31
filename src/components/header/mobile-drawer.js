import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa';
import MenuItem from 'components/menu-item';
import menuItems from './data';

const socialLinks = [
  {
    path: '/',
    label: 'Facebook',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    label: 'Twitter',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    label: 'GitHub',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    label: 'Dribbble',
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen);
  };

  const renderMenuItem = (menuItem) => (
    <MenuItem
      label={menuItem.label}
      path={menuItem.path}
      key={menuItem.path}
    />
  );

  const renderSocialLink = (socialLink) => (
    <Box
      as="span"
      sx={styles.social.icon}
      key={socialLink.label}
    >
      <Link to={socialLink.path}>
        {socialLink.icon}
      </Link>
    </Box>
  );

  return (
   <Drawer
    width="320px"
    drawerHandler={
      <Box sx={styles.handler}>
        <IoMdMenu size="26px" />
      </Box>
    }
    open={isDrawerOpen}
    toggleHandler={toggleDrawer}
    closeButton={
      <IoMdClose
        size="24px"
        color="#000"
      />
    }
    drawerStyle={styles.drawer}
    closeButtonStyle={styles.close}
   >
     <Scrollbars autoHide>
      <Box sx={styles.content}>
        <Box sx={styles.menu}>
          {menuItems.map(renderMenuItem)}
        </Box>
        <Box sx={styles.menuFooter}>
          <Box sx={styles.social}>
            {socialLinks.map(renderSocialLink)}
          </Box>
        </Box>
      </Box>
     </Scrollbars>
   </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};