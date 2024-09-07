let xx = 0;
let $div = document.querySelector(".lefteye");
let $div1 = document.querySelector(".righteye");

//div.style.display = "none";

function inputFunction() {
    let uf = document.getElementById('user');
    xx = uf.selectionEnd;
    if(xx>34) {xx=34;}
    $div.velocity({
        paddingLeft: xx/1.5 + "px"
    }, {
        duration: 3,
        easing: "easeInQuad"
    });

    $div1.velocity({
        paddingLeft: xx/1.5 + "px"
    }, {
        duration: 3,
        easing: "easeInQuad"
    });

    if ( uf.selectionEnd >34 )
    {
        $div.velocity({
            paddingLeft: 21 + "px"
        }, {
            duration: 3,
            easing: "easeInQuad"
        });
        $div1.velocity({
            paddingLeft: 21 + "px"
        }, {
            duration: 3,
            easing: "easeInQuad"
        });
    }
}

function focusFunction(){
    $div.velocity({
        left: "102px",
        paddingTop: "11px",
        paddingLeft: xx/1.5 + "px"

    }, {
        duration: 200,
        easing: "easeInQuad"
    });

    $div1.velocity({
        left: "164px",
        paddingTop: "11px",
        paddingLeft: xx/1.5 + "px"

    }, {
        duration: 200,
        easing: "easeInQuad"
    });

}
function blurFunction(){

    $div.velocity({
        left: "110px",
        paddingTop: "0",
        paddingLeft: "0"
    }, {
        duration: 200,
        easing: "easeInQuad"
    });

    $div1.velocity({
        left: "174px",
        paddingTop: "0",
        paddingLeft: "0"
    }, {
        duration: 200,
        easing: "easeInQuad"
    });
}

function focusPasswordFunction(){
    $div.velocity({
        top:"60px",
        left:"120px"

    }, {
        duration: 200,
        easing: "easeInQuad"
    });

    $div1.velocity({
        top:"60px",
        left:"160px"

    }, {
        duration: 200,
        easing: "easeInQuad"
    });

}

function blurPasswordFunction(){
    $div.velocity({
        top:"75px",
        left:"110px"

    }, {
        duration: 200,
        easing: "easeInQuad"
    });

    $div1.velocity({
        top:"75px",
        left:"174px"

    }, {
        duration: 200,
        easing: "easeInQuad"
    });

}