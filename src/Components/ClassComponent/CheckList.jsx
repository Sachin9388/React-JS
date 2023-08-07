import React, { useState } from 'react';

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState({}); // Step 1: Create React state

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  }; // Step 2: Function to update checkbox value

  return (
    <div>
      <h1>Checklist</h1>
      <form>
        <label>
          <input
            type="checkbox"
            name="option1"
            checked={checkedItems.option1 || false}
            onChange={handleCheckboxChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="checkbox"
            name="option2"
            checked={checkedItems.option2 || false}
            onChange={handleCheckboxChange}
          />
          Option 2
        </label>
        <label>
          <input
            type="checkbox"
            name="option3"
            checked={checkedItems.option3 || false}
            onChange={handleCheckboxChange}
          />
          Option 3
        </label>
      </form>
      <h2>Selected Options:</h2>
      <ul>
        {Object.keys(checkedItems).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;