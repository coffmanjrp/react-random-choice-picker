import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>
          Enter all of the choices divided by a comma (',') <br />
          Press enter when you're done
        </h3>
        <textarea
          className="textarea"
          placeholder="Enter choices here..."
        ></textarea>
        <div>
          <span className="tag">Choices1</span>
          <span className="tag highlight">Choices2</span>
          <span className="tag">Choices3</span>
        </div>
      </div>
    </div>
  );
}

export default App;
