//BÀI SỐ 1
//In số nguyên dương lẻ/chẵn nhỏ hơn 100 

// Dùng hàm lặp For
document.getElementById("btn1").onclick = function () {
    var arrayChan = " ";
    var arrayLe = " ";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            arrayChan = arrayChan + String(" " + i);
            console.log(arrayChan);

        } else if (i % 2 == 1) {
            arrayLe = arrayLe + String(" " + i);
            console.log(arrayLe);
        }
    }
    document.getElementById("txt1").innerHTML = String("Số chẵn: " + arrayChan + "<br> <br> Số lẻ: " + arrayLe);
}

// Dùng hàm lặp While
document.getElementById("btn1a").onclick = function () {
    var arrayChan = " ";
    var arrayLe = " ";
    var n = 0;
    while (n < 100) {
        if (n % 2 == 0) {
            arrayChan = arrayChan + String(" " + n);
            n++;

        } else if (n % 2 == 1) {
            arrayLe = arrayLe + String(" " + n);
            n++;
        }
    }
    document.getElementById("txt1a").innerHTML = String("Số chẵn: " + arrayChan + "<br> <br> Số lẻ: " + arrayLe);
}



// BÀI 2 
//Có bao nhiêu số chia hết cho 3 từ 0-1000 (viết cả while và for)

// Dùng hàm lặp For
document.getElementById("btn2").onclick = function () {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count += 1;

        }
    }
    document.getElementById("txt2").innerHTML = String("Các số chia hết cho 3, nhỏ hơn 1000 gồm có:  " + count + " số.");
}

// Dùng hàm lặp While
document.getElementById("btn2a").onclick = function () {
    var count = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            count++;
            i++;
        }
        i++;
    }
    document.getElementById("txt2a").innerHTML = String("Các số chia hết cho 3, nhỏ hơn 1000 gồm có:  " + count + " số.");
}



// BÀI 3 
//Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
function timN() {
    var sum = 0;
    var n = 1;
    while (sum <= 10000) {
        sum = n * (n + 1) / 2;
        n++;
    }
    document.getElementById("txt3").innerHTML = String("Số n là: " + n)
}
document.getElementById("btn3").onclick = timN;



//BÀI 4
//S(n) = x + x^2 + x^3 +... x^n 

document.getElementById("btn4").onclick = function () {
    var n = document.getElementById("inputN").value;
    var x = document.getElementById("inputX").value;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + Math.pow(x, i);
        console.log("sum = " + sum + "// x, i, n : " + x, i, n);
    }
    document.getElementById("txt4").innerHTML = String("Tổng (x + x^2 + x^3 +... x^n) là: " + sum);
}



//BÀI 5 
//Nhập vào n. Tính giai thừa 1*2*...n

document.getElementById("btn5").onclick = function () {
    var n = document.getElementById("inputN2").value;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;

    }
    document.getElementById("txt5").innerHTML = String("Giai thừa 1*2*...*n = " + result);
}



//BÀI 6
//Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh

document.getElementById("btn6").onclick = function () {
    var arrDiv = document.getElementsByClassName("B6");
    for (var i = 0; i <= arrDiv.length; i++) {
        if (i % 2 == 0) {
            arrDiv[i].style.background = "blue";
        } else {
            arrDiv[i].style.background = "red";
        }
    }
}



// BÀI 7
//Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input

// hàm kiểm tra số nguyên tố
function kiemTraSNT(n) {
    // Biến cờ hiệu
    var flag = true;
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}

// Hàm in ra các số nguyên tố từ 1 tới n
function print_SNT () {
    // Lấy number
    var number = document.getElementById("inputN3").value;
    // Ép number sang kiểu INT
    number = parseInt(number);
    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiemTraSNT(i)) {
            html += i + ' ';
        }
    }
    document.getElementById("txt7").innerHTML = String("Các số nguyên tố gồm: <br>"+ html);
}
document.getElementById("btn7").onclick = print_SNT;