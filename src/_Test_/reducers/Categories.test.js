import categoriesReducer from '../../Reducers/Categories';

const initialState = {
  pending: false,
  categories: [],
  pending: false,    
}

describe('update category', () => {
  it('should fetch the categories', () => {
    expect(categoriesReducer(initialState, 
        {type: 'FETCH_CATEGORIES_SUCCESS', categories: ['Pasta', 'Pork']}))
        .toEqual({...initialState, categories: ['Pasta', 'Pork']})    
  });    
});