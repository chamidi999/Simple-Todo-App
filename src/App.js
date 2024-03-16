import "./App.css";
import backgroundImage from "./flat-lay-notebook-with-list-desk.jpg"; // Adjust the path to your image file
import { TodoWrapper } from "./components/TodoWrapper";


function App() {

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Adjust this to control how the image is displayed
    backgroundRepeat: "no-repeat",

  };

  return (
    <div className="App" style={appStyle}>
      <TodoWrapper />
    </div>
  );
}

export default App;
