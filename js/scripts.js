function startTimer() {
    var day = $("#day");
    var month = document.getElementById("months").value;
    var year = document.getElementById("year").value;
    var hour = $("#hour");
    var min = $("#min");
    var sec = 00;
    var date = year + "-" + month + "-" + day.val();
    var time = hour.val() + ":" + min.val() + ":" + sec;
    var val = moment(date);
    if (!val.isValid() || hour.val() > 23 || hour.val() < 0 || min.val() > 59 || min.val() < 0) {
        alert("Λαθος Ημερομηνία");
    }else {
        date = month + " " + day.val() + "," + year;
        countdownStart(date,time)
    }
}

function countdownStart(date,time) {
    clearInterval(x);
    var countDown = new Date(date + " " + time).getTime();
    var y = new Date(date + " " + time).getFullYear();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var nowYear = new Date().getFullYear();
        year = y -nowYear;
        count = countDown - now;
        var days = Math.floor(count/(1000*60*60*24));
        var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((count % (1000 * 60)) / 1000);
        if (year == 0) {
            document.getElementById('countdown').innerHTML = days + " Μέρες και " + hours + ":" + minutes + ":" + seconds + " s ";
        }else if (days == 0) {
            document.getElementById('countdown').innerHTML = hours + ":" + minutes + ":" + seconds + " s ";
        }else if (days == 0 && hours == 0) {
            document.getElementById('countdown').innerHTML = minutes + ":" + seconds + " s ";
        }else if (days == 0 && hours == 0 && minutes == 0) {
            document.getElementById('countdown').innerHTML = seconds + " s ";
        }else{
            document.getElementById('countdown').innerHTML = year + " Χρόνια " + days + " Μέρες και " + hours + ":" + minutes + ":" + seconds + " s ";
        }
        if (count < 0 ){
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Τελος Χρόνου";
            alert("Τέλος Χρόνου");
        }
    },1000);
}