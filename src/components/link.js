/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as Anchor } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <Anchor
      href={path}
      {...rest}
    >
      {children ?? label}
    </Anchor>
  );
}
