import React from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',           // имя
            salary: ''          // зарплата
        };
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }; 
    // [e.target.name] -> это атрибут name в 29 и 34 строке

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return; // валидация при нажатии Добавить
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    };

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit} >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange} 
                        name="name" 
                        value={name} /> 
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange} 
                        name="salary" 
                        value={salary}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
    // value={name} -> управляемый элемент, строго проверяет
};

export default EmployeesAddForm;