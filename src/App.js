import { useState } from "react";
import "./App.css";

function App() {
    const [messages, setMessages] = useState([]);
    const [visitorCount, setVisitorCount] = useState(0);
    const [input, setInput] = useState("");
    const [name, setName] = useState("");

    return (
        <div className="container">
            <h1>網路攻防實習</h1>
            
            <figure>
                <img src="/photo.jpg" alt="Me" width="200" />
                <figcaption>國立臺灣大學 電機資安所 林峻毅</figcaption>
            </figure>
            
            <p>嗨!我是臺大的學生，目前就讀電機資安所。<br></br>
               這是我的期中專案。
            </p>
            
            <h2>Visitor Count: {visitorCount}</h2>

            <h2>Leave a Message</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Your Message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => {
                if (name && input) {
                    setMessages([...messages, `${name}: ${input}`]);
                    setInput("");
                    setName("");
                    setVisitorCount(visitorCount + 1); // 每次留言後增加訪問數量
                }
            }}>Submit</button>

            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
