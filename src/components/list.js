import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';
import cx from 'classnames';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      sx={{
        listStyleType: 'none',
        margin: 0,
        marginTop: 16,
        padding: 0,
        ...parentStyle,
      }}
      as="ul"
    >
      {items.map((item) => (
        <Flex
          className={cx({
            open: item.isAvailable,
            closed: !item.isAvailable
          })}
          sx={{
            ...childStyle
          }}
          key={item.text}
          as="li"
        >
          <IconButton sx={styles.listIcon} arial-label="list icon">
            {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};
