(()=>{"use strict";const e={employees:[{id:1,name:"Владимир",surname:"Пафнутьев",department:"IT",phones:[],dateOfBirth:""},{id:2,name:"Владимир",surname:"Карасёв",department:"IT",phones:[],dateOfBirth:""},{id:3,name:"Алексей",surname:"Карасёв",department:"Бухгалетрия",phones:[],dateOfBirth:""},{id:4,name:"Владимир",surname:"Иванов",department:"Охрана",phones:[],dateOfBirth:""},{id:5,name:"Анна",surname:"Петрова",department:"Бухгалтерия",phones:[],dateOfBirth:""},{id:6,name:"Светлана",surname:"Хабибова",department:"Бухгалтерия",phones:[],dateOfBirth:""},{id:7,name:"Ольга",surname:"Хабирова",department:"Охрана",phones:[],dateOfBirth:""},{id:8,name:"Анна",surname:"Каренина",department:"IT",phones:[],dateOfBirth:""},{id:9,name:"Светлана",surname:"Карамазова",department:"Бухгалтерия",phones:[],dateOfBirth:""}]};const n={};function t(t){if(n[t])return n[t];for(var o of e.employees)if(t==o.id)return n[t]=o,o}function o(e,n){const o=t(e);o.phones||(o.phones=[]),o.phones.push(n)}console.log(function(n,t,o){var r=new Object,a=0;for(var s of e.employees)s.id>a&&(a=s.id);return a++,r.id=a,r.name=n,r.surname=t,r.deparment="Бухгалтерия",e.employees.push(r),a}("Олег","Иванов")),console.log(function(n){var t=0,o=!1;for(var r of e.employees){if(7===r.id){e.employees.splice(t,1),o=!0;break}t++}return o}()),new Object(e.employee),function(e){const n=Object.keys(e);console.log("Информация о сотруднике "+e.name+":");for(let t of n)console.log(t+" = "+e[t])}({id:8,name:"Анна",surname:"Каренина",department:"IT"}),function(){var e;o(10,"555-55-55"),o(10,"666-66-66"),e=new Date(2e3,1,1),t(10).dateOfBirth=e;const n=function(e){const n=t(e),o=n.phones?`Список телефонов: ${n.phones}`:"",r=n.dateOfBirth?`Возраст: ${function(e){const n=t(e);let o=Date.now()-n.dateOfBirth.getTime(),r=new Date(o);return Math.abs(r.getUTCFullYear()-1970)}(n.id)}`:"";return` \n     Имя: ${n.name}\n     Фамилия: ${n.surname}\n     Дата рождения: ${function(e){let n=e.getDate();n<10&&(n="0"+n);let t=e.getMonth()+1;return t<10&&(t="0"+t),n+"."+t+"."+e.getFullYear()}(n.dateOfBirth)}\n     ${o} \n     ${r}\n    `}(10);console.log(n)}(),console.log(function(e){const n=t(10);return JSON.stringify(n)}())})();
//# sourceMappingURL=bundle.js.map