interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonNumber: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type='button'
      className={
        'flex items-center justify-center rounded-lg border-b-4 border-b-keyShadow-grayishOrange bg-key-lightGrayishOrange text-3xlPlus text-grayishBlue hover:bg-white active:bg-key-lightGrayishOrange/90 active:border-b-key-lightGrayishOrange/90 p-1.5'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonNumber;

