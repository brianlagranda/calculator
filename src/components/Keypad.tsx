import ButtonNumber from './ButtonNumber';
import ButtonOperator from './ButtonOperator';

export default function Keypad() {
  return (
    <div className='grid w-full grid-cols-4 grid-rows-5 gap-5 rounded-lg bg-toggle-darkBlue/80 p-8'>
      <ButtonNumber text='7' onClick={} />
      <ButtonNumber text='8' />
      <ButtonNumber text='9' />
      <ButtonOperator
        text='DEL'
        additionalClasses='border-b-keyShadow-darkRed bg-key-red text-white text-2xl active:bg-key-red active:border-b-keyHover-lightRed hover:!bg-keyHover-lightRed'
      />
      <ButtonNumber text='4' />
      <ButtonNumber text='5' />
      <ButtonNumber text='6' />
      <ButtonOperator text='+' />
      <ButtonNumber text='1' />
      <ButtonNumber text='2' />
      <ButtonNumber text='3' />
      <ButtonOperator text='-' />
      <ButtonNumber text='.' />
      <ButtonNumber text='0' />
      <ButtonOperator text='/' />
      <ButtonOperator text='x' />
      <ButtonOperator text='RESET' additionalClasses='col-span-2' />
      <ButtonOperator
        text='='
        additionalClasses='col-span-2 border-b-keyShadow-darkRed bg-key-red text-white text-2xl active:bg-key-red/90 active:border-b-keyHover-lightRed hover:!bg-keyHover-lightRed'
      />
    </div>
  );
}

