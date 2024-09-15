import './SearchInput.css';
import { ReactComponent as Search } from '../../../../../../assets/icons/search.svg';

const SearchInput = ({
    setSearchValue,
}) => {
    return (
        <div className="search-input-wrap">
            <Search />
            <input
                className='search-input'
                placeholder='지번, 도로명, 건물명으로 검색'
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchInput;