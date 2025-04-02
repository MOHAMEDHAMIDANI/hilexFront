<template>
    <MainLayout>
        <div class="xl:w-11/12 lg:w-8/12 md:w-9/12 sm:w-11/12 mx-auto h-fit flex justify-evenly flex-wrap gap-5">
            <div
                class="flex justify-between sm:flex-col md:flex-row items-center gap-2.5 p-2 w-full max-w-[670px] sm:w-full sm:h-auto md:h-[600px]">

                <div class="flex md:flex-col sm:flex-row  justify-center items-center md:h-[600px] sm:gap-2">
                    <div v-for="(image, index) in images" :key="index" @click="selectedImage = image"
                        :class="selectedImage === image ? 'border-2 border-highlight-2' : ''"
                        class="md:w-[170px] cursor-pointer md:h-[138px] hover:border-2 hover:border-highlight-2 sm:w-[120px] sm:h-[100px] flex justify-center shrink-0 items-center bg-[#F5F5F5] rounded-[4px]">
                        <div class="md:w-[112px] md:h-[97px] sm:w-[90px] sm:h-[75px]">
                            <img src="../../assets/g92-2-500x500 1.png" alt="" class="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
                <div @mousemove="handleMouseMove($event)" @mouseenter="showZoom = true" @mouseleave="showZoom = false"
                    class="md:h-[600px] relative md:w-[500px] sm:w-full sm:h-[300px] flex justify-center items-center bg-[#F5F5F5]">
                    <div ref="imageContainer" class="max-w-[446px] max-h-[315px] sm:max-w-full sm:max-h-full">
                        <img src="/assets/g92-2-500x500 1.png" alt="" class="w-full h-full object-contain" />
                    </div>
                    <div v-if="showZoom"
                        class="absolute w-[200px] h-[200px] border border-gray-400 bg-white shadow-lg overflow-hidden"
                        :style="{ top: zoomY + 'px', left: zoomX + 'px' }">
                        <img src="/assets/g92-2-500x500 1.png" class="absolute" :style="zoomStyle" />
                    </div>
                </div>
            </div>
            <div class="w-fit h-[600px] flex flex-col items-center ">
                <div class="w-[400px] h-fit">
                    <div class="h-fit w-full flex flex-col gap-2">
                        <h3 class="text-[24px] font-[600] w-full p-1 text-start truncate text-wrap">
                            this is a title for the product
                        </h3>
                        <h3 class="text-[16px] font-[400] text-highlight-dark text-pretty">
                            in stock
                        </h3>
                        <h4 class="text-[24px] font-[400] text-highlight-dark text-pretty">
                            <span>DZD</span> 1400
                        </h4>
                        <p class="h-fit w-full text-pretty capitalize text-[14px] font-[400] leading-[21px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            esse sequi harum ipsa eos optio quam ad aperiam assumenda neque
                            quasi debitis eius deleniti, praesentium, hic nesciunt! Animi,
                            deserunt unde?
                        </p>
                        <hr />
                    </div>
                    <div class="w-full h-[40px] flex items-center gap-4 mt-4">
                        <h3 class="font-[400] text-20px leading-[40px] h-full">Size:</h3>
                        <div class="flex space-x-2 items-center w-fit h-full">
                            <button v-for="size in sizes" :key="size"
                                class="size-[32px] border cursor-pointer text-center leading-[32px] rounded"
                                :class="{ 'bg-highlight-2 text-white': selectedSize === size }"
                                @click="selectedSize = size">
                                {{ size }}
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mt-4 w-full  justify-between h-[44px]">
                        <div class="flex items-center rounded overflow-hidden w-[159px] h-full border">
                            <button @click="decreaseQty"
                                class="border-r w-[40px] cursor-pointer flex items-center justify-center h-full rounded-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2" />
                                </svg>
                            </button>
                            <span class="w-[80px] h-full text-center leading-[44px]">{{
                                quantity
                                }}</span>
                            <button @click="increaseQty"
                                class="w-[40px] h-full cursor-pointer rounded-[4px] flex justify-center items-center border-l border-black bg-highlight-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21" />
                                </svg>
                            </button>
                        </div>

                        <button @click="Willing()"
                            class="bg-highlight-2 cursor-pointer hover:bg-highlight-2/85 text-white w-[165px] h-full rounded-[4px]">
                            Buy Now
                        </button>

                        <button class="border size-[44px] rounded flex items-center justify-center"
                            @click="favorite = !favorite">
                            <div v-if="!favorite" class="relative inline-flex items-center justify-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78c1.433 0 2.695.672 3.6 1.542c.905-.87 2.166-1.542 3.6-1.542c2.78 0 5.15 2.08 5.15 4.78c0 1.85-.789 3.476-1.882 4.852c-1.09 1.372-2.518 2.537-3.884 3.484c-.523.362-1.05.695-1.534.941c-.453.231-.975.443-1.45.443s-.996-.212-1.45-.443a14 14 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03M8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28c0 1.403.596 2.71 1.556 3.918c.962 1.21 2.257 2.279 3.565 3.185c.495.343.96.634 1.36.838c.428.218.676.279.769.279s.341-.061.77-.28a12 12 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-1.75-1.57-3.28-3.65-3.28c-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div v-else class="relative inline-flex items-center justify-center p-2 text-highlight-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78c1.433 0 2.695.672 3.6 1.542c.905-.87 2.166-1.542 3.6-1.542c2.78 0 5.15 2.08 5.15 4.78c0 1.85-.789 3.476-1.882 4.852c-1.09 1.372-2.518 2.537-3.884 3.484c-.523.362-1.05.695-1.534.941c-.453.231-.975.443-1.45.443s-.996-.212-1.45-.443a14 14 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03M8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28c0 1.403.596 2.71 1.556 3.918c.962 1.21 2.257 2.279 3.565 3.185c.495.343.96.634 1.36.838c.428.218.676.279.769.279s.341-.061.77-.28a12 12 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-1.75-1.57-3.28-3.65-3.28c-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class="w-full max-w-[400px] sm:max-w-[500px] border rounded-md p-3 mt-4">
                        <div class="flex items-center gap-3 pb-3 border-b">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <g fill="none">
                                    <path fill="currentColor"
                                        d="M2 7v-.5a.5.5 0 0 0-.5.5zm11 0h.5a.5.5 0 0 0-.5-.5zm0 2v-.5a.5.5 0 0 0-.5.5zM2 7.5h11v-1H2zM12.5 7v12h1V7zm-10 10V7h-1v10zM13 9.5h5v-1h-5zm8.5 3.5v4h1v-4zm-8 6V9h-1v10zm5.56 1.06a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm-9.88 2.12a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm14.12 0c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM19.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 20.5 19zm-3.5-.5h-3v1h3zm.94 1.56A1.5 1.5 0 0 1 16.5 19h-1c0 .639.244 1.28.732 1.768zM16.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 15.5 19zM4.94 20.06A1.5 1.5 0 0 1 4.5 19h-1c0 .639.244 1.28.732 1.768zM4.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 3.5 19zm8.5-.5H8v1h5zm-5.94-.56c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM7.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 8.5 19zm14-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 18 8.5zM1.5 17A2.5 2.5 0 0 0 4 19.5v-1A1.5 1.5 0 0 1 2.5 17z" />
                                    <path stroke="currentColor" stroke-linejoin="round"
                                        d="M3.5 4a1 1 0 0 1 1-1a3 3 0 0 1 3 3v1h-1a3 3 0 0 1-3-3Zm8 0a1 1 0 0 0-1-1a3 3 0 0 0-3 3v1h1a3 3 0 0 0 3-3Z" />
                                </g>
                            </svg>
                            <div>
                                <h3 class="text-[14px] sm:text-[16px] font-semibold">
                                    Free Delivery
                                </h3>
                                <p class="text-[12px] sm:text-[14px] text-gray-600">
                                    <a href="#" class="text-black font-medium">Enter your postal code</a>
                                    for Delivery Availability
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="m19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01c-2.094 5.977-4.496 11.044-7.068 14.968c-17.29 26.383-62.522 40.075-101.654 28.596c5.984-19.75 10.132-39.834 12.07-59.12c-95.46 8.177-212.544 8.42-301.207-22.642c41.727 95.317 99.325 164.465 164.983 230.08c18.296-2.164 35.807-11.35 51.837-25.37c85.218 34.667 188.066-2.555 226.748-60.68c46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03c-37.15-93.627-137.68-191.855-312.38-239.03H19.83z" />
                            </svg>
                            <div>
                                <h3 class="text-[14px] sm:text-[16px] font-semibold">
                                    Return Delivery
                                </h3>
                                <p class="text-[12px] sm:text-[14px] text-gray-600">
                                    Free 30 Days Delivery Returns.
                                    <a href="#" class="text-black font-medium">Details</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="WillingToBuy" class="fixed inset-0 bg-black/60 z-10 flex justify-center items-center p-4">
                <button
                    class=" absolute cursor-pointer top-5 right-5 bg-primary hover:bg-primary-dark2 duration-300 size-[44px] rounded flex items-center justify-center"
                    @click="WillingToBuy = false">
                    <div v-if="true" class="relative inline-flex items-center justify-center p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m12 12.727l-3.592 3.592q-.16.16-.354.15T7.7 16.3t-.16-.364q0-.203.16-.363L11.273 12L7.681 8.433q-.16-.16-.15-.364t.169-.363t.364-.16q.203 0 .363.16L12 11.298l3.567-3.592q.16-.16.354-.16t.354.16q.166.165.166.366t-.166.36L12.702 12l3.592 3.592q.16.16.16.354t-.16.354q-.165.166-.366.166t-.36-.166z" />
                        </svg>
                    </div>
                </button>
                <div ref="buyModel"
                    class="bg-gray-100 p-6 rounded-md shadow-md w-full max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col space-y-6 max-h-[79vh] overflow-auto">
                    <h3 class="font-[500] text-[36px] leading-[30px] capitalize">billing details</h3>
                    <div
                        class="w-full h-full flex justify-between lg:flex-row flex-col-reverse gap-5 mt-5 items-center">
                        <form class="flex flex-col  md:w-fit lg:w-fit w-full  h-full">
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="floating_first_name"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                        name</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="floating_last_name"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                        name</label>
                                </div>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                    address</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">address</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">town/city</label>
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone"
                                    id="floating_phone"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_phone"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                    number</label>
                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                        <div class="max-w-sm flex justify-end items-center">
                            <div class="w-[470px] h-fit border border-gray-300 rounded-md p-6">
                                <h2 class="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                                <div class="flex items-center justify-between  pb-2">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-16 h-16 flex-shrink-0">
                                            <img class="w-full h-full object-contain" src="/assets/g92-2-500x500 1.png"
                                                alt="Product Image">
                                        </div>
                                        <span class="text-gray-700 font-medium text-sm sm:text-base">John Doe</span>
                                    </div>
                                    <span class="text-gray-900 font-semibold text-sm sm:text-base">$1750</span>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                                        <span class="text-gray-600 ">Subtotal:</span>
                                        <span class="text-gray-900">$1750</span>
                                    </div>

                                    <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                                        <span class="text-gray-600">Shipping:</span>
                                        <span class="text-gray-900">Free</span>
                                    </div>

                                    <div class="flex justify-between text-lg  border-t pt-3">
                                        <span class="text-gray-700">Total:</span>
                                        <span class="text-gray-900">$1750</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slider>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </slider>

    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
