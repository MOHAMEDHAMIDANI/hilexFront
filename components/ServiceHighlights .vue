<template>
  <div
    class=" container mx-auto flex flex-col md:flex-row h-fit justify-between items-center py-10 bg-white"
  >
    <div
      v-for="(service, index) in services"
      :key="index"
      class="flex flex-col h-[170px] items-center text-center w-full md:w-1/3"
    >
      <div
        class="w-16 h-16 outline-gray-300 bg-black outline-[10px] rounded-full flex items-center justify-center mb-5"
      >
        <img :src="service.icon" class="w-8 h-8 " />
      </div>
      <h3 class="font-bold text-black uppercase text-sm mb-2">
        {{ service.title }}
      </h3>
      <p class="text-gray-600 text-sm">{{ service.description }}</p>
    </div>
  </div>
</template>
  
<script setup>
import delivery from "@/assets/icon-delivery.png";
import customerService from "@/assets/Icon-Customer service.png";
import secure from "@/assets/Icon-secure.png";

const services = [
  {
    icon: delivery,
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: customerService,
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: secure,
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
];
</script>

  