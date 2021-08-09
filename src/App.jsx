import { useEffect, useRef, useState } from 'react';
import Tag from './components/Tag';
import pickRandomElement from './helpers/pickRandomElement';
import './App.scss';

function App() {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');
  const [pickedTag, setPickedTag] = useState('');
  const textAreaRef = useRef();

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  useEffect(() => {
    createTagsArray(text);
  }, [text]);

  const createTagsArray = (input) => {
    const tags = input.split(',').filter((tag) => tag.trim() !== '');

    setTags(tags);
  };

  const randomSelect = () => {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomElement(tags);

      setPickedTag(randomTag);

      setTimeout(() => {
        setPickedTag(randomTag);
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, times * 100);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      randomSelect();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h3>
          Enter all of the choices divided by a comma (',') <br />
          Press enter when you're done
        </h3>
        <textarea
          ref={textAreaRef}
          className="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter choices here..."
          onKeyUp={(e) => handleEnter(e)}
        />
        <div>
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <Tag key={index} tag={tag} pickedTag={pickedTag} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
