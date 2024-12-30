function drawCharacter(playerType) {
  let char = characters[playerType];
  let spriteData = sprites[playerType][char.currentAction];
  
  if (!spriteData || !spriteData.img) {
    // 如果圖片未載入，畫一個佔位方塊
    fill(playerType === 'player1' ? 'red' : 'blue');
    rect(char.x - 25, char.y - 25, 50, 50);
    return;
  }
  
  push();
  translate(char.x, char.y);
  scale(char.direction, 1);  // 維持方向的縮放
  
  // 放大角色，調整scale的倍數
  let scaleFactor = 1.5;  // 放大1.5倍
  scale(scaleFactor);
  
  image(spriteData.img,
    0, 0,
    spriteData.width, spriteData.height,
    char.currentFrame * spriteData.width, 0,
    spriteData.width, spriteData.height
  );
  pop();
  
  // 更新動畫幀
  if (frameCount % 6 === 0) {
    char.currentFrame = (char.currentFrame + 1) % spriteData.frames;
  }
}
