<template>
  <section class="main-wrapper text-gray-600 bg-gray-50">
<!--    Шапка-->
    <header class="flex fixed z-30 w-full max-h-12 bg-opacity-95 justify-between">
      <div class="lg:w-1/4 flex">
        <div class=" flex items-center pl-4 xl:w-64 lg:bg-white">
          <button class="mr-3 sm:ml-2 sm:mr-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <a href="#">
            <svg class="w-a h-6" xmlns="http://www.w3.org/2000/svg" viewBox="409.289 277.787 512 114.301">
              <g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon" transform="matrix(5.715038, 0, 0, 5.715038, 409.288757, 277.787231)">
                <g class="style-scope yt-icon">
                  <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" class="style-scope yt-icon" fill="#FF0000"/>
                  <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" class="style-scope yt-icon" fill="white"/>
                </g>
                <g class="style-scope yt-icon">
                  <g id="youtube-paths" class="style-scope yt-icon">
                    <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                    <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                    <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                    <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                    <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                    <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                    <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 lx:px-0 flex-1 lg:w-1/2 max-w-screen-md">
        <div class="flex w-full h-full">
          <input type="text" placeholder="Введите значение" class="max-h-8 w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:outline-none focus:border-blue-700">
          <button class="focus:outline-none flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm hover:bg-gray-200">
            <svg class="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
        <button class="focus:outline-none ml-4 bg-gray-200 p-1 rounded-full max-w-8 max-h-8 flex items-center justify-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
        <button class="focus:outline-none p-2 sm:hidden">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
        <button class="focus:outline-none p-2 sm:hidden">
          <svg class="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        <button class="relative group p-2 focus:outline-none">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <div class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0">
            <section class="py-2 border-b">
              <ul>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                    <span>Главная</span>
                  </a>
                </li>
              </ul>
            </section>
            <section class="py-2">
              <ul>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
                    <div class="mr-6 bg-red-600 rounded-full p-1">
                      <svg class="w-4 h-4 text-white" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="64" width="64">
                        <g opacity="0.2">
                          <path style="fill:currentColor" d="M128,32a96,96,0,1,0,96,96A95.99975,95.99975,0,0,0,128,32ZM112,160V96l48,32Z"></path>
                        </g>
                        <g>
                          <path style="fill:currentColor" d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Z"></path>
                          <path style="fill:currentColor" d="M164.4375,121.34375l-48-32A7.99977,7.99977,0,0,0,104,96v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32a7.99959,7.99959,0,0,0,0-13.3125ZM120,145.05176V110.94824L145.57812,128Z"></path>
                        </g>
                      </svg>
                    </div>
                    <span>YouTube Music</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
                    <div class="mr-6 bg-red-600 rounded-full p-1">
                      <svg class="w-4 h-4 text-white" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-movie-play" width="64" height="64" viewBox="0 0 24 24"><path d="M22 4V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M17 22L22 19L17 16V22Z"></path></svg> </div>
                    <span>YouTube Детям</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
                    <div class="mr-6 bg-red-600 rounded-full p-1">
                      <svg class="w-4 h-4 text-white" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-television-play" width="64" height="64" viewBox="0 0 24 24"><path d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7"></path></svg>
                    </div>
                    <span>YouTube TV</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </button>


        <button  class="relative group p-2 focus:outline-none">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
          <div class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0">
            <section class="py-2 border-b">
              <ul>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="48" height="48" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z"></path></svg>
                    <span>Личные данные на YouTube</span>
                  </a>
                </li>
              </ul>
            </section>
            <section class="py-2 border-b">
              <ul>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="48" width="48">
                      <path fill="var(--ci-primary-color, currentColor)" d="M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z"></path>
                    </svg>
                    <span>Тема: как на устройстве</span>
                    <svg class="w-6 h-6 text-gray-500 ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500"  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512"><title>ionicons-v5-l</title><line x1="48" y1="112" x2="336" y2="112" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line x1="192" y1="64" x2="192" y2="112" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><polyline points="272 448 368 224 464 448" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline><line x1="301.5" y1="384" x2="434.5" y2="384" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><path d="M281.3,112S257,206,199,277,80,384,80,384" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><path d="M256,336s-35-27-72-75-56-85-56-85" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path></svg>
                    <span>ЯзыкЖ Русский</span>
                    <svg class="w-6 h-6 text-gray-500 ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="48" height="48" viewBox="0 0 24 24"><path d="M17 14.4C17.6 14.4 18.1 14.9 18.1 15.5S17.6 16.6 17 16.6 15.9 16.1 15.9 15.5 16.4 14.4 17 14.4M17 17.5C16.3 17.5 14.8 17.9 14.8 18.6C15.3 19.3 16.1 19.8 17 19.8S18.7 19.3 19.2 18.6C19.2 17.9 17.7 17.5 17 17.5M18 11.1V6.3L10.5 3L3 6.3V11.2C3 15.7 6.2 20 10.5 21C11.1 20.9 11.6 20.7 12.1 20.5C13.2 22 15 23 17 23C20.3 23 23 20.3 23 17C23 14 20.8 11.6 18 11.1M11 17C11 17.6 11.1 18.1 11.2 18.6C11 18.7 10.7 18.8 10.5 18.9C7.3 17.9 5 14.7 5 11.2V7.6L10.5 5.2L16 7.6V11.1C13.2 11.6 11 14 11 17M17 21C14.8 21 13 19.2 13 17S14.8 13 17 13 21 14.8 21 17 19.2 21 17 21Z"></path></svg>
                    <span>Безопасный режим: откл</span>
                    <svg class="w-6 h-6 text-gray-500 ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                    <span>Страна: Россия</span>
                    <svg class="w-6 h-6 text-gray-500 ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg  class="w-6 h-6 mr-3 text-gray-500" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="48" width="48">
                      <path style="fill: currentColor" d="M223.51465,50H32.48535A14.50169,14.50169,0,0,0,18,64.48535v127.0293A14.50169,14.50169,0,0,0,32.48535,206h191.0293A14.50169,14.50169,0,0,0,238,191.51465V64.48535A14.50169,14.50169,0,0,0,223.51465,50ZM226,191.51465A2.48825,2.48825,0,0,1,223.51465,194H32.48535A2.48825,2.48825,0,0,1,30,191.51465V64.48535A2.48825,2.48825,0,0,1,32.48535,62h191.0293A2.48825,2.48825,0,0,1,226,64.48535ZM206,128a6.00029,6.00029,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6.00029,6.00029,0,0,1,206,128Zm0-32a6.00029,6.00029,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6.00029,6.00029,0,0,1,206,96ZM70,160a6.00029,6.00029,0,0,1-6,6H56a6,6,0,0,1,0-12h8A6.00029,6.00029,0,0,1,70,160Zm96,0a6.00029,6.00029,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6.00029,6.00029,0,0,1,166,160Zm40,0a6.00029,6.00029,0,0,1-6,6h-8a6,6,0,0,1,0-12h8A6.00029,6.00029,0,0,1,206,160Z"></path>
                    </svg>
                    <span>Быстрые клавиши</span>
                  </a>
                </li>
              </ul>
            </section>
            <section class="py-2 border-b">
              <ul>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="64" width="64">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path style="fill:currentColor" d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                      </g>
                    </svg>
                    <span>Настройки</span>
                  </a>
                </li>
              </ul>
            </section>
            <section class="py-2">
              <ul>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path><path d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px"></path><circle cx="250" cy="348" r="20"></circle></svg>
                    <span>Справка</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-3 py-2 text-sm  hover:bg-gray-100">
                    <svg class="w-6 h-6 mr-3 text-gray-500" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-message-alert-outline" width="64" height="64" viewBox="0 0 24 24"><path d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z"></path></svg>
                    <span>Отправить отзыв</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </button>


        <button class="focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm">
          <svg class="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          Войти
        </button>
      </div>
    </header>
