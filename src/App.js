import './App.css';
import CountryList from './components/CountryList';
import Header from './components/Header';
import Search from './components/Search';
import InfoBox from './components/InfoBox';

function App() {
	return (
		<div className='App'>
			<Header />
			<Search />
			<CountryList />
			<InfoBox/>
		</div>
	);
}

export default App;
