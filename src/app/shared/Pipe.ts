import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from '../shared/employee.model';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { EmployeeService } from '../services/employee.service';


@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {

    constructor(private firebase: AngularFireDatabase) {}

    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.employee.EmpId.toLowerCase().indexOf(input) > -1 || 
                el.employee.name.toLowerCase().indexOf(input) > -1 ||
                el.employee.email.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}