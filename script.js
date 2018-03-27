$(document).ready(function() {
    function stroke(cell, player){
        console.log(cell);
        console.log(player);
    };

    function getRandomInt(min, max) //генерируем целое число от min до max
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function aiClick(){ //ход ИИ
        aiStroke = getRandomInt(0,8); //генерируем номер клетки
        console.log("test = ", arrCells[aiStroke][1]);
        while(arrCells[aiStroke][1] == true){
            aiStroke = getRandomInt(0,8);
            console.log("while aiStroke = ", aiStroke);
        }
        console.log("aiStroke = ", aiStroke);
        aiStrokeId = "#"+aiStroke;  //создаём id
        arrCells[aiStroke][1] = true;
        if(player === "x"){
            $(aiStrokeId).css("background","url('img/o.png') no-repeat center / cover");
            list[aiStroke][1] = "o";
        }else{
            $(aiStrokeId).css("background","url('img/x.png') no-repeat center / cover");
            list[aiStroke][1] = "x";
        }
        strokeNumber++;
    };

    function checkResult(){ //проверка статуса игры
        if(
            (list[0][1] == player && list[1][1] == player && list[2][1] == player) ||
            (list[3][1] == player && list[4][1] == player && list[5][1] == player) ||
            (list[6][1] == player && list[7][1] == player && list[8][1] == player) ||
            (list[0][1] == player && list[3][1] == player && list[6][1] == player) ||
            (list[1][1] == player && list[4][1] == player && list[7][1] == player) ||
            (list[2][1] == player && list[5][1] == player && list[8][1] == player) ||
            (list[0][1] == player && list[4][1] == player && list[8][1] == player) ||
            (list[2][1] == player && list[4][1] == player && list[6][1] == player)
        ){
            setTimeout(function() {
                alert("YOU ARE WIN!");
                console.log("list ", list);
                endGame();
            }, 150);
        }else if(
            (list[0][1] == enemy && list[1][1] == enemy && list[2][1] == enemy) ||
            (list[3][1] == enemy && list[4][1] == enemy && list[5][1] == enemy) ||
            (list[6][1] == enemy && list[7][1] == enemy && list[8][1] == enemy) ||
            (list[0][1] == enemy && list[3][1] == enemy && list[6][1] == enemy) ||
            (list[1][1] == enemy && list[4][1] == enemy && list[7][1] == enemy) ||
            (list[2][1] == enemy && list[5][1] == enemy && list[8][1] == enemy) ||
            (list[0][1] == enemy && list[4][1] == enemy && list[8][1] == enemy) ||
            (list[2][1] == enemy && list[4][1] == enemy && list[6][1] == enemy)
        ){
            setTimeout(function() {
                alert("YOU ARE LOSE!");
                console.log("list ", list);
                endGame();
            }, 150);
        }else{
            if(strokeNumber == 9){
                setTimeout(function() {
                    alert("DRAW!");
                    endGame();
                }, 150);
                console.log("list ", list);
            }
        }
    }

    function endGame(){ //очищение поля
        console.log(list);
        for (let i = 0; i <= 8; i++){
            arrCells[i][1] = false;
            list[i][1] = "";
        }
        setTimeout(function() {
            $("td").css("background","none");
            console.log(arrCells);
            strokeNumber = 0;
        }, 100);
    }

    let arrCells = [[0,false],[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false]];
    console.log(arrCells);
    let list = [[0,], [1,], [2,], [3,], [4,], [5,], [6,], [7,], [8,]];
    let id_click, aiStroke, enemy;
    let strokeNumber = 0;
    $(".choice").click(function(){
        $(".choice-side, .select").css("display", "none");
        $("table").css("visibility", "visible");
        player = "x";
        enemy = "o";
    });

    $(".choice2").click(function(){
        $(".choice-side, .select").css("display", "none");
        $("table").css("visibility", "visible");
        player = "o";
        enemy = "y";
    });

    $("td").click(function(e){
        id_click = parseInt(e.target.id);
        if(arrCells[id_click][1] == false){
            console.log(id_click);
            arrCells[id_click] = [id_click, true];
            console.log(arrCells);
            if(player === "x"){
                $(this).css("background","url('img/x.png') no-repeat center / cover");
                list[id_click][1] = "x";
            }else{
                $(this).css("background","url('img/o.png') no-repeat center / cover");
                list[id_click][1] = "o";
            }
            strokeNumber++;
            if(strokeNumber < 9){
                aiClick();
            }
            checkResult();
        }
    });
});
