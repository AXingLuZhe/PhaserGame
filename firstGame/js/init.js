function initScore() {
  game.add.sprite(50, 50, 'star')
  scoreText = game.add.text(150, 50, '0', {fontSize: '60px'})
}


function initStrage() {
  game.stage.backgroundColor = '#A6E5F5'  // 初始化背景

  platforms = game.add.group()            // 场景变量承接创建的组对象
  platforms.enableBody = true             // 全组开启Body
  ground = platforms.create(-150, game.world.height - 100, 'ground')
  ground.body.immovable = true            // 不可移动
  ground.scale.setTo(3, 1)                // 尺寸设置

  var ledge
  ledge = platforms.create(game.world.centerX, game.world.centerY + 250, 'ground')
  ledge.body.immovable = true
  ledge.scale.setTo(1, 0.8)
  ledge = platforms.create(-100, game.world.centerY - 250, 'ground')
  ledge.scale.setTo(1.2, 0.8)
  ledge.body.immovable = true
}


function initPlayer() {
  player = game.add.sprite(32, game.world.height - 450, 'player')
  player.scale.setTo(3, 3)
  game.physics.arcade.enable(player)      // 单个对象开启物理引擎
  player.body.bounce.y = 0.1              // 设置主角的弹性
  player.body.gravity.y = 500             // 设置主角的重力
  player.body.collideWorldBounds = true   // 设置不出边界
  player.animations.add('left', [0,1,2,3], 10, true)  // 设置主角向左的序列帧
  player.animations.add('right', [5,6,7,8], 10, true)  // （5678）4帧向右跑，每秒10帧，true指定循环播放
}


function initStars() {
  bullets = game.add.group()
  bullets.enableBody = true
  for (var i = 0; i < 12; i++) {
    var buttet = bullets.create(40 + i * 80, 160, 'bullet')
    buttet.body.gravity.y = 100
    buttet.body.bounce.y = 0.7 + Math.random() * 0.2
  }
}


// 星星清除则将其kill掉
function collectBullets(player, star) {
  star.kill()
  score += 10
  scoreText.text = score + ''
}