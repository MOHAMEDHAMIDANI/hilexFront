<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-blue-50 rounded-full transform scale-110 group-hover:scale-125 transition-transform duration-300"></div>
              <div class="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <component 
                  :is="service.icon" 
                  class="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300 text-blue-600"
                />
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Truck, 
  Headset, 
  ShieldCheck 
} from 'lucide-vue-next';

const services = [
  {
    icon: Truck,
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: Headset,
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: ShieldCheck,
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
];
</script>

<style scoped>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
</style>
  