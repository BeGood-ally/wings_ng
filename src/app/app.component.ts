import { Component } from '@angular/core';

class man {
  id: string; 
  fname: string; 
  lname: string; 
  mname: string
  
  constructor (id:string, fname:string, lname:string, mname:string){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.mname = mname;
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wings';
  head = [
    [['Номер','id'],['ФИО','Name']],
    [['Имя','firstName'],['Фамилия','lastName'],['Отчество','middleName']]
  ];
  people: man[] = [
    {id : '1', fname : 'Николай', lname : 'Васильевич', mname : 'Куссмауль'},
    {id : '2', fname : 'Семен', lname : 'Львович', mname : 'Шредингер'},
    {id : '3', fname : 'Алексей', lname : 'Никанорович', mname : 'Цукерберг'}
  ];
  addMan(id:string, fname:string, lname:string, mname:string){
    if (id == null || fname == null || lname == null || mname == null) return;
    this.people.push(new man (id, fname, lname, mname))
  }
}
