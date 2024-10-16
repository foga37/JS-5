//////1 
//for
console.log('for  task1///////////////////////////////////');
for(let a = 20; a <= 32; a += 2) {
    console.log(a);
}
//for of - етерує тільки масив, в даному завдані не вийде через for of, якщо так
console.log('for of task1///////////////////////////////////');
let a = [20,21,22,23,24,25,26,27,28,29,30,31,32];
for (let b of a) {
    if (b %2==0)
    console.log(b);
}
// for in 
console.log('for in task1///////////////////////////////////');
for(let key in a) {
   if (a[key] %2==0 )
    console.log(a[key]);
}
//while
console.log('while  task1///////////////////////////////////');
let a1 = 20
while (a1 <= 32) {
    a1 ++;
    if(a1 % 2 ==0)
    console.log(a1);
}
// do while 
console.log('do while  task1///////////////////////////////////');
let a2 = 20
do {
    console.log(a2);
    a2 += 2; 
}  while (a2 <= 32);
console.log(a2);
//////2 
console.log(' task2///////////////////////////////////');
let b1 = ['peach', 'gray', 'yaroslav', 7, 30]
console.log(typeof b1[0],typeof b1[1],typeof b1[2],typeof b1[3],typeof b1[4]);
//for
console.log('for  task2///////////////////////////////////');
for( let i = 0; i < b1.length; i++) {
    console.log(b1[i]);
}
//for of
console.log('for of task2///////////////////////////////////');
for(let el of b1) {
    console.log(el);
}
//for in
console.log('for in task2///////////////////////////////////');
for(let q in b1) {
    console.log(q, b1[q]);
}
//while\
console.log('while  task2///////////////////////////////////');
let c1 = 0;
while(c1 < b1.length ) {
    console.log(b1[c1]);
    c1++
}
//do while
console.log('do while  task2///////////////////////////////////');
let c2 = 0;
do{
    console.log(b1[c2]);
    c2++
} while(c2 < b1.length-1 ) 
    console.log(b1[c2]);
