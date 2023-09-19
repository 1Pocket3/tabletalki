import React from 'react';
import { columns, data } from './Data';
import DataTable from './components/DataTable';

const App = () => {
  return (
    <div>
      <h1>Referrals - 345</h1>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default App;