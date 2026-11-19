// Question #5
// - ให้เขียนฟังก์ชันชื่อ `calculateTotalPrice` ที่รับ `products` และ `promotionCode` เป็น Argument
// - โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้

//     | โค้ดส่วนลด   | ส่วนลด |
//     
//     | `"SALE20"` | ลด 20% จากมูลค่ารวมของสินค้า**ในตะกร้า** |
//     | `"SALE50"` | ลด 50% จากมูลค่ารวมของสินค้า**ในตะกร้า** |
//     | ไม่มี        | ไม่ได้รับส่วนลด |

const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode){
  let totalprice = 0
    for(let product of products){
       totalprice =totalprice + product.price*product.quantity
       console.log(totalprice); 
      }
    if (promotionCode === "SALE20 "){
      totalprice = totalprice *0.80
    }else if (promotionCode === "SALE50"){
      totalprice = totalprice*0.5
    }else (promotionCode === "")
      totalprice = totalprice
    
    return totalprice
}
console.log(calculateTotalPrice(products,promotionCode));


