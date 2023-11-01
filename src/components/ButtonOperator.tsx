interface ButtonProps {
  text: string;
  additionalClasses: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  additionalClasses,
  onClick,
}) => {
  const baseButton =
    'flex items-center justify-center rounded-lg border-b-4 border-b-keyShadow-darkBlue bg-key-blue text-white text-2xl hover:bg-keyHover-lightBlue active:bg-key-blue/90 active:border-b-key-blue p-1.5';
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

