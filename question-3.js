// Question #3
// - ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
    
    
//     | จำนวนตัวอักษรใน |`userPassword` | ผลลัพธ์ |
//     
//     | น้อยกว่า 6                     | “Weak” |
//     | ตั้งแต่ 6 จนถึง 10             | “Medium” |
//     | มากกว่า 10              | “Strong” |

let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
 if (userPassword.length < 6){
    userPassword ="Weak"
    return userPassword
 }else if (userPassword.length>=6 && userPassword.length<=10){
    userPassword ="Medium"
    return userPassword
 }else(userPassword.length>10)
    userPassword ="Strong"
    return userPassword
 
}
console.log(checkPasswordStrength(userPassword));



