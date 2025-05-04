<template>
  <MainLayout>
    <div
      class="container mx-auto min-h-[70vh] flex flex-col items-center justify-center px-4 py-12"
    >
      <div class="text-center max-w-2xl">
        <div
          class="mx-auto mb-8 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <Icon
            name="heroicons:exclamation-triangle"
            class="w-12 h-12 text-primary"
          />
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p class="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <nuxtLink
          to="/"
          class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
        >
          <Icon name="heroicons:arrow-left" class="mr-2 w-5 h-5" />
          Return to Homepage
        </nuxtLink>
        <div class="mt-8 max-w-md mx-auto">
          <div class="relative">
            <input
              type="text"
              placeholder="Search our site..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
            >
              <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
  
  <script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
useHead({
  title: "404 Page Not Found",
  meta: [
    {
      name: "description",
      content: "The page you requested could not be found",
    },
    { name: "robots", content: "noindex, nofollow" },
  ],
});
</script>
  
  <style scoped>
.container {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>