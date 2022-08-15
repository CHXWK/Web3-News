import logo from './twitter.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import TweetFeed from "./components/TweetFeed";
//import io from 'socket.io-client';
//const socket = io.connect("http://localhost:4000");


function App() {
// const [response, setResponse] = useState([]);

// useEffect(() => {
//   socket.on("tweet", (json) => {
//     setResponse(json);
//   });    
// }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter" />
        <h3>Web3 News</h3>
      </header>
      <TweetFeed />
    </div>
  );
}

export default App;
