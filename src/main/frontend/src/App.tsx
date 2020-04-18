import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {EmployeeHAL, EmployeeHALContainer} from "./employees/types";
import {EmployeeTable} from "./employees/employee";

function App() {
    const [employeesState, setEmployeesState] = useState<EmployeeHAL[]>([]);
    useEffect(() => {
        axios.get<EmployeeHALContainer>('/api/employees').then(response => {
            if (response && response.data &&
                response.data._embedded &&
                response.data._embedded.employees) {
                setEmployeesState(response.data._embedded.employees);
            }
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header"/>
            <EmployeeTable employees={employeesState}/>
        </div>
    );
}

export default App;
