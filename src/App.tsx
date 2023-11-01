import ThemeSelector from './components/ThemeSelector';
import Calculator from './components/Calculator';

function App() {
  return (
    <main className='mx-auto mt-32 max-w-xl rounded-lg bg-slate-600 p-6'>
      <div className='flex w-full items-center justify-between px-4'>
        <h1 className='text-2xl font-bold text-white'>calc</h1>
        <ThemeSelector />
      </div>
      <Calculator />
    </main>
  );
}

export default App;

