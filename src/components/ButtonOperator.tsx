interface ButtonProps {
  text: string;
  additionalClasses?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  additionalClasses,
  onClick,
}) => {
  const baseButton =
    'flex items-center justify-center sm:h-16 sm:pt-1 rounded-lg border-b-4 border-b-keyShadow-darkBlue bg-key-blue text-white text-3xl hover:bg-keyHover-lightBlue active:bg-key-blue/90 active:border-b-key-blue transition-colors';
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

