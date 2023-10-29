import Button from './Button';

export default function Keypad() {
  return (
    <div className='grid w-full grid-cols-4 grid-rows-5 gap-5 rounded-lg bg-slate-800/40 p-8'>
      <Button text='7' />
      <Button text='8' />
      <Button text='9' />
      <Button text='DEL' additionalClasses='' />
      <Button text='4' />
      <Button text='5' />
      <Button text='6' />
      <Button text='+' />
      <Button text='1' />
      <Button text='2' />
      <Button text='3' />
      <Button text='-' />
      <Button text='.' />
      <Button text='0' />
      <Button text='/' />
      <Button text='x' />
      <Button text='RESET' additionalClasses='col-span-2' />
      <Button text='=' additionalClasses='col-span-2' />
    </div>
  );
}

