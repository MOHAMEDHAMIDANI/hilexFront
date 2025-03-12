<template>
  <div>
    <h1 class="text-3xl font-bold underline bg-red-300">Hello world!</h1>
    <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  
  <!-- H -->
  <text x="10" y="70" font-size="60" font-family="Arial" font-weight="bold" fill="url(#blueGradient)">H</text>
  
  <!-- i -->
  <circle cx="65" cy="40" r="5" fill="url(#orangeGradient)"/>
  <rect x="60" y="50" width="10" height="30" fill="url(#blueGradient)"/>
  
  <!-- L -->
  <text x="80" y="70" font-size="60" font-family="Arial" font-weight="bold" fill="url(#blueGradient)">L</text>
  
  <!-- e -->
  <text x="115" y="70" font-size="60" font-family="Arial" font-weight="bold" fill="url(#orangeGradient)">e</text>
  
  <!-- x -->
  <text x="150" y="70" font-size="60" font-family="Arial" font-weight="bold" fill="url(#orangeGradient)">x</text>
</svg>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>