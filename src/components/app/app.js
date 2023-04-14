import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
	const data = [ // тут мы предствляем как будто данные приходят с сервера
		{name: 'John C.', salary: 800, increase: false, id: 1},
		{name: 'Alex M.', salary: 3000, increase: true, id: 2},
		{name: 'Carl W.', salary: 15000, increase: false, id: 3}
	];
	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			
			<EmployeesList data={data}/> 
			<EmployeesAddForm/>
		</div>
	);
}
// data={data} // data= -> новый созданный атрибут, {data} -> вставили массив data

export default App;
