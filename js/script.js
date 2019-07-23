document.addEventListener("DOMContentLoaded", function (event) {

        var HOURHAND = document.querySelector("#hour");
        var MINUTEHAND = document.querySelector("#minute");
        var SECONDHAND = document.querySelector("#second");

        setInterval(displayTime, 1000)
        function displayTime() {
            const now = new Date(),
                hr = now.getHours(),
                min = now.getMinutes(),
                sec = now.getSeconds();

            const hrAngle = hr * 30 + (min / 60) * 30 + (sec / 3600) * 30,
                minAngle = min * 6 + (sec / 60) * 6,
                secAngle = sec * 6;

            HOURHAND.style.transform = 'rotate(' + hrAngle + 'deg)';

            MINUTEHAND.style.transform = 'rotate(' + minAngle + 'deg)';

            SECONDHAND.style.transform = 'rotate(' + secAngle + 'deg)';
        }

    }

);