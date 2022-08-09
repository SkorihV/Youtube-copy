<template>
  <div class="hidden fixed inset-0 bg-black bg-opacity-50 z-50">
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="focus:outline-none mr-6 ml-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <a href="#">
          <LogoMain />
        </a>
      </section>

      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300"
            >
              <svg
                class="w-6 h-6 mr-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              <span>Главная</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  style="fill: currentColor"
                  d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                ></path>
                <path
                  style="fill: currentColor"
                  d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"
                ></path>
              </svg>
              <span>Навигатор</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="64"
                width="64"
              >
                <path
                  style="fill: currentColor"
                  d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z "
                  class="ColorScheme-Text"
                ></path>
              </svg>
              <span>Shorts</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  style="fill: currentColor"
                  d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"
                ></path>
                <path
                  style="fill: currentColor"
                  d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"
                ></path>
              </svg>
              <span>Подписки</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                style="fill: currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                height="64"
                width="64"
              >
                <path
                  d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"
                ></path>
              </svg>
              <span>Библиотека</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                width="64"
                height="64"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  fill-opacity="0.01"
                ></rect>
                <path
                  d="M5.81824 6.72729V14H13.091"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M24.005 12L24.0038 24.0088L32.4832 32.4882"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>История</span>
            </a>
          </li>
          <li>
            <a
              href=""
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.44974 6.99251C2.57907 6.0915 3.31865 5.41506 4.22659 5.35027C6.16394 5.21201 9.53638 5 12 5C14.4636 5 17.8361 5.21201 19.7734 5.35027C20.6813 5.41506 21.4209 6.0915 21.5503 6.99251C21.749 8.37719 22 10.4356 22 12.0001C22 13.5647 21.749 15.623 21.5503 17.0077C21.4209 17.9087 20.6813 18.5852 19.7733 18.6499C17.836 18.7881 14.4636 19 12 19C9.53641 19 6.16403 18.7881 4.22666 18.6499C3.31869 18.5852 2.57906 17.9087 2.44973 17.0077C2.25098 15.623 2 13.5647 2 12.0001C2 10.4356 2.25099 8.37719 2.44974 6.99251Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 12L10 15.4641V8.5359L16 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path d="M10 15V8.5L16 12L10 15Z" stroke="currentColor"></path>
              </svg>
              <span>Ваши видео</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="64"
                width="64"
              >
                <path
                  style="fill: currentColor; fill-opacity: 1; stroke: none"
                  d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 C 11.313708 14 14 11.313708 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 3 C 10.761424 3 13 5.2385763 13 8 C 13 10.761424 10.761424 13 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 z M 7 4 L 7 8 L 7 9 L 12 9 L 12 8 L 8 8 L 8 4 L 7 4 z "
                ></path>
              </svg>
              <span>Смотреть позже</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                style="fill: currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"
                ></path>
              </svg>
              <span>Понравившиеся</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="px-8 py-4 font-medium leading-5 border-b">
        <span class="text-sm">
          Вы сможете ставить отметки "Нравится", писать комментарии и
          подписываться на каналы.
        </span>
        <button
          class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
        >
          <svg
            class="w-7 h-7 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Войти
        </button>
      </section>

      <section class="py-2 border-b">
        <div class="uppercase text-sm font-semibold px-6 my-2">навигатор</div>
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                  />
                </svg>
              </div>
              <span>Музыка</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="64"
                  viewBox="0 0 24 24"
                  width="64"
                >
                  <g><path d="M0,0h24v24H0V0z" fill="none"></path></g>
                  <g>
                    <g>
                      <path
                        d="M11,6H9V4h2V6z M15,4h-2v2h2V4z M9,14h2v-2H9V14z M19,10V8h-2v2H19z M19,14v-2h-2v2H19z M13,14h2v-2h-2V14z M19,4h-2v2h2 V4z M13,8V6h-2v2H13z M7,10V8h2V6H7V5c0-0.55-0.45-1-1-1h0C5.45,4,5,4.45,5,5v14c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-7h2v-2H7 z M15,12h2v-2h-2V12z M11,10v2h2v-2H11z M9,8v2h2V8H9z M13,10h2V8h-2V10z M15,6v2h2V6H15z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <span>Спорт</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  height="64"
                  width="64"
                >
                  <path
                    style="fill: currentColor"
                    d="M184,112H152a4,4,0,0,1,0-8h32a4,4,0,0,1,0,8Zm-80-8H92V92a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V112h12a4,4,0,0,0,0-8ZM217.56152,219.50977a32.0298,32.0298,0,0,1-28.18359-8.88282c-.08447-.085-.16406-.17187-.23975-.26172l-41.91162-46.52587-38.40576.1538L66.86523,210.37207q-.11059.13183-.23388.25488a32.0018,32.0018,0,0,1-54.14063-28.18847L28.81787,98.46387c.0083-.06153.01758-.12305.02832-.18457A55.87419,55.87419,0,0,1,84.00439,52l88.002-.25977h.01172a56.07977,56.07977,0,0,1,55.10742,46.10791c.00757.03467.02344.06592.03027.10108l16.35059,84.42285A32.05063,32.05063,0,0,1,217.56152,219.50977ZM172.002,155.74023a48,48,0,1,0,.02637-96L84.01611,60A47.89173,47.89173,0,0,0,36.77,99.41113c-.01172.10742-.02832.21485-.04932.32325l-16.36425,84.1621a24.00209,24.00209,0,0,0,40.52246,21.168l43.19384-47.748A4.00174,4.00174,0,0,1,107.023,156Zm63.6377,28.08692-11.01636-56.87793a56.0955,56.0955,0,0,1-52.60522,36.791l-14.06324.05616,37.177,41.27a24.00165,24.00165,0,0,0,40.50781-21.23926Z"
                  ></path>
                </svg>
              </div>
              <span>Видеоигры</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height="64"
                  width="64"
                >
                  <path
                    style="fill: currentColor"
                    d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z "
                    class="ColorScheme-Text"
                  ></path>
                </svg>
              </div>
              <span>Фильмы</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                  ></path>
                </svg>
              </div>
              <span>Трансляции</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  width="64"
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 0 16 16"
                >
                  <path
                    style="fill: currentColor"
                    d="m3 2v3h-2v7.5c0 .831.669 1.5 1.5 1.5h12.5v-12h-11zm1 1h10v10h-10v-8zm1 1v1h8v-1zm-3 2h1v7h-.5c-.277 0-.5-.223-.5-.5v-.6zm3 0v4h4v-4zm5 0v1h3v-1zm0 3v1h3v-1zm-5 2v1h8v-1z"
                  ></path>
                </svg>
              </div>
              <span>В центре внимания</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-gray-700 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    style="fill: currentColor"
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  ></path>
                  <path
                    style="fill: currentColor"
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  ></path>
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
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  style="fill: currentColor"
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  style="fill: currentColor"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                ></path></svg
              ><span>Каталог каналов</span>
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
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-red-600 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  height="64"
                  width="64"
                >
                  <g opacity="0.2">
                    <path
                      style="fill: currentColor"
                      d="M128,32a96,96,0,1,0,96,96A95.99975,95.99975,0,0,0,128,32ZM112,160V96l48,32Z"
                    ></path>
                  </g>
                  <g>
                    <path
                      style="fill: currentColor"
                      d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Z"
                    ></path>
                    <path
                      style="fill: currentColor"
                      d="M164.4375,121.34375l-48-32A7.99977,7.99977,0,0,0,104,96v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32a7.99959,7.99959,0,0,0,0-13.3125ZM120,145.05176V110.94824L145.57812,128Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <span>YouTube Music</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-red-600 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  style="fill: currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="mdi-movie-play"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 4V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M17 22L22 19L17 16V22Z"
                  ></path>
                </svg>
              </div>
              <span>YouTube Детям</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="mr-6 bg-red-600 rounded-full p-1">
                <svg
                  class="w-4 h-4 text-white"
                  style="fill: currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="mdi-television-play"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7"
                  ></path>
                </svg>
              </div>
              <span>YouTube TV</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="64"
                width="64"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    style="fill: currentColor"
                    d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  ></path>
                </g>
              </svg>
              <span>Настройки</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  style="fill: currentColor"
                  d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"
                ></path>
              </svg>
              <span>Жалобы</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-e</title>
                <path
                  d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
                  style="
                    fill: none;
                    stroke: currentColor;
                    stroke-miterlimit: 10;
                    stroke-width: 32px;
                  "
                ></path>
                <path
                  d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296"
                  style="
                    fill: none;
                    stroke: currentColor;
                    stroke-linecap: round;
                    stroke-miterlimit: 10;
                    stroke-width: 28px;
                  "
                ></path>
                <circle cx="250" cy="348" r="20"></circle>
              </svg>
              <span>Справка</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 text-gray-600"
                style="fill: currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="mdi-message-alert-outline"
                width="64"
                height="64"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z"
                ></path>
              </svg>
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
        <div class="font-normal text-gray-500">© 2022 Google LLC</div>
      </section>
    </aside>
  </div>
</template>

<script>
import LogoMain from '~/components/LogoMain'

export default {
  name: 'TheSidebarMobile',
  components: {
    LogoMain,
  },
}
</script>

<style scoped></style>