<!--    Уменьшенное меню-->
    <aside class="hidden sm:block xl:hidden min-h-screen overflow-auto w-20 fixed pt-14 bg-white z-20">
        <ul>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 text-red-500 hover:bg-gray-100">
              <svg class="w-6 h-6 mb-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              <span class="text-xs">Главная</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
            <svg  class="w-6 h-6 mb-1.5 text-gray-600"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                <path style="fill:currentColor" d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"></path>
              </svg>
              <span class="text-xs">Навигатор</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg class="w-6 h-6 mb-1.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                <path style="fill:currentColor" d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z " class="ColorScheme-Text"></path>
              </svg>
              <span class="text-xs">Shorts</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg  class="w-6 h-6 mb-1.5 text-gray-600"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"></path>
                <path style="fill:currentColor" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"></path>
              </svg>
              <span class="text-xs">Подписки</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg class="w-6 h-6 mb-1.5 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="64" width="64"><path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg>
              <span class="text-xs">Библиотека</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg class="w-6 h-6 mb-1.5 text-gray-600" width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
                <path d="M5.81824 6.72729V14H13.091" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M24.005 12L24.0038 24.0088L32.4832 32.4882" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="text-xs">История</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg class="w-6 h-6 text-gray-600" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.44974 6.99251C2.57907 6.0915 3.31865 5.41506 4.22659 5.35027C6.16394 5.21201 9.53638 5 12 5C14.4636 5 17.8361 5.21201 19.7734 5.35027C20.6813 5.41506 21.4209 6.0915 21.5503 6.99251C21.749 8.37719 22 10.4356 22 12.0001C22 13.5647 21.749 15.623 21.5503 17.0077C21.4209 17.9087 20.6813 18.5852 19.7733 18.6499C17.836 18.7881 14.4636 19 12 19C9.53641 19 6.16403 18.7881 4.22666 18.6499C3.31869 18.5852 2.57906 17.9087 2.44973 17.0077C2.25098 15.623 2 13.5647 2 12.0001C2 10.4356 2.25099 8.37719 2.44974 6.99251Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16 12L10 15.4641V8.5359L16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 15V8.5L16 12L10 15Z" stroke="currentColor"></path>
              </svg>
              <span class="text-xs">Ваши видео</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg class="w-6 h-6 mb-1.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                <path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 C 11.313708 14 14 11.313708 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 3 C 10.761424 3 13 5.2385763 13 8 C 13 10.761424 10.761424 13 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 z M 7 4 L 7 8 L 7 9 L 12 9 L 12 8 L 8 8 L 8 4 L 7 4 z "></path>
              </svg>
              <span class="text-xs">Смотреть позже</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col items-center px-2 py-5 hover:bg-gray-100">
              <svg class="w-6 h-6 mb-1.5 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>
              <span class="text-xs">Понравившиеся</span>
            </a>
          </li>
        </ul>
    </aside>

