interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonNumber: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type='button'
      className={
        'flex justify-center items-center sm:pt-1 sm:h-16 rounded-lg border-b-4 border-b-keyShadow-grayishOrange bg-key-lightGrayishOrange text-4xl text-grayishBlue hover:bg-white active:bg-key-lightGrayishOrange/90 active:border-b-key-lightGrayishOrange/90 transition-colors'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonNumber;

