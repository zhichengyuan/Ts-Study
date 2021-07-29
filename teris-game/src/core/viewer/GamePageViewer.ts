import { SquareGroup } from "../SquareGroup";
import { GameStatus, GameViewer } from "../types";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from 'jquery'
import { Game } from "../Game";
import { GameConfig } from "../GameConfig";
import Pageconfig from "./Pageconfig";

export class GamePageViewer implements GameViewer{
    onGamePause(): void {
        this.msgDom.css({
            display:'flex'
        });
        this.msgDom.find('p').html('游戏暂停')
    }
    onGameStart(): void {
        this.msgDom.css({
            display:'none'
        });
    }
    onGameOver(): void {
        this.msgDom.css({
            display:'flex'
        });
        this.msgDom.find('p').html('游戏结束')
    }
    
    private nextDom = $('#next');
    private scoreDom = $('#score');
    private panlDom = $('#panel');
    private msgDom = $('#msg');
    showScore(score: number): void {
        this.scoreDom.html(score.toString())
    }
    init(game: Game): void {
        //1.设置宽高
        this.panlDom.css({
            width:GameConfig.panelSize.with * Pageconfig.SquareSize.width,
            height:GameConfig.panelSize.height * Pageconfig.SquareSize.height,
        })
        this.nextDom.css({
            width:GameConfig.nextSize.with * Pageconfig.SquareSize.width,
            height:GameConfig.nextSize.height * Pageconfig.SquareSize.height,
        })
        //2.注册键盘事件
        $(document).keydown((e) => {
            if(e.keyCode === 37) {
                game.controlLeft();
            }else if(e.keyCode === 38) {
                game.controlRotate()
            }else if(e.keyCode === 39) {
                game.controlRight()
            }else if (e.keyCode === 40) {
                game.controlDown();
            }else if (e.keyCode === 32) {
                if(game.gameStatus === GameStatus.playing) {
                    game.pause()
                }else {
                    game.start();
                }
            }
        })

    }
    showNext(teris: SquareGroup): void {
        teris.squares.forEach(sq => {
            sq.viewer = new SquarePageViewer(sq,this.nextDom);
        })
    }
    swtich(teris: SquareGroup): void {
        teris.squares.forEach(sq => {
            sq.viewer!.remove();
            sq.viewer = new SquarePageViewer(sq,this.panlDom);
        })
    }
    
}