import './App.css'
import Center from './components/Center';
import Header from './components/Header'
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <LeftSide />
        <Center />
        <RightSide />
      </div>
    </>
  );
}

export default App
