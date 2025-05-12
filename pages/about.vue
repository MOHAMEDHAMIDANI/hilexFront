<template>
    <MainLayout>
        <div class="relative h-[60vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden mb-12">
            <div class="absolute inset-0 bg-[url('/aboutUs/aboutUs_banner.jpg')] bg-cover bg-center opacity-20"></div>
            <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                <div class="text-center">
                    <h1 class="text-5xl font-bold text-white mb-6 animate-fade-in">À Propos de Nous</h1>
                    <div class="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>
                    <p class="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                        Votre partenaire de confiance pour une meilleure audition et qualité de vie
                    </p>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4">
            <div class="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 p-8 md:p-12 space-y-6">
                        <h2 class="text-3xl font-bold text-blue-900 mb-6">Notre Histoire</h2>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            EURL HELIX MEDICAL est un centre spécialisé en appareillage auditif, en vente des produits parapharmaceutiques et maintenance matériels médicaux.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            HELIX vous offre des prothèses auditives de grandes marques mondiales, adaptées à vos besoins.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Tous nos aides auditives sont remboursables par la CNAS, la CASNOS et la caisse militaire, pour rendre l'audition accessible à toutes et tous.
                        </p>
                        <p class="text-xl font-semibold text-blue-900 mt-8 italic">
                            "Parce que vous comptez pour nous,<br>
                            Vous pouvez compter sur nous!"
                        </p>
                    </div>
                    <div class="md:w-1/2 bg-[url('/aboutUs/company-overview.jpg')] bg-cover bg-center min-h-[400px] transform hover:scale-105 transition-transform duration-500"></div>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-bold text-blue-900 text-center mb-8">Nos Valeurs</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="value in values" :key="value.title" 
                        class="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-blue-100">
                        <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
                            <span class="text-4xl text-blue-900">{{ value.icon }}</span>
                        </div>
                        <h3 class="text-2xl font-bold text-blue-900 mb-4">{{ value.title }}</h3>
                        <p class="text-gray-700 leading-relaxed">{{ value.description }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-12 mb-16">
                <h2 class="text-3xl font-bold text-blue-900 text-center mb-12">Nos Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div v-for="service in services" :key="service.title"
                        class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                        <div class="relative h-48 overflow-hidden">
                            <img :src="service.icon" :alt="service.title" class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-bold text-blue-900 mb-4">{{ service.title }}</h3>
                            <p class="text-gray-700 leading-relaxed">{{ service.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl p-12 mb-16">
                <h2 class="text-3xl font-bold text-blue-900 text-center mb-12">Nos Partenaires</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div v-for="partner in partners" :key="partner.name"
                        class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-blue-100">
                        <div class="w-32 h-32 mx-auto mb-6">
                            <img :src="partner.logo" :alt="partner.name" class="w-full h-full object-contain">
                        </div>
                        <h3 class="text-xl font-bold text-blue-900 mb-3">{{ partner.name }}</h3>
                        <p class="text-gray-700">{{ partner.description }}</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden py-16 mb-12">
                <div class="absolute inset-0 bg-[url('/aboutUs/cta-background.jpg')] bg-cover bg-center opacity-20"></div>
                <div class="relative z-10 text-center">
                    <h2 class="text-3xl font-bold text-white mb-8">Prêt à Améliorer Votre Audition?</h2>
                    <NuxtLink to="/contact" 
                        class="inline-block bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Réserver un Test Auditif Gratuit
                    </NuxtLink>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/mainLayout.vue';

const values = [
    { 
        icon: '🤝',
        title: 'Confiance',
        description: 'Nous construisons des relations durables basées sur la confiance mutuelle'
    },
    {
        icon: '❤️',
        title: 'Soin',
        description: 'Votre bien-être est notre priorité absolue'
    },
    {
        icon: '🎯',
        title: 'Accessibilité',
        description: 'Des solutions auditives accessibles à tous'
    },
    {
        icon: '💡',
        title: 'Innovation',
        description: 'À la pointe de la technologie auditive'
    }
];

const services = [
    {
        icon: '/aboutUs/protheses_auditives.jpg',
        title: 'Prothèses Auditives',
        description: 'Vente et adaptation de prothèses auditives de marques mondiales'
    },
    {
        icon: '/aboutUs/maintenance.jpg',
        title: 'Maintenance',
        description: 'Entretien et réparation de matériel médical'
    },
    {
        icon: '/aboutUs/appareills_pharma.jpg',
        title: 'Produits Parapharmaceutiques',
        description: 'Large gamme de produits de santé et de bien-être'
    }
];

const partners = [
    {
        name: 'CNAS',
        description: 'Assurance sociale nationale',
        logo: '/aboutUs/CNAS_logo.png'
    },
    {
        name: 'CASNOS',
        description: 'Sécurité sociale des non-salariés',
        logo: '/aboutUs/CASNOS_logo.png'
    },
    {
        name: 'Caisse Militaire',
        description: 'Assurance militaire',
        logo: '/aboutUs/CAISSE_logo.png'
    }
];
</script>

<style scoped>
</style>