
import { DATA } from './employees-json';

//Поиск сотрудника по имени и фамилии
function findByName(name, surname) {
var Persons = new Array(); //массив 

for (var p of DATA.employees) {

    if ((!name || p.name===name) && (!surname || p.surname===surname)) {
    Persons.push(p);
}

}
return Persons;
}


//Добавление нового сотрудника
function addEmployee (name, surname, depart) {
 var Person = new Object();
 var newid=0;   
     //проверка обязательных полей
if ((!name)||(!surname)) {
    throw ("Ошибка! Имя и фамилия являются обязательными для добавления карточки сотрудника");
} else {
 //поиск максимума   
 for (var i of DATA.employees) {
     if (i.id>newid) {newid=i.id}
 }
 newid++;

 Person.id=newid;
 Person.name=name;
 Person.surname=surname;
 Person.deparment=depart;

 DATA.employees.push(Person);   
return newid;
}
}

//Удаление сотрудника по ID
function removeEmployee(id) {
var k=0;    
var find_flag=false; //Не нашёл такой ID

  if (!id) {throw("Ошибка! ID сотрудника не может быть пустым!")}
  else {
      for (var i of DATA.employees) {
        if (i.id === id) {
            DATA.employees.splice(k,1);
            find_flag=true;
            break;     
        }   
        k++;
      }
      return find_flag;
  }  
}

//Вывод в консоль информации о сотруднике
function showEmployee(employee) {
    const keys = Object.keys(employee);
    console.log("Информация о сотруднике "+employee["name"]+":");
    for (let key of keys) {
     console.log(key+ " = "+employee[key]);
    }
   }

//Вывод информаци о всех сотрудниках
function showEmployees() {
    // альтернативный вариант:
    // DATA.employees.forEach(showEmployee); 
    for (let e of DATA.employees) {
     showEmployee(e);
    }
   }
   
//Возвращает сотрудника по ID
/*
function findById(id) {
    for (var p of DATA.employees) {
     if (id==p.id) {
      return p;
     }
    }
}
*/

//кэш для поиска по ID
const employeeMap = {};

function findById(id) {
 if (employeeMap[id]) {
  return employeeMap[id];
 }
 for (var p of DATA.employees) {
  if (id==p.id) {
   employeeMap[id] = p;
   return p;
  }
 }
}

//Добавление телефона сотрудника
function addPhone(id, phone) {
 const employee = findById(id);
 const phones = employee.phones;
 if (!phones) {
  employee.phones = [];
 }
 employee.phones.push(phone);
}


//Установка даты рождения сотрудника
function setDateOfBirth(id, date) {
 const employee = findById(id);
 employee.dateOfBirth = date;
}

//
function getAge(id) {
    const employee = findById(id);
    let ageDiff = Date.now() - employee.dateOfBirth.getTime();
    let ageDate = new Date(ageDiff); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
   
//
function formatDate(date) {
 let day = date.getDate();
 if (day<10) day = '0'+day;
 let month = date.getMonth()+1;
 if (month<10) month = '0'+month;
 let year = date.getFullYear();

 return day + '.' + month + '.' + year;
}

//
function getEmployeeInfo(id) {
    const e = findById(id);
   
    const phones = e.phones?
     `Список телефонов: ${e.phones}`:'';
    const age = e.dateOfBirth?
     `Возраст: ${getAge(e.id)}`:'';
    return ` 
     Имя: ${e.name}
     Фамилия: ${e.surname}
     Дата рождения: ${formatDate(e.dateOfBirth)}
     ${phones} 
     ${age}
    `;
   }

   
//
function testEmployee() {
    addPhone(10, "555-55-55");
    addPhone(10, "666-66-66");
    setDateOfBirth(10, new Date(2000,1,1))
    const info = getEmployeeInfo(10);
    console.log(info);
   }


//   
function getEmployeeJSON(id) {
    const e = findById(id);
    return JSON.stringify(e);
}
   

console.log(addEmployee("Олег", "Иванов", "Бухгалтерия"));
console.log(removeEmployee(7)); //число не строка

var emp = new Object(DATA.employee);
emp = {id: 8,name: "Анна",surname: "Каренина",department: "IT"}
showEmployee(emp);
//showEmployees()

//console.log(findById(10))

testEmployee();
console.log(getEmployeeJSON(10));


//Основной блок
/*
for (var i of findByName("", "")) {
    
    console.log(i)
        
}  
*/
