export const InputComponent = () => {
  return (
    <div>
      <h5>Filters:</h5>
      <input placeholder="search your food here" />
      <label>
        <input type="checkbox" value="veg" />
        Veg
      </label>
      <label>
        <input type="checkbox" value="spicy" />
        Spicy
      </label>
      <label>
        <input type="radio" value="low" />
        Sort(price) Low to High
      </label>
      <label>
        <input type="radio" value="high" />
        Sort (price) High to Low
      </label>
    </div>
  );
};
