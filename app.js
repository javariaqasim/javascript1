 //  Chapter1
            // (Alert)

  //  Question 1:

alert("")
 
   //  Question 2:

   alert("Error! Please enter a valid passward.");
   
   //  Question 3:

   alert("Welcome to Js Land...\r\n Happy Coding!")

   
   //  Question 4:

   alert("Welcome to Js Land...");

   //  Question 5:

   alert("Happy Coding!\r\n prevent this page from creating additional dialogs");
   
   //  Question 6:

   alert("Hello...I can run JS through my web browsers cansole");
                  
           //       END
   //  Chapter2
           //    (VARIABLES FOR STRINGS)
   
   //  Question 1:

   var userName = (prompt("username", " username"));
   alert("username")
   
//    //  Question 2:

    var myName = (prompt("myname", " myname"));
    alert("myname")
   
//     //  Question 3 (a):

    var titled = (prompt("titled message"));
   document.write = (titled);
   alert("titled message")
   

//     //  Question 3 (b):

   var helloworld = ("hello world");
   document.getElementById("a").innerHTML = helloworld
   
   //  Question 3 (c):

   var helloworld = ("hello world");
   alert("hello world");
   
//    //  Question 4:

   var jhonedoe = ("jhonedoe");
   alert("jhonedoe");
   
   var old = ("15 years old");
   alert("15 years old");
   
 
   alert("certified Mobile Application Development");
   
//    // Question 5:

   alert("PIZZA\r\n PIZZ\r\n PIZ\r\n PI\r\n P")
   
//    //Question 6:

   alert("My email address is example@example.com");


//    //Question 7:
   alert("I am trying to learn from the book A smarter\r\n way to learn javascript");
   
//    //Question 8:

   var display = ("Yah! I can write HTML content through JavaScript");
   document.getElementById("b").innerHTML = display ;
   
//    //Question 9:

   var display = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
   document.getElementById("c").innerHTML = display ;
             
                   //   END 
   
   // chapter3   
           // (VARIABLES FOR NUMBERS)  

   // Question1

   var age=prompt("Enter age")
   var str1="I am "
   var str2=" years old"
   var res=str1.concat(age , str2);
   alert(res)
   
//    // Question2

var str1=" 14";
var str2="you have visited this site  ";
var str3=" times";
var res=str2.concat(str1 , str3);
alert(res)
   
//    //Question3

 var birthYear=1997
 document.write("My birth Year is "+birthYear)
 document.write("<br>")
 document.write(" Data type of my declared variable in number")
   
    //Question4
var name = prompt("Enter Name")
var prod = prompt("Enter Product")
var quat = prompt("Enter Quantity")
document.write(name+" ordered "+quat+" "+prod+" on XYZ Clothing store")
    

                   //   END 


   // chapter4   
           // (VARIABLE NAMES: LEGAL & ILLEGAL)  
 //Question 1

var name,middle,last

//Question 2

var name,middle,last,x,y
var You&i,first Name ,http: ,3rd-number , break;



   // Question3

   document.write("<h1>Rules for naming JS variables</h1>.<br> Variable names can only contain number,$, and _.For example $my_1stVariablev <br>Variables must begin with anumber,$, or _. For example $name, _name or name<br>Variable names are case Sensitive<br>Variable names should not be JS Keyword")
   
                    //   END
   // chapter5 
           // (MATH EXPRESSIONS)  

   // Question1  

   var num1 =  prompt("Enter Num1")
   var num2 = prompt("Enter Num2")
   var sum = (+num1)+(+num2)
   document.write("sum of "+num1+" and "+num2+" is " +sum)

   // Question2

   var num1 =  prompt("Enter Num1")
   var num2 = prompt("Enter Num2")
   var sum = (+num1)-(+num2)
   document.write("subtraction of "+num1+" and "+num2+" is " +sum)
 
   var num1 =  prompt("Enter Num1")
  var num2 = prompt("Enter Num2")
  var sum = num1*num2
 
  document.write("multiply of "+num1+" and "+num2+" is " +sum)
 
 
  var num1 =  prompt("Enter Num1")
  var num2 = prompt("Enter Num2")
  var sum = num1/num2
 
  document.write("division of "+num1+" and "+num2+" is " +sum)
 
  var num1 =  prompt("Enter Num1")
  var num2 = prompt("Enter Num2")
  var sum = num1%num2
 
  document.write("modul of "+num1+" and "+num2+" is " +sum)

   // Question3

   var a=5
   document.write("Valueafter variable declaration is undefined <br>")
   document.write("Initialvalue: "+a+"<br>")
   a++
   document.write("Value after increment is: "+a+"<br>")
   a=a+7
   document.write("Value after addition is:  "+a+"<br>")
   a--
   document.write("Value after decrement is:  "+a+"<br>")
   a=a%3
   document.write("The remainder is :  "+a+"<br>")

  // Question4

var a = "5"
var b = "3000" 
document.write("Total cost of buy" + a + "ticket to movie is" + b + "PKR")


 // Question5
              //  table of 4
 var table = +prompt("enter the number for multipication table", "enter here")
 document.write ("table of" + table + "<br>")


 document.write ( table + "x" + 1 + "=" + table* 1 + "<br>") 
 document.write ( table + "x" + 2 +"=" + table* 2 + "<br>") 
 document.write ( table + "x" + 3 +"=" + table* 3 + "<br>") 
 document.write ( table + "x" + 4 +"=" + table* 4 + "<br>") 
 document.write ( table + "x" + 5 +"=" + table* 5 + "<br>") 
 document.write ( table + "x" + 6 +"=" + table* 6  + "<br>") 
 document.write ( table + "x" + 7 +"=" + table* 7 + "<br>") 
 document.write ( table + "x" + 8 +"=" + table* 8 + "<br>") 
 document.write ( table + "x" + 9 +"=" + table* 9  + "<br>") 
 document.write ( table + "x" + 10 +"=" + table* 10 + "<br>") 