<!--    Десктопное меню-->
    <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-12 bg-white z-20">
      <section class="py-2 border-b">
        <ul>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300">
              <svg class="w-6 h-6 mr-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              <span>Главная</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg  class="w-6 h-6 mr-6 text-gray-600"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                <path style="fill:currentColor" d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"></path>
              </svg>
              <span>Навигатор</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                <path style="fill:currentColor" d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z " class="ColorScheme-Text"></path>
              </svg>
              <span>Shorts</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg  class="w-6 h-6 mr-6 text-gray-600"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"></path>
                <path style="fill:currentColor" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"></path>
              </svg>
              <span>Подписки</span>
            </a>
          </li>
        </ul>
      </section>

        <section class="py-2 border-b">
        <ul>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="64" width="64"><path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg>
               <span>Библиотека</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
                <path d="M5.81824 6.72729V14H13.091" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M24.005 12L24.0038 24.0088L32.4832 32.4882" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>История</span>
            </a>
          </li>
          <li>
            <a href=""  class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.44974 6.99251C2.57907 6.0915 3.31865 5.41506 4.22659 5.35027C6.16394 5.21201 9.53638 5 12 5C14.4636 5 17.8361 5.21201 19.7734 5.35027C20.6813 5.41506 21.4209 6.0915 21.5503 6.99251C21.749 8.37719 22 10.4356 22 12.0001C22 13.5647 21.749 15.623 21.5503 17.0077C21.4209 17.9087 20.6813 18.5852 19.7733 18.6499C17.836 18.7881 14.4636 19 12 19C9.53641 19 6.16403 18.7881 4.22666 18.6499C3.31869 18.5852 2.57906 17.9087 2.44973 17.0077C2.25098 15.623 2 13.5647 2 12.0001C2 10.4356 2.25099 8.37719 2.44974 6.99251Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16 12L10 15.4641V8.5359L16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 15V8.5L16 12L10 15Z" stroke="currentColor"></path>
              </svg>
              <span>Ваши видео</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                <path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 C 11.313708 14 14 11.313708 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 3 C 10.761424 3 13 5.2385763 13 8 C 13 10.761424 10.761424 13 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 z M 7 4 L 7 8 L 7 9 L 12 9 L 12 8 L 8 8 L 8 4 L 7 4 z "></path>
              </svg>
              <span>Смотреть позже</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>
              <span>Понравившиеся</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="px-8 py-4 font-medium leading-5 border-b">
        <span class="text-sm">
          Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.
        </span>
        <button class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm">
          <svg class="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          Войти
        </button>
      </section>

      <section class="py-2 border-b">
        <div class="uppercase text-sm font-semibold px-6 my-2">навигатор</div>
        <ul>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>
              </div>
              <span>Музыка</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="64" viewBox="0 0 24 24" width="64"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M11,6H9V4h2V6z M15,4h-2v2h2V4z M9,14h2v-2H9V14z M19,10V8h-2v2H19z M19,14v-2h-2v2H19z M13,14h2v-2h-2V14z M19,4h-2v2h2 V4z M13,8V6h-2v2H13z M7,10V8h2V6H7V5c0-0.55-0.45-1-1-1h0C5.45,4,5,4.45,5,5v14c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-7h2v-2H7 z M15,12h2v-2h-2V12z M11,10v2h2v-2H11z M9,8v2h2V8H9z M13,10h2V8h-2V10z M15,6v2h2V6H15z"></path></g></g></svg>
              </div>
              <span>Спорт</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-gray-700 rounded-full p-1">

              <svg class="w-4 h-4 text-white" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="64" width="64">
                <path style="fill:currentColor" d="M184,112H152a4,4,0,0,1,0-8h32a4,4,0,0,1,0,8Zm-80-8H92V92a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V112h12a4,4,0,0,0,0-8ZM217.56152,219.50977a32.0298,32.0298,0,0,1-28.18359-8.88282c-.08447-.085-.16406-.17187-.23975-.26172l-41.91162-46.52587-38.40576.1538L66.86523,210.37207q-.11059.13183-.23388.25488a32.0018,32.0018,0,0,1-54.14063-28.18847L28.81787,98.46387c.0083-.06153.01758-.12305.02832-.18457A55.87419,55.87419,0,0,1,84.00439,52l88.002-.25977h.01172a56.07977,56.07977,0,0,1,55.10742,46.10791c.00757.03467.02344.06592.03027.10108l16.35059,84.42285A32.05063,32.05063,0,0,1,217.56152,219.50977ZM172.002,155.74023a48,48,0,1,0,.02637-96L84.01611,60A47.89173,47.89173,0,0,0,36.77,99.41113c-.01172.10742-.02832.21485-.04932.32325l-16.36425,84.1621a24.00209,24.00209,0,0,0,40.52246,21.168l43.19384-47.748A4.00174,4.00174,0,0,1,107.023,156Zm63.6377,28.08692-11.01636-56.87793a56.0955,56.0955,0,0,1-52.60522,36.791l-14.06324.05616,37.177,41.27a24.00165,24.00165,0,0,0,40.50781-21.23926Z"></path>
              </svg>
              </div>
              <span>Видеоигры</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                  <path style="fill:currentColor" d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z " class="ColorScheme-Text"></path>
                </svg>
              </div>
                <span>Фильмы</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-gray-700 rounded-full p-1">

                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"></path>
                </svg>
              </div>
              <span>Трансляции</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">

              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg  class="w-4 h-4 text-white" width="64" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="m3 2v3h-2v7.5c0 .831.669 1.5 1.5 1.5h12.5v-12h-11zm1 1h10v10h-10v-8zm1 1v1h8v-1zm-3 2h1v7h-.5c-.277 0-.5-.223-.5-.5v-.6zm3 0v4h4v-4zm5 0v1h3v-1zm0 3v1h3v-1zm-5 2v1h8v-1z"></path>
              </svg>
              </div>
              <span>В центре внимания</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-gray-700 rounded-full p-1">

              <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                <path style="fill:currentColor" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
              </svg>
              </div>
              <span>Панорамные видео</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="py-2 border-b">
        <ul>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"  viewBox="0 0 16 16">
                <path style="fill: currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path style="fill: currentColor" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
              </svg><span>Каталог каналов</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="py-2 border-b">
        <div class="uppercase text-sm font-semibold px-6 my-2">
          другие возможности
        </div>
        <ul>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-red-600 rounded-full p-1">
                <svg class="w-4 h-4 text-white" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="64" width="64">
                  <g opacity="0.2">
                    <path style="fill:currentColor" d="M128,32a96,96,0,1,0,96,96A95.99975,95.99975,0,0,0,128,32ZM112,160V96l48,32Z"></path>
                  </g>
                  <g>
                    <path style="fill:currentColor" d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Z"></path>
                    <path style="fill:currentColor" d="M164.4375,121.34375l-48-32A7.99977,7.99977,0,0,0,104,96v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32a7.99959,7.99959,0,0,0,0-13.3125ZM120,145.05176V110.94824L145.57812,128Z"></path>
                  </g>
                </svg>
              </div>
              <span>YouTube Music</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-red-600 rounded-full p-1">
                <svg class="w-4 h-4 text-white" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-movie-play" width="64" height="64" viewBox="0 0 24 24"><path d="M22 4V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M17 22L22 19L17 16V22Z"></path></svg> </div>
              <span>YouTube Детям</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <div class="mr-6 bg-red-600 rounded-full p-1">
                <svg class="w-4 h-4 text-white" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-television-play" width="64" height="64" viewBox="0 0 24 24"><path d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7"></path></svg>
              </div>
              <span>YouTube TV</span>
            </a>
          </li>

        </ul>
      </section>


      <section class="py-2 border-b">
        <ul>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="64" width="64">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path style="fill:currentColor" d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                </g>
              </svg>
              <span>Настройки</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                <path style="fill:currentColor" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
              </svg>
              <span>Жалобы</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path><path d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px"></path><circle cx="250" cy="348" r="20"></circle></svg>
              <span>Справка</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
              <svg class="w-6 h-6 mr-6 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-message-alert-outline" width="64" height="64" viewBox="0 0 24 24"><path d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z"></path></svg>
              <span>Отправить отзыв</span>
            </a>
          </li>

        </ul>
      </section>
      <section class="text-xs px-6 py-4 font-semibold space-y-4">
        <div>
          <a href="#" class="mr-2">О сервисе</a>
          <a href="#" class="mr-2">Прессе</a>
          <a href="#" class="mr-2">Авторские права</a>
          <a href="#" class="mr-2">Связаться с нами</a>
          <a href="#" class="mr-2">Авторам</a>
          <a href="#" class="mr-2">Рекламодателям</a>
          <a href="#" class="mr-2">Разработчикам</a>
        </div>
        <div>
          <a href="#" class="mr-2">Условия использования</a>
          <a href="#" class="mr-2">Конфиденциальность</a>
          <a href="#" class="mr-2">Правила и безопасность</a>
          <a href="#" class="mr-2">Как работает YouTube</a>
          <a href="#" class="mr-2">Тестирование новых функций</a>
        </div>
        <div class="font-normal text-gray-500">
          © 2022 Google LLC
        </div>
      </section>

    </aside>

