import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => { // тут нам приходит массив с объетками

    const elements = data.map(item => { // весь массив перебираем (внутри объеткы)
        //const {id, ...itemProps} = item; // для второго варианата
        return (
            <EmployeesListItem 
                key={item.id} 
                name={item.name} 
                salary={item.salary} 
                increase={item.increase}
                onDelete={() => onDelete(item.id)} /> // 1 вариант
            //<EmployeesListItem 
                // key={id} 
                // {...itemProps}
                // onDelete={() => onDelete(id)} /> // 2 вариант // через spread оператор
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;