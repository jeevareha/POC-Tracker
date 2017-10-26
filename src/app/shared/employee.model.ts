export class EmployeeModel {
    portfolios = ['Services', 'Front End', 'Backend'];
    
    $key: string;
    name: string;
    EmpId: string;
    email: string;
    phnumber: number;
    portfolio: string = this.portfolios[0];
    password: string;

}
