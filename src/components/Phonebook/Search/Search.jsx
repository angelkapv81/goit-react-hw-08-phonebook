import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../../store/filter/selectors';
import { setFilter } from '../../../store/filter/slice';

import { ContactSearch } from './Search.styled';
import { ContactFind } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();

  const filterQuery = useSelector(getFilter);
  const changeFilter = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div>
      <ContactFind>
        Find contacts
        <ContactSearch
          placeholder="кого шукаємо..."
          type="text"
          name="filter"
          value={filterQuery}
          onChange={changeFilter}
        />
      </ContactFind>
    </div>
  );
};

export default Search;
