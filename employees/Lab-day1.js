//1

var n = 100;
var s = n + " bottles of beer on the wall.";
console.log(s);

//2.	Конкатенация числа n с пустой строкой;

var s2 = String(44);
console.log(s2);

//3. 
var n = 10;
binary_string = n.toString(2);
console.log(binary_string);

//
var product = "21" * "2"
console.log(product)

var num = Number("44");
console.log(num)

console.log(parseInt("0xFF"));
console.log(parseInt("11", 2));
console.log(parseInt("eleven"));
console.log(parseFloat("$72.47"));

var n = 1;  
var m = n;  
function add_to_total(total, x)
{
    total = total + x;  
    return total;
}
console.log(add_to_total(n, m));

//5

var xmas = new Date(2007, 11, 25);
var solstice = xmas; 
solstice.setDate(21);
xmas.getDate( );  
console.log(solstice);
var xmas = new Date(2007, 11, 25);
var solstice_plus_4 = new Date(2007, 11, 25);
console.log(xmas.getDate( )==solstice_plus_4.getDate( ))

//II 1

var scope = "global";            
function checkscope( ) {
    var scope = "local";         
    console.log(scope);    
    var myscope = "local";       
    console.log(myscope);  
}
checkscope( );                
//console.log(scope);       
//console.log(myscope);


//b
var scope = "global scope";          
function checkscope( ) {
    var scope = "local scope";     
    function nested( ) {
        var scope = "nested scope";  
        console.log(scope);       
    }
    nested( );
}
checkscope( );

/*
2.	Как используя, оператор % можно получать последовательность 0,1,0,1,0,1 и т.д.? Эту возможность можно использовать для раскраски четных рядов таблицы в один цвет, нечетных – в другой. Реализуйте код, выводящий такую последовательность.
*/
/*
var i;
for (i=0;i<20;i++) {
    console.log(i%2);
}
*/
//

	var x = 10;
	switch (x) {
	  case 10:        
	    x = 15;
      break;  
	  case 15:  
	    alert('Question');   
      break;     
    	}

//Исключения
/*
var variable=15;
try {
    alert(variable);
  }
  catch (ex) {   
    alert(ex);
  }
  alert("Here");

*/

/*
function f() {
	try {
		throw 1;
	} catch(ex) {
      
		return ex;
	} finally {
		alert("Here!");
	}
  }
  alert(f());
*/

/*
function readAge() {
var age;    
    try {
        age = prompt("Введите ваш возраст: ");
        if ((age>90) || (age<18))
        {throw -1}
    }
    catch(e) {
        if (e==-1) {
        alert("Ошибка! Возраст может быть только от 18 до 90.");
        }
        
    }     
    finally {
        return age;
    }
}

alert(readAge());
*/

/*
try {
alert("hello");
someerrorcode;
}
catch(e) {
    alert("Что-то пошло не так");
}
finally {
alert("ok");
}
*/

/*
var i = 0;
do {
alert(i)
i++;
} while (i<10)
*/

/*
for (i in Document) {

    console.log(i + "   " + Document[i]);
}
*/

var o=[7,8,9,10,11,12,13];
for (var i=0;i<o.length; i++) {
console.log(i + " - " + o[i]);
}
