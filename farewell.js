const screenWidth = 1920;
const screenHeight = 1080;

// const axios = require('axios');

var GameScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function GameScene(){
        Phaser.Scene.call(this, {key: 'gameScene', active: true});
    },

    preload: function(){
        this.load.image('home', 'assets/home.jpg');
        this.load.image('fullscreen-button', 'assets/but-fullscreen.png');
        this.load.image('start-button', 'assets/but-start.png');
        this.load.image('start-black-button', 'assets/but-black-start.png');
        this.load.image('home-Q1', 'assets/home-Q1.png');
        this.load.image('text-home-Q1', 'assets/text-home-Q1.png');
        this.load.image('instruction', 'assets/instruction.png');
        this.load.image('close', 'assets/close.png');
        this.load.image('confirm', 'assets/confirm.png');
        this.load.image('leave', 'assets/leave.png');
        this.load.image('form', 'assets/form.png');
        this.load.image('finish', 'assets/finish.png');
        this.load.image('ch1', 'assets/ch-1.png');
        this.load.image('ch2', 'assets/ch-2.png');
        this.load.image('ch3', 'assets/ch-3.png');
        this.load.image('stop', 'assets/stop.png');
        this.load.image('stop-black', 'assets/stop-black.png');
        this.load.image('leave-bg', 'assets/leave-bg.jpg');
        this.load.image('restart', 'assets/restart.png');
        this.load.image('restart-black', 'assets/restart-black.png');
        this.load.image('yes', 'assets/yes.png');
        this.load.image('yes-black', 'assets/yes-black.png');

        this.load.image('Q1', 'assets/Q1.jpg');
        this.load.image('Q1-but-1', 'assets/but-Q1-1.png');
        this.load.image('Q1-but-2', 'assets/but-Q1-2.png');
        this.load.image('Q1-but-black-1', 'assets/but-black-Q1-1.png');
        this.load.image('Q1-but-black-2', 'assets/but-black-Q1-2.png');

        // Q1.5
        this.load.image('Q1.5', 'assets/Q1.5.jpg');
        this.load.image('Q1.5-but-1', 'assets/but-Q1.5-1.png');
        this.load.image('Q1.5-but-2', 'assets/but-Q1.5-2.png');
        this.load.image('Q1.5-but-black-1', 'assets/but-black-Q1.5-1.png');
        this.load.image('Q1.5-but-black-2', 'assets/but-black-Q1.5-2.png');

        this.load.image('Q1-Q2', 'assets/Q1-Q2.png');
        this.load.image('text-Q1-Q2', 'assets/text-Q1-Q2.png');

        this.load.image('Q2', 'assets/Q2.jpg')
        this.load.image('Q2-but-1', 'assets/but-Q2-1.png');
        this.load.image('Q2-but-2', 'assets/but-Q2-2.png');
        this.load.image('Q2-but-black-1', 'assets/but-black-Q2-1.png');
        this.load.image('Q2-but-black-2', 'assets/but-black-Q2-2.png');
        this.load.image('Q2-Q3', 'assets/Q2-Q3.png');
        this.load.image('text-Q2-Q3', 'assets/text-Q2-Q3.png');

        this.load.image('Q3', 'assets/Q3.jpg')
        this.load.image('Q3-but-1', 'assets/but-Q3-1.png');
        this.load.image('Q3-but-2', 'assets/but-Q3-2.png');
        this.load.image('Q3-but-black-1', 'assets/but-black-Q3-1.png');
        this.load.image('Q3-but-black-2', 'assets/but-black-Q3-2.png');
        this.load.image('Q3-Q4', 'assets/Q3-Q4.png');
        this.load.image('text-Q3-Q4-1', 'assets/text-Q3-Q4-1.png');
        this.load.image('text-Q3-Q4-2', 'assets/text-Q3-Q4-2.png');

        this.load.image('Q4', 'assets/Q4.jpg');
        this.load.image('Q4Q4Q5', 'assets/Q4+Q4-Q5.jpg');
        this.load.image('Q4-but-1', 'assets/but-Q4-1.png');
        this.load.image('Q4-but-2', 'assets/but-Q4-2.png');
        this.load.image('Q4-but-black-1', 'assets/but-black-Q4-1.png');
        this.load.image('Q4-but-black-2', 'assets/but-black-Q4-2.png');
        this.load.image('Q4-Q5', 'assets/Q4-Q5.png');
        this.load.image('text-Q4-Q5', 'assets/text-Q4-Q5.png');

        this.load.image('Q5', 'assets/Q5.jpg')
        this.load.image('Q5Q6Q7', 'assets/Q5+Q5-Q6+Q6.jpg');
        this.load.image('Q5-but-1', 'assets/but-Q5-1.png');
        this.load.image('Q5-but-2', 'assets/but-Q5-2.png');
        this.load.image('Q5-but-black-1', 'assets/but-black-Q5-1.png');
        this.load.image('Q5-but-black-2', 'assets/but-black-Q5-2.png');
        this.load.image('Q5-Q6', 'assets/Q5-Q6.png');
        this.load.image('text-Q5-Q6', 'assets/tt-Q5-Q6.png'); // Failed to use text-Q5-Q6.png, don't know why = =

        this.load.image('Q6', 'assets/Q6.jpg')
        this.load.image('Q6-but-1', 'assets/but-Q6-1.png');
        this.load.image('Q6-but-2', 'assets/but-Q6-2.png');
        this.load.image('Q6-but-3', 'assets/but-Q6-3.png');
        this.load.image('Q6-but-black-1', 'assets/but-black-Q6-1.png');
        this.load.image('Q6-but-black-2', 'assets/but-black-Q6-2.png');
        this.load.image('Q6-but-black-3', 'assets/but-black-Q6-3.png');
        this.load.image('Q6-Q7', 'assets/Q6-Q7.png');
        this.load.image('text-Q6-Q7', 'assets/text-Q6-Q7.png');

        this.load.image('Q7', 'assets/Q7.jpg');
        this.load.image('Q7-1', 'assets/Q7-1.png');
        this.load.image('Q7-2', 'assets/Q7-2.png');
        this.load.image('Q7-3', 'assets/Q7-3.png');
        this.load.image('Q7-4', 'assets/Q7-4.png');
        this.load.image('Q7-5', 'assets/Q7-5.png');
        this.load.image('Q7-6', 'assets/Q7-6.png');
        this.load.image('Q7-7', 'assets/Q7-7.png');
    },

    create: function(){

        this.points = [null, null, null, null, null, null, null];

        this.cameras.main.backgroundColor.setTo(255,255,255);

        const button_scale = 0.8;

        // Home page
        this.home = this.add.image(screenWidth/2, screenHeight/2, 'home').setDisplaySize(screenWidth, screenHeight);
        fullScreenButton = this.add.image(1820, 100, 'fullscreen-button');
        startButton = this.add.image(948, 760, 'start-button').setScale(button_scale);
        blackStartButton = this.add.image(948, 760, 'start-black-button').setVisible(false).setScale(button_scale);

        // Home trans
        this.home_Q1 = this.add.image(960, 540+1080, 'home-Q1');
        this.ch1 = this.add.image(960, 540, 'ch1').setAlpha(0).setScale(0.48);
        this.text_home_Q1 = this.add.image(960, 540, 'text-home-Q1').setAlpha(0).setScale(0.5);

        // Q1
        this.Q1 = this.add.image(960, 540+1080, 'Q1');
        this.Q1_but_1 = this.add.image(804, 640, 'Q1-but-1').setAlpha(0).setScale(button_scale);
        this.Q1_but_2 = this.add.image(1124, 640, 'Q1-but-2').setAlpha(0).setScale(button_scale);
        this.Q1_but_black_1 = this.add.image(804, 640, 'Q1-but-black-1').setVisible(false).setScale(button_scale);
        this.Q1_but_black_2 = this.add.image(1124, 640, 'Q1-but-black-2').setVisible(false).setScale(button_scale);

        // Q1.5
        this.Q1_5 = this.add.image(960, 540, 'Q1.5').setAlpha(0);
        this.Q1_5_but_1 = this.add.image(804, 640, 'Q1.5-but-1').setAlpha(0).setScale(button_scale);
        this.Q1_5_but_2 = this.add.image(1124, 640, 'Q1.5-but-2').setAlpha(0).setScale(button_scale);
        this.Q1_5_but_black_1 = this.add.image(804, 640, 'Q1.5-but-black-1').setVisible(false).setScale(button_scale);
        this.Q1_5_but_black_2 = this.add.image(1124, 640, 'Q1.5-but-black-2').setVisible(false).setScale(button_scale);

        // Q1 trans
        this.Q1_Q2 = this.add.image(960, 540+1080, 'Q1-Q2');
        this.text_Q1_Q2 = this.add.image(960, 540, 'text-Q1-Q2').setAlpha(0).setScale(0.5);

        // Q2
        this.Q2 = this.add.image(960, 540+1080, 'Q2');
        this.Q2_but_1 = this.add.image(767, 614, 'Q2-but-1').setAlpha(0).setScale(button_scale);
        this.Q2_but_2 = this.add.image(1213, 614, 'Q2-but-2').setAlpha(0).setScale(button_scale);
        this.Q2_but_black_1 = this.add.image(767, 614, 'Q2-but-black-1').setVisible(false).setScale(button_scale);
        this.Q2_but_black_2 = this.add.image(1213, 614, 'Q2-but-black-2').setVisible(false).setScale(button_scale);

        // Q2 trans
        this.Q2_Q3 = this.add.image(960, 540+1080, 'Q2-Q3');
        this.text_Q2_Q3 = this.add.image(960, 540, 'text-Q2-Q3').setAlpha(0).setScale(0.5);

        // Q3
        this.Q3 = this.add.image(960, 540+1080, 'Q3');
        this.Q3_but_1 = this.add.image(756, 926, 'Q3-but-1').setAlpha(0).setScale(button_scale);
        this.Q3_but_2 = this.add.image(1164, 926, 'Q3-but-2').setAlpha(0).setScale(button_scale);
        this.Q3_but_black_1 = this.add.image(756, 926, 'Q3-but-black-1').setVisible(false).setScale(button_scale);
        this.Q3_but_black_2 = this.add.image(1164, 926, 'Q3-but-black-2').setVisible(false).setScale(button_scale);

        // Q3 trans
        this.Q3_Q4 = this.add.image(960, 540+1080, 'Q3-Q4');
        this.ch2 = this.add.image(960, 540, 'ch2').setAlpha(0).setScale(0.48);
        this.text_Q3_Q4_1 = this.add.image(960, 540, 'text-Q3-Q4-1').setAlpha(0).setScale(0.5);
        this.text_Q3_Q4_2 = this.add.image(960, 540, 'text-Q3-Q4-2').setAlpha(0).setScale(0.5);

        // Q4
        this.Q4 = this.add.image(960, 540+1080, 'Q4');
        this.Q4Q4Q5 = this.add.image(960, 1080+1080, 'Q4Q4Q5');
        this.Q4_but_1 = this.add.image(571, 465, 'Q4-but-1').setAlpha(0).setScale(button_scale);
        this.Q4_but_2 = this.add.image(1344, 465, 'Q4-but-2').setAlpha(0).setScale(button_scale);
        this.Q4_but_black_1 = this.add.image(571, 465, 'Q4-but-black-1').setVisible(false).setScale(button_scale);
        this.Q4_but_black_2 = this.add.image(1344, 465, 'Q4-but-black-2').setVisible(false).setScale(button_scale);

        // Q4 trans
        this.Q4_Q5 = this.add.image(960, 540+1080, 'Q4-Q5');
        this.text_Q4_Q5 = this.add.image(960, 540, 'text-Q4-Q5').setAlpha(0).setScale(0.5);

        // Q5 
        this.Q5 = this.add.image(960, 540+1080, 'Q5');
        this.Q5Q6Q7 = this.add.image(960, 540+1080+1080, 'Q5Q6Q7');
        this.Q5_but_1 = this.add.image(440, 556, 'Q5-but-1').setAlpha(0).setScale(button_scale);
        this.Q5_but_2 = this.add.image(1479, 556, 'Q5-but-2').setAlpha(0).setScale(button_scale);
        this.Q5_but_black_1 = this.add.image(440, 556, 'Q5-but-black-1').setVisible(false).setScale(button_scale);
        this.Q5_but_black_2 = this.add.image(1479, 556, 'Q5-but-black-2').setVisible(false).setScale(button_scale);

        // Q5 trans
        this.Q5_Q6 = this.add.image(960, 540+1080, 'Q5-Q6');
        this.ch3 = this.add.image(960, 540, 'ch3').setAlpha(0).setScale(0.48);
        this.text_Q5_Q6 = this.add.image(960, 540, 'text-Q5-Q6').setAlpha(0).setScale(0.5);

        // Q6
        this.Q6 = this.add.image(960, 540+1080, 'Q6');
        this.Q6_but_1 = this.add.image(600, 828, 'Q6-but-1').setAlpha(0).setScale(button_scale);
        this.Q6_but_2 = this.add.image(960, 828, 'Q6-but-2').setAlpha(0).setScale(button_scale);
        this.Q6_but_3 = this.add.image(1272+48, 828, 'Q6-but-3').setAlpha(0).setScale(button_scale);
        this.Q6_but_black_1 = this.add.image(600, 828, 'Q6-but-black-1').setVisible(false).setScale(button_scale);
        this.Q6_but_black_2 = this.add.image(960, 828, 'Q6-but-black-2').setVisible(false).setScale(button_scale);
        this.Q6_but_black_3 = this.add.image(1272+48, 828, 'Q6-but-black-3').setVisible(false).setScale(button_scale);

        // Q6 trans
        this.Q6_Q7 = this.add.image(960, 540+1080, 'Q6-Q7');
        this.text_Q6_Q7 = this.add.image(960, 540, 'text-Q6-Q7').setAlpha(0).setScale(0.5);

        // Q7
        this.Q7 = this.add.image(960, 540+1080, 'Q7');
        this.Q7_1 = this.add.image(960, 50, 'Q7-1').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);
        this.Q7_2 = this.add.image(960, 50, 'Q7-2').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);
        this.Q7_3 = this.add.image(960, 50, 'Q7-3').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);
        this.Q7_4 = this.add.image(960, 50, 'Q7-4').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);
        this.Q7_5 = this.add.image(960, 50, 'Q7-5').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);
        this.Q7_6 = this.add.image(960, 50, 'Q7-6').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);
        this.Q7_7 = this.add.image(960, 50, 'Q7-7').setAlpha(0).setOrigin(0.5, 0).setScale(0.48);

        // Finish
        // this.finish = this.add.image(960, 540+1080, 'finish');
        this.close = this.add.image(960+350, 540-150, 'close').setAlpha(0).setScale(0.48);
        this.confirm = this.add.image(960, 540, 'confirm').setAlpha(0).setScale(0.8);
        this.finish = this.add.image(960, 540, 'finish').setAlpha(0).setScale(0.48);
        this.form = this.add.image(960, 540, 'form').setAlpha(0).setScale(0.48);
        this.instruction = this.add.image(960, 540, 'instruction').setAlpha(0).setScale(0.48);
        this.leave_bg = this.add.image(960, 540, 'leave-bg').setAlpha(0);
        this.leave = this.add.image(960, 540, 'leave').setScale(0.48).setAlpha(0);
        this.restart = this.add.image(960, 940, 'restart').setScale(button_scale).setAlpha(0);
        this.restart_black = this.add.image(960, 940, 'restart-black').setVisible(false).setScale(button_scale);
        this.stop = this.add.image(1820, 980, 'stop').setAlpha(0).setScale(0.48);
        this.stop_black = this.add.image(1820, 980, 'stop-black').setVisible(0).setScale(0.48);
        this.yes_black = this.add.image(960, 540+20, 'yes-black').setVisible(0).setScale(0.8);
        this.yes = this.add.image(960, 540+20, 'yes').setVisible(0).setScale(0.8);

        // Timelines
        this.homeTransTimeline = this.createHomeTransTimeline();
        this.instructionTimeline = this.createInstructionTimeline();
        this.Q1Timeline = this.createQ1Timeline();
        this.Q1_5Timeline = this.createQ1_5Timeline();
        this.Q1TransTimeline = this.createQ1TransTimeline();
        this.Q1_5TransTimeline = this.createQ1_5TransTimeline();
        this.Q2Timeline = this.createQ2Timeline();
        this.Q2TransTimeline = this.createQ2TransTimeline();
        this.Q3Timeline = this.createQ3Timeline();
        this.Q3TransTimeline1 = this.createQ3TransTimeline1();
        this.Q3TransTimeline2 = this.createQ3TransTimeline2();
        this.Q4Timeline = this.createQ4Timeline();
        this.Q4TransTimeline = this.createQ4TransTimeline();
        this.Q5Timeline = this.createQ5Timeline();
        this.Q5TransTimeline = this.createQ5TransTimeline();
        this.Q6Timeline = this.createQ6Timeline();
        this.Q6TransTimeline = this.createQ6TransTimeline();
        this.finishTimeline = this.createFinishTimeline();

        this.Q7_text = null;

        // Fullscreen button
        fullScreenButton.setInteractive();
        fullScreenButton.on('pointerup', () => {
            this.scale.startFullscreen();
            fullScreenButton.setVisible(false);
        })

        // Start game button
        startButton.setInteractive();
        this.hover(startButton, blackStartButton);
        startButton.on('pointerup', ()=>{
            startButton.setVisible(false);
            blackStartButton.setVisible(false);
            this.instructionTimeline.play();
            this.stop.setAlpha(1);
            this.hover(this.stop, this.stop_black);
            this.stop.setInteractive();
            this.instructionTimeline.on('complete', ()=>{
                this.instruction.setInteractive();
                this.home_Q1.setInteractive();
            })
        })

        this.instruction.on('pointerup', ()=>{
            this.homeTransTimeline.play();
            this.homeTransTimeline.on('complete', ()=>{
                this.home_Q1.setInteractive();
            })
        })

        // Home transformation page to Q1 after click
        this.home_Q1.on('pointerup', ()=>{
            if(this.text_home_Q1.alpha < 1){
                this.homeTransTimeline.play();
                this.homeTransTimeline.on('complete', ()=>{
                    this.home_Q1.setInteractive();
                })
                return;
            }
            this.Q1Timeline.play();
            this.Q1Timeline.on('complete', ()=>{
                this.Q1_but_1.setInteractive();
                this.Q1_but_2.setInteractive();
            })
        })

        // Stop game
        this.hover(this.yes_black, this.yes);
        this.stop.on('pointerup', ()=>{
            console.log('stop pointer up');
            this.confirm.setAlpha(1);
            this.close.setAlpha(1);
            this.yes_black.setVisible(true);
            this.close.setInteractive();
            this.yes_black.setInteractive();
        })        
        this.stop_black.on('pointerup', ()=>{
            console.log('stop pointer up');
            this.confirm.setAlpha(1);
            this.close.setAlpha(1);
            this.yes_black.setVisible(true);
            this.close.setInteractive();
            this.yes_black.setInteractive();
        })

        this.close.on('pointerup', ()=>{
            this.confirm.setAlpha(0);
            this.close.setAlpha(0);
            this.yes.setVisible(false);
            this.yes_black.setVisible(false);
            this.yes.disableInteractive();
            this.close.disableInteractive();
        })

        this.yes.on('pointerup', ()=>{
            axios({
                method: 'post',
                url: '/points',
                data: {
                  points: this.points
                }
              })
              .then(function (response) {
                console.log(response);
              })
            this.yes.disableInteractive();
            this.confirm.setAlpha(0);
            this.yes.setVisible(false);
            this.yes_black.setVisible(false);
            this.finish.setAlpha(1);       
            setTimeout(() => {
                this.scene.restart();
            }, 5000);
        })

        // Q1 option 1 clicked, to Q1 trans page
        this.hover(this.Q1_but_1, this.Q1_but_black_1);
        this.hover(this.Q1_but_2, this.Q1_but_black_2);
        this.Q1_but_1.on('pointerup', ()=>{
            this.points[0] = 0;
            this.Q1_but_1.setAlpha(0);
            this.Q1_but_2.setAlpha(0);
            this.Q1_but_black_1.setVisible(false);
            this.Q1_but_black_2.setVisible(false);
            this.Q1TransTimeline.play();
            this.Q1TransTimeline.on('complete', ()=>{
                this.Q1_Q2.setInteractive();
                this.blackStop();
            })
        })

        // Q1 right button clicked, go to Q1.5
        this.hover(this.Q1_5_but_1, this.Q1_5_but_black_1);
        this.hover(this.Q1_5_but_2, this.Q1_5_but_black_2);
        this.Q1_but_2.on('pointerup', ()=>{
            this.points[0] = -1;
            this.Q1_but_1.setAlpha(0);
            this.Q1_but_2.setAlpha(0);
            this.Q1_but_black_1.setVisible(false);
            this.Q1_but_black_2.setVisible(false);
            this.Q1_5.setAlpha(1);
            this.Q1.setVisible(false);
            this.Q1_5Timeline.play();
            this.Q1_5Timeline.on('complete', ()=>{
                this.Q1_5_but_1.setInteractive();
                this.Q1_5_but_2.setInteractive();
            })
        })

        // Q1.5 arbitary button clicked, to Q1 trans page
        this.Q1_5_but_1.on('pointerup', ()=>{
            this.points[1] = 0;
            this.Q1_5_but_1.setAlpha(0);
            this.Q1_5_but_2.setAlpha(0);
            this.Q1_5_but_black_1.setVisible(false);
            this.Q1_5_but_black_2.setVisible(false);
            this.Q1_5TransTimeline.play();
        })
        this.Q1_5_but_2.on('pointerup', ()=>{
            this.points[1] = -1;
            this.Q1_5_but_1.setAlpha(0);
            this.Q1_5_but_2.setAlpha(0);
            this.Q1_5_but_black_1.setVisible(false);
            this.Q1_5_but_black_2.setVisible(false);
            this.Q1_5TransTimeline.play();
        })
        this.Q1_5TransTimeline.on('complete', ()=>{
            this.Q1_Q2.setInteractive();
            this.blackStop();
        })

        // Q1 trans to Q2
        this.Q1_Q2.on('pointerup', ()=>{
            this.Q2Timeline.play();
            this.Q2Timeline.on('complete', ()=>{
                this.Q2_but_1.setInteractive();
                this.Q2_but_2.setInteractive();
                this.whiteStop();
            });
        })

        // Q2 arbitary button is clicked, go to Q2 trans page
        this.hover(this.Q2_but_1, this.Q2_but_black_1);
        this.hover(this.Q2_but_2, this.Q2_but_black_2);
        this.Q2_but_1.on('pointerup', ()=>{
            this.points[2] = 1;
            this.Q2_but_1.setAlpha(0);
            this.Q2_but_2.setAlpha(0);
            this.Q2_but_black_1.setVisible(false);
            this.Q2_but_black_2.setVisible(false);
            this.Q2TransTimeline.play();
        })
        this.Q2_but_2.on('pointerup', ()=>{
            this.points[2] = 0;
            this.Q2_but_1.setAlpha(0);
            this.Q2_but_2.setAlpha(0);
            this.Q2_but_black_1.setVisible(false);
            this.Q2_but_black_2.setVisible(false);
            this.Q2TransTimeline.play();
        })
        this.Q2TransTimeline.on('complete', ()=>{
            this.Q2_Q3.setInteractive();
            this.blackStop();
        })

        // Q2 trans to Q3
        this.Q2_Q3.on('pointerup', ()=>{
            this.Q3Timeline.play();
            this.Q3Timeline.on('complete', ()=>{
                this.Q3_but_1.setInteractive();
                this.Q3_but_2.setInteractive();
                this.whiteStop();
            })
        })

        // Q3 arbitary button is clicked, go to Q3 trans page
        this.hover(this.Q3_but_1, this.Q3_but_black_1);
        this.hover(this.Q3_but_2, this.Q3_but_black_2);
        this.Q3_but_1.on('pointerup', ()=>{
            this.points[3] = 0;
            this.Q3_but_1.setAlpha(0);
            this.Q3_but_2.setAlpha(0);
            this.Q3_but_black_1.setVisible(false);
            this.Q3_but_black_2.setVisible(false);
            this.Q3TransTimeline1.play();
            this.Q3TransTimeline1.on('complete', ()=>{
                this.Q3_Q4.setInteractive();
            })
        })
        this.Q3_but_2.on('pointerup', ()=>{
            this.points[3] = 1;
            this.Q3_but_1.setAlpha(0);
            this.Q3_but_2.setAlpha(0);
            this.Q3_but_black_1.setVisible(false);
            this.Q3_but_black_2.setVisible(false);
            this.Q3TransTimeline2.play();
            this.Q3TransTimeline2.on('complete', ()=>{
                this.Q3_Q4.setInteractive();
            })
        })

        // Q3 trans to Q4
        this.Q3_Q4.on('pointerup', ()=>{
            this.Q4Timeline.play();
            this.Q4Timeline.on('complete', ()=>{
                this.Q4_but_1.setInteractive();
                this.Q4_but_2.setInteractive();
            })
        })

        // Q4 arbitary button is clicked, go to Q4 trans page
        this.hover(this.Q4_but_1, this.Q4_but_black_1);
        this.hover(this.Q4_but_2, this.Q4_but_black_2);
        this.Q4_but_1.on('pointerup', ()=>{
            this.points[4] = 1;
            this.Q4_but_1.setAlpha(0);
            this.Q4_but_2.setAlpha(0);
            this.Q4_but_black_1.setVisible(false);
            this.Q4_but_black_2.setVisible(false);
            this.Q4TransTimeline.play();
        })
        this.Q4_but_2.on('pointerup', ()=>{
            this.points[4] = 0;
            this.Q4_but_1.setAlpha(0);
            this.Q4_but_2.setAlpha(0);
            this.Q4_but_black_1.setVisible(false);
            this.Q4_but_black_2.setVisible(false);
            this.Q4TransTimeline.play();
        })
        this.Q4TransTimeline.on('complete', ()=>{
            this.Q4Q4Q5.setInteractive();
        })

        // Q4 trans to Q5
        this.Q4Q4Q5.on('pointerup', ()=>{
            this.Q5Timeline.play();
            this.Q5Timeline.on('complete', ()=>{
                this.Q5_but_1.setInteractive();
                this.Q5_but_2.setInteractive();
            })
        })

        // Q5 arbitary button is clicked, go to Q5 trans page
        this.hover(this.Q5_but_1, this.Q5_but_black_1);
        this.hover(this.Q5_but_2, this.Q5_but_black_2);
        this.Q5_but_1.on('pointerup', ()=>{
            this.points[5] = 1;
            this.Q5_but_1.setAlpha(0);
            this.Q5_but_2.setAlpha(0);
            this.Q5_but_black_1.setVisible(false);
            this.Q5_but_black_2.setVisible(false);
            this.Q5TransTimeline.play();
        })
        this.Q5_but_2.on('pointerup', ()=>{
            this.points[5] = 0;
            this.Q5_but_1.setAlpha(0);
            this.Q5_but_2.setAlpha(0);
            this.Q5_but_black_1.setVisible(false);
            this.Q5_but_black_2.setVisible(false);
            this.Q5TransTimeline.play();
        })
        this.Q5TransTimeline.on('complete', ()=>{
            this.Q5Q6Q7.setInteractive();
            this.blackStop();
        })

        // Q5 trans to Q6
        this.Q5Q6Q7.on('pointerup', ()=>{
            this.Q6Timeline.play();
            this.Q6Timeline.on('complete', ()=>{
                this.Q6_but_1.setInteractive();
                this.Q6_but_2.setInteractive();
                this.Q6_but_3.setInteractive();
                // this.whiteStop();
            })
            this.Q5Q6Q7.disableInteractive();
        })

        // Q6 arbitary button is clicked, go to Q6 trans page
        this.hover(this.Q6_but_1, this.Q6_but_black_1);
        this.hover(this.Q6_but_2, this.Q6_but_black_2);
        this.hover(this.Q6_but_3, this.Q6_but_black_3);
        this.Q6_but_1.on('pointerup', ()=>{
            this.points[6] = 0;
            this.Q6_but_1.setAlpha(0);
            this.Q6_but_2.setAlpha(0);
            this.Q6_but_3.setAlpha(0);
            this.Q6_but_black_1.setVisible(false);
            this.Q6_but_black_2.setVisible(false);
            this.Q6_but_black_3.setVisible(false);
            this.Q6TransTimeline.play();
        })
        this.Q6_but_2.on('pointerup', ()=>{
            this.points[6] = 1;
            this.Q6_but_1.setAlpha(0);
            this.Q6_but_2.setAlpha(0);
            this.Q6_but_3.setAlpha(0);
            this.Q6_but_black_1.setVisible(false);
            this.Q6_but_black_2.setVisible(false);
            this.Q6_but_black_3.setVisible(false);
            this.Q6TransTimeline.play();
        })
        this.Q6_but_3.on('pointerup', ()=>{
            this.points[6] = -1;
            this.Q6_but_1.setAlpha(0);
            this.Q6_but_2.setAlpha(0);
            this.Q6_but_3.setAlpha(0);
            this.Q6_but_black_1.setVisible(false);
            this.Q6_but_black_2.setVisible(false);
            this.Q6_but_black_3.setVisible(false);
            this.Q6TransTimeline.play();
        })
        this.Q6TransTimeline.on('complete', ()=>{
            axios({
                method: 'post',
                url: '/points',
                data: {
                  points: this.points
                }
              })
              .then(function (response) {
                console.log(response);
              })
            this.Q6_Q7.setInteractive();
        })

        this.Q6_Q7.on('pointerup', ()=>{
            var p = 0;
            this.points.forEach(e => {
                p += e;
            });

            this.tweens.add({
                targets: [this.Q6_Q7, this.text_Q6_Q7],
                y: -540,
                ease: 'Power1',
                duration: 2000,
                completeDelay: 0,
            });

            this.tweens.add({
                targets: this.Q7,
                y: 540, 
                ease: 'Power1',
                duration: 2000,
                completeDelay: 0,
            })

            this.blackStop();
            setTimeout(()=>{
                this.Q7.setInteractive();
            }, 2000)

            console.log(this.points)
            console.log(p);

            switch (true) {
                case (p == 5):
                    this.tweens.add({
                        targets: this.Q7_1,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_1;
                    break;
                case (p == 4):
                    this.tweens.add({
                        targets: this.Q7_2,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_2;
                    break;
                case (p == 3):
                    this.tweens.add({
                        targets: this.Q7_3,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_3;
                    break;
            
                case (p == 1 || p == 2):
                    this.tweens.add({
                        targets: this.Q7_4,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_4;
                    break;
                case (p == 0):
                    this.tweens.add({
                        targets: this.Q7_5,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_5;
                    break;
                case (p == -1 || p == -2):
                    this.tweens.add({
                        targets: this.Q7_6,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_6;
                    break;
                case (p == -3):
                    this.tweens.add({
                        targets: this.Q7_7,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        delay: 2000
                    })
                    this.Q7_text = this.Q7_7;
                    break;
            
                default:
                    break;
            }
        })
        
        // Leaving page
        this.hover(this.restart, this.restart_black);
        this.Q7.on('pointerup', ()=>{
            this.finishTimeline.play();
            this.finishTimeline.on('complete', ()=>{
                this.restart.setInteractive();
                this.restart.on('pointerup', ()=>{
                    clearTimeout(this.restartTimer);
                    this.scene.restart();
                })
                this.whiteStop();
            })
            this.restartTimer = setTimeout(() => {
                this.tweens.add({
                    targets: this.restart,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 2000,
                    completeDelay: 0
                });
                // this.scene.restart();
            }, 30000);
        })
    },

    update: function(){
    },

    createInstructionTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.home,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.home_Q1,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.instruction,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createHomeTransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.instruction,
            alpha: 0,
            ease: 'Power1',
            duration: 500,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.ch1,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            completeDelay: 1500,
        });

        timeline.add({
            targets: this.ch1,
            alpha: 0,
            ease: 'Power1',
            duration: 500,
            completeDelay: 500,
        });

        timeline.add({
            targets: this.text_home_Q1,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ1Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.home_Q1, this.text_home_Q1],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q1,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q1_but_1, this.Q1_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ1_5Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: this.Q1_5,
            alpha: 1, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=1000'
        });

        timeline.add({
            targets: [this.Q1_5_but_1, this.Q1_5_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ1TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q1,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q1_Q2,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q1_Q2,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ1_5TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q1_5,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q1_Q2,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q1_Q2,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ2Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q1_Q2, this.text_Q1_Q2],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q2,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q2_but_1, this.Q2_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ2TransTimeline: function(){        
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q2,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q2_Q3,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q2_Q3,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ3Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q2_Q3, this.text_Q2_Q3],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q3,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q3_but_1, this.Q3_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ3TransTimeline1: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q3,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q3_Q4,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q3_Q4_1,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ3TransTimeline2: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q3,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q3_Q4,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.ch2,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            completeDelay: 1500,
        });

        timeline.add({
            targets: this.ch2,
            alpha: 0,
            ease: 'Power1',
            duration: 500,
            completeDelay: 500,
        });

        timeline.add({
            targets: this.text_Q3_Q4_1,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ4Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q3_Q4, this.text_Q3_Q4_1, this.text_Q3_Q4_2],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q4Q4Q5,
            y: 1080, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q4_but_1, this.Q4_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ4TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q4Q4Q5,
            y: 0,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.text_Q4_Q5,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ5Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: this.Q4Q4Q5,
            y: -1080,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0
        })

        timeline.add({
            targets: [this.text_Q4_Q5],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.Q5Q6Q7,
            y: 540+1080, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q5_but_1, this.Q5_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
            offset: '+=2000'
        })

        return timeline;
    },

    createQ5TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q5Q6Q7,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.ch3,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            completeDelay: 1500,
        });

        timeline.add({
            targets: this.ch3,
            alpha: 0,
            ease: 'Power1',
            duration: 500,
            completeDelay: 500,
        });

        timeline.add({
            targets: this.text_Q5_Q6,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ6Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.text_Q5_Q6],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q5Q6Q7,
            y: -540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q6_but_1, this.Q6_but_2, this.Q6_but_3],
            alpha: 1,
            ease: 'Linear',
            duration: 500,
            completeDelay: 0,
            offset: '+=2000'
        })

        return timeline;
    },

    createQ6TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q5Q6Q7,
            y: -540-1080,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q6_Q7,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q6_Q7,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createFinishTimeline: function(){
        var timeline = this.tweens.createTimeline();
        // timeline.add({
        //     targets: this.Q7,
        //     y: -540,
        //     ease: 'Power1',
        //     duration: 2000,
        //     completeDelay: 0,
        //     offset: '0'
        // });

        timeline.add({
            targets: this.leave,
            alpha: 1,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            // offset: '-=2000'
        });

        timeline.add({
            targets: this.leave_bg,
            alpha: 1,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        return timeline;
    },

    hover: function(origin, hover){

        origin.on('pointerover', ()=>{
            hover.setVisible(true);
            console.log(origin, 'over');
        })
        origin.on('pointerout', ()=>{
            hover.setVisible(false);
            console.log(origin, 'out');
        })

    },

    cancelHover: function(origin, hover){
        origin.removeListener('pointerover', this.origin, this)
        origin.removeListener('pointerout', this.origin, this)
    },

    whiteStop: function(){
        this.cancelHover(this.stop_black, this.stop);
        this.stop_black.setVisible(false);
        this.stop_black.disableInteractive();
        this.stop.setVisible(true);
        this.hover(this.stop, this.stop_black);
        this.stop.setInteractive();
    },
    
    blackStop: function(){
        this.cancelHover(this.stop, this.stop_black);
        this.stop.setVisible(false);
        this.stop.disableInteractive();
        this.stop_black.setVisible(true);
        this.hover(this.stop_black, this.stop);
        this.stop_black.setInteractive();
    }
});

var config = {
  type: Phaser.AUTO,
  scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: screenWidth,
      height: screenHeight
  },
  scene: GameScene
}

var game = new Phaser.Game(config)
