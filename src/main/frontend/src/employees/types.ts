import {HalResource} from './HALTypes';

export interface Employee  {
    firstName: string,
    lastName:string,
    description:string
}

export type EmployeeHAL = Employee & HalResource;

export type EmployeeHALContainer = {
    _embedded?: {
        ["employees"]: EmployeeHAL[];
    }
}