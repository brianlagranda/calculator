import { useState } from 'react';

export default function Display() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');

    setInputValue(numericValue);
  };

  return (
    <div>
      <input
        name='display'
        id='displayInput'
        value={inputValue}
        className='my-6 h-28 w-full rounded-md bg-screen-darkBlue/90 px-6 text-right text-5xl text-white'
        onChange={handleInputChange}
      />
    </div>
  );
}

