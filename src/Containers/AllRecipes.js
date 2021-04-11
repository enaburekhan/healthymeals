import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../Components/CategoryFilter';
import fetchAllMeals from '../Actions/allMeals';
import { getProductsPending } from '../Constants/Index';
import { UPDATE_CATEGORY } from '../Actions/index';
import MealsList from './RecipesList';

const AllMeals = props => {
  const {
    addFilter, match, current, fetchAllMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = e => {
    const newCategory = e.target.value;
    addFilter(e.target.value);
    fetchAllMeals(newCategory);
  };

  return (
    <div>
      <div className="">

        <div className="mb-5">
          <CategoryFilter onChange={handleFilterChange} value={current} />
        </div>
      </div>
      <MealsList category={category} />
    </div>
  );
};

AllMeals.defaultProps = {
  category: 'Beef',
};

AllMeals.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMeals);
