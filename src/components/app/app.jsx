import { cloneElement, Component } from 'react'
import AppAddNewEmployee from '../app-add-employee/app-add-new-employee'
import AppEmployeeList from '../app-employee/app-employee-list/app-employee-list'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'

import './app.scss'



export default class App extends Component {

    deleteEmployee = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }


    onIncrease = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);
            const newData = JSON.parse(JSON.stringify(data));
            newData[index].increase = !data[index].increase

            return {
                data: newData
            }
        });
    }

    addEmployee = (formData) => {
        this.setState(({ data }) => {
            let newId = data[data.length - 1].id + 1
            const newEmployee = { id: newId, ...formData, increase: false, isFav: false, }
            const newData = JSON.parse(JSON.stringify(data));
            newData.push(newEmployee)
            return {
                data: newData
            }
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: "John Smith",
                    salary: 1000,
                    increase: false,
                    isFav: false
                },
                {
                    id: 2,
                    name: "Alex Shepard",
                    salary: 950,
                    increase: false,
                    isFav: false
                },
                {
                    id: 3,
                    name: "Tom Jackson",
                    salary: 645,
                    increase: false,
                    isFav: false
                },
                {
                    id: 4,
                    name: "Adam Miller",
                    salary: 1245,
                    increase: false,
                    isFav: false
                },
                {
                    id: 5,
                    name: "Mila Yohovich",
                    salary: 877,
                    increase: false,
                    isFav: false
                },
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-and-filter block">
                    <h3> Search or Filter </h3>
                    <AppSearch />
                    <AppFilter />
                </div>
                <AppEmployeeList onDelete={this.deleteEmployee} onIncrease={this.onIncrease} data={this.state.data} />
                <AppAddNewEmployee addEmployee={this.addEmployee} />
            </div>
        )
    }
}