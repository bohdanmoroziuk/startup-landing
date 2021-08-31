import RatingStar from 'components/rating-star';

const Rating = ({ rating }) => {
  const renderStar = (rating) => (_, index) => (
    <RatingStar
      key={index}
      isActive={index >= rating}
    />
  );
  
  const totalRating = Array(5)
    .fill(null)
    .map(renderStar(rating));

  return (
    <div className="rating">
      <ul>
        {totalRating}
      </ul>
    </div>
  );
};

export default Rating;
