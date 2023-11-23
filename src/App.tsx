import Calculator from './components/Calculator';
import { useTheme } from './contexts/themeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} bg-background w-full h-screen`}>
      <Calculator />
    </div>
  );
}

export default App;

