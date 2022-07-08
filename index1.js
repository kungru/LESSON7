
//Bai 1
{let x;
    x=prompt('nhap bai 1');
console.log(x);
document.write( "Bai 1 <br>"+ x +"<br>");
let y=x/100*10;
let z=x/100*20;
let u=x/100*30;
if (x <7) {console.log(y) & document.write("Thuế" + y , "<br>lương ròng" + (x-y) +"<br>")} else if (x>=7 & x<15) {console.log(z) & document.write("Thuế" + z , "<br>lương ròng" + (x-z) +"<br>")} else {console.log(u) & document.write("Thuế" + u,"<br>lương ròng" + (x-u) +"<br>")};}
//Bai 2
{
    let x;
    x=prompt('nhap bai 2');
    console.log(x);
    document.write("Bai 2<br>" + x + "<br>");
    if (x<16) {console.log('Không đủ điều kiện vào học lớp 10') & document.write('Không đủ điều kiện vào học lớp 10')} 
    else {console.log('Đủ điều kiện vào học lớp 10') & document.write('Đủ điều kiện vào học lớp 10')}
}
//Bai 3
{
    let x,y,z;
    x=prompt('a bai 3');
    y=prompt('b bai 3');
    z=prompt('c bai 3');
    let numbers=[x,y,z];
    let c =  Math.max.apply(Math, numbers);
    document.write("<br> Bài 3 <br> Giá trị lớn nhất là "+c+"<br>");
}
//Bai 4 
{
    let x,y,z;
    x=prompt('x bai 4');
    y=prompt('y bai 4');
    z=prompt('z bai 4');
    if ((x+y+z)/3 >= 9) {document.write('Bài 4 <br> Hạng A')} 
    else if((x+y+z)/3 >= 7 & (x+y+z)/3 <9) {document.write('Bài 4 <br> Hang B')}
    else if((x+y+z)/3 >= 5 & (x+y+z)/3 <7) { document.write('Bài 4 <br> Hang C')}
    else {document.write('Bài 4 <br> Hang D')};
}
//Bai 5
{
    let x;
    x=prompt('Doanh số (đơn vị triệu)');
    if (x<=100) {document.write('<br>Bài 5<br>' +x*5/100 + 'triệu')} 
    else if (x>100 & x<=300) {document.write('<br>Bài 5<br>' +x*10/100+ 'triệu')}
    else  {document.write('<br>Bài 5<br>' + x*20/100 + 'triệu')};
}
Bai 6
{
    let  a,b,c;
a=prompt('nhập a bài 6');
b=prompt('nhập b bài 6');
c=prompt('nhập c bài 6');
console.log(typeof a);
a=Number(a);
b=Number(b);
c=Number(c);
console.log(typeof a);
let delta;
delta=b*b - 4*a*c;
if (a==0 && b==0 ) {document.write('<br>phương trình vô nghiệm')}
else if (a==0) {document.write('<br>phương trình có nghiệm là' + -c/b)}
else if (b*b - 4*a*c<0) {document.write('<br>phương trình vô nghiệm')}
else {document.write('<br>phương trình có nghiệm là:'+ (-b + Math.sqrt(delta))/(2*a) + ", "+ (-b - Math.sqrt(delta))/(2*a))}
}