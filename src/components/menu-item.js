import { Link as ScrollLink } from 'react-scroll';

export default function MenuItem({ path, label }) {
  return (
    <ScrollLink
      activeClass="active"
      to={path}
      duration={500}
      offset={-70}
      smooth
      spy
    >
      {label}
    </ScrollLink>
  );
}