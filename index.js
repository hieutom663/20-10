/*function hideImage(){
    const image = document.querySelector(".image");
    const clickMe = document.querySelector(".clickMe");
    //image.style.display = "none";
    //clickMe.style.display = "none";
    let i= 10;
    while (i > 0){
        i -= 0.01;
        image.style.opacity = `${i}`; 
}
}*/


function hideImage() {
  const image = document.querySelector(".image");
  const clickMe = document.querySelector(".clickMe");
  const phongThu = document.querySelector(".container3");
  let opacity = 1.0;
  let opacity2 = 0;

  // Thiết lập interval để thay đổi opacity mỗi 50 mili giây
  const timer = setInterval(function () {
    if (opacity <= 0.01) {
      clearInterval(timer); // Dừng interval khi opacity về 0
      image.style.display = 'none'; // Ẩn hẳn sau khi mờ hoàn toàn
      clickMe.style.display = 'none';
      phongThu.style.display = 'block';
    } else {
      opacity -= 0.05; // Giảm opacity (bước nhảy)
      image.style.opacity = opacity;
      clickMe.style.opacity = opacity;
    }
  }, 50); // Độ trễ 50ms cho mỗi lần cập nhật
}

function displayy(){
    let opacity = 0;
    const anVaoToDi = document.querySelector(".first");
    const image = document.querySelector(".image");
    const clickMe = document.querySelector(".clickMe");
    const loiChao = document.querySelector(".loiChao");
    
    image.style.display = 'block';
    clickMe.style.display = 'block';

    const timer = setInterval(function () {
    if (opacity >= 0.99) {
        clearInterval(timer);
        anVaoToDi.style.display = 'none';
        
    } else {
        opacity += 0.05;
        image.style.opacity = opacity;
        clickMe.style.opacity = opacity;
        loiChao.style.display = 'none';
    }
  }, 50);
}

function moThu(){
    const phongThu = document.querySelector(".container3");
    const laThu = document.querySelector(".container2"); 
    let opacity = 1.0;
    let opacity2 = 0;
    
  // Thiết lập interval để thay đổi opacity mỗi 50 mili giây
  const timer = setInterval(function () {
    if (opacity <= 0.01) {
      clearInterval(timer); // Dừng interval khi opacity về 0
      phongThu.style.display = 'none'; // Ẩn hẳn sau khi mờ hoàn toàn
       // Ẩn hẳn sau khi mờ hoàn toàn
      laThu.style.display = 'block';
    } else {
      opacity -= 0.05; // Giảm opacity (bước nhảy)
      opacity2 += 0.05;
      phongThu.style.opacity = opacity;
      laThu.style.opacity = opacity2;
    }
  }, 50); // Độ trễ 50ms cho mỗi lần cập nhật
}