///////3
//for
console.log('for  task3///////////////////////////////////');
for(let i = 17; i <= 39; i += 2) {
    console.log(i);
} 
//for of
console.log('for of task3///////////////////////////////////');
let c3 = [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
for (let b of c3) {
    if (b %2==1)
    console.log(b);
}
//for in
console.log('for in task3///////////////////////////////////');
for(let w in c3) {
    if (w %2==0)
    console.log(c3[w]);
}
//while 
console.log('while  task3///////////////////////////////////');
let cc1 = 16
while (cc1 < 39) {
    if (cc1 > 16) {
        cc1 = cc1 + 2
    } else {
        cc1++
    }
    console.log(cc1); 
}
//do while
console.log('do while  task3///////////////////////////////////');
let cc2 = 17
do { 
    console.log(cc2);
    cc2 += 2
} while (cc2 <= 37)
console.log(cc2);
////4
//for
console.log('for task4///////////////////////////////////');
let d1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
for( i = 0; i < d1.length; i++) {
    if (i %2==0)
    console.log(d1[i])
} 
//for of
console.log('for of task4///////////////////////////////////');
let aa = 0;
for (let b of d1) {
    if (aa %2==0) {
    console.log(b);
    } aa++
} 
//for in 
console.log('for in task4///////////////////////////////////');
for (let i in d1) {
    if(i %2==0)
    console.log(d1[i])
}
//while 
console.log('while task4///////////////////////////////////');
let aa1 = 0;
while (aa1 < d1.length) {
    if(aa1 %2==0)
    console.log(d1[aa1])
    aa1 = aa1 + 1
}
// do while 
console.log('do while task4///////////////////////////////////');
let aa2 = 0;
do {
if (aa2 %2==0)
console.log(d1[aa2])
aa2++
} while (aa2 < d1.length)
console.log(d1[aa2]);
//5
//for
console.log('for task5///////////////////////////////////');
for( i = 0; i < d1.length; i++) {
    if (i %2==1)
    console.log(d1[i])
} 
//for of
console.log('for of task5///////////////////////////////////');
let bb1 = 0;
for (let b of d1) {
    if (bb1 %2==1) {
    console.log(b);
    } bb1++
} 
//for in
console.log('for in task5///////////////////////////////////');
for (let i in d1) {
    if(i %2==1)
    console.log(d1[i])
}
// while
console.log('while task5///////////////////////////////////');
let bb2 = 0;
while (bb2 < d1.length) {
    if(bb2 %2==1)
    console.log(d1[bb2])
    bb2++
}
// do while
console.log('do while task5///////////////////////////////////');
let bb3 = 0;
do {
if (bb3 %2==1)
console.log(d1[bb3])
bb3++
} while (bb3 < d1.length)
console.log(d1[bb3]);

//6
console.log('for TASK 6/////////////////////');
const q = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let w = 0;
for (i = 0; i < q.length; i++) {
    w += q[i]
} console.log(w)
// for of
console.log('for of TASK 6/////////////////////');
let w1 = 0;
for (let el of q) {
    w1 += el
} console.log(w1);
//for in
console.log('for in  TASK 6/////////////////////');
let w2 = 0
for (let el in q) {
    w2 += q[el] 
} console.log(w2);
//while 
console.log('while TASK 6/////////////////////');
let w4 = 0;
let w3 = 0;
while (w4 < q.length) {
    w3 += q[w4]
    w4++
} 
console.log(w3);  
// do while 
console.log('do while TASK 6/////////////////////');
let w5 = 0;
let w6 = 0
do { 
    console.log(q[w5]);
    w6 += q[w5]
    w5++
} while (w5 < q.length) 
  console.log(w6);
//7
//for
console.log('for TASK 7/////////////////////'); 
let qq1 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let n1 = 1;
for (i = 0; i < qq1.length; i++) {
    n1 *= qq1[i]
} console.log(n1)
// for of
console.log('for of TASK 7/////////////////////');
let n2 = 1;
for (let el of qq1) {
    n2 *= el
} console.log(n2);
// for in
console.log('for in  TASK 7/////////////////////');
let n3 = 1
for (let el in qq1) {
    n3 *= qq1[el] 
} console.log(n3);
// while
console.log('while TASK 7/////////////////////');
let ss1 = 0;
let ss2 = 1;
while (ss1 < qq1.length ) {
    ss2 *= qq1[ss1];
    ss1++
}
console.log(ss2);
// do while
let vvv = 0;
let sss = 1;
console.log('do while TASK 7/////////////////////');
do {
    sss *= qq1[vvv]
    vvv++;
} while (vvv < qq1.length)
console.log(sss);
    
//8
console.log('for TASK 8/////////////////////'); 
let pro = +prompt('Ведіть цифру від 0 до 100');
const lim = 100;
for (let i = 0; i <= pro; i++) {
   if (i > lim) {
    break;
   } else if (i >= 5 && i <= 10) {
    continue;
   }
    console.log(i);
}
//for of
console.log('for of TASK 8/////////////////////');
let arre = [];
for (let i = 0; i <= pro; i++){
    arre[i] = i;
} for (let el of arre) {  
    if (el > lim) {
        break;
    } else if (el>= 5 && el <=10) {
        continue;
    }
    console.log(el);
} 
// for in
console.log('for in TASK 8/////////////////////');
 for (let el in arre) {  
    if (el > lim) {
        break;
    } else if (el>= 5 && el <=10) {
        continue;
    }
    console.log(arre[el]);
} 
//while  
console.log('while TASK 8/////////////////////');
let f1 = 0;
while (f1 <= pro) {
    if (f1 >= 5 && f1 <=10) {
    f1++
    continue;
} if (f1 > lim) {
    break;
}
   console.log(f1);
   f1++
}
//do shile
console.log('do while TASK 8/////////////////////');
let f9 = 0;
do {
    if (f9 >= 5 && f9 <= 10) {
    f9++
    continue;
} if (f9 > lim) {
    break;
}
console.log(f9);
f9++
} while (f9 <= pro)