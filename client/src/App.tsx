import { useState } from 'react';
import QueryBuilder, { formatQuery, RuleGroupType } from 'react-querybuilder';

import './App.scss';
import fields from './Fields'

function App() {
  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: []
  });

  return (
    <>
      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={(q) => setQuery(q)}
      />
      <pre>{formatQuery(query, "sql")}</pre>
      <pre>{formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;
