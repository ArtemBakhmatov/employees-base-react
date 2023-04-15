import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => { // тут нам приходит массив с объетками

    const elements = data.map(item => { // весь массив перебираем (внутри объеткы)
        const {id, ...itemProps} = item; // для второго варианата
        return (
            //<EmployeesListItem 
                //key={item.id} 
                //name={item.name} 
                //salary={item.salary} 
                //increase={item.increase}
                //onDelete={() => onDelete(item.id)} 
                //onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))} /> // 1 вариант
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> // 2 вариант
        )
        // при 1-м варианте звездочки не срабатывали при клике, пришлось 2 варинат оставлять
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;