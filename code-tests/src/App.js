import logo from './logo.svg';
import './App.css';

/**
Imagine we are building a new web UI and need a TreeOutline component. This can be used to render structured tree data that the user can navigate - 
for example, a folder/file structure like you might see in your code editor:

- src/
  - app.js
  - main.js
  - img/
    - logo.png
- public/
  - index.html
  - favicon.ico
Each TreeNode has some data associated with it (for the folder structure, it will be the name of the folder/file that node represents), 
and can optionally have child nodes associated. For example, the node representing the public folder has two child nodes: index.html and favicon.ico. 
A tree also may have many top level nodes (in this example there are two - src/ and public/).

Create a component that takes in the tree as a property and renders it as HTML to the user. 
We can decide and control the exact structure of the tree and how it is provided to us by the caller.
**/


function App() {
  return (
    <div className="App">
      
        
    </div>
  );
}

export default App;
