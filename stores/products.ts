import type { ProductType } from "~/types";

export const medicalProducts: ProductType[] = [
    {
        id: "1",
        productName: "Tensiomètre Numérique",
        price: 6800,
        image: [
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",

        ],
        size: ["S", "M", "L", "XL"],
        color: ["Blanc", "Noir"],
        description: "Un tensiomètre numérique précis avec un grand écran et une détection des arythmies.",
        stock: 25,
        category: { id: "1", categoryName: "Équipement Médical", product: [] },
        quantity: 1    },
    {
        id: "2",
        productName: "Thermomètre Infrarouge",
        price: 4500,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",

        ],
        size: ["S", "M", "L", "XL"],
        color: ["Blanc", "Bleu"],
        description: "Un thermomètre infrarouge sans contact pour des mesures rapides et hygiéniques.",
        stock: 50,
        category: { id: "2", categoryName: "Diagnostic", product: [] } ,
        quantity: 1
    },
    {
        id: "3",
        productName: "Oxymètre de Pouls",
        price: 3200,
        image: [
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Noir", "Bleu"],
        description: "Un oxymètre de pouls précis avec écran OLED pour mesurer la saturation en oxygène.",
        stock: 30,
        category: { id: "3", categoryName: "Surveillance Médicale", product: [] },
        quantity: 1
    },
    {
        id: "4",
        productName: "Nébuliseur Électrique",
        price: 12500,
        image: [
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Blanc"],
        description: "Un nébuliseur efficace pour l'inhalation des médicaments et le traitement respiratoire.",
        stock: 15,
        category: { id: "4", categoryName: "Soins Respiratoires", product: [] },
        quantity: 1
    },
    {
        id: "5",
        productName: "Coussin Chauffant Électrique",
        price: 5700,
        image: [
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",

        ],
        size: ["S", "M", "L", "XL"],
        color: ["Bleu", "Gris"],
        description: "Un coussin chauffant électrique idéal pour soulager les douleurs musculaires.",
        stock: 40,
        category: { id: "5", categoryName: "Soulagement de la Douleur", product: [] },
        quantity: 1
    },
    {
        id: "6",
        productName: "Trousse de Premiers Secours",
        price: 7500,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",

        ],
        size: ["S", "M", "L", "XL"],
        color: ["Rouge", "Blanc"],
        description: "Une trousse de premiers secours complète avec bandages, antiseptiques et accessoires.",
        stock: 20,
        category: { id: "6", categoryName: "Urgence Médicale", product: [] },
        quantity: 1
    },
    {
        id: "7",
        productName: "Masques Chirurgicaux (50 pièces)",
        price: 1800,
        image: [
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Bleu", "Blanc"],
        description: "Des masques chirurgicaux jetables pour la protection contre les infections.",
        stock: 100,
        category: { id: "7", categoryName: "Protection Médicale", product: [] },
        quantity: 1
    },
    {
        id: "8",
        productName: "Stéthoscope Professionnel",
        price: 8900,
        image: [
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Noir", "Bleu", "Rouge"],
        description: "Un stéthoscope de haute qualité pour une auscultation précise des sons cardiaques et pulmonaires.",
        stock: 18,
        category: { id: "1", categoryName: "Équipement Médical", product: [] },
        quantity: 1
    },
    {
        id: "9",
        productName: "Gants Médicaux (100 pièces)",
        price: 2900,
        image: [
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Blanc", "Bleu"],
        description: "Gants médicaux en nitrile sans latex pour assurer une hygiène maximale.",
        stock: 200,
        category: { id: "7", categoryName: "Protection Médicale", product: [] },
        quantity: 1    },
    {
        id: "10",
        productName: "Solution Antiseptique",
        price: 1600,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Kupfer,Schwarz_1920x1920.jpg",
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Transparent"],
        description: "Solution antiseptique efficace pour la désinfection des plaies et la protection contre les infections.",
        stock: 80,
        category: { id: "8", categoryName: "Soins des Plaies", product: [] },
        quantity: 1    }
];
