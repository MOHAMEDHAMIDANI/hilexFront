<template>
  <MainLayout>
    <div class="services-page">
      <section class="hero-section bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-5xl font-bold text-primary-dark mb-6">Our Hearing Services</h1>
            <p class="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">Beyond products — personalized support to help you hear better, every day.</p>
            <div class="mb-8">
              <img src="/services/services-hero.png" alt="Hearing services" class="mx-auto rounded-lg shadow-lg max-w-xs" />
            </div>
            <nuxt-link to="/contact" class="bg-highlight-orange hover:bg-highlight-dark text-white font-bold text-xl py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md inline-block">
              Book a Free Hearing Test
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="services-overview py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-10 text-center">Our Services For You</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            <div class="service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-2 border-blue-100">
              <div class="p-6">
                <div class="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary-dark mb-4 text-center">Digital Hearing Aid Fitting</h3>
                <p class="text-lg text-gray-800 leading-relaxed">We provide personalized fitting of digital hearing aids tailored to your hearing profile and lifestyle.</p>
              </div>
            </div>
            <div class="service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-2 border-blue-100">
              <div class="p-6">
                <div class="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary-dark mb-4 text-center">Hearing Tests</h3>
                <p class="text-lg text-gray-800 leading-relaxed">Quick and accurate hearing evaluations for all age groups — no obligation, completely free.</p>
              </div>
            </div>
            <div class="service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-2 border-blue-100">
              <div class="p-6">
                <div class="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary-dark mb-4 text-center">Personalized Consultation</h3>
                <p class="text-lg text-gray-800 leading-relaxed">Expert guidance to help you choose the right device, settings, and care for your needs.</p>
              </div>
            </div>
          </div>
                    <div class="flex flex-wrap justify-center gap-10">
            <div class="w-full md:w-[calc(50%-20px)] lg:w-[400px] service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-2 border-blue-100">
              <div class="p-6">
                <div class="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary-dark mb-4 text-center">Maintenance & Repairs</h3>
                <p class="text-lg text-gray-800 leading-relaxed">Cleaning, adjustments, and in-house repairs to ensure your hearing aids work perfectly.</p>
              </div>
            </div>

            <div class="w-full md:w-[calc(50%-20px)] lg:w-[400px] service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-2 border-blue-100">
              <div class="p-6">
                <div class="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary-dark mb-4 text-center">After-Sales Service & Support</h3>
                <p class="text-lg text-gray-800 leading-relaxed">Helix offers continuous support even after your purchase, from technical help to long-term care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="value-proposition bg-blue-50 py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-primary-dark mb-8">Why Choose Helix for Your Hearing Care</h2>
            <p class="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed">At Helix, we're not just here to sell. We're here to support. Our team is trained to deliver exceptional service and guidance every step of the way — from your first test to long after your purchase.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div class="badge-item bg-white p-6 rounded-xl shadow-lg">
                <div class="w-24 h-24 bg-blue-100 rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-highlight-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-primary-dark mb-2">Trusted Experts</h3>
                <p class="text-lg text-gray-700">Our specialists have years of experience in hearing care.</p>
              </div>
              
              <div class="badge-item bg-white p-6 rounded-xl shadow-lg">
                <div class="w-24 h-24 bg-blue-100 rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-highlight-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-primary-dark mb-2">Certified Technicians</h3>
                <p class="text-lg text-gray-700">All our staff are professionally trained and certified.</p>
              </div>
              
              <div class="badge-item bg-white p-6 rounded-xl shadow-lg">
                <div class="w-24 h-24 bg-blue-100 rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-highlight-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-primary-dark mb-2">1000+ Satisfied Customers</h3>
                <p class="text-lg text-gray-700">Join our community of happy customers with improved hearing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cta-section py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200">
              <div class="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
                <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Ready for expert care?</h2>
                <p class="text-lg text-gray-800 leading-relaxed">Contact Helix today to book your free hearing test or speak with a specialist.</p>
                <p class="text-lg font-bold text-highlight-orange">No obligation. No pressure. Just better hearing.</p>
              </div>
              <div class="md:w-1/3 text-center">
                <img src="/services/call-to-action.png" alt="Hearing care services" class="w-48 h-40 object-contain mx-auto mb-6 rounded-lg shadow-md md:block" />
                <nuxt-link to="/contact" class="bg-highlight-orange hover:bg-highlight-dark text-white font-bold text-xl py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block">
                  Schedule an Appointment
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/mainLayout.vue';
useHead({
  title: 'Our Hearing Services | Helix',
  meta: [
    { name: 'description', content: 'Discover our comprehensive hearing services at Helix - from hearing tests to personalized consultations and ongoing support.' }
  ]
})
</script>

<style scoped>
.services-page {
  color: var(--color-text);
}

.hero-section {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23dbeafe" fill-opacity="0.4" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
}

.service-card {
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.text-primary {
  color: var(--color-primary);
}

.text-primary-dark {
  color: var(--color-primary-dark);
}

.bg-highlight-orange {
  background-color: var(--color-highlight-orange);
}

.bg-highlight-dark {
  background-color: var(--color-highlight-dark);
}

.badge-item {
  transition: all 0.3s ease;
}

.badge-item:hover {
  transform: translateY(-5px);
}
</style>