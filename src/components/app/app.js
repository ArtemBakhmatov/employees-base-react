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
				{name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
				{name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
				{name: 'Carl W.', salary: 15000, increase: false, rise: false, id: 3}
			],
			term: ''
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {    // удалить сотрудника
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

	// Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {   // добавить сотрудника
        const newItem = {
            name, 
            salary,
            increase: false,
			rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

	/* onToggleIncrease = (id) => {
		// 1 вариант решения
		/*
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, increase: !old.increase}; // ...old развернется и станет новым объетом
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

			return {
				data: newArr
			} 
		}) */

		// 2 вариант решения
		/* this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, increase: !item.increase} // возвращаем новый объект
				}
				return item; // если не совпало то вернет item
			})
		}))
	} */

	/*
	onToggleRise = (id) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, rise: !item.rise} // возвращаем новый объект
				}
				return item; // если не совпало то вернет item
			})
		}))
	} */

	// 3 варинат
	// onToggleIncrease и onToggleRise объединяем в один объект

	onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

	searchEmp = (items, term) => {   // поиск сотрудника
		if (term.length === 0) {
			return items; 
		}

		return items.filter(item => {
			return item.name.indexOf(term) > - 1
		});
	}

	onUpdateSearch = (term) => { 		// обновление сотрудника
		this.setState({term: term});
	}
	
	render() {
		const {data, term} = this.state;
		const employees = this.state.data.length;								// сколько всего сотрудников
        const increased = this.state.data.filter(item => item.increase).length;	// количество на повышение
		const visibleData = this.searchEmp(data, term); 						// видимые данные
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />
	
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter/>
				</div>
				
				<EmployeesList 
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					/* onToggleIncrease={this.onToggleIncrease} */
					/* onToggleRise={this.onToggleRise} */ /> 
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
// data={data} // data= -> новый созданный атрибут, {data} -> вставили массив data

export default App;
