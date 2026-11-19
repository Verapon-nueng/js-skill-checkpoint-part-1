// Question #4
// ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 20 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let inventorylow = inventory[0].quantity
let inventoryname = inventory[0].name
for(let inventorycheck of inventory){
  if(inventorycheck.quantity < inventorylow){
    inventorylow = inventorycheck.quantity
    inventoryname = inventorycheck.name
    console.log(inventorycheck.quantity);
    console.log(inventoryname);
  }
  console.log(inventorycheck.quantity);
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventoryname}  ซึ่งมี ${inventorylow} ชิ้น`);