const favorite = ref(false);
const sizes = ref(["XS", "S", "M", "L", "XL"]);
const selectedSize = ref("M");

const images = ref([
    "../../assets/g92-2-500x500 1.png",
    '/assets/g92-2-500x500 2.png', '/assets/g92-2-500x500 3.png', '/assets/g92-2-500x500 1.png',
]);
const quantity = ref(2);
const increaseQty = () => {
    quantity.value++;
};
const decreaseQty = () => {
    if (quantity.value > 1) quantity.value--;
};
const selectedImage = ref("/assets/g92-2-500x500 1.png");
const showZoom = ref(false);
const zoomX = ref(0);
const zoomY = ref(0);
const imageContainer: Ref<HTMLElement | null> = ref(null);
const zoomScale = 2.5;

const zoomStyle = computed(() => ({
    transform: `scale(${zoomScale})`,
    transformOrigin: `${zoomX.value}% ${zoomY.value}%`,
}));

const handleMouseMove = (event: MouseEvent) => {
    if (!imageContainer.value) return;

    const { left, top, width, height } = imageContainer.value.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    zoomX.value = x;
    zoomY.value = y;
};


const WillingToBuy = ref(true);
const buyModel = ref(null);
const Willing = () => {
    if (quantity.value > 0 && selectedSize) {
        WillingToBuy.value = true;
    } else {
        alert("Please select size and quantity");
    }
}
onClickOutside(buyModel, () => {
    WillingToBuy.value = false;
});
</script>

<style scoped></style>