//  ทุกคำที่ใช้ในนี้ เพื่อความเข้าใจของตัวเองล้วน ๆ เรย

// ถ้าimport มาได้จะalert ขึ้น
// alert("Hello World!");

//////////////////////////////////
//---- Varible and Operator ----//
//////////////////////////////////

// การประกาศตัวแปรมี 3 แบบ ดังนี้ var, let, const
var x;
let y;
const z = 15; //const เป็นค่าคงที่ ไม่สามารถปป.ได้
x = 10;
y = x;

// console.log คล้าย ๆ การprint ใน py
console.log(x, " ", y, " ", z);

var name = "John";
var lastname = "Dou";
var a = "20";
var b = "10";
// console.log(name + lastname);
// console.log(name + x);
// console.log(a + b);

//// parseInt คือ การเปลี่ยนdata type ให้เป็น int
// console.log(parseInt(a) + parseInt(b));
// console.log(parseInt(a) * parseInt(b));
// console.log(parseInt(a) / parseInt(b));
// console.log(parseInt(a) - parseInt(b));

//  x++ โดย ++ แปลว่าจะบวกเพิ่มไป 1 จากตัวมันเอง
x++;
x = x + 1; // เขียนอีกแบบ

//  x-- โดย -- แปลว่าจะลบไป 1 จากตัวมันเอง
x--;
x = x - 1; // เขียนอีกแบบ

console.log(x);
console.log(x % 3); // แปล x หาร 3 เหลือเศษเท่าไร

// x += x คือ x บวกตัวเองเพิ่มไป x
x += x;
x = x + x; // เขียนอีกแบบ
console.log(x);

/////////////////////////////////
//-------- Data Types -------- //
/////////////////////////////////

//// 1. Data Types แบบ number
var xx = 123;

//// 2. Data Types แบบ string
var yy = "Hello";

//// 3. Data Types แบบ boolean
var zz = xx == yy; //true,false

//// 4. Data Types แบบ array โดยใน array index จะเริ่มจาก 0
var ar = ["red", "green", "blue"];

//// typeof เป็นการดู datatype
// console.log(typeof xx);
// console.log(typeof yy);
// console.log(zz, typeof zz);

// console.log(ar);
// console.log(ar[1]); // จะได้ green
// console.log(ar.length);  //ar.length เป็นการบอกความยาวของ ar

//// เพิ่มค่าไปใน ar
ar.push("black");
console.log(ar);

//// 5. Data Types แบบ Object ประกอบไปด้วย key กับ value
var obj = {
  name: "John", //name = key ส่วน "John" = value
  lastname: "Dou"
};

// console.log(obj);

//// การเรียกค่าเขียนได้2แบบ
// console.log(obj, obj.lastname);
// console.log(obj["name"]);

//// เพิ่ม key และ value ใหม่ไป
// obj.age = 20;
// console.log(obj);

//// 6. Data Types แบบ undefined มี 2 แบบ
// var un = undefined;
// var nu = null;

// console.log(typeof un);
// console.log(typeof nu);
// console.log(un == nu);  //false กับ false ได้ true
// console.log(un === nu); //=== เป็นการดูtypeเพิ่มได้ จะได้ false

//////////////////////////////////////////
//-------------- Function --------------//
//////////////////////////////////////////

//สร้าง func ไว้บวกเลข
//โดย plus เป็นชื่อ func และมีการรับค่ามา 2 ตัวคือ x, y
function plus(x, y) {
  return x + y;
}
//ประกาศตัวแปรมารับค่าการเรียกใช้ func
var r = plus(10, 20);
console.log("result", r);

//สร้าง func ไว้console.log
function log(data) {
  console.log(data);
  return;
}

//สร้าง func ไว้เรียกfunc plusอีกทีหนึ่ง
function plus2(x, y) {
  return plus(x, y);
}
//เรียกใช้ func
log(plus2(3, 4));

//สร้าง func ไว้หาพท.
function area(w, h, t) {
  if (t == "square") return w * h;
  else return Math.PI * x * x;
}
//เรียกใช้ func
log(area(10, 10, "square")); //เข้ากรณี if
log(area(10)); //เข้ากรณี else

////////////////////////////////////////////////
//------------------ Array ------------------- //
////////////////////////////////////////////////

//สร้าง array แบบที่ 1 (นิยมกว่า)
var myArr = ["string", 123, { text: "test" }, ["test"], true];

//สร้าง array แบบที่ 2 ใช้ new Array(ค่าข้างใน)
var myArr2 = new Array("string", 123, { text: "test" });

console.log(myArr2);
console.log(myArr[0]);

// แสดงค่าหลาย ๆ ตัว โดยใช้ loop มาช่วย
// โดยกำหนดให้ i = 0 (เริ่มจาก 0) และ i < myArr.length แล้ว i++
for (let i = 0; i < myArr.length; i++) {
  console.log("index: " + i, myArr[i]);
}
// เพิ่มเติม: myArr.length จะมีความยาวคือ indexตัวสุดท้าย + 1 (เหมือนpy)

//ใส่ค่าเพิ่ม โดยให้ myArr ลำดับที่ 5 เป็น "test test"
myArr[5] = "test test";
// log(myArr);

//ใส่ค่าเพิ่ม ไปในตัวสุดท้ายของ index
myArr.push("test index 5");
// log(myArr);

//ลบค่าตัวสุดท้ายของindexออก
myArr.pop();

//ใส่ค่าไปในตัวแรกของindex
myArr.unshift("test add 0 index");

//ลบค่าแรกของindexออก
myArr.shift();
// log(myArr);

