
    var oPointer = document.getElementsByTagName("img")[0];
    var oTurntable = document.getElementsByTagName("img")[1];
    var cat = 360 / 10;
    var num = 0;
    var offOn = true;
    document.title = "";

    oPointer.onclick = function() {
        if (offOn) {
            oTurntable.style.transform = "rotate(0deg)";
            offOn = !offOn;
            ratating();
        }

    }

    function ratating() {
        var timer = null;
        // var rdm = Math.floor(Math.random() * 36000);
        // if (rdm < 31000) {
        //     alert("!!!!!");
        //     rdm = 31000;
        // }
        clearInterval(timer);
        timer = setInterval(function() {
            var redice = true;
            while (redice) {
                var rdm = Math.floor(Math.random() * 18000);
                num = rdm % 360;
                // 客製化調整
                // if (num <= 10) {
                //     continue;
                // }
                var rotate_degree = rdm + 9000;
                oTurntable.style.transform = "rotate(" + rotate_degree + "deg)";
                clearInterval(timer);
                setTimeout(function() {
                    offOn = !offOn;
                    num = rdm % 360;
                    var today = new Date();
                    var week4 = new Date('2021-12-27');
                    var week3 = new Date('2021-12-20');
                    var week2 = new Date('2021-12-13');
                    var week1 = new Date('2021-12-06');
                    if (+today >= +week1) {
                        day = "1206";
                    }
                    if (+today >= +week2) {
                        day = "1213";
                    }
                    if (+today >= +week3) {
                        day = "1220";
                    }
                    if (+today >= +week4) {
                        day = "1227";
                    }
                    if (num <= cat * 1) {
                        $("#img_pre").attr("src", "img/prize/show_01.png");
                        $('#quickMenu').modal('show');

                        // alert("1 / " + num);
                    } else if (num <= cat * 2) {
                        $("#img_pre").attr("src", "img/prize/show_02.png");
                        $('#quickMenu').modal('show');

                        // alert("2 / " + num);
                    } else if (num <= cat * 3) {
                        $("#img_pre").attr("src", "img/prize/show_03.png");
                        $('#quickMenu').modal('show');
                        // alert("3 / " + num);
                    } else if (num <= cat * 4) {
                        $("#img_pre").attr("src", "img/prize/show_04.png");
                        $('#quickMenu').modal('show');

                        // alert("4 / " + num);
                    } else if (num <= cat * 5) {
                        $("#img_pre").attr("src", "img/prize/show_05.png");
                        $('#quickMenu').modal('show');
                        // alert("5 / " + num);
                    } else if (num <= cat * 6) {
                        $("#img_pre").attr("src", "img/prize/show_06.png");
                        $('#quickMenu').modal('show');

                        // alert("6 / " + num);
                    } else if (num <= cat * 7) {
                        $("#img_pre").attr("src", "img/prize/show_07.png");
                        $('#quickMenu').modal('show');

                        // alert("7 / " + num);
                    } else if (num <= cat * 8) {
                        $("#img_pre").attr("src", "img/prize/show_08.png");
                        $('#quickMenu').modal('show');
                        // alert("8 / " + num);
                    } else if (num <= cat * 9) {
                        $("#img_pre").attr("src", "img/prize/show_09.png");
                        $('#quickMenu').modal('show');
                        // alert("9 / " + num);
                    } else if (num <= cat * 10) {
                        $("#img_pre").attr("src", "img/prize/show_10.png");
                        $('#quickMenu').modal('show');
                        // alert("10 / " + num);
                    }

                }, 4000);
                redice = false;
            }
        }, 60);
    }

    function showmodal() {
        $('#quickMenu').modal('show');
    }
