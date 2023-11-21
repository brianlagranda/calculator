import { useState } from 'react';

interface InputProps {
  onClick: (value: string) => void;
}

const ThemeSelector: React.FC<InputProps> = ({ onClick }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('1');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.currentTarget.value;
    onClick(selectedValue);
    setSelectedTheme(selectedValue);
  };

  return (
    <div className='text-white grid grid-cols-2 relative'>
      <p className='text-right pr-1 col-span-2 text-sm tracking-widestPlus'>
        1 2 3
      </p>
      <span className='text-sm font-bold text-center'>THEME</span>
      <div className='w-14 flex justify-center gap-1 bg-toggle-darkBlue/80 rounded-xl relative'>
        <input
          className='opacity-0'
          type='radio'
          value='1'
          name='theme'
          onChange={handleRadioChange}
        />
        <input
          className='opacity-0'
          type='radio'
          value='2'
          name='theme'
          onChange={handleRadioChange}
        />
        <input
          className='opacity-0'
          type='radio'
          value='3'
          name='theme'
          onChange={handleRadioChange}
        />
        {selectedTheme && (
          <div
            className='absolute h-3 w-3 bg-red-400 rounded-full'
            style={{
              left: `calc(29% * ${parseInt(selectedTheme, 10) - 1} + 10%)`,
              bottom: '4px',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;
