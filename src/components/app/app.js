import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../emlpoyers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";


function App() {
    
    const data = [
        {name : "John", salary: 800, increase : false, id: 1},
        {name : "Ed", salary: 300, increase : true, id: 2},
        {name : "Alex", salary: 500, increase : false, id: 3},
        {name : "Olehandro", salary: 5000, increase : false, id: 4},
    ]

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;