interface DisplayProps {
  result: string | null;
}

const Display: React.FC<DisplayProps> = ({ result }) => {
  return (
    <div>
      <input
        name='display'
        id='displayInput'
        value={result ?? ''}
        className='my-6 h-28 w-full rounded-md bg-screen-darkBlue/90 px-6 text-right text-5xl text-white'
        readOnly
      />
    </div>
  );
};

export default Display;

