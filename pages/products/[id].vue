<template>
    <MainLayout>
        <div v-if="0" class="container mx-auto h-fit flex justify-evenly flex-wrap gap-5">
            <div
                class="flex justify-between sm:flex-col md:flex-row items-center gap-2.5 p-2 w-full max-w-[670px] sm:w-full sm:h-auto md:h-[600px]">
                <div class="flex md:flex-col sm:flex-row justify-center items-center md:h-[600px] sm:gap-2">
                    <div v-for="i in 4" :key="i"
                        class="md:w-[170px] md:h-[138px] sm:w-[120px] sm:h-[100px] bg-gray-200 rounded-[4px] animate-pulse">
                    </div>
                </div>
                <div
                    class="md:h-[600px] relative md:w-[500px] sm:w-full sm:h-[300px] bg-gray-200 animate-pulse rounded-md">
                </div>
            </div>
            <div class="w-fit h-[600px] flex flex-col items-center">
                <div class="w-[400px] h-fit space-y-4">
                    <div class="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-10 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                    <div>
                        <div class="h-5 w-1/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div class="flex gap-3">
                            <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                    </div>
                    <div>
                        <div class="h-5 w-1/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div class="flex gap-2">
                            <div v-for="i in 5" :key="i" class="w-12 h-12 bg-gray-200 rounded-md animate-pulse"></div>
                        </div>
                    </div>
                    <div class="flex gap-4 mt-4">
                        <div class="w-40 h-12 bg-gray-200 rounded animate-pulse"></div>
                        <div class="w-40 h-12 bg-gray-200 rounded animate-pulse"></div>
                        <div class="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div class="w-full border rounded-md p-3 mt-4 space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            <div class="flex-1 space-y-2">
                                <div class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                                <div class="h-3 w-full bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            <div class="flex-1 space-y-2">
                                <div class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                                <div class="h-3 w-full bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container mx-auto h-fit flex justify-evenly flex-wrap gap-5">
            <div
                class="flex justify-between sm:flex-col md:flex-row items-center gap-2.5 p-2 w-full max-w-[670px] sm:w-full sm:h-auto md:h-[600px]">

                <div class="flex md:flex-col sm:flex-row  justify-center items-center md:h-[600px] sm:gap-2">
                    <div v-for="(image, index) in product?.image" :key="index" @click="selectedImage = image" :class="[
                        'md:w-[170px] cursor-pointer md:h-[138px] sm:w-[120px] sm:h-[100px]',
                        'flex justify-center shrink-0 items-center bg-[#F5F5F5] rounded-[4px]',
                        'transition-all duration-200',
                        selectedImage === image ? 'ring-2 ring-highlight-2' : 'hover:ring-2 hover:ring-highlight-2'
                    ]">
                        <div class="md:w-[112px] md:h-[97px] sm:w-[90px] sm:h-[75px]">
                            <img :src="'http://localhost:3000/uploads/Product/' + image" alt="Product thumbnail"
                                class="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
                <div
                    class="md:h-[600px] relative md:w-[500px] sm:w-full sm:h-[300px] flex justify-center items-center bg-[#F5F5F5]">
                    <div @mousemove="handleMouseMove" @mouseenter="showZoom = true" @mouseleave="showZoom = false"
                        @wheel.prevent="handleWheel" ref="imageContainer"
                        class="max-w-[446px] max-h-[315px] flex justify-center items-center sm:w-full sm:h-full cursor-zoom-in relative">
                        <img :src="'http://localhost:3000/uploads/Product/' + selectedImage" alt="Product image"
                            class="w-full h-full object-contain" />
                    </div>
                    <div v-if="showZoom"
                        class="absolute w-[300px] h-[300px] border border-gray-300 bg-white rounded-lg shadow-xl overflow-hidden pointer-events-none"
                        :style="{
                            left: `${Math.min(Math.max(mouseX, 0), (imageContainer?.offsetWidth || 0) - 300 || 0)}px`,
                            top: `${Math.min(Math.max(mouseY - 150, -150), (imageContainer?.offsetHeight || 0) - 150)}px`,
                            zIndex: 50
                        }">
                        <img :src="'http://localhost:3000/uploads/Product/' + selectedImage" alt="Zoomed product image"
                            class="absolute w-[200%] h-[200%] object-contain transition-transform duration-150"
                            :style="zoomStyle" />
                        <div class="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                            {{ Math.round((zoomScale || 2) * 100) }}%
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-fit min-h-[600px] flex flex-col items-center ">
                <div class="w-[400px] h-fit">
                    <div class="h-fit w-full flex flex-col gap-4">
                        <h3 class="text-[24px] font-[600] w-full p-1 text-start truncate text-wrap">
                            {{ product?.productName }}
                        </h3>
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-green-500"></div>
                            <h3 class="text-[16px] font-[400] text-highlight-dark text-pretty">
                                {{ product?.stock ? product?.stock : 0 }} in stock
                            </h3>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-3">
                                <h4 class="text-[28px] font-[600] text-highlight-dark">
                                    DZD {{ currentProductPrice }}
                                </h4>
                                <span v-if="product?.hasPromotion"
                                    class="text-[16px] font-[400] text-gray-400 line-through">
                                    DZD {{ product?.price }}
                                </span>
                            </div>
                            <div v-if="product?.hasPromotion" class="flex items-center gap-2">
                                <span
                                    class="px-2 py-1 bg-highlight-2/10 text-highlight-2 rounded-full text-[14px] font-[500]">
                                    {{ product?.promotionPercentage }} OFF
                                </span>
                                <span class="text-[14px] text-gray-500">
                                    Limited time offer
                                </span>
                            </div>
                        </div>

                        <p
                            class="h-fit w-full text-pretty capitalize text-[14px] font-[400] leading-[21px] text-gray-600">
                            {{ product?.description }}
                        </p>
                        <hr class="my-2" />
                    </div>
                    <div class="w-full space-y-6 mt-4">
                        <div class="w-full">
                            <h3 class="font-[500] text-[16px] mb-2">Select Color:</h3>
                            <div class="flex flex-wrap gap-3">
                                <button v-for="color in availableColors" :key="color.value"
                                    :style="{ backgroundColor: color.hex }"
                                    class="size-[30px] cursor-pointer rounded-full transition-all duration-200 relative shadow-sm hover:shadow-md"
                                    :class="[
                                        selectedColor === color.value ? 'ring-4 ring-highlight-2 scale-110' : 'hover:ring-2 hover:ring-black',
                                        !selectedColor ? 'ring-2 ring-highlight-2 animate-pulse' : ''
                                    ]" @click="handleColorSelect(color.value)">
                                    <div v-if="selectedColor === color.value"
                                        class="absolute inset-0 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                            <path d="M20 6L9 17L4 12" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <p v-if="!selectedColor" class="text-sm text-gray-500 mt-1">Please select a color first</p>
                        </div>
                        <div class="w-full" :class="{ 'opacity-50': !selectedColor }">
                            <h3 class="font-[500] text-[16px] mb-2">Select Size:</h3>
                            <div class="flex flex-wrap gap-2">
                                <button v-for="size in availableSizes" :key="size"
                                    class="min-w-[45px] h-[45px] cursor-pointer text-center leading-[45px] rounded-md transition-all duration-200 border"
                                    :class="[
                                        selectedSize === size ? 'bg-highlight-2 text-white border-highlight-2' : 'hover:bg-gray-100',
                                        !selectedColor ? 'cursor-not-allowed' : '',
                                        !selectedSize && selectedColor ? 'ring-2 ring-highlight-2 animate-pulse' : ''
                                    ]" :disabled="!selectedColor" @click="handleSizeSelect(size)">
                                    {{ size }}
                                </button>
                            </div>
                            <p v-if="selectedColor && !selectedSize" class="text-sm text-gray-500 mt-1">Please select a
                                size</p>
                        </div>
                        <div class="flex items-center space-x-4 mt-4 w-full justify-between h-[44px]">
                            <div class="flex items-center rounded overflow-hidden w-[159px] h-full border">
                                <button @click="quantity > 1 ? quantity-- : quantity = 1"
                                    :disabled="!selectedColor || !selectedSize" :class="[
                                        'border-r w-[40px] flex items-center justify-center h-full rounded-l',
                                        selectedColor && selectedSize ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-not-allowed opacity-50'
                                    ]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2" />
                                    </svg>
                                </button>
                                <span class="w-[80px] h-full text-center leading-[44px]">
                                    {{ quantity }}
                                </span>
                                <button @click="quantity++" :disabled="!selectedColor || !selectedSize" :class="[
                                    'w-[40px] h-full rounded-r flex justify-center items-center border-l text-white',
                                    selectedColor && selectedSize ? 'bg-highlight-2 hover:bg-highlight-2/90 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
                                ]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21" />
                                    </svg>
                                </button>
                            </div>

                            <button @click="openOrderDetailsModal()"
                                class="bg-highlight-2 w-[165px] h-full rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                                :class="[
                                    selectedColor && selectedSize ? 'hover:bg-highlight-2/90' : 'opacity-50 cursor-not-allowed'
                                ]" :disabled="!selectedColor || !selectedSize">
                                <span class="text-white">Buy Now</span>
                            </button>

                            <button :disabled="!selectedColor || !selectedSize || !product"
                                class="border size-[44px] rounded-md flex items-center justify-center transition-all duration-200"
                                :class="selectedColor && selectedSize ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'">
                                <div @click="store.addToFav(product)" v-if="product && !store.Fav.some((item: ProductType) => item.id === product.id)"
                                    class="relative inline-flex items-center justify-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78c1.433 0 2.695.672 3.6 1.542c.905-.87 2.166-1.542 3.6-1.542c2.78 0 5.15 2.08 5.15 4.78c0 1.85-.789 3.476-1.882 4.852c-1.09 1.372-2.518 2.537-3.884 3.484c-.523.362-1.05.695-1.534.941c-.453.231-.975.443-1.45.443s-.996-.212-1.45-.443a14 14 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03M8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28c0 1.403.596 2.71 1.556 3.918c.962 1.21 2.257 2.279 3.565 3.185c.495.343.96.634 1.36.838c.428.218.676.279.769.279s.341-.061.77-.28a12 12 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-1.75-1.57-3.28-3.65-3.28c-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div v-else-if="product" @click="store.removeFromFav(product)"
                                    class="relative inline-flex items-center justify-center p-2 text-highlight-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78c1.433 0 2.695.672 3.6 1.542c.905-.87 2.166-1.542 3.6-1.542c2.78 0 5.15 2.08 5.15 4.78c0 1.85-.789 3.476-1.882 4.852c-1.09 1.372-2.518 2.537-3.884 3.484c-.523.362-1.05.695-1.534.941c-.453.231-.975.443-1.45.443s-.996-.212-1.45-.443a14 14 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03M8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28c0 1.403.596 2.71 1.556 3.918c.962 1.21 2.257 2.279 3.565 3.185c.495.343.96.634 1.36.838c.428.218.676.279.769.279s.341-.061.77-.28a12 12 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-1.75-1.57-3.28-3.65-3.28c-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
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
            <div v-if="showOrderDetailsModal" class="fixed inset-0 bg-black/60 z-10 flex justify-center items-center p-4">
                <button
                    class=" absolute cursor-pointer top-5 right-5 bg-primary hover:bg-primary-dark2 duration-300 size-[44px] rounded flex items-center justify-center"
                    @click="showOrderDetailsModal = false">
                    <div v-if="true" class="relative inline-flex items-center justify-center p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m12 12.727l-3.592 3.592q-.16.16-.354.15T7.7 16.3t-.16-.364q0-.203.16-.363L11.273 12L7.681 8.433q-.16-.16-.15-.364t.169-.363t.364-.16q.203 0 .363.16L12 11.298l3.567-3.592q.16-.16.354-.16t.354.16q.166.165.166.366t-.166.36L12.702 12l3.592 3.592q.16.16.16.354t-.16.354q-.165.166-.366.166t-.36-.166z" />
                        </svg>
                    </div>
                </button>
                <div ref="buyModel"
                    class="bg-gray-100 p-6 rounded-md shadow-md w-full max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col space-y-6 max-h-[79vh] overflow-auto">
                    
                    <!-- Loading State -->
                    <div v-if="isProcessing" class="text-center py-8">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Processing Order...</h3>
                        <p class="text-gray-600">Please wait while we process your order.</p>
                    </div>

                    <!-- Success State -->
                    <div v-else-if="orderSuccess" class="text-center py-8">
                        <div class="bg-green-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <Icon name="material-symbols:check-circle-rounded" class="w-12 h-12 text-green-500" />
                        </div>
                        <h3 class="text-2xl font-semibold text-gray-800 mb-2">Order Confirmed!</h3>
                        <p class="text-gray-600 mb-6">Your order has been placed successfully.</p>
                         <button 
                            @click="showOrderDetailsModal = false; resetOrderState()"
                            class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
                          >
                            Close
                          </button>
                    </div>

                    <!-- Error State -->
                    <div v-else-if="orderError" class="text-center py-8">
                        <div class="bg-red-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <Icon name="material-symbols:error-rounded" class="w-12 h-12 text-red-500" />
                        </div>
                        <h3 class="text-2xl font-semibold text-gray-800 mb-2">Order Failed</h3>
                        <p class="text-gray-600 mb-6">{{ errorMessage || 'Something went wrong. Please try again.' }}</p>
                         <button 
                            @click="resetOrderState()"
                            class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
                          >
                            Try Again
                          </button>
                    </div>

                    <!-- Billing Details Form (Default State) -->
                    <template v-else>
                        <h3 class="font-[500] text-[36px] leading-[30px] capitalize">billing details</h3>
                        <div
                            class="w-full h-full flex justify-between lg:flex-row flex-col-reverse gap-5 mt-5 items-center">
                            <form class="flex flex-col  md:w-fit lg:w-fit w-full  h-full">
                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input v-model="form.firstName" type="text" name="floating_first_name" id="floating_first_name"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_first_name"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                            name</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input v-model="form.familyName" type="text" name="floating_last_name" id="floating_last_name"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_last_name"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                            name</label>
                                    </div>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input v-model="form.email" type="email" name="floating_email" id="floating_email"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="floating_email"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                        address</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input v-model="form.address" type="text" name="floating_address" id="floating_address"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="floating_address"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input v-model="form.city" type="text" name="floating_city" id="floating_city"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="floating_city"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Town/City</label>
                                </div>

                                <div class="relative z-0 w-full mb-5 group">
                                    <input v-model="form.phoneNumber" type="tel" name="floating_phone"
                                        id="floating_phone"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="floating_phone"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                        number</label>
                                </div>
                                <button type="submit"
                                    class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-primary-dark"
                                    @click.prevent="submitSingleProductOrder">
                                    Submit
                                </button>
                            </form>
                            <div class="max-w-sm flex justify-end items-center">
                                <div class="w-[470px] h-fit border border-gray-300 rounded-md p-6">
                                    <h2 class="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                                    <div class="flex items-center justify-between  pb-2">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-16 h-16 flex-shrink-0">
                                                <img class="w-full h-full object-contain"
                                                    :src="`http://localhost:3000/uploads/Product/${product?.image[0]}`"
                                                    alt="Product Image">
                                            </div>
                                            <span class="text-gray-700 font-medium text-sm sm:text-base">{{
                                                product?.productName }}</span>
                                        </div>
                                        <span class="text-gray-900 font-semibold text-sm sm:text-base">
                                            DZD {{ currentProductPrice }}
                                        </span>
                                    </div>
                                    <div class="space-y-4">
                                        <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                                            <span class="text-gray-600">Subtotal:</span>
                                            <span class="text-gray-900">
                                                DZD {{ currentProductPrice * quantity }}
                                            </span>
                                        </div>

                                        <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                                            <span class="text-gray-600">Shipping:</span>
                                            <span class="text-gray-900">Free</span>
                                        </div>

                                        <div class="flex justify-between text-lg  border-t pt-3">
                                            <span class="text-gray-700">Total:</span>
                                            <span class="text-gray-900">
                                                DZD {{ currentProductPrice * quantity }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <slider :hasItems="relatedProducts?.length > 0"  title="related items" :Slider="false" :allow-arrows="false" description="">
            <Product v-for="product in relatedProducts" :key="product.id" :product="product" />
        </slider>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
import type { Product as ProductType } from "~/types";
const store = useFavCartStore();
const ProductStore = useProductStore();
const quantity = ref(1);
const selectedSize = ref<string | null>(null);
const selectedColor = ref<string | null>(null);
const showZoom = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
const imageContainer = ref<HTMLElement | null>(null);
const zoomScale = ref(2);
const MIN_ZOOM = 1.5;
const MAX_ZOOM = 4;
const loading = ref(true);
const route = useRoute();
const product = ref<ProductType | undefined>(undefined);
const selectedImage = ref<string>('');
const relatedProducts = ref<ProductType[]>([]);

const availableSizes = computed(() => {
    if (!product.value?.sizes) return [];
    try {
        const parsed = typeof product.value.sizes === 'string'
            ? JSON.parse(product.value.sizes)
            : product.value.sizes;
        return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
        return String(product.value.sizes).split(',').map(s => s.trim()).filter(Boolean);
    }
});

const availableColors = computed(() => {
    if (!product.value?.colors) return [];
    try {
        const parsed = typeof product.value.colors === 'string'
            ? JSON.parse(product.value.colors)
            : product.value.colors;
        return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
        return String(product.value.colors).split(',').map(c => c.trim()).filter(Boolean);
    }
});

const zoomStyle = computed(() => {
    if (!imageContainer.value) return {};
    const rect = imageContainer.value.getBoundingClientRect();
    const x = (mouseX.value / rect.width) * 100;
    const y = (mouseY.value / rect.height) * 100;
    const scale = zoomScale.value || 2;
    const validX = isNaN(x) ? 50 : x;
    const validY = isNaN(y) ? 50 : y;
    return {
        transform: `translate(-${validX}%, -${validY}%) scale(${scale})`,
        transformOrigin: 'center',
        transition: 'transform 0.15s ease-out'
    };
});
onMounted(async () => {
    try {
        const id = route.params.id;
        product.value = await ProductStore.getProductById(id as string);

        if (product.value?.image?.length) {
            selectedImage.value = await product.value.image[0];
        }
        selectedSize.value = null;
        selectedColor.value = null;
    } catch (error) {
        console.error("Error loading product:", error);
    } finally {
        loading.value = false;
    }

    if (product.value?.category?.id) {
        try {
            relatedProducts.value = await ProductStore.getProductsWithFilters({
                categoryId: product.value.category.id,
                productName: null,
                color: null,
                size: null,
                maxPrice: null,
            });
            relatedProducts.value = relatedProducts.value.filter(p => p.id !== product.value?.id);
        } catch (error) {
            console.error("Error loading related products:", error);
        }
    }
});

const handleWheel = (event: WheelEvent) => {
    if (!showZoom.value) return;
    event.preventDefault();
    const zoomDelta = event.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, (zoomScale.value || 2) + zoomDelta));
    zoomScale.value = Number(newZoom.toFixed(1));
};

