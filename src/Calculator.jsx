import {useState} from 'react'

function App() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [result, setResult] = useState(null);

  const calc = (mode) => {
    if (mode == 'add') return setResult(+firstInput + +secondInput);
    if (mode == 'sub') return setResult(+firstInput - +secondInput);
    if (mode == 'mul') return setResult(+firstInput * +secondInput);
    if (mode == 'div') return setResult(+firstInput / +secondInput);
  }

  return (
    <div>
      <input type="number" value={firstInput} onChange={e => setFirstInput(e.target.value)}></input>
      <button onClick={() => calc('add')}>+</button>
      <button onClick={() => calc('sub')}>-</button>
      <button onClick={() => calc('mul')}>*</button>
      <button onClick={() => calc('div')}>/</button>
      <input type="number" value={secondInput} onChange={e => setSecondInput(e.target.value)}></input>
      <span>{result}</span>
    </div>
  );
}

export default App
