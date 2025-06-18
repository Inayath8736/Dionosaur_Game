 let score = 0;
        document.onkeydown = function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 38 || e.keyCode == 32) {

                dino = document.querySelector(`.dino`);
                dino.classList.add(`animatedino`);
                setTimeout(() => {
                    dino.classList.remove(`animatedino`);
                }, 700);

            }
            if (e.keyCode == 39) {
                dino = document.querySelector(`.dino`);
                dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue(`left`));
                dino.style.left = dinox + 200 + "px";
            }
            if (e.keyCode == 37) {
                dino = document.querySelector(`.dino`);
                dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue(`left`));
                dino.style.left = dinox - 200 + "px";
            }
        }
        setInterval(() => {
            dino = document.querySelector(`.dino`);
            let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue(`left`));

            let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue(`top`));
            stone = document.querySelector(`.stone`);
            let ox = parseInt(window.getComputedStyle(stone, null).getPropertyValue(`left`));
            let oy = parseInt(window.getComputedStyle(stone, null).getPropertyValue(`top`));

            offsetx = Math.abs(dx - ox);
            offsety = Math.abs(dy - oy);
            console.log(offsetx, offsety);
            if (offsetx < 80 && offsety < 200) {
                let gameover = document.querySelector(`.gameover`);
                let points = document.querySelector(`.points`);
                let restart = document.querySelector(`.restart`);
                stone.classList.remove(`ani_stone`);
                gameover.classList.remove(`gameover-hidden`);
                points.innerHTML = "Score : " + Math.round(score);
                points.classList.remove(`gameover-hidden`);
                restart.classList.remove(`gameover-hidden`);
            }
            score = score + 0.05;
        }, 100);
        let btn = document.querySelector(`.btn`);
        btn.addEventListener('click', () => {
            window.location.reload();
        })
