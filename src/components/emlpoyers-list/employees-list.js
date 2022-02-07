
import "./employees-list.css";
import EmployeesListItem from "../employers-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleProp,onSalaryChange1}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id}
                               {...itemProps}
                               onDelete={() => onDelete(id)}
                               onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                               onSalaryChange2={(e)=> onSalaryChange1(e.currentTarget.value, id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;