// Question6

var c=25
var f=70

document.write(c+"oC is"+((c*(9/5))+32)+"oF<br>")
document.write(f+"oF is"+((f-32)*(5/9))+"oC")

//  Question7

var price1 =650
 var qua1=3
 var price2 =100
 var qua2=7
 var charges=100
 var sum = ((price1*qua1)+(price2*qua2)+charges)
 document.write("price of item 1 is "+price1+"<br>Quantity of item 1 is "+qua1+"<br>price of item 2 is "+price2+"<br>Quantity of item 2 is "+qua2+"<br>Shipping Charges"+charges+"<br><br> Total cost of your order is "+sum)


//  Question8

var totalmarks = prompt("Enter your total marks"); 
var obtained_marks = prompt("Enter your obtained marks");
var percentage = obtained_marks * 100 / 980;

document.write("Total Marks:" + totalmarks + "<br>"  + "Marks obtained:" +  obtained_marks + "<br>");
document.write("Percentage:" + percentage + "<br>");



//  Question9

var total =(10*104.80)+(25*28)
document.write("<h1>Currency in PKR</h1>.<br>Total Currency in PKR : "+total)

//  Question10

var x=2
y=(x+5)*(10)/(2);
 document.write(y)

//  Question11

var a = prompt("Enter current year"); 
var b = prompt("Enter your birth year");
var c = prompt("Enter your age");
document.write("current year:" +  a + "<br>" + "Birth year:" + b + "<br>" +"Age:" + c + "<br>")

//  Question12

var radius = prompt("Enter radius")
var v= 3.142
document.write("<h1>The Geometrizer</h1><br>Radius of the cirsle :"+radius)
document.write("<br>Circumference of the cirsle :"+(radius*2*v))
document.write("<br>Area of the cirsle :"+(radius*radius*v))



//  Question13 

var snack ="hotdog"
var age =20
var maxAge=200
var est = 5
var total=(5*365)*(200-20)
document.write("<h1>The Lifetime Supply Calculator</h1><br>Favorite snack: "+snack)
document.write("<br>Current age: "+age)
document.write("<br>Estimated age: "+maxAge)
document.write("<br>Amount of snack per day: "+est)
document.write("<br>You will need "+total+ " to last you until the ripe old age of "+maxAge)

                   // END

 // chapter6   
           // (MATH EXPRESSIONS) 
// Question1

var a = 10

document.write("<br>" + "<br>" + "Result:" + "<br>")
document.write("<br>" + "The value of a is" + a)
document.write("<br>" + "------------------" + "<br>")
document.write("<br>" + "The value of ++a is:" + (++a))
document.write("<br>" + "Now the value of a is" + a + "<br>")
document.write("<br>" + "The value of a++ is:" + (a++))   
document.write("<br>" + "Now the value of a is" + a + "<br>")
document.write("<br>" + "The value of --a is:" + (--a)) 
document.write("<br>" + "Now the value of a is" + a + "<br>")
document.write("<br>" + "The value of a-- is:" + (a--)) 
document.write("<br>" + "Now the value of a is" + a)


// Question2

var result = --a - --b + ++b + b--
        //     3 = 1 - 0 + 1 + 1 
document.write ("<br>" + "<br>" + "a is :" + a)
document.write ("<br>" + "b is:" + b)
document.write ("<br>" + "result is:" + result)


// Question3

var name=prompt("Enter Name")

alert("Welcome"+name)


// Question5  

        //   table of 5
        var num =  prompt("Enter Num1")
        num=num*1
        if(num!=0){
        document.write("Table of "+num+"<br>")
        for( var i=1;i<11;i++){
       
            document.write(num+" x "+i+" = "+(num*i)+"<br>")
        }
        }
        else
        {
            document.write("Table of 5<br>")
            for( var i=1;i<11;i++){
           
                document.write("5 x "+i+" = "+(5*i)+"<br>")
             
           
            }
       
        }

// Question6

var sub1 = prompt("Enter Subject Name")
var sub2 = prompt("Enter Subject Name")
var sub3 = prompt("Enter Subject Name")
var total = 100
var mSub1 = prompt("Enter Subject Marks for "+sub1)
var mSub2 = prompt("Enter Subject Marks for" +sub2)
var mSub3 = prompt("Enter Subject Marks for "+sub3)

var percSub1 =(mSub1/total)*100
var percSub2 =(mSub2/total)*100
var percSub3 =(mSub3/total)*100
var subt=++mSub1 + ++mSub3 + ++mSub2
var subt=subt-3
--mSub1
--mSub2
--mSub3
var subtperc=(subt/300)*100


document.write("<table><tr> <td>"+sub1+"</td> <td>"+total+"</td> <td>"+mSub1+"</td> <td>"+percSub1+"%</td> </tr>   <tr> <td>"+sub2+"</td> <td>"+total+"</td> <td>"+mSub2+"</td> <td>"+percSub2+"%</td> </tr>   <tr> <td>"+sub3+"</td> <td>"+total+"</td> <td>"+mSub3+"</td> <td>"+percSub3+"%</td> </tr> <tr> <td></td> <td>"+total*3+"</td> <td>"+subt+"</td> <td>"+subtperc+"%</td> </tr> </table>")

