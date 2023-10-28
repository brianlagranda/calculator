interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type='button'
      className='flex justify-center items-center p-2 rounded-lg text-black font-bold text-3xl bg-grayishOrange border-b-black border-4
      hover:from-emerald-500 hover:to-emerald-700
      active:from-emerald-600 active:to-emerald-800'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

