import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../store/contacts/selectors';
import { setFilterValue } from '../../store/contacts/filterSlice';

import { ContactSearch } from './Search.styled';
import { ContactFind } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();

  const filterQuery = useSelector(selectFilter);
  const changeFilter = e => {
    dispatch(setFilterValue(e.target.value.trim()));
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