const handleMouseMove = (event: MouseEvent) => {
    if (!imageContainer.value) return;

    const rect = imageContainer.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.value = Math.min(Math.max(0, x), rect.width);
    mouseY.value = Math.min(Math.max(0, y), rect.height);
};

const showOrderDetailsModal = ref(false);
const buyModel = ref(null);
const isProcessing = ref(false);
const orderSuccess = ref(false);
const orderError = ref(false);
const errorMessage = ref('');

const form = reactive({
    firstName: '',
    familyName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
});

const openOrderDetailsModal = () => {
    if (!selectedColor.value) {
        alert("Please select a color first");
        return;
    }
    if (!selectedSize.value) {
        alert("Please select a size");
        return;
    }
    showOrderDetailsModal.value = true;
};

const handleColorSelect = (colorValue: string) => {
    selectedColor.value = selectedColor.value === colorValue ? null : colorValue;
    selectedSize.value = null;
};

const handleSizeSelect = (size: string) => {
    if (!selectedColor.value) return;
    selectedSize.value = selectedSize.value === size ? null : size;
};

const submitSingleProductOrder = async () => {
    const lastOrderAttempt = localStorage.getItem('lastOrderAttempt');
    const cooldownPeriod = 2 * 60 * 60 * 1000;
    const now = Date.now();

    if (lastOrderAttempt && (now - parseInt(lastOrderAttempt)) < cooldownPeriod) {
        const remainingTime = Math.ceil((cooldownPeriod - (now - parseInt(lastOrderAttempt))) / (60 * 1000));
        errorMessage.value = `Please wait ${remainingTime} minutes before placing another order.`;
        orderError.value = true;
        return;
    }
    if (!form.firstName || !form.familyName || !form.email || !form.phoneNumber || !form.address || !form.city) {
        errorMessage.value = 'Please fill in all required billing details.';
        orderError.value = true;
        return;
    }

    if (!product.value || !selectedColor.value || !selectedSize.value) {
        errorMessage.value = 'Please select a product, color, and size.';
        orderError.value = true;
        return;
    }

    try {
        isProcessing.value = true;
        orderError.value = false;
        orderSuccess.value = false;

        const productPrice = parseFloat(product.value.price);
        const promotionPrice = product.value.hasPromotion ? parseFloat(product.value.promotionPrice || '0') : productPrice;
        const currentPrice = product.value.hasPromotion ? promotionPrice : productPrice;
        const itemQuantity = quantity.value;

        const orderDto = {
            firstName: form.firstName,
            familyName: form.familyName,
            email: form.email,
            phoneNumber: form.phoneNumber,
            address: `${form.address}, ${form.city}`,
            totalPrice: currentPrice * itemQuantity,
            products: [{
                productId: product.value.id,
                quantity: itemQuantity,
                priceAtOrder: currentPrice,
                nameAtOrder: product.value.productName,
                color: selectedColor.value,
                size: selectedSize.value,
            }],
            shipping: {
                method: 'Standard',
                cost: 0,
                address: `${form.address}, ${form.city}`,
                city: form.city,
                state: '',
                zip: '',
                country: 'Algeria',
                tracking: '',
            },
            payment: {
                method: 'Cash on Delivery',
                status: 'pending',
            },
            customer: {
                name: `${form.firstName} ${form.familyName}`,
                email: form.email,
                phone: form.phoneNumber,
                avatar: '',
                isVIP: false,
            },
            subtotal: parseFloat((currentPrice * itemQuantity).toFixed(2)),
            tax: 0,
            discount: 0,
        };

        const { $axios } = useNuxtApp();
        const response = await $axios.post('/order', orderDto);
                localStorage.setItem('lastOrderAttempt', now.toString());
        
        orderSuccess.value = true;
    } catch (error: any) {
        orderError.value = true;
        errorMessage.value = error.message || 'An error occurred while placing your order';
        console.error('Order submission error:', error);
    } finally {
        isProcessing.value = false;
    }
};

const resetOrderState = () => {
    orderSuccess.value = false;
    orderError.value = false;
    errorMessage.value = '';
};

onClickOutside(buyModel, () => {
    if (!isProcessing.value || orderSuccess.value || orderError.value) {
        showOrderDetailsModal.value = false;
        resetOrderState();
    }
});

const currentProductPrice = computed(() => {
    if (!product.value) return 0;
    if (product.value.hasPromotion) {
        const promotionPrice = parseFloat(product.value.promotionPrice || '0');
        return promotionPrice;
    } else {
        return parseFloat(product.value.price);
    }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.zoom-container {
    position: relative;
    overflow: hidden;
}

.zoom-lens {
    position: absolute;
    border: 2px solid #d4d4d4;
    width: 100px;
    height: 100px;
    cursor: none;
}

.zoom-result {
    position: absolute;
    border: 1px solid #d4d4d4;
    width: 200px;
    height: 200px;
    overflow: hidden;
}

@keyframes priceTag {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.price-tag {
    animation: priceTag 0.5s ease;
}

@keyframes selectPulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.selected {
    animation: selectPulse 0.3s ease;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>