<!--    Мобильное всплывающее меню-->
    <div class="hidden fixed inset-0 bg-black bg-opacity-50 z-50">
      <aside class="w-64 max-h-screen overflow-auto bg-white">
        <section class="flex items-center p-4 border-b sticky top-0 bg-white">
              <button class="focus:outline-none mr-6 ml-2 ">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
              <a href="#">
                <svg class="w-a h-6" xmlns="http://www.w3.org/2000/svg" viewBox="409.289 277.787 512 114.301">
                  <g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon" transform="matrix(5.715038, 0, 0, 5.715038, 409.288757, 277.787231)">
                    <g class="style-scope yt-icon">
                      <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" class="style-scope yt-icon" fill="#FF0000"/>
                      <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" class="style-scope yt-icon" fill="white"/>
                    </g>
                    <g class="style-scope yt-icon">
                      <g id="youtube-paths" class="style-scope yt-icon">
                        <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                        <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                        <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                        <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                        <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                        <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                        <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z" class="style-scope yt-icon" style="fill: rgb(40, 40, 40);"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
        </section>

        <section class="py-2 border-b">
          <ul>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300">
                <svg class="w-6 h-6 mr-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                <span>Главная</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg  class="w-6 h-6 mr-6 text-gray-600"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill:currentColor" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                  <path style="fill:currentColor" d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"></path>
                </svg>
                <span>Навигатор</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                  <path style="fill:currentColor" d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z " class="ColorScheme-Text"></path>
                </svg>
                <span>Shorts</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg  class="w-6 h-6 mr-6 text-gray-600"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill:currentColor" d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"></path>
                  <path style="fill:currentColor" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"></path>
                </svg>
                <span>Подписки</span>
              </a>
            </li>
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="64" width="64"><path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg>
                <span>Библиотека</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
                  <path d="M5.81824 6.72729V14H13.091" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M24.005 12L24.0038 24.0088L32.4832 32.4882" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>История</span>
              </a>
            </li>
            <li>
              <a href=""  class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.44974 6.99251C2.57907 6.0915 3.31865 5.41506 4.22659 5.35027C6.16394 5.21201 9.53638 5 12 5C14.4636 5 17.8361 5.21201 19.7734 5.35027C20.6813 5.41506 21.4209 6.0915 21.5503 6.99251C21.749 8.37719 22 10.4356 22 12.0001C22 13.5647 21.749 15.623 21.5503 17.0077C21.4209 17.9087 20.6813 18.5852 19.7733 18.6499C17.836 18.7881 14.4636 19 12 19C9.53641 19 6.16403 18.7881 4.22666 18.6499C3.31869 18.5852 2.57906 17.9087 2.44973 17.0077C2.25098 15.623 2 13.5647 2 12.0001C2 10.4356 2.25099 8.37719 2.44974 6.99251Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M16 12L10 15.4641V8.5359L16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 15V8.5L16 12L10 15Z" stroke="currentColor"></path>
                </svg>
                <span>Ваши видео</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                  <path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 C 11.313708 14 14 11.313708 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 3 C 10.761424 3 13 5.2385763 13 8 C 13 10.761424 10.761424 13 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 z M 7 4 L 7 8 L 7 9 L 12 9 L 12 8 L 8 8 L 8 4 L 7 4 z "></path>
                </svg>
                <span>Смотреть позже</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>
                <span>Понравившиеся</span>
              </a>
            </li>
          </ul>
        </section>

        <section class="px-8 py-4 font-medium leading-5 border-b">
        <span class="text-sm">
          Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.
        </span>
          <button class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm">
            <svg class="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
            Войти
          </button>
        </section>

        <section class="py-2 border-b">
          <div class="uppercase text-sm font-semibold px-6 my-2">навигатор</div>
          <ul>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-gray-700 rounded-full p-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>
                </div>
                <span>Музыка</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-gray-700 rounded-full p-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="64" viewBox="0 0 24 24" width="64"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M11,6H9V4h2V6z M15,4h-2v2h2V4z M9,14h2v-2H9V14z M19,10V8h-2v2H19z M19,14v-2h-2v2H19z M13,14h2v-2h-2V14z M19,4h-2v2h2 V4z M13,8V6h-2v2H13z M7,10V8h2V6H7V5c0-0.55-0.45-1-1-1h0C5.45,4,5,4.45,5,5v14c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-7h2v-2H7 z M15,12h2v-2h-2V12z M11,10v2h2v-2H11z M9,8v2h2V8H9z M13,10h2V8h-2V10z M15,6v2h2V6H15z"></path></g></g></svg>
                </div>
                <span>Спорт</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-gray-700 rounded-full p-1">

                  <svg class="w-4 h-4 text-white" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="64" width="64">
                    <path style="fill:currentColor" d="M184,112H152a4,4,0,0,1,0-8h32a4,4,0,0,1,0,8Zm-80-8H92V92a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V112h12a4,4,0,0,0,0-8ZM217.56152,219.50977a32.0298,32.0298,0,0,1-28.18359-8.88282c-.08447-.085-.16406-.17187-.23975-.26172l-41.91162-46.52587-38.40576.1538L66.86523,210.37207q-.11059.13183-.23388.25488a32.0018,32.0018,0,0,1-54.14063-28.18847L28.81787,98.46387c.0083-.06153.01758-.12305.02832-.18457A55.87419,55.87419,0,0,1,84.00439,52l88.002-.25977h.01172a56.07977,56.07977,0,0,1,55.10742,46.10791c.00757.03467.02344.06592.03027.10108l16.35059,84.42285A32.05063,32.05063,0,0,1,217.56152,219.50977ZM172.002,155.74023a48,48,0,1,0,.02637-96L84.01611,60A47.89173,47.89173,0,0,0,36.77,99.41113c-.01172.10742-.02832.21485-.04932.32325l-16.36425,84.1621a24.00209,24.00209,0,0,0,40.52246,21.168l43.19384-47.748A4.00174,4.00174,0,0,1,107.023,156Zm63.6377,28.08692-11.01636-56.87793a56.0955,56.0955,0,0,1-52.60522,36.791l-14.06324.05616,37.177,41.27a24.00165,24.00165,0,0,0,40.50781-21.23926Z"></path>
                  </svg>
                </div>
                <span>Видеоигры</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-gray-700 rounded-full p-1">
                  <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="64" width="64">
                    <path style="fill:currentColor" d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z " class="ColorScheme-Text"></path>
                  </svg>
                </div>
                <span>Фильмы</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-gray-700 rounded-full p-1">

                  <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"></path>
                  </svg>
                </div>
                <span>Трансляции</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">

                <div class="mr-6 bg-gray-700 rounded-full p-1">
                  <svg  class="w-4 h-4 text-white" width="64" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 16 16">
                    <path style="fill:currentColor" d="m3 2v3h-2v7.5c0 .831.669 1.5 1.5 1.5h12.5v-12h-11zm1 1h10v10h-10v-8zm1 1v1h8v-1zm-3 2h1v7h-.5c-.277 0-.5-.223-.5-.5v-.6zm3 0v4h4v-4zm5 0v1h3v-1zm0 3v1h3v-1zm-5 2v1h8v-1z"></path>
                  </svg>
                </div>
                <span>В центре внимания</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-gray-700 rounded-full p-1">

                  <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                    <path style="fill:currentColor" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                    <path style="fill:currentColor" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                  </svg>
                </div>
                <span>Панорамные видео</span>
              </a>
            </li>
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"  viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path style="fill: currentColor" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg><span>Каталог каналов</span>
              </a>
            </li>
          </ul>
        </section>

        <section class="py-2 border-b">
          <div class="uppercase text-sm font-semibold px-6 my-2">
            другие возможности
          </div>
          <ul>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-red-600 rounded-full p-1">
                  <svg class="w-4 h-4 text-white" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="64" width="64">
                    <g opacity="0.2">
                      <path style="fill:currentColor" d="M128,32a96,96,0,1,0,96,96A95.99975,95.99975,0,0,0,128,32ZM112,160V96l48,32Z"></path>
                    </g>
                    <g>
                      <path style="fill:currentColor" d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Z"></path>
                      <path style="fill:currentColor" d="M164.4375,121.34375l-48-32A7.99977,7.99977,0,0,0,104,96v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32a7.99959,7.99959,0,0,0,0-13.3125ZM120,145.05176V110.94824L145.57812,128Z"></path>
                    </g>
                  </svg>
                </div>
                <span>YouTube Music</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-red-600 rounded-full p-1">
                  <svg class="w-4 h-4 text-white" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-movie-play" width="64" height="64" viewBox="0 0 24 24"><path d="M22 4V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M17 22L22 19L17 16V22Z"></path></svg> </div>
                <span>YouTube Детям</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <div class="mr-6 bg-red-600 rounded-full p-1">
                  <svg class="w-4 h-4 text-white" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-television-play" width="64" height="64" viewBox="0 0 24 24"><path d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7"></path></svg>
                </div>
                <span>YouTube TV</span>
              </a>
            </li>

          </ul>
        </section>


        <section class="py-2 border-b">
          <ul>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="64" width="64">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path style="fill:currentColor" d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                  </g>
                </svg>
                <span>Настройки</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill:currentColor" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
                </svg>
                <span>Жалобы</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path><path d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px"></path><circle cx="250" cy="348" r="20"></circle></svg>
                <span>Справка</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-6 text-gray-600" style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-message-alert-outline" width="64" height="64" viewBox="0 0 24 24"><path d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z"></path></svg>
                <span>Отправить отзыв</span>
              </a>
            </li>

          </ul>
        </section>
        <section class="text-xs px-6 py-4 font-semibold space-y-4">
          <div>
            <a href="#" class="mr-2">О сервисе</a>
            <a href="#" class="mr-2">Прессе</a>
            <a href="#" class="mr-2">Авторские права</a>
            <a href="#" class="mr-2">Связаться с нами</a>
            <a href="#" class="mr-2">Авторам</a>
            <a href="#" class="mr-2">Рекламодателям</a>
            <a href="#" class="mr-2">Разработчикам</a>
          </div>
          <div>
            <a href="#" class="mr-2">Условия использования</a>
            <a href="#" class="mr-2">Конфиденциальность</a>
            <a href="#" class="mr-2">Правила и безопасность</a>
            <a href="#" class="mr-2">Как работает YouTube</a>
            <a href="#" class="mr-2">Тестирование новых функций</a>
          </div>
          <div class="font-normal text-gray-500">
            © 2022 Google LLC
          </div>
        </section>

      </aside>

    </div>
