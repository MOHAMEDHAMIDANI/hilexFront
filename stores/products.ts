import type { ProductType } from "~/types";

export const medicalProducts: ProductType[] = [
    {
        id: "1",
        productName: "Digital Blood Pressure Monitor",
        price: 6800,
        image: [
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["White", "Black"],
        description: "A precise digital blood pressure monitor with a large screen and arrhythmia detection.",
        stock: 25,
        category: { id: "1", categoryName: "Medical Equipment", product: [] },
        quantity: 1
    },
    {
        id: "2",
        productName: "Infrared Thermometer",
        price: 4500,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["White", "Blue"],
        description: "A contactless infrared thermometer for quick and hygienic measurements.",
        stock: 50,
        category: { id: "2", categoryName: "Diagnostics", product: [] },
        quantity: 1
    },
    {
        id: "3",
        productName: "Pulse Oximeter",
        price: 3200,
        image: [
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Black", "Blue"],
        description: "A precise pulse oximeter with an OLED display to measure oxygen saturation.",
        stock: 30,
        category: { id: "3", categoryName: "Medical Monitoring", product: [] },
        quantity: 1
    },
    {
        id: "4",
        productName: "Electric Nebulizer",
        price: 12500,
        image: [
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["White"],
        description: "An effective nebulizer for inhaling medications and respiratory treatment.",
        stock: 15,
        category: { id: "4", categoryName: "Respiratory Care", product: [] },
        quantity: 1
    },
    {
        id: "5",
        productName: "Electric Heating Pad",
        price: 5700,
        image: [
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Blue", "Gray"],
        description: "An electric heating pad ideal for relieving muscle pain.",
        stock: 40,
        category: { id: "5", categoryName: "Pain Relief", product: [] },
        quantity: 1
    },
    {
        id: "6",
        productName: "First Aid Kit",
        price: 7500,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Red", "White"],
        description: "A complete first aid kit with bandages, antiseptics, and accessories.",
        stock: 20,
        category: { id: "6", categoryName: "Emergency Care", product: [] },
        quantity: 1
    },
    {
        id: "7",
        productName: "Surgical Masks (50 pieces)",
        price: 1800,
        image: [
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Blue", "White"],
        description: "Disposable surgical masks for protection against infections.",
        stock: 100,
        category: { id: "7", categoryName: "Medical Protection", product: [] },
        quantity: 1
    },
    {
        id: "8",
        productName: "Professional Stethoscope",
        price: 8900,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Black", "Blue", "Red"],
        description: "A high-quality stethoscope for precise cardiac and pulmonary auscultation.",
        stock: 18,
        category: { id: "1", categoryName: "Medical Equipment", product: [] },
        quantity: 1
    },
    {
        id: "9",
        productName: "Medical Gloves (100 pieces)",
        price: 2900,
        image: [
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["White", "Blue"],
        description: "Latex-free nitrile medical gloves to ensure maximum hygiene.",
        stock: 200,
        category: { id: "7", categoryName: "Medical Protection", product: [] },
        quantity: 1
    },
    {
        id: "10",
        productName: "Antiseptic Solution",
        price: 1600,
        image: [
            "products/Widex-Moment-sRIC-DeepBlueWhite_1920x1920.png",
            "products/Kupfer,Schwarz_1920x1920.jpg",
            "products/Mocha - Baraun Hansaton AQ FS - R_1920x1920.jpg",
            "products/Bernafon-Alpha_miniRITE_T_ANBR_MAC_1920x1920.png"
        ],
        size: ["S", "M", "L", "XL"],
        color: ["Transparent"],
        description: "An effective antiseptic solution for wound disinfection and infection prevention.",
        stock: 80,
        category: { id: "8", categoryName: "Wound Care", product: [] },
        quantity: 1
    }
];
