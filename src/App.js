import "./App.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  const quoteDB = [
    {
      quote: "The only way to do great work is to love what you do..",
      author: "Steve Jobs",
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: " Robert Frost ",
    },
  ];

  const colors = [
    "rgb(243, 156, 18)",
    "rgb(115, 168, 87)",
    "rgb(155, 89, 182)",
    "rgb(251, 105, 100)",
    "rgb(71, 46, 50)",
    "#282c34",
  ];

  const [quote, setQuote] = useState(
    "The only way to do great work is to love what you do.."
  );
  const [author, setAuthor] = useState("Steve Jobs");
  const [color, setColor] = useState("#282c34");

  let idx = 0;

  const clickHandler = () => {
    console.log("Button Clicked!");
    idx = Math.floor(Math.random() * quoteDB.length);
    let colorIdx = Math.floor(Math.random() * colors.length);
    setQuote(quoteDB[idx].quote);
    setAuthor(quoteDB[idx].author);
    setColor(colors[colorIdx]);
  };

  return (
    <div style={{ backgroundColor: color }} className="App">
      <div id="quote-box">
        <div id="quote">
          <p id="text">
            <strong>
              <span id="quotation-mark">"</span>
              {quote}
            </strong>
          </p>
          <div class="author-right">
            <p id="author"> - {author}</p>
            <button onClick={clickHandler} id="new-quote">
              New quote
            </button>
            <a
              className="twitter-share-button"
              href={
                "https://twitter.com/intent/tweet?text=" +
                quote +
                " " +
                author +
                "&hashtags=quotes"
              }
              id="tweet-quote"
            >
              <button>
                <FontAwesomeIcon id="icon" icon={faTwitter} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
