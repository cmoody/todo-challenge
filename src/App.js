/**
 * TODO API
 * GET https://jsonplaceholder.typicode.com/todos
 * GET https://jsonplaceholder.typicode.com/todos/1
 * POST https://jsonplaceholder.typicode.com/todos - userId, title, completed
 */
import {Typography} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" color="text.secondary" align="center">Test</Typography>
      <header className="App-header">
        <h1>Welcome!</h1>
      </header>
      <div>
        <input type="text" name="todo"/><button>Add</button>
      </div>
      <div id="todos">
        <ul>
          <li><input type="checkbox"/> Task 1</li>
          <li><input type="checkbox"/> Task 2</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
