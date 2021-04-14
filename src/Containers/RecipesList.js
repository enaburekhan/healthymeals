import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../Components/Meal';
import fetchAllMeals from '../Actions/allMeals';
import fetchMeal from '../Actions/singleMeal';
import { getProductsError, getProducts, getProductsPending } from '../Selectors/Index';
import { UPDATE_CATEGORY } from '../Actions/index';

const MealsList = (props) => {
  const {
    products, fetchAllMeals, category,
  } = props;

  useEffect(() => {
    fetchAllMeals(category);
  }, [category, fetchAllMeals]);

  return (
    <div>
      <div className="container">
        {products.map((val) => (
          <Link to={`/meal/${val.idMeal}`} key={Math.random() * 1000}>
            <MealPreview
              src={val.strMealThumb}
              name={val.strMeal}
              id={val.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

MealsList.defaultProps = {
  products: [''],
};

MealsList.propTypes = {
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(String),
};

const mapStateToProps = (state) => {
  const { allMeals } = state;
  return (
    {
      error: getProductsError(allMeals),
      products: getProducts(allMeals),
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
  fetchMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
