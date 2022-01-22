import {Component} from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emlpoyers-list/employees-list";
import EmployeesAddForm from "../employers-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John", salary: 800, increase: false, rise: true, id: 1},
                {name: "Ed", salary: 3000, increase: true, rise: false, id: 2},
                {name: "Alex", salary: 500, increase: false, rise: false, id: 3},
                {name: "Olehandro", salary: 1000, increase: false, rise: false, id: 4}
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
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

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};// все что осле запятой перезаписывает старое
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //
        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data:data.map(item => {
                if(item.id === id) {
                    return{...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data}
                               onDelete={this.deleteItem}
                               onToggleIncrease={this.onToggleIncrease}
                               onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;