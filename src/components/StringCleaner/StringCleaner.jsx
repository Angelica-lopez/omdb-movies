import React, { useState } from "react";

const StringCleaner = () => {
  const [inputValue, setInputValue] = useState("");
  const [cleanedString, setCleanedString] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const cleanString = () => {
    const vowels = ["a", "e", "i", "o", "u"];
    const result = inputValue
      .split("")
      .filter((char) => !vowels.includes(char.toLocaleLowerCase()))
      .join("");
    setCleanedString(result);
  };
  return (
    <div className='bg-white rounded-2xl w-fit m-auto p-6'>
      <div className='flex flex-col'>
        <label htmlFor='stringInput' className='mr-3 text-left'>
          Enter a string:
        </label>
        <div className='flex mt-2'>
          <input
            type='text'
            id='stringInput'
            value={inputValue}
            className='border-2 border-grey-500'
            onChange={handleInputChange}
          />
          <button
            className='bg-[#6FBED6] rounded-sm text-white ml-2 text-sm px-2'
            onClick={cleanString}
          >
            Clean String
          </button>
        </div>
      </div>
      <div className='flex gap-2 mt-4'>
        <h1 className='text-left text-sm'>Clean string:</h1>
        <h1 className='text-left text-sm text-[#6FBED6] font-medium'>
          {cleanedString}
        </h1>
      </div>
    </div>
  );
};

export default StringCleaner;
