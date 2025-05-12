<template>
  <div v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-200/90 backdrop-blur-sm">
    <svg viewBox="0 0 360 120" width="360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1E3A8A" />
          <stop offset="100%" stop-color="#3B82F6" />
        </linearGradient>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EA580C" />
          <stop offset="100%" stop-color="#F97316" />
        </linearGradient>
      </defs>

      <circle cx="130" cy="40" r="6" fill="url(#orangeGradient)" class="dot-drop" />

      <text x="10" y="90" font-size="70" font-family="Arial" font-weight="bold" class="text-draw" fill="none"
        stroke="url(#blueGradient)" stroke-width="2">
        H
      </text>

      <text x="120" y="90" font-size="60" font-family="Arial" font-weight="bold" class="text-draw" fill="none"
        stroke="url(#blueGradient)" stroke-width="2">
        &#305;
      </text>

      <text x="180" y="90" font-size="70" font-family="Arial" font-weight="bold" class="text-draw" fill="none"
        stroke="url(#blueGradient)" stroke-width="2">
        L
      </text>

      <text x="240" y="90" font-size="70" font-family="Arial" font-weight="bold" class="text-draw" fill="none"
        stroke="url(#orangeGradient)" stroke-width="2">
        e
      </text>

      <text x="300" y="90" font-size="70" font-family="Arial" font-weight="bold" class="text-draw" fill="none"
        stroke="url(#orangeGradient)" stroke-width="2">
        x
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const show = ref(true);

onMounted(() => {
  setTimeout(() => (show.value = false), 2500);
});
</script>

<style scoped>
.dot-drop {
  opacity: 0;
  transform: translateY(-20px);
  animation: dropDot 0.6s forwards;
}

@keyframes dropDot {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-draw {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  fill-opacity: 0;
  animation: drawText 1s forwards;
  animation-delay: 0.8s;
}

.text-draw:nth-of-type(2) {
  animation-delay: 1s;
}

.text-draw:nth-of-type(3) {
  animation-delay: 1.2s;
}

.text-draw:nth-of-type(4) {
  animation-delay: 1.4s;
}

.text-draw:nth-of-type(5) {
  animation-delay: 1.6s;
}

@keyframes drawText {
  to {
    stroke-dashoffset: 0;
    fill-opacity: 1;
  }
}
</style>