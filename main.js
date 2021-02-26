// Bai 1
document.getElementById("tongSoChan").addEventListener("click", tongSoChan);

function tongSoChan() {
    var n = +document.getElementById("n").value;
    var tong = 0;

    for (var i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            tong += i;
        }
    }
    document.getElementById("tongChan").innerHTML = tong;
}

// Bai 2
document.getElementById("demSoChia").addEventListener("click", demSoChia);

function demSoChia() {
    var dem = 0;
    for (i = 0; i <= 1000; i++) {
        if (i % 3 == 0) {
            dem++;
        }
    }
    document.getElementById("soChiaHet").innerHTML = dem;
}

// Bai 3
document.getElementById("tim").addEventListener("click", timSo);

function timSo() {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
        sum = sum + n;
        n++;
    }
    document.getElementById("min").innerHTML = n;
}

// Bai 4
document.getElementById("tinhS").addEventListener("click", tongS);

function tongS() {
    var n = +document.getElementById("n2").value;
    var x = +document.getElementById("x").value;
    var s = 0;
    var lt = 1;

    for (var i = 1; i <= n; i++) {
        lt = lt * x;
        s += lt;
    }
    document.getElementById("tongS").innerHTML = s;
}

// Bai 5
document.getElementById("tinhGiaiThua").addEventListener("click", tinhGiaiThua);

function tinhGiaiThua() {
    var n = +document.getElementById("n3").value;
    var gt = 1;

    for (var i = 1; i <= n; i++) {
        gt *= i;
    }
    document.getElementById("giaiThua").innerHTML = gt;
}