import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import AllMeals from '../Containers/AllRecipes';
import MealDetails from '../Containers/ItemDetails';
import NavBar from '../Containers/Navbar';
import AllCategories from '../Containers/Categories';

const App = () => (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllCategories} />
        <Route path="/category/:category" component={AllMeals} />
        <Route path="/meal/:id" component={MealDetails} />
      </Switch>
    </Router>
  </>
);

export default App;
