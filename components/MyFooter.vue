<template>
  <footer class="bg-black text-white py-10">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4  justify-center gap-8 px-5">
      <div>
        <h3 class="font-bold text-lg mb-4">Exclusive</h3>
        <p class="mb-2">Subscribe</p>
        <p class="text-gray-400 mb-4">Get 10% off your first order</p>
        <div
          class="flex items-center border border-gray-400 rounded overflow-hidden"
        >
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-transparent p-2 flex-1 text-sm placeholder-gray-400 focus:outline-none"
          />
          <button class="text-black p-2 cursor-pointer">
            <svg
            class="hover:text-white text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.82 11L8 13.17a1.1 1.1 0 0 0 1.05.3a1.12 1.12 0 0 0 .81-.74L13.44 2A1.12 1.12 0 0 0 12 .56L1.27 4.14A1.12 1.12 0 0 0 .53 5a1.1 1.1 0 0 0 .3 1l2.74 2.74l-.09 3.47ZM13.12.78L3.57 8.74"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4">Support</h3>
        <p class="text-gray-400 mb-2">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p class="text-gray-400 mb-2">exclusive@gmail.com</p>
        <p class="text-gray-400">+88015-88888-9999</p>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4">Account</h3>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#">My Account</a></li>
          <li><a href="#">Login / Register</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4">Quick Link</h3>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-4 text-start">Download App</h3>
        <p class="text-gray-400 mb-4 text-start">
          Save $3 with App New User Only
        </p>
        <div class="flex items-center gap-2 mb-4">
          <img
            src="/assets/mohamidani1_qr.png"
            alt="QR Code"
            class="w-20 h-20"
          />
          <div class="flex flex-col gap-2">
            <img src="/assets/GooglePlay.png" alt="Google Play" class="w-28" />
            <img
              src="/assets/download-appstore.png"
              alt="App Store"
              class="w-28"
            />
          </div>
        </div>
        <div class="flex gap-4 items-center ">
          <a href="" target="_blank">
            <img
              src="/assets/Icon-Facebook.png"
              alt="facebook"
              class="w-6 h-6 cursor-pointer"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/assets/Icon-Linkedin.png"
              alt="LinkedIn"
              class="w-6 h-6 cursor-pointer"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="/assets/Icon-Twitter.png"
              alt="Twitter"
              class="w-6 h-6 cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src="/assets/Icon-Instagram.png"
              alt="instagram"
              class="w-6 h-6 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="border-t border-gray-700 mt-5 pt-5 text-center text-gray-500 text-sm"
    >
      © Copyright MrMH {{ new Date().getFullYear() }}. All right reserved
    </div>
  </footer>
</template>
  