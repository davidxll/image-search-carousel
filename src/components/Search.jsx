const DEBOUNCE_TIME = 600

function Search (props) {
  
  function debounce (func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  function handleChange (evt) {
    props.filter(evt.target.value)
  }

  const debounceHandler = debounce(handleChange, DEBOUNCE_TIME)

  return (
    <div className="filter-container">
      <input onChange={debounceHandler} placeholder='Search'/>
    </div>
  );
}

export default Search