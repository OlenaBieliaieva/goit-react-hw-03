import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        className={css.seachInput}
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};
