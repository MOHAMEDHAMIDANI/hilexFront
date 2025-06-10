<template>
  <section class="hero-section relative overflow-hidden h-screen min-h-[700px] flex items-center">
    <div class="absolute inset-0 bg-[url('/services/services-hero.png')] bg-cover bg-center"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span class="inline-block animate-fade-in-up">Helix Medical</span>
        </h1>
                <div class="w-24 h-1.5 bg-orange-400 mx-auto mb-8 animate-grow"></div>
                <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100">
          Your trusted partner for better hearing and improved quality of life. 
          <span class="block mt-2 font-medium">Premium solutions tailored to your needs.</span>
        </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-200">
          <nuxt-link 
            to="/contact" 
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform flex items-center justify-center gap-2 min-w-[250px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            Book a Free Hearing Test
          </nuxt-link>
          <nuxt-link 
            to="/services" 
            class="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold text-lg py-3.5 px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform min-w-[250px]"
          >
            Explore Our Services
          </nuxt-link>
        </div>
      </div>
    </div>
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-section {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="rgba(255,255,255,0.1)" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.animate-grow {
  animation: grow 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  transform-origin: left center;
}
</style>