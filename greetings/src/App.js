import { useState } from 'react';
import './App.css';
import CardList from "./components/CardList";
import Search from './components/Search';
// import records from './data'


function App() {
  const [searchField, setSearchField] = useState('')
  const [dataRecord, setDataRecord] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setDataRecord(data));
  
  console.log(dataRecord)

  const filter = dataRecord.filter(record=>record.name.toLowerCase().includes(searchField.toLowerCase()))
  function inputHandler(event){
    setSearchField(event.target.value)
    // console.log(event.target.value)
  }
  console.log(searchField)
  return (
    <>
      <Search handleInput={inputHandler}/>
      <CardList record={filter}/> 
    </>
  );
}

export default App;
