<template>
    <MainLayout>
        <div class="xl:w-11/12 lg:w-8/12 md:w-9/12 sm:w-11/12 mx-auto min-h-lvh flex flex-wrap gap-5">
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
            <div class="w-full h-[600px] flex flex-col items-center max-w-[670px]">
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
                    <div class="flex items-center space-x-4 mt-4 w-full justify-between h-[44px]">
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

                        <button
                            class="bg-highlight-2 cursor-pointer hover:bg-highlight-2/85 text-white w-[165px] h-full rounded-[4px]">
                            Buy Now
                        </button>

                        <button class="border size-[40px] rounded flex items-center justify-center"
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
const imageContainer : Ref<HTMLElement | null> = ref(null);
const zoomScale = 2.5;

const zoomStyle = computed(() => ({
    transform: `scale(${zoomScale})`,
    transformOrigin: `${zoomX.value}% ${zoomY.value}%`,
}));

const handleMouseMove = (event : MouseEvent) => {
    if (!imageContainer.value) return;

    const { left, top, width, height } = imageContainer.value.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    zoomX.value = x ;
    zoomY.value = y;
};
</script>

<style scoped></style>