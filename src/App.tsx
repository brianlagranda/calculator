import Keypad from './components/Keypad';
import Display from './components/Display';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <main className='bg-slate-600 rounded-lg p-6 w-132 mx-auto mt-32'>
      <div className='flex w-full justify-between items-center px-4'>
        <h1 className='text-white font-bold text-2xl'>calc</h1>
        <ThemeSelector />
      </div>
      <Display />
      <Keypad />
    </main>
  );
}

export default App;

