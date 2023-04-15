import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [ // тут мы предствляем как будто данные приходят с сервера
				{name: 'John C.', salary: 800, increase: false, id: 1},
				{name: 'Alex M.', salary: 3000, increase: true, id: 2},
				{name: 'Carl W.', salary: 15000, increase: false, id: 3}
			]
		};
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			// 1 вариант
			/* const index = data.findIndex(elem => elem.id === id);
			
			const before = data.slice(0, index);
			const after = data.slice(index + 1);

			const newArr = [...before, ...after]; */
			return {
				// data: newArr // 1 вариант
				data: data.filter(item => item.id !== id)
			}
		});
		// elem.id === id -> elem.id совпадает с атрибутом id
	}
	
	render() {
		return (
			<div className="app">
				<AppInfo />
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem} /> 
				<EmployeesAddForm/>
			</div>
		);
	}
}
// data={data} // data= -> новый созданный атрибут, {data} -> вставили массив data

export default App;
