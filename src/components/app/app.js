import {Component} from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../emlpoyers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name : "John", salary: 800, increase : false, id: 1},
                {name : "Ed", salary: 300, increase : true, id: 2},
                {name : "Alex", salary: 500, increase : false, id: 3},
                {name : "Olehandro", salary: 5000, increase : false, id: 4}
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList data={data}
                               onDelete={id => console.log(id)}/>
                <EmployeesAddForm/>
            </div>
        );
    }
}

export default App;