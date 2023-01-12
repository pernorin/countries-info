import './App.css';
import CountryList from './components/CountryList';
import Header from './components/Header';
import Search from './components/Search';

function App() {
	return (
		<div className='App'>
			<Header />
			<Search />
			<CountryList />
		</div>
	);
}

export default App;
