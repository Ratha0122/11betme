document.getElementsByClassName('header')[0].innerHTML = `
    
    <div>
        <header class="bg-[#074407] p-4">
            <div class=" container mx-auto">
                <div class="flex justify-between items-center ">      
                    <div class="flex justify-center gap-4 items-center text-[14px] font-medium">
                        <a href="./index.html" classs="logo">
                            <img src="./images/logo.png" alt="" class="w-[200px]">
                        </a>
                        <ul class="hidden md:flex gap-4 flex-wrap">
                            <li><a href="./index.html" class="text-white hover:text-gray-500 duration-700">11BET</a></li>
                            <li><a href="./dang-ky.html" class="text-white hover:text-gray-500 duration-700">ĐĂNG KÝ</a></li>
                            <li><a href="./nap-tien.html" class="text-white hover:text-gray-500 duration-700">NẠP TIỀN</a></li>
                            <li><a href="./rut-tien.html" class="text-white hover:text-gray-500 duration-700">RÚT TIỀN</a></li>
                            <li><a href="./nha-cai-uy-tin.html" class="text-white hover:text-gray-500 duration-700">NHÀ CÁI UY TÍN</a></li>
                            <li><a href="./link-truc-tiep-bong-da.html" class="text-white hover:text-gray-500 duration-700">LINK TRỰC TIẾP BÓNG ĐÁ</a></li>
                            <li><a href="./gai-xinh.html" class="text-white hover:text-gray-500 duration-700">GÁI XINH</a></li>
                        </ul>
                    </div>
                    <button onclick=url() class="bg-[#aad436] hidden md:block text-white px-4 py-2 rounded-full hover:bg-white duration-700 hover:text-black  hover:border-2 hover:border-fuchsia-700">ĐĂNG KÝ</button>
                    
                    <div id="menu-icon" class="md:hidden icon">
                        <img src="./images/menu-bar.png" class="w-8">
                    </div>
                </div>
            </div>
        </header>

        <div id="show-menu" class="bg-[#1a705b] hidden top-0 absolute w-[60%] h-screen  duration-700">
            <ul class="  *:border-b-2 *:p-6">
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./index.html" class="text-white hover:text-gray-400 duration-700">11BET</a></li>
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./dang-ky.html" class="text-white hover:text-gray-400 duration-700">ĐĂNG KÝ</a></li>
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./nap-tien.html" class="text-white hover:text-gray-400 duration-700">NẠP TIỀN</a></li>
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./rut-tien.html" class="text-white hover:text-gray-400 duration-700">RÚT TIỀN</a></li>
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./nha-cai-uy-tin.html" class="text-white hover:text-gray-400 duration-700">NHÀ CÁI UY TÍN</a></li>
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./link-truc-tiep-bong-da.html" class="text-white hover:text-gray-400 duration-700">LINK TRỰC TIẾP BÓNG ĐÁ</a></li>
                <li class="hover:bg-[#6cac6aaf] duration-500"><a href="./gai-xinh.html" class="text-white hover:text-gray-400 duration-700">GÁI XINH</a></li>
            </ul>
        </div>

        <div class="bg-[#7c1111] p-2 md:hidden" >
            <div class="container mx-auto">
                <div class="flex justify-center gap-4">
                    <button onclick=url() class="bg-[#5ec031] text-white px-4 py-2 rounded-full hover:bg-white duration-700 hover:text-black  hover:border-2 hover:border-fuchsia-700">ĐĂNG KÝ</button>
                    <button onclick=url() class="bg-[#e99f3f] text-white px-4 py-2 rounded-full hover:bg-white duration-700 hover:text-black  hover:border-2 hover:border-fuchsia-700">ĐĂNG KÝ</button>
                </div>    
            </div>
        </div>
    </div>
`

document.getElementsByClassName('footer')[0].innerHTML = `
        <footer class="bg-[#2aad70] p-2 flex justify-center ">
            <div class="container mb-10">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-6 p-2">
                    <div class="">
                        <div class=" font-bold">
                            <h1  class="flex gap-4 "> <i class="fa-solid fa-user"></i>VỀ 11BET</h1>
                        </div>
                        <div class="mt-4">
                            <span class=" leading-relaxed">11bet là một trong những địa chỉ giải trí được rất nhiều người yêu thích. Lịch sử 11bet có mặt trên thị trường từ khá lâu, bắt đầu hoạt động từ 2011.</span>
                        </div>
                        <img src="./images/logo.png" class="p-4">
                    </div>
                    <div class="">
                        <div class=" font-bold">
                            <h1  class="flex gap-4 "> <i class="fa-solid fa-user"></i>CHUYÊN MỤC</h1>
                        </div>
                        <ul class="mt-4 *:border-b *:p-3">
                            <li><a href="./gai-xinh.html">Gái xinh</a></li>
                            <li><a href="./nha-cai-uy-tin.html">Nhà cái uy tín</a></li>
                            <li><a href="./casino-online.html">Casino Online</a></li>
                            <li><a href="./link-truc-tiep-bong-da.html">Trực tiếp bóng đá</a></li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </footer>

        <div class="bg-[#d3ab29] p-4">
            <div class=" container mx-auto">
                <div class="text-center">
                    <span>CHÍNH SÁCH BẢO MẬT</span><br>
                    <span>Copyright 2024 © 11bet.news</span>
                </div>
                
            </div>
        </div>
        


`


// backtotop
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('backToTop');
    const amountScrolled = 300;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY >= amountScrolled) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = 1;
        backToTop.style.transition = 'opacity 0.2s';
      } else {
        backToTop.style.opacity = 0;
        backToTop.style.transition = 'opacity 0.2s';
        setTimeout(() => {
          if (window.scrollY < amountScrolled) {
            backToTop.style.display = 'none';
          }
        }, 200);
      }
    });
  
    backToTop.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  


document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('show-menu');
    menu.classList.toggle('hidden');
})
function url(){
    location.href = "https://www.hay88.one/?inviteCode=8113702"
}