let name = prompt("Ismingizni kiriting");
let letter = prompt("Bironta harf kiriting");

if ('name.includes(letter)'){
 alert('${name} ismida ${letter} harfi mavjud')
}
else {
    alert('${name} ismida ${letter} harfi mavjud emas')
}