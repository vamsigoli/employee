package com.vamsi.springreact.employee.repository;

import com.vamsi.springreact.employee.domain.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}