import './App.css';
import './index.css';
import Recipe from './components/Recipe';
import Title from './components/Title';
import NavBar from './components/NavBar';

const App = () => {

  const components = [];

  for (let counter = 0; counter < 5; counter++) {
    components.push(<Recipe />);
  }

  const title = (<Title />);
  const navBar = (<NavBar />);

  // allows us to repeat a given body of text (hello) on the page

  return (
    <main className="body">
    <div className="navBar">
    {navBar}
    </div>
    <div className="title">
    {title}
    </div>
    <div>
    {components}
    </div>
    </main>
  
  )
}

export default App;
