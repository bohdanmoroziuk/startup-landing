import { FaStar } from 'react-icons/fa';
import cx from 'classnames';

const RatingStar = ({ isActive }) => {
  return (
    <li
      className={cx({
        'star': !isActive,
        'star-o': isActive
      })}
    >
      <FaStar />
    </li>
  );
};

export default RatingStar;
