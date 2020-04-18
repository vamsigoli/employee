import React from 'react';
import {Employee} from './types'
type EmployeeRowProps = {
    employee:Employee
}
export const EmployeeRow: React.FC<EmployeeRowProps> = (props) => {
    const {employee} = props;
    return (
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.description}</td>
        </tr>
    );
};

type EmployeeTableProps = { employees: Employee[]}
export const EmployeeTable :React.FC<EmployeeTableProps> =(prop) => {
    const employeeRecords =  prop.employees.map(one=> {
        return <EmployeeRow employee={one} />
    });

    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Description</th>
            </tr>
            {employeeRecords}
        </table>
    )
};