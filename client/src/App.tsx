import { useState } from 'react';
import QueryBuilder, { formatQuery, RuleGroupType } from 'react-querybuilder';

import fields from './Fields'
import getOperators from './getOperators';
import './App.scss';

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
        getOperators={getOperators}
        query={query}
        onQueryChange={(q) => setQuery(q)}
      />
      <pre>{formatQuery(query, "sql")}</pre>
      <pre>{formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;
