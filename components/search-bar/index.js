import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import styles from './SearchBar.module.css'

const { searchBar, searchBarInput, magnifyingGlassButton } = styles

export const SearchBar = () => {
  return (
    <div className={searchBar}>
      <input placeholder='Search Videos' className={searchBarInput} />
      <button className={magnifyingGlassButton}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  )
}
