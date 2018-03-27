$(document).ready(function() {
    function stroke(cell, player){
        console.log(cell);
        console.log(player);
    };

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function aiClick(arrCells){
        aiCell = "#"+getRandomInt(0,8);
        if(player === "x"){
            $(aiCell).css("background","url('img/o.png') no-repeat center / cover");
        }else{
            $(aiCell).css("background","url('img/x.png') no-repeat center / cover");
        }
    };

    let arrCells = [[0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false]];
    console.log(arrCells);
    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let id_click, aiCell;
    $(".choice").click(function(){
        $(".choice-side, .select").css("display", "none");
        $("table").css("visibility", "visible");
        player = "x";
    });

    $(".choice2").click(function(){
        $(".choice-side, .select").css("display", "none");
        $("table").css("visibility", "visible");
        player = "o";
    });

    $("td").click(function(e){
        id_click = parseInt(e.target.id);
        console.log(id_click);
        if(player === "x"){
            $(this).css("background","url('img/x.png') no-repeat center / cover");
        }else{
            $(this).css("background","url('img/o.png') no-repeat center / cover");
        }
        aiClick();
    });
});
