import './App.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Namelist from './namelist.json';
import { useState } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext'

function App() {

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    email: { value: null, matchMode: FilterMatchMode.CONTAINS },
    phone: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })

  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};

  const renderHeader = () => {
    return (
        <div className="my-container">
            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
        </div>
    );
};

const header = renderHeader();

  return (
    <div className="App">
      <h1>List of Users</h1>

        <DataTable value={Namelist} paginator rows={5} filters={filters} filterDisplay='row' globalFilterFields={['name', 'email', 'phone']}
        header={header} emptyMessage='No users found'>
          <Column field='name' header='Name' sortable filter filterPlaceholder='Search by name' style={{minWidth: '12rem'}} />
          <Column field='email' header='Email' sortable filter filterPlaceholder='Search by email' style={{minWidth: '12rem'}} />
          <Column field='phone' header='Phone No.' sortable filter filterPlaceholder='Search by phone no.' style={{minWidth: '12rem'}} />
        </DataTable>

    </div>
  );
}

export default App;
