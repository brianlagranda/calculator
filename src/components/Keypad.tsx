import ButtonNumber from './ButtonNumber';
import ButtonOperator from './ButtonOperator';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

export default function Keypad({ onButtonClick }: KeypadProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    onButtonClick(button.innerText);
  };

  return (
    <div className='grid w-full grid-cols-4 grid-rows-5 gap-5 rounded-lg bg-toggle-darkBlue/80 p-8'>
      <ButtonNumber text='7' onClick={handleClick} />
      <ButtonNumber text='8' onClick={handleClick} />
      <ButtonNumber text='9' onClick={handleClick} />
      <ButtonOperator
        text='DEL'
        additionalClasses='border-b-keyShadow-darkRed bg-key-red text-white text-2xl active:bg-key-red active:border-b-keyHover-lightRed hover:!bg-keyHover-lightRed'
        onClick={handleClick}
      />
      <ButtonNumber text='4' onClick={handleClick} />
      <ButtonNumber text='5' onClick={handleClick} />
      <ButtonNumber text='6' onClick={handleClick} />
      <ButtonOperator text='+' onClick={handleClick} additionalClasses='' />
      <ButtonNumber text='1' onClick={handleClick} />
      <ButtonNumber text='2' onClick={handleClick} />
      <ButtonNumber text='3' onClick={handleClick} />
      <ButtonOperator text='-' onClick={handleClick} additionalClasses='' />
      <ButtonNumber text='.' onClick={handleClick} />
      <ButtonNumber text='0' onClick={handleClick} />
      <ButtonOperator text='/' onClick={handleClick} additionalClasses='' />
      <ButtonOperator text='x' onClick={handleClick} additionalClasses='' />
      <ButtonOperator
        text='RESET'
        additionalClasses='col-span-2'
        onClick={handleClick}
      />
      <ButtonOperator
        text='='
        additionalClasses='col-span-2 border-b-keyShadow-darkRed bg-key-red text-white text-2xl active:bg-key-red/90 active:border-b-keyHover-lightRed hover:!bg-keyHover-lightRed'
        onClick={handleClick}
      />
    </div>
  );
}

