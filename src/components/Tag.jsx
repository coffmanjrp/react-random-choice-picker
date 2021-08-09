import { useEffect, useState } from 'react';

const Tag = ({ tag, pickedTag }) => {
  const [isHighlight, setIsHighlight] = useState(false);

  useEffect(() => {
    if (pickedTag === tag) {
      setIsHighlight(true);
    } else {
      setIsHighlight(false);
    }

    // eslint-disable-next-line
  }, [pickedTag]);

  return <span className={`tag${isHighlight ? ' highlight' : ''}`}>{tag}</span>;
};

export default Tag;