//// loop array โดยไม่ใช้ for
//// => เป็นการประกาศfunc อีกแบบหนึ่ง เรียกว่า arrow function
//// (myVal, index) เป็นparameter ที่รับเข้ามาใน func
// myArr.map((myVal, index) => {
//   console.log("this is index " + index, " = ", myVal);
// });

//สร้าง array
var myArr3 = [
  { name: "Test1" },
  { name: "Test2" },
  { name: "Test3" },
  { name: "Test4" },
  { name: "Test5" }
];

var myNewArr3 = myArr3.map(function (val, ind) {
  return val.name;
});
console.log(myNewArr3);
// เพิ่มเติม: .map ไว้map ค่า ไปอยู่กับarrayใหม่

//loop arry โดยใช้ forEach
//ind คือ index
myArr3.forEach((val, ind) => {
  console.log(ind, " =", val);
});

//splice จะเป็นการเปลี่ยนแปลงค่าใน array เดิม
//array.splice(start, deleteCount, item1, item2, ...)
console.log("myArr3: ", myArr3);

myArr3.splice(1, 3); //เท่าที่เข้าใจคือ เริ่มลบที่ 1 ถึงตัวที่ 3 ดังนั้นจะเหลือ 0 กับ 4
console.log("splice: ", myArr3);

////////////////////////////////////////////////
//------------------ Object ------------------ //
////////////////////////////////////////////////

//สร้าง Object แบบที่ 1
var myObj = {};
console.log("Type Of myObj", typeof myObj);

//สร้าง Object แบบที่ 2
var myObj2 = new Object();
console.log("Type Of myObj2", typeof myObj2);

//เพิ่มค่าไปใน Object
myObj.name = "GOOGLE";
myObj.lastname = "GOOGLE.com";
myObj.age = "30";
myObj.name = "John"; //ถ้าkeyซ้ำกันจะไปทับกัน โดยจะใช้อันล่าสุด

//การเรียก Object มี 2 แบบ ดังนี้
console.log("myObj.name:", myObj.name);
console.log("myObj[name]:", myObj["name"]);

//เก็บเป็น function
myObj.nameLength = function () {
  return this.name.length; //return this.name.length จะreturn length ของname
};
myObj.name = "Jenny";
myObj["name"] = "Jackkkk";
myObj["age"] = 23;

console.log("myObj:", myObj);

//เรียก function nameLength()
console.log("nameLength", myObj.nameLength());

// console.log("Before", myObj);

//// ลบค่าบาง key ออกไป
delete myObj.lastname;
delete myObj["age"];
console.log("Affer", myObj);

////////////////////////////////////////////////
//--------------- if else for ----------------//
////////////////////////////////////////////////

//สร้าง array
var test1 = [
  { x: 78, y: 14 },
  { x: 23, y: 9 },
  { x: 87, y: 62 },
  { x: "57", y: 27 }
];

//loop arry โดยใช้ forEach
test1.forEach((val) => {
  //ตัวอย่าง if
  if (val.x > 50) console.log("X eqaul to ", val.x);
  else if (val.x == 57) console.log("X eqaul to ", val.x);
  else console.log("Y eqaul to ", val.y);
});

//ตัวอย่าง if
if (test1[0].y > 0) console.log("test1[0].y", test1[0].y);

////////////////////////////////////////////////
//---------------- switch --------------------//
////////////////////////////////////////////////

// switch  คล้าย ๆ กับ if else เป็นจริงจะทำ
var mySwitch = "two";

// switch (mySwitch) {
//   case "one":    //เคสที่ 1
//     console.log("mySwitch eqaul to 1");
//     break; //ใส่breakถ้าไม่อยากให้ทำเงื่อนไขอื่น ๆ ซ้ำ ให้ทำเพียงเงื่อนไขเดียวเท่านั้น
//   case "two":    //เคสที่ 2
//     console.log("mySwitch eqaul to 2");
//     break;
//   case "three":  //เคสที่ 3
//     console.log("mySwitch eqaul to 3");
//     break;
// }

////////////////////////////////////////////////
//------------------- Loop -------------------//
////////////////////////////////////////////////

//// for loop
// for (let x = 0; x <= 5; x++) {
// let x = 0 คือ เริ่มที่ x = 0  หยุดทำเมื่อ x <= 5 เมื่อทำไปครั้งนึงแล้วให้บวก x ไปอีก 1 (x++)
//   console.log("X = ", x);
// }

//// while loop
// let aaa = "test";
// while (aaa == "test") {
//   console.log("A equal to ", aaa);
// }

////////////////////////////////////////////////
//------------------- DOM --------------------//
////////////////////////////////////////////////

// DOM คือ DOCUMENT OBJECT MODEL เป็นtag ต่าง ๆ ในไฟล์ HTML

// มีคำสั่งดังนี้
/// การเข้าไปจัดการDOM โดยใช้ document.getElementById("myDiv")
var myDiv = document.getElementById("myDiv");
/// ใส่style
myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.backgroundColor = "red";
myDiv.innerHTML = "<h1>Hello World!</h1>";

/// ช่วงหลัง ๆ เริ่มงง ๆ
/// ใช้ .getElementsByClassName
var elements = document.getElementsByClassName("myClassName");
elements[0].innerHTML = "my class name";

/// อยากให้ขึ้นทุกอันต้องใช้ for
for (let e = 0; e < elements.length; e++) {
  elements[e].innerHTML = "my class name " + e;
}

/// ใช้ .getElementsByTagName
var myBody = document.getElementsByTagName("body");

var myh1 = document.createElement("h1");

var textNode = document.createTextNode("THIS IS A BODY");
myh1.appendChild(textNode);
myBody[0].appendChild(myh1);
