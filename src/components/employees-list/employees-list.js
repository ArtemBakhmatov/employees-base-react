import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => { // тут нам приходит массив с объетками

    const elements = data.map(item => { // весь массив перебираем (внутри объеткы)
        return (
            <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/> // 1 вариант
            //<EmployeesListItem {...item}/> // 2 вариант // через spread оператор
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;