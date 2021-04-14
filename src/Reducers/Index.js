import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RecipesReducer from './Recipes';
import SingleRecipeReducer from './SingleRecipe';
import { CategoriesReducer } from './Categories';

const rootReducer = combineReducers({
  allMeals: RecipesReducer,
  singleMeal: SingleRecipeReducer,
  categories: CategoriesReducer,
});

const { NODE_ENV } = process.env;
const middlewares = [thunk];

const enableDevTools = NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, enableDevTools);

export default store;
