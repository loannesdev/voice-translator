import { render } from 'preact';
import { lazy, Suspense } from 'preact/compat';
import { Toaster } from 'react-hot-toast';
import './index.css';

const App = lazy(() => import('./App'));

render(
  "webkitSpeechRecognition" in window
    ? <Suspense>
      <Toaster />
      <App />
    </Suspense>
    : <main className='font-bold text-3xl grid place-items-center h-screen p-4'>
      <h1 className='text-center'>Por favor, abra la página en otro navegador</h1>
    </main>,
  document.getElementById('app')
);