<!--    Категории-->
    <section class="pt-14 fixed bg-white z-10 sm:pl-24 xl:pl-64 w-full bg-opacity-95">
      <div class="max-w-screen-2xl m-auto border-t border-b px-4">
        <div class=" py-3 flex space-x-3 overflow-x-auto text-sm whitespace-nowrap">
          <a href="#" class="px-3 py-1 transition bg-gray-600 border border-gray-700 rounded-full hover:bg-gray-500 text-white">Все</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Видеоигры</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Джемы</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Экшен и приключения</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Спортивные игры</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Ремесла</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Последние опубликованные</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Просмотрено</a>
          <a href="#" class="px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">Новое для</a>
        </div>
      </div>

    </section>
<!--    Контент-->
    <main class="sm:ml-24 xl:ml-64 pt-32 px-5 pb-5">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 max-w-screen-2xl m-auto">
        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/15/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar10/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/12/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar11/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/26/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar12/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/55/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar13/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/48/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar14/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/29/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar21/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/78/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar15/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/54/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar15/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/22/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar17/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/23/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar18/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/33/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar19/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>

        <a href="#" class="mb-7 group">
          <div class="relative">
            <img src="https://picsum.photos/id/44/720/404">
            <span  class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-clock-time-four" width="64" height="64" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
          </span>
            <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><title>ionicons-v5-j</title>
              <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
              <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"></line>
            </svg>
          </span>
            <span class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold">6:25</span>
          </div>
          <div class="flex items-start mr-3 mt-2">
            <img src="https://picsum.photos/seed/avatar20/68" class="mr-3 w-9 h-9 rounded-full" alt="">
            <div class="text-sm">
              <span class="font-semibold text-gray-800">Заголовок видео</span>
              <div class="mt-1 flex items-center">
                <span>Название канала</span>
                <svg class="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path style="fill: currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <span>1к просмотров</span>
              <span>5 дней назад</span>
            </div>
            <button class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>
        </a>
      </div>


    </main>
    <nuxt />
  </section>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
