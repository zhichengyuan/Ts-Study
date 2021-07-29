import $ from 'jquery'
import { Game } from "./core/Game";
import { GamePageViewer } from "./core/viewer/GamePageViewer";

var g = new Game(new GamePageViewer());
// g.start()
$('#start').click(function () {
    g.start()
})
$('#stop').click(function () {
    g.pause()
})
$("#btnRight").click(function () {
    //更改中心点坐标
    g.controlRight()
})
$("#btnLeft").click(function () {
    //更改中心点坐标
    g.controlLeft()
})
$("#btnDown").click(function () {
    //更改中心点坐标
    g.controlDown()
})

$("#rotateClock").click(function () {
    //更改中心点坐标
    g.controlRotate()
})


