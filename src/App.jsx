import './App.css';
import { Routes, Route } from 'react-router-dom';
import FilterableTable from './pages/FilterableTable';
import NotFound from './pages/NotFound';
import CreateForm from './pages/CreateForm';
import UpdateForm from './pages/UpdateForm';
import Nav from './components/Nav';

function App() {

  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<FilterableTable />} />
        <Route path='/addProduce' element={<CreateForm />} />
        <Route path='/updateProduce/:id' element={<UpdateForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
