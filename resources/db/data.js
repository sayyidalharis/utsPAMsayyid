const Jadwal = [
    {
        jadwal_id: "001",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "HND",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "002",
        bandara_kode_keberangkatan: "HND",
        bandara_kode_tujuan: "CGK",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "003",
        bandara_kode_keberangkatan: "CGK",
        bandara_kode_tujuan: "HND",
        maskapai_id: "GA",
    }
]

const Maskapai = [
    {
        maskapai_id: "GA",
        maskapai_nama: "Garuda Indonesia",
        maskapai_logo: require('../../resources/images/Garuda.png'),
    },
    {
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",
        maskapai_logo: require('../../resources/images/AirAsia.png'),
    }
]

const Bandara = [
    {
        bandara_kode: "CGK",
        bandara_nama: "Soekarno Hatta",
    },
    {
        bandara_kode: "HND",
        bandara_nama: "Haneda",
    }
]

export {Maskapai, Bandara, Jadwal}