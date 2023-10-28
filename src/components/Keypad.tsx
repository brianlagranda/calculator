import Button from './Button';

export default function Keypad() {
  return (
    <div className='bg-slate-800/40 text-white w-full grid grid-cols-4 grid-rows-5 gap-4 p-7 rounded-lg'>
      <Button text='7' />
      <Button text='8' />
      <Button text='9' />
      <Button text='DEL' />
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
      <button
        type='button'
        className='flex justify-center items-center col-span-2 rounded-lg text-black font-bold text-3xl bg-grayishOrange border-b-black border-4
      hover:from-emerald-500 hover:to-emerald-700
      active:from-emerald-600 active:to-emerald-800'
      >
        RESET
      </button>
      <button
        type='button'
        className='flex justify-center items-center col-span-2 rounded-lg text-black font-bold text-3xl bg-grayishOrange border-b-black border-4
      hover:from-emerald-500 hover:to-emerald-700
      active:from-emerald-600 active:to-emerald-800'
      >
        =
      </button>
    </div>
  );
}

