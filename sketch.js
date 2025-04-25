let input;
let slider;
let button;
let dropdown;
let iframe;
let jump = false;

function setup() {//這是一個設定函數,只會執行一次
  //創建一個畫框,充滿整個視窗,背景顏色為a2d2ff(買回來的圖畫紙)
  createCanvas(windowWidth, windowHeight);
  background('#a2d2ff');

  // 創建一個輸入框，並設置其位置和預設內容
  input = createInput('教育科技系');
  input.position(10, 10);

  // 創建一個滑桿，並設置其位置和範圍
  slider = createSlider(12, 30, 12);
  slider.position(380, 10);
  slider.style('width', '100px');

  // 創建一個按鈕，並設置其位置和文字
  button = createButton('跳動');
  button.position(500, 10);
  button.mousePressed(toggleJump);

  // 創建一個下拉式選單，並設置其位置和選項
  dropdown = createSelect();
  dropdown.position(800, 25);
  dropdown.style('width', '100px');
  dropdown.option('淡江大學');
  dropdown.option('教育科技學系');
  dropdown.changed(changePage);

  // 創建一個iframe，並設置其位置和大小
  iframe = createElement('iframe');
  iframe.position(10, 150);
  iframe.size(windowWidth - 20, windowHeight - 120)
}

function toggleJump() {
  jump = !jump;
}

function changePage() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw');
  } else if (selected === '教育科技學系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw');
  }
}

function draw() {
  //  background(220);
  //產生一個文字框產生一個文字樣,內容為"教育科技學系",位置在(50,50),寬度為100.高度為50,文字大小為32,文字對齊方式為左上,文字顏色為黑色,背景顏色為白色
  background('#a2d2ff'); // 清除背景以避免文字重疊
  textFont('Arial');
  let textSizeValue = slider.value(); // 獲取滑桿的值來設置文字大小
  textSize(textSizeValue);
  textAlign(LEFT, TOP);
  fill(0);
  stroke(255);
  strokeWeight(2);

  let textWidth = 100;
  let textHeight = 50;
  let inputText = input.value(); // 獲取輸入框中的文字

  for (let y = 100; y < windowHeight; y += textHeight + 10) { // 字串與字串間距離為10
    let yOffset = jump ? random(-5, 5) : 0; // 每行字串跳動的幅度
    for (let x = 0; x < windowWidth; x += textWidth + 20) { // 顯示的文字間的距離為20
      fill(255);
      text(inputText, x, y + yOffset, textWidth, textHeight); // 顯示輸入框中的文字
      fill(0);
    }
  }
}
