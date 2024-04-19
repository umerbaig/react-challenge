import "./App.css";
import { useState, useEffect } from "react";
import { json } from "./data";
// Questions:
// 1. Load data from local file (path: “https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json”)
// 2. Use the screenshot as an example, implement a generic function for reading any JSON file in that format, then display the top 12 brands based on audience_size. We always want to have 4 items in one row.
// 3. Add a hover state with a dark, semi-transparent overlay and display the ID of the hovered brand.

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = json.sort(
      (a, b) => b.source_items.audience_size - a.source_items.audience_size
    );
    setData(sortedData);
  }, []);
  return (
    <div className="App">
      <div className="grid">
        {data.map((item) => (
          <div key={item.source_items.id} className="grid-item">
            <div className="image-container">
              <img
                src={`https://placehold.co/600x400`}
                alt={item.name}
              />
              {item.name}
              <div className="overlay">
                <div className="overlay-text">{item.source_items.id}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
