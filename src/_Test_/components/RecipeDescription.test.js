import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import RecipeDetails from '../../Components/RecipeDescription';

const initial = {
  category: 'test',
  area: 'jest',
  ingredients: ['react', 'redux'],
  className: 'component',
};

const {
  category, area, ingredients, className,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(
    <RecipeDetails
      category={category}
      area={area}
      ingredients={ingredients}
      className={className}
    />,
  );
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one div', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('should render upto six span elements', () => {
    expect(component.find('span').length).toBe(6);
  });
});
