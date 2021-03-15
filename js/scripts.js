function startTimer() {
    var day = $("#day").val();
    var month = document.getElementById("months").value;
    var year = document.getElementById("year").value;
    var hour = $("#hour").val();
    var min = $("#min").val();
    var sec = 00;
    if (!validateDate(day,month)) {
        alert("Δεν δώσατε σωστή Ημερομηνία");
    }else {
        if (!validateTime(hour,min)){
            alert("Δεν δώσατε σωστή ώρα");
        }else{
            var time = hour + ":" + min + ":" + sec;
            var date = new Date(month + " " + day + ", " + year + " " + time).getTime();
            countdownStart(date);
        }
    }    
}

function validateDate(day,month){
    if (month == "Feb" && (day > 28 || day <1)){
        return false;
    }else if (month == "Jan" || month == "Mar" || month == "May" || month == "Jul" || month == "Aug" || month == "Oct" || month == "Dec") {
        if (day < 1 || day >31) {
            return false;
        }
    }else if (month == "Apr" || month == "Jun" || month == "Sep" || month == "Nov") {
        if (day < 1 || day >30) {
            return false;
        }
    }
    return true;
}

function validateTime(hour,min ){
    if (hour < 0 || hour > 23 || min <0 || min > 60) {
        return false;
    }else{
        return true;
    }
}

function countdownStart(date) {
    clearInterval(x);
    var x = setInterval(function() {
        var now = new Date().getTime();
        var dif = date - now;
        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        var years = Math.floor(days % (365));
        var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dif % (1000 * 60)) / 1000);
        if (years == 0 && days == 0 && hours == 0 && minutes == 0) {
            document.getElementById("countdown").innerHTML = seconds;
        }else if (years == 0 && days == 0 && hours == 0) {
            document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
        }else if (years == 0 && days == 0) {
            document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
        }else if (years == 0) {
            document.getElementById("countdown").innerHTML = days + " Μέρες " + hours + ":" + minutes + ":" + seconds;
        }else {
            document.getElementById("countdown").innerHTML = years + " Χρόνια " +  days + " Μέρες " + hours + ":" + minutes + ":" + seconds;
        }
        if (dif < 0) {
            clearInterval(x);
            alert("Τέλος Χρόνου");
        }
    },1000);
}