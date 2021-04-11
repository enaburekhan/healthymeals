import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import RecipesReducer from './Recipes';
import SingleRecipeReducer from './SingleRecipe';
import { CategoriesReducer } from './Categories';

const rootReducer = combineReducers({
  allMeals: RecipesReducer,
  singleMeal: SingleRecipeReducer,
  categories: CategoriesReducer,
});

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
