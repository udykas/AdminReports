import QueryBuilder from 'react-querybuilder';
import './App.scss';

function App() {
  return (
    <QueryBuilder
      fields={[{ name: "test", label: "Test" }]}
      onQueryChange={(q) => console.log(q)}
    />
  );
}

export default App;
