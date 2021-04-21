 let a;
 let date;
 let time; 
 var d; 
 var n;
 var weekday;
 setInterval(()=>{ 
 a=new Date();
 date=a.toLocaleDateString();
 time=a.getHours()+':'+ a.getMinutes()+':'+a.getSeconds(); 
document.getElementById('time').innerHTML= time;
document.getElementById('date').innerHTML= date;  
},1000);  

d = new Date();
weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

n = weekday[d.getDay()];
document.getElementById('demo').innerHTML = n;
 
   