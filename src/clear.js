


(function () {
    var gm_script_clear_baidu = function () {
        //console.log("gm_scnipt baidu run");
        var dom_node = document.getElementById("content_right");
        if (dom_node) {
            dom_node.innerHTML = "<span style='color:red;background-color:yellow;'>{{removed}}</span>";
        }
        var dom_node = document.getElementById("con-ar");
        if (dom_node) {
            dom_node.innerHTML = "<span style='color:red;background-color:yellow;'>{{removed}}</span>";
        }

        dom_node = document.getElementById("content_left");
        if (dom_node) {
            var childs = dom_node.childNodes;
            var replace = "<span style='color:red;background-color:yellow;'>{{ads removed}}</span>";
            for (var i in childs) {
                var c = childs[i];
                if (c.innerHTML) {
                    if (c.innerHTML.indexOf("¹ã¸æ</span>") >= 0) {
                        // console.log(c.innerHTML); 
                        c.innerHTML = replace;
                        replace = "";
                    }
                }
            }
        }
    }
    gm_script_clear_baidu();
    window.setInterval(gm_script_clear_baidu, 500);
})();
