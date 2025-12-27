export const WEDDING_DATA = {
    // ========== COUPLE INFO ==========
    couple: {
        bride: {
            name: "Anita",
            fullName: "Anita Safitri",
            parents: "Bapak Slamet & Ibu Siti",
            childOrder: "Putri Pertama",
            photos: [
                "https://picsum.photos/seed/bride1/400/600",
                "https://picsum.photos/seed/bride2/400/600",
                "https://picsum.photos/seed/bride3/400/600",
            ],
            instagram: "anita_safitri"
        },
        groom: {
            name: "Olga",
            fullName: "Olga Kuswoyo",
            parents: "Bapak Hendra & Ibu Dewi",
            childOrder: "Putra Kedua",
            photos: [
                "https://picsum.photos/seed/groom1/400/600",
                "https://picsum.photos/seed/groom2/400/600",
                "https://picsum.photos/seed/groom3/400/600",
            ],
            instagram: "olga_kuswoyo"
        }
    },

    // ========== WEDDING DATE & VENUE ==========
    weddingDate: new Date("2026-12-31T08:00:00"),
    weddingDateDisplay: "31.12.2026",

    // ========== HERO SECTION ==========
    hero: {
        backgroundImage: "https://picsum.photos/seed/wedding-hero/1920/1080",
        title: "The Wedding Of"
    },

    // ========== MUSIC ==========
    music: {
        // URL lagu background - ganti dengan URL musik pilihan user
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        // Judul lagu (opsional, untuk display)
        title: "Wedding Song",
        // Artis (opsional)
        artist: "Background Music"
    },

    // ========== INTRO SECTION ==========
    intro: {
        monogram: "A|O",
        greeting: {
            arabic: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ",
            title: "Assalamualaikum Warahmatullahi Wabarakatuh",
            message: "Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami."
        },
        images: [
            "https://picsum.photos/seed/intro1/400/400",
            "https://picsum.photos/seed/intro2/400/600",
            "https://picsum.photos/seed/intro3/400/400"
        ]
    },

    // ========== SCHEDULE / EVENTS ==========
    events: [
        {
            id: 1,
            title: "Akad Nikah",
            date: "Sabtu, 31 Desember 2026",
            time: "08:00 - 10:00 WIB",
            location: "Masjid Al-Ikhlas",
            address: "Jl. Pahlawan No. 123, Kebumen",
            mapsUrl: "https://maps.google.com"
        },
        {
            id: 2,
            title: "Resepsi",
            date: "Sabtu, 31 Desember 2026",
            time: "11:00 - 14:00 WIB",
            location: "Gedung Serbaguna",
            address: "Jl. Sudirman No. 45, Kebumen",
            mapsUrl: "https://maps.google.com"
        },
        {
            id: 3,
            title: "Ngunduh Mantu",
            date: "Minggu, 01 Januari 2027",
            time: "10:00 - 14:00 WIB",
            location: "Rumah Mempelai Pria",
            address: "Jl. Merdeka No. 10, Kebumen",
            mapsUrl: "https://maps.google.com"
        }
    ],

    // ========== LOVE STORY ==========
    loveStory: [
        {
            year: "2020",
            date: "15 Februari 2020",
            title: "Perkenalan",
            description: "Kami bertemu ditempat kerja. Pada saat itu, aku adalah karyawan yang ada ditempat magang dia. akhirnya aku beranikan diri untuk menyatakan cinta padanya. Dari situlah hubungan kami dimulai.",
            image: "https://picsum.photos/seed/lovestory1/400/500"
        },
        {
            year: "2025",
            date: "13 September 2025",
            title: "Lamaran",
            description: "Setelah begitu banyak melewati banyak proses dan rintangan dalam hubungan, akhirnya aku memutuskan untuk melamar dia pada tanggal 13 September 2025. Kami pun tidak menyangka bahwa cerita pertemuan ini menjadi penuh makna.",
            image: "https://picsum.photos/seed/lovestory2/400/500"
        },
        {
            year: "2026",
            date: "31 Desember 2026",
            title: "Pernikahan",
            description: "Pada tanggal 31 Desember 2026, kami melangsungkan akad nikah & Resepsi dengan sederhana dan penuh hikmat. Dengan semua doa restu dari keluarga dan teman-teman, aku dan pasangan telah siap untuk menempuh hidup bersama dan menjalankan ibadah paling indah ini.",
            image: "https://picsum.photos/seed/lovestory3/400/500"
        }
    ],

    // ========== GIFT / BANK TRANSFER ==========
    gift: {
        description: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.",
        accounts: [
            {
                bankName: "BCA",
                accountNumber: "1234 5678 90",
                holderName: "Anita Safitri",
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png"
            },
            {
                bankName: "MANDIRI",
                accountNumber: "0987 6543 21",
                holderName: "Olga Kuswoyo",
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png"
            }
        ],
        address: {
            street: "Jl. Soekarno-Hatta No. 5",
            city: "Kebumen, Jawa Tengah",
            receiver: "Anita Safitri"
        }
    },

    // ========== GALLERY ==========
    video: "https://res.cloudinary.com/dyk3nghtf/video/upload/v1766520868/YTDown.com_YouTube_The-Japan-Pre-Wedding-of-RJ-and-Tersh-by_Media_vCl6rbJNYEU_001_1080p_1_h5dxfv.mp4",
    gallery: [
        // Block 1 (5 images)
        { src: 'https://picsum.photos/600/900?random=1' },  // Row1: Portrait left
        { src: 'https://picsum.photos/900/600?random=2' },  // Row1: Landscape right
        { src: 'https://picsum.photos/600/900?random=3' },  // Row2: Portrait left
        { src: 'https://picsum.photos/600/900?random=4' },  // Row2: Portrait right
        { src: 'https://picsum.photos/900/500?random=5' },  // Row3: Full landscape
        // Block 2 (5 images)
        { src: 'https://picsum.photos/600/900?random=6' },
        { src: 'https://picsum.photos/900/600?random=7' },
        { src: 'https://picsum.photos/600/900?random=8' },
        { src: 'https://picsum.photos/600/900?random=9' },
        { src: 'https://picsum.photos/900/500?random=10' },
        // Block 3 (5 images)
        { src: 'https://picsum.photos/600/900?random=11' },
        { src: 'https://picsum.photos/900/600?random=12' },
        { src: 'https://picsum.photos/600/900?random=13' },
        { src: 'https://picsum.photos/600/900?random=14' },
        { src: 'https://picsum.photos/900/500?random=15' },
    ],

    // ========== FOOTER ==========
    footer: {
        quote: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.",
        quoteSource: "Ar-Rum: 21"
    }
};
