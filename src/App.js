import "./App.css";
import Footer from "./components/footer/Footer.component";
import ToDoList from "./components/ToDoList/ToDoList.component";

const App = () => {
  return (
    <div className="App">
      <div className="the-header">
        <h2 className="logo">GET IT DONE</h2>
      </div>
      <ToDoList />
      <Footer />
    </div>
  );
};

export default App;
