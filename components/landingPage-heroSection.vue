<template>
  <section class="hero-section bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden h-[80vh]">
    <div class="absolute inset-0 bg-[url('/services/services-hero.png')] bg-cover bg-center opacity-20"></div>
    <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl font-bold text-white mb-6 animate-fade-in text-shadow-strong">Helix Medical</h1>
        <div class="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>
        <p class="text-xl max-w-2xl mx-auto leading-relaxed mb-6 text-shadow-strong text-gray-200">
          Your trusted partner for better hearing and improved quality of life. We offer premium hearing solutions and professional services tailored to your needs.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <nuxt-link to="/contact" class="bg-highlight-orange hover:bg-highlight-dark text-white font-bold text-xl py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md inline-block">
            Book a Free Hearing Test
          </nuxt-link>
          <nuxt-link to="/services" class="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-xl py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md inline-block">
            View Our Services
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component props can be added here if needed
</script>

<style scoped>
.hero-section {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23dbeafe" fill-opacity="0.4" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.text-shadow-strong {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 5px rgba(0, 0, 0, 0.5);
}

.text-content-box {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 8px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style>