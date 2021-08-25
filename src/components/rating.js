import React from 'react';
import { FaStar } from 'react-icons/fa';
import cx from 'classnames';

const Rating = ({ rating }) => {
  const totalRating = Array(5).fill(null).map((_, index) => (
    <li
      className={cx({
        'star': index < rating,
        'star-o': index >= rating
      })}
      key={index}
    >
      <FaStar />
    </li>
  ));

  return (
    <div className="rating">
      <ul>
        {totalRating}
      </ul>
    </div>
  );
};

export default Rating;
