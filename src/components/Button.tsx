interface ButtonProps {
  text: string;
  onClick: () => void;
  additionalClasses: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  additionalClasses,
}) => {
  const baseButton =
    'flex items-center justify-center rounded-lg border-b-4 border-b-keyShadow-grayishOrange bg-key-lightGrayishOrange text-3xlPlus text-grayishBlue hover:bg-white active:bg-key-lightGrayishOrange/90 p-1.5';

  return (
    <button
      type='button'
      className={`${baseButton} ${additionalClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

