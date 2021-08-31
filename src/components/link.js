/** @jsx jsx */
import { jsx, Link as Anchor } from 'theme-ui';

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
