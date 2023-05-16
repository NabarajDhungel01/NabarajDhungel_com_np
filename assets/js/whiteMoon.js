var box = document.getElementById("moon")
            , moveby = 20;

        function setTrans(path) {
            var trans = "left 0.2s ease-in-out";
            if (path === 0) {
                trans = "top 0.2s ease-in-out";
            }
            box.style.transition = trans;
        }

        function changePos(pos, what) {
            if (pos >= 0) {
                if (what == "x") {
                    if ((pos + box.offsetWidth) <= document.body.offsetWidth) {
                        box.style.left = pos + "px";
                    } else {
                        box.style.left =
                            document.body.offsetWidth - box.offsetWidth + "px";
                    }
                } else {
                    box.style.top = pos + "px";
                }
            } else {
                if (what == "x") {
                    box.style.left = 0;
                } else {
                    box.style.top = 0;
                }
            }

        }

        document.onkeydown = function (e) {
            var key = e.keyCode;
            if (key == 37) {
                setTrans(1);
                changePos((box.offsetLeft - moveby), "x");
            }
            if (key == 38) {
                setTrans(0);
                changePos((box.offsetTop - moveby), "y");
            }
            if (key == 39) {
                setTrans(1);
                changePos((box.offsetLeft + moveby), "x");
            }
            if (key == 40) {
                setTrans(0);
                changePos((box.offsetTop + moveby), "y");
            }
        }


        function drag() {

            function rAt() {
                this.removeAttribute("dragActivity");
                this.style.zIndex = 0;
            }

            function getXY(e) {
                e = e || window.event;
                mx = e.clientX || e.pageX;
                my = e.clientY || e.pageY;
                return [mx, my];
            }

            function mDown(e) {
                var mXY = getXY(e);
                xb = mXY[0] - parseInt(this.offsetLeft);
                yb = mXY[1] - parseInt(this.offsetTop);
                this.setAttribute("dragActivity", "on");
                this.style.transition = "";
                this.style.zIndex = 10000;
            }

            function mMove(e) {

                if (this.getAttribute("dragActivity") == "on") {
                    var mXY = getXY(e);
                    this.style.left = mXY[0] - xb + "px";
                    this.style.top = mXY[1] - yb + "px";
                }

            }

            var draggables = document.getElementsByClassName("draggable"), xb = 0, yb = 0;
            for (var i = 0; i < draggables.length; i++) {

                var _t = draggables[i];
                _t.style.position = "absolute";

                _t.onmousedown = mDown;

                _t.onmouseup = rAt;

                _t.onmouseout = rAt;

                _t.onmousemove = mMove;

            }

        }
        drag();

