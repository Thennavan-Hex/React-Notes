import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Signup /> {/* Render the Signup component, not Signin */}
    </div>
  );
}

export default App;
