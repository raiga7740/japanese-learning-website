// Data kosakata dari PDF 1000+ Kosakata Bahasa Jepang Sehari-Hari.
const vocabCategories = [
  {
    "id": 1,
    "name": "Kata Sapaan",
    "count": 7
  },
  {
    "id": 2,
    "name": "Kata Ganti",
    "count": 8
  },
  {
    "id": 3,
    "name": "Nama Nama Hari",
    "count": 7
  },
  {
    "id": 4,
    "name": "Waktu",
    "count": 16
  },
  {
    "id": 5,
    "name": "Nama Bulan",
    "count": 12
  },
  {
    "id": 6,
    "name": "Warna",
    "count": 26
  },
  {
    "id": 7,
    "name": "Angka",
    "count": 53
  },
  {
    "id": 8,
    "name": "Anggota Tubuh Manusia",
    "count": 69
  },
  {
    "id": 9,
    "name": "Alat Tulis dan Peralatan Sekolah",
    "count": 29
  },
  {
    "id": 10,
    "name": "Peralatan Dapur",
    "count": 15
  },
  {
    "id": 11,
    "name": "Nama Buah dan Sayur",
    "count": 58
  },
  {
    "id": 12,
    "name": "Kata Sifat Dasar",
    "count": 157
  },
  {
    "id": 13,
    "name": "Kata Kerja",
    "count": 356
  }
];

const vocabData = [
  {
    "id": 1,
    "category": "Kata Sapaan",
    "jp": "こんにちは！",
    "romaji": "Konnichiwa",
    "arti": "Halo! / Hai!"
  },
  {
    "id": 2,
    "category": "Kata Sapaan",
    "jp": "おはようございます！",
    "romaji": "Ohayougozaimasu",
    "arti": "Selamat pagi!"
  },
  {
    "id": 3,
    "category": "Kata Sapaan",
    "jp": "こんにちは！",
    "romaji": "Konnichiwa",
    "arti": "Selamat siang!"
  },
  {
    "id": 4,
    "category": "Kata Sapaan",
    "jp": "こんばんは！",
    "romaji": "Konbanwa",
    "arti": "Selamat sore / malam!"
  },
  {
    "id": 5,
    "category": "Kata Sapaan",
    "jp": "おやすみなさい！",
    "romaji": "Oyasuminasai",
    "arti": "Selamat malam! (m/f)"
  },
  {
    "id": 6,
    "category": "Kata Sapaan",
    "jp": "ばいばい！",
    "romaji": "Bye-bye",
    "arti": "Dahh! / Mari! / Yuk ah!"
  },
  {
    "id": 7,
    "category": "Kata Sapaan",
    "jp": "さようなら！",
    "romaji": "Sayounara",
    "arti": "Sampai jumpa! (situasi formal)"
  },
  {
    "id": 8,
    "category": "Kata Ganti",
    "jp": "Saya",
    "romaji": "",
    "arti": "watashi, watakushi, shousa, boku, atashi, ore"
  },
  {
    "id": 9,
    "category": "Kata Ganti",
    "jp": "Kami",
    "romaji": "",
    "arti": "watashitachi, bokutachi, bokura, atashitachi, oretachi"
  },
  {
    "id": 10,
    "category": "Kata Ganti",
    "jp": "Kamu",
    "romaji": "",
    "arti": "anata, kimi, omae"
  },
  {
    "id": 11,
    "category": "Kata Ganti",
    "jp": "Kamu sekalian",
    "romaji": "",
    "arti": "anatagata, kimitachi, omaera"
  },
  {
    "id": 12,
    "category": "Kata Ganti",
    "jp": "Dia (laki)",
    "romaji": "",
    "arti": "kare, karera (jamak)"
  },
  {
    "id": 13,
    "category": "Kata Ganti",
    "jp": "Dia (perempuan)",
    "romaji": "",
    "arti": "kanojo, kanojora (jamak)"
  },
  {
    "id": 14,
    "category": "Kata Ganti",
    "jp": "Ini",
    "romaji": "",
    "arti": "kore, korera (jamak)"
  },
  {
    "id": 15,
    "category": "Kata Ganti",
    "jp": "Itu",
    "romaji": "",
    "arti": "sore, are, sorera (jamak), arera (jamak)"
  },
  {
    "id": 16,
    "category": "Nama Nama Hari",
    "jp": "げつようび (⽉曜⽇)",
    "romaji": "getsuyoubi",
    "arti": "senin"
  },
  {
    "id": 17,
    "category": "Nama Nama Hari",
    "jp": "かようび (⽕曜⽇)",
    "romaji": "kayoubi",
    "arti": "selasa"
  },
  {
    "id": 18,
    "category": "Nama Nama Hari",
    "jp": "すいようび (⽔曜⽇)",
    "romaji": "suiyoubi",
    "arti": "rabu"
  },
  {
    "id": 19,
    "category": "Nama Nama Hari",
    "jp": "もくようび (⽊曜⽇)",
    "romaji": "mokuyoubi",
    "arti": "kamis"
  },
  {
    "id": 20,
    "category": "Nama Nama Hari",
    "jp": "きんようび (⾦曜⽇)",
    "romaji": "kinyoubi",
    "arti": "jumat"
  },
  {
    "id": 21,
    "category": "Nama Nama Hari",
    "jp": "どようび (⼟曜⽇)",
    "romaji": "doyoubi",
    "arti": "sabtu"
  },
  {
    "id": 22,
    "category": "Nama Nama Hari",
    "jp": "にちようび (⽇曜⽇)",
    "romaji": "nichiyoubi",
    "arti": "minggu"
  },
  {
    "id": 23,
    "category": "Waktu",
    "jp": "きょう (今⽇)",
    "romaji": "Kyoo",
    "arti": "Hari ini"
  },
  {
    "id": 24,
    "category": "Waktu",
    "jp": "きのう (昨⽇)",
    "romaji": "Kinoo",
    "arti": "Kemarin"
  },
  {
    "id": 25,
    "category": "Waktu",
    "jp": "あさって (明後⽇)",
    "romaji": "Asatte",
    "arti": "Lusa"
  },
  {
    "id": 26,
    "category": "Waktu",
    "jp": "おとうとい",
    "romaji": "Otootoi",
    "arti": "Kemarin dulu"
  },
  {
    "id": 27,
    "category": "Waktu",
    "jp": "あさ (朝)",
    "romaji": "Asa",
    "arti": "Pagi"
  },
  {
    "id": 28,
    "category": "Waktu",
    "jp": "けさ (今朝)",
    "romaji": "Kesa",
    "arti": "Tadi pagi"
  },
  {
    "id": 29,
    "category": "Waktu",
    "jp": "ばん/よる (晩 / 夜)",
    "romaji": "Ban / Yoru",
    "arti": "Malam"
  },
  {
    "id": 30,
    "category": "Waktu",
    "jp": "ゆうべ (⼣べ)",
    "romaji": "Yuube",
    "arti": "Tadi malam"
  },
  {
    "id": 31,
    "category": "Waktu",
    "jp": "こんばん (今晩)",
    "romaji": "Konban",
    "arti": "Malam ini"
  },
  {
    "id": 32,
    "category": "Waktu",
    "jp": "あした (明⽇)",
    "romaji": "Ashita",
    "arti": "Besok"
  },
  {
    "id": 33,
    "category": "Waktu",
    "jp": "まいにち (毎⽇)",
    "romaji": "Mainichi",
    "arti": "Setiap hari"
  },
  {
    "id": 34,
    "category": "Waktu",
    "jp": "まいあさ (毎朝)",
    "romaji": "Maiasa",
    "arti": "Setiap pagi"
  },
  {
    "id": 35,
    "category": "Waktu",
    "jp": "まいばん (毎晩)",
    "romaji": "Maiban",
    "arti": "Setiap malam"
  },
  {
    "id": 36,
    "category": "Waktu",
    "jp": "こんしゅう (今週)",
    "romaji": "Konshuu",
    "arti": "Minggu ini"
  },
  {
    "id": 37,
    "category": "Waktu",
    "jp": "らいしゅう (先週)",
    "romaji": "Senshuu",
    "arti": "Minggu lalu"
  },
  {
    "id": 38,
    "category": "Waktu",
    "jp": "らいしゅう (来週)",
    "romaji": "Raishuu",
    "arti": "Minggu depan"
  },
  {
    "id": 39,
    "category": "Nama Bulan",
    "jp": "いちがつ (⼀⽉)",
    "romaji": "ichigatsu",
    "arti": "Januari"
  },
  {
    "id": 40,
    "category": "Nama Bulan",
    "jp": "にがつ (⼆⽉)",
    "romaji": "nigatsu",
    "arti": "Februari"
  },
  {
    "id": 41,
    "category": "Nama Bulan",
    "jp": "さんがつ (三⽉)",
    "romaji": "sangatsu",
    "arti": "Maret"
  },
  {
    "id": 42,
    "category": "Nama Bulan",
    "jp": "しがつ (四⽉)",
    "romaji": "shigatsu",
    "arti": "April"
  },
  {
    "id": 43,
    "category": "Nama Bulan",
    "jp": "ごがつ (五⽉)",
    "romaji": "gogatsu",
    "arti": "Mei"
  },
  {
    "id": 44,
    "category": "Nama Bulan",
    "jp": "ろくがつ (六⽉)",
    "romaji": "rokugatsu",
    "arti": "Juni"
  },
  {
    "id": 45,
    "category": "Nama Bulan",
    "jp": "しちがつ (七⽉)",
    "romaji": "sichigatsu",
    "arti": "Juli"
  },
  {
    "id": 46,
    "category": "Nama Bulan",
    "jp": "はちがつ (⼋⽉)",
    "romaji": "hachigatsu",
    "arti": "Agustus"
  },
  {
    "id": 47,
    "category": "Nama Bulan",
    "jp": "くがつ (九⽉)",
    "romaji": "kugatsu",
    "arti": "September"
  },
  {
    "id": 48,
    "category": "Nama Bulan",
    "jp": "じゅうがつ (⼗⽉)",
    "romaji": "jyuugatsu",
    "arti": "Oktober"
  },
  {
    "id": 49,
    "category": "Nama Bulan",
    "jp": "じゅういちがつ (⼗⼀⽉)",
    "romaji": "jyuuichigatsu",
    "arti": "November"
  },
  {
    "id": 50,
    "category": "Nama Bulan",
    "jp": "じゅうにがつ (⼗⼆⽉)",
    "romaji": "jyuunigatsu",
    "arti": "Desember"
  },
  {
    "id": 51,
    "category": "Warna",
    "jp": "⾊彩",
    "romaji": "shikisai",
    "arti": "warna"
  },
  {
    "id": 52,
    "category": "Warna",
    "jp": "ピンク",
    "romaji": "pinku",
    "arti": "pink"
  },
  {
    "id": 53,
    "category": "Warna",
    "jp": "暗⾊",
    "romaji": "anshoku",
    "arti": "gelap"
  },
  {
    "id": 54,
    "category": "Warna",
    "jp": "明⾊",
    "romaji": "meishoku",
    "arti": "cerah"
  },
  {
    "id": 55,
    "category": "Warna",
    "jp": "⻩⾊",
    "romaji": "kiiro",
    "arti": "kuning"
  },
  {
    "id": 56,
    "category": "Warna",
    "jp": "⾦⾊",
    "romaji": "kiniro/konjiki",
    "arti": "emas"
  },
  {
    "id": 57,
    "category": "Warna",
    "jp": "銀⾊",
    "romaji": "giniro",
    "arti": "perak"
  },
  {
    "id": 58,
    "category": "Warna",
    "jp": "黒い",
    "romaji": "kuroi",
    "arti": "hitam"
  },
  {
    "id": 59,
    "category": "Warna",
    "jp": "紫",
    "romaji": "murasaki",
    "arti": "ungu"
  },
  {
    "id": 60,
    "category": "Warna",
    "jp": "⻘い",
    "romaji": "aoi",
    "arti": "biru"
  },
  {
    "id": 61,
    "category": "Warna",
    "jp": "⽔⾊",
    "romaji": "mizuiro",
    "arti": "biru muda"
  },
  {
    "id": 62,
    "category": "Warna",
    "jp": "⾚い",
    "romaji": "akai",
    "arti": "merah"
  },
  {
    "id": 63,
    "category": "Warna",
    "jp": "⾚紫",
    "romaji": "akamurasaki",
    "arti": "merah keunguan (maroon)"
  },
  {
    "id": 64,
    "category": "Warna",
    "jp": "茶⾊",
    "romaji": "chairo",
    "arti": "coklat"
  },
  {
    "id": 65,
    "category": "Warna",
    "jp": "⽩い",
    "romaji": "shiroi",
    "arti": "putih"
  },
  {
    "id": 66,
    "category": "Warna",
    "jp": "緑",
    "romaji": "midori",
    "arti": "hijau"
  },
  {
    "id": 67,
    "category": "Warna",
    "jp": "オレンジ⾊",
    "romaji": "orenjiiro",
    "arti": "orange"
  },
  {
    "id": 68,
    "category": "Warna",
    "jp": "橙⾊",
    "romaji": "daidaiiro",
    "arti": "jingga"
  },
  {
    "id": 69,
    "category": "Warna",
    "jp": "桃⾊",
    "romaji": "momoiro",
    "arti": "peach"
  },
  {
    "id": 70,
    "category": "Warna",
    "jp": "真っ⾚",
    "romaji": "makka",
    "arti": "merah tua"
  },
  {
    "id": 71,
    "category": "Warna",
    "jp": "真っ⽩",
    "romaji": "masshiro",
    "arti": "putih jernih"
  },
  {
    "id": 72,
    "category": "Warna",
    "jp": "真っ黒",
    "romaji": "makkuro",
    "arti": "hitam legam"
  },
  {
    "id": 73,
    "category": "Warna",
    "jp": "真っ⻘",
    "romaji": "massao",
    "arti": "biru tua"
  },
  {
    "id": 74,
    "category": "Warna",
    "jp": "灰⾊",
    "romaji": "haiiro",
    "arti": "abu-abu"
  },
  {
    "id": 75,
    "category": "Warna",
    "jp": "紺",
    "romaji": "kon",
    "arti": "biru laut"
  },
  {
    "id": 76,
    "category": "Warna",
    "jp": "紅",
    "romaji": "kurenai",
    "arti": "merah terang"
  },
  {
    "id": 77,
    "category": "Angka",
    "jp": "零",
    "romaji": "rei",
    "arti": "nol"
  },
  {
    "id": 78,
    "category": "Angka",
    "jp": "⼀",
    "romaji": "ichi",
    "arti": "satu"
  },
  {
    "id": 79,
    "category": "Angka",
    "jp": "⼆",
    "romaji": "ni",
    "arti": "dua"
  },
  {
    "id": 80,
    "category": "Angka",
    "jp": "三",
    "romaji": "san",
    "arti": "tiga"
  },
  {
    "id": 81,
    "category": "Angka",
    "jp": "四",
    "romaji": "yon/shi",
    "arti": "empat"
  },
  {
    "id": 82,
    "category": "Angka",
    "jp": "五",
    "romaji": "go",
    "arti": "lima"
  },
  {
    "id": 83,
    "category": "Angka",
    "jp": "六",
    "romaji": "roku",
    "arti": "enam"
  },
  {
    "id": 84,
    "category": "Angka",
    "jp": "七",
    "romaji": "nana/shichi",
    "arti": "tujuh"
  },
  {
    "id": 85,
    "category": "Angka",
    "jp": "⼋",
    "romaji": "hachi",
    "arti": "delapan"
  },
  {
    "id": 86,
    "category": "Angka",
    "jp": "九",
    "romaji": "kyuu",
    "arti": "sembilan"
  },
  {
    "id": 87,
    "category": "Angka",
    "jp": "⼗",
    "romaji": "juu",
    "arti": "sepuluh"
  },
  {
    "id": 88,
    "category": "Angka",
    "jp": "⼗⼀",
    "romaji": "juuichi",
    "arti": "sebelas"
  },
  {
    "id": 89,
    "category": "Angka",
    "jp": "⼗⼆",
    "romaji": "juuni",
    "arti": "dua belas"
  },
  {
    "id": 90,
    "category": "Angka",
    "jp": "⼗三",
    "romaji": "juusan",
    "arti": "tiga belas"
  },
  {
    "id": 91,
    "category": "Angka",
    "jp": "⼗四",
    "romaji": "juuyon",
    "arti": "empat belas"
  },
  {
    "id": 92,
    "category": "Angka",
    "jp": "⼗五",
    "romaji": "juugo",
    "arti": "lima belas"
  },
  {
    "id": 93,
    "category": "Angka",
    "jp": "⼗六",
    "romaji": "juuroku",
    "arti": "enam belas"
  },
  {
    "id": 94,
    "category": "Angka",
    "jp": "⼗七",
    "romaji": "juunana",
    "arti": "tujuh belas"
  },
  {
    "id": 95,
    "category": "Angka",
    "jp": "⼗⼋",
    "romaji": "juuhachi",
    "arti": "delapan belas"
  },
  {
    "id": 96,
    "category": "Angka",
    "jp": "⼗九",
    "romaji": "juukyuu",
    "arti": "sembilan belas"
  },
  {
    "id": 97,
    "category": "Angka",
    "jp": "⼆⼗",
    "romaji": "nijuu",
    "arti": "dua puluh"
  },
  {
    "id": 98,
    "category": "Angka",
    "jp": "⼆⼗⼀",
    "romaji": "nijuuichi",
    "arti": "dua puluh satu"
  },
  {
    "id": 99,
    "category": "Angka",
    "jp": "百",
    "romaji": "hyaku",
    "arti": "seratus"
  },
  {
    "id": 100,
    "category": "Angka",
    "jp": "⼆百",
    "romaji": "nihyaku",
    "arti": "dua ratus"
  },
  {
    "id": 101,
    "category": "Angka",
    "jp": "三百",
    "romaji": "sanbyaku",
    "arti": "tiga ratus"
  },
  {
    "id": 102,
    "category": "Angka",
    "jp": "四百",
    "romaji": "yonhyaku",
    "arti": "empat ratus"
  },
  {
    "id": 103,
    "category": "Angka",
    "jp": "五百",
    "romaji": "gohyaku",
    "arti": "lima ratus"
  },
  {
    "id": 104,
    "category": "Angka",
    "jp": "六百",
    "romaji": "roppyaku",
    "arti": "enam ratus"
  },
  {
    "id": 105,
    "category": "Angka",
    "jp": "七百",
    "romaji": "nanahyaku",
    "arti": "tujuh ratus"
  },
  {
    "id": 106,
    "category": "Angka",
    "jp": "⼋百",
    "romaji": "happyaku",
    "arti": "delapan ratus"
  },
  {
    "id": 107,
    "category": "Angka",
    "jp": "九百",
    "romaji": "kyuuhyaku",
    "arti": "sembilan ratus"
  },
  {
    "id": 108,
    "category": "Angka",
    "jp": "千",
    "romaji": "sen",
    "arti": "seribu"
  },
  {
    "id": 109,
    "category": "Angka",
    "jp": "⼆千",
    "romaji": "nisen",
    "arti": "dua ribu"
  },
  {
    "id": 110,
    "category": "Angka",
    "jp": "三千",
    "romaji": "sanzen",
    "arti": "tiga ribu"
  },
  {
    "id": 111,
    "category": "Angka",
    "jp": "四千",
    "romaji": "yonsen",
    "arti": "empat ribu"
  },
  {
    "id": 112,
    "category": "Angka",
    "jp": "五千",
    "romaji": "gosen",
    "arti": "lima ribu"
  },
  {
    "id": 113,
    "category": "Angka",
    "jp": "",
    "romaji": "",
    "arti": "六千 rokusen – enam ribu"
  },
  {
    "id": 114,
    "category": "Angka",
    "jp": "七千",
    "romaji": "nanasen",
    "arti": "tujuh ribu"
  },
  {
    "id": 115,
    "category": "Angka",
    "jp": "⼋千",
    "romaji": "hassen",
    "arti": "delapan ribu"
  },
  {
    "id": 116,
    "category": "Angka",
    "jp": "九千",
    "romaji": "kyuusen",
    "arti": "sembilan ribu"
  },
  {
    "id": 117,
    "category": "Angka",
    "jp": "万",
    "romaji": "man",
    "arti": "sepuluh ribu"
  },
  {
    "id": 118,
    "category": "Angka",
    "jp": "⼆万",
    "romaji": "niman",
    "arti": "dua puluh ribu"
  },
  {
    "id": 119,
    "category": "Angka",
    "jp": "三万",
    "romaji": "sanman",
    "arti": "tiga puluh ribu"
  },
  {
    "id": 120,
    "category": "Angka",
    "jp": "四万",
    "romaji": "yonman",
    "arti": "empat puluh ribu"
  },
  {
    "id": 121,
    "category": "Angka",
    "jp": "五万",
    "romaji": "goman",
    "arti": "lima puluh ribu"
  },
  {
    "id": 122,
    "category": "Angka",
    "jp": "六万",
    "romaji": "rokuman",
    "arti": "enam puluh ribu"
  },
  {
    "id": 123,
    "category": "Angka",
    "jp": "七万",
    "romaji": "nanaman/shichiman",
    "arti": "tujuh puluh ribu"
  },
  {
    "id": 124,
    "category": "Angka",
    "jp": "⼋万",
    "romaji": "hachiman",
    "arti": "delapan puluh ribu"
  },
  {
    "id": 125,
    "category": "Angka",
    "jp": "⼗万",
    "romaji": "juuman",
    "arti": "seratus ribu"
  },
  {
    "id": 126,
    "category": "Angka",
    "jp": "百万",
    "romaji": "hyakuman",
    "arti": "sejuta"
  },
  {
    "id": 127,
    "category": "Angka",
    "jp": "千万",
    "romaji": "senman",
    "arti": "sepuluh juta"
  },
  {
    "id": 128,
    "category": "Angka",
    "jp": "億",
    "romaji": "oku",
    "arti": "seratus juta"
  },
  {
    "id": 129,
    "category": "Angka",
    "jp": "兆",
    "romaji": "chou",
    "arti": "satu triliun"
  },
  {
    "id": 130,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼈体",
    "romaji": "jintai tubuh",
    "arti": "manusia"
  },
  {
    "id": 131,
    "category": "Anggota Tubuh Manusia",
    "jp": "肩",
    "romaji": "kata",
    "arti": "bahu"
  },
  {
    "id": 132,
    "category": "Anggota Tubuh Manusia",
    "jp": "喉",
    "romaji": "nodo",
    "arti": "tenggorokan"
  },
  {
    "id": 133,
    "category": "Anggota Tubuh Manusia",
    "jp": "顔",
    "romaji": "kao",
    "arti": "muka"
  },
  {
    "id": 134,
    "category": "Anggota Tubuh Manusia",
    "jp": "頬",
    "romaji": "hoho",
    "arti": "pipi"
  },
  {
    "id": 135,
    "category": "Anggota Tubuh Manusia",
    "jp": "歯",
    "romaji": "ha",
    "arti": "gigi"
  },
  {
    "id": 136,
    "category": "Anggota Tubuh Manusia",
    "jp": "指",
    "romaji": "yubi",
    "arti": "jari"
  },
  {
    "id": 137,
    "category": "Anggota Tubuh Manusia",
    "jp": "胃/お腹",
    "romaji": "onaka",
    "arti": "perut"
  },
  {
    "id": 138,
    "category": "Anggota Tubuh Manusia",
    "jp": "⽖",
    "romaji": "tsume",
    "arti": "kuku"
  },
  {
    "id": 139,
    "category": "Anggota Tubuh Manusia",
    "jp": "額",
    "romaji": "hitai",
    "arti": "dahi"
  },
  {
    "id": 140,
    "category": "Anggota Tubuh Manusia",
    "jp": "顎",
    "romaji": "ago",
    "arti": "dagu"
  },
  {
    "id": 141,
    "category": "Anggota Tubuh Manusia",
    "jp": "⿐",
    "romaji": "hana",
    "arti": "hidung"
  },
  {
    "id": 142,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼝",
    "romaji": "kuchi",
    "arti": "mulut"
  },
  {
    "id": 143,
    "category": "Anggota Tubuh Manusia",
    "jp": "唇",
    "romaji": "kuchibiru",
    "arti": "bibir"
  },
  {
    "id": 144,
    "category": "Anggota Tubuh Manusia",
    "jp": "⾸",
    "romaji": "kubi",
    "arti": "leher"
  },
  {
    "id": 145,
    "category": "Anggota Tubuh Manusia",
    "jp": "掌",
    "romaji": "tenohira",
    "arti": "telapak tangan"
  },
  {
    "id": 146,
    "category": "Anggota Tubuh Manusia",
    "jp": "体",
    "romaji": "karada",
    "arti": "tubuh/badan"
  },
  {
    "id": 147,
    "category": "Anggota Tubuh Manusia",
    "jp": "頭",
    "romaji": "atama",
    "arti": "kepala"
  },
  {
    "id": 148,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼿",
    "romaji": "te",
    "arti": "tangan"
  },
  {
    "id": 149,
    "category": "Anggota Tubuh Manusia",
    "jp": "⾜",
    "romaji": "ashi",
    "arti": "kaki"
  },
  {
    "id": 150,
    "category": "Anggota Tubuh Manusia",
    "jp": "腕",
    "romaji": "ude",
    "arti": "lengan"
  },
  {
    "id": 151,
    "category": "Anggota Tubuh Manusia",
    "jp": "膝",
    "romaji": "hiza",
    "arti": "lutut"
  },
  {
    "id": 152,
    "category": "Anggota Tubuh Manusia",
    "jp": "髪",
    "romaji": "kami",
    "arti": "rambut"
  },
  {
    "id": 153,
    "category": "Anggota Tubuh Manusia",
    "jp": "背中",
    "romaji": "senaka",
    "arti": "punggung"
  },
  {
    "id": 154,
    "category": "Anggota Tubuh Manusia",
    "jp": "腰",
    "romaji": "koshi",
    "arti": "pinggang"
  },
  {
    "id": 155,
    "category": "Anggota Tubuh Manusia",
    "jp": "⽬",
    "romaji": "me",
    "arti": "mata"
  },
  {
    "id": 156,
    "category": "Anggota Tubuh Manusia",
    "jp": "⽿",
    "romaji": "mimi",
    "arti": "telinga"
  },
  {
    "id": 157,
    "category": "Anggota Tubuh Manusia",
    "jp": "踵",
    "romaji": "kakato",
    "arti": "tumit"
  },
  {
    "id": 158,
    "category": "Anggota Tubuh Manusia",
    "jp": "⾜指",
    "romaji": "ashiyubi",
    "arti": "jari kaki"
  },
  {
    "id": 159,
    "category": "Anggota Tubuh Manusia",
    "jp": "親指",
    "romaji": "oyayubi",
    "arti": "jempol"
  },
  {
    "id": 160,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼈差し指",
    "romaji": "hitosashiyubi",
    "arti": "jari telunjuk"
  },
  {
    "id": 161,
    "category": "Anggota Tubuh Manusia",
    "jp": "中指",
    "romaji": "nakayubi",
    "arti": "jari tengah"
  },
  {
    "id": 162,
    "category": "Anggota Tubuh Manusia",
    "jp": "薬指",
    "romaji": "kusuriyubi",
    "arti": "jari manis"
  },
  {
    "id": 163,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼩指",
    "romaji": "koyubi",
    "arti": "jari kelingking"
  },
  {
    "id": 164,
    "category": "Anggota Tubuh Manusia",
    "jp": "顎鬚",
    "romaji": "agohige",
    "arti": "janggut"
  },
  {
    "id": 165,
    "category": "Anggota Tubuh Manusia",
    "jp": "髭",
    "romaji": "hige",
    "arti": "kumis"
  },
  {
    "id": 166,
    "category": "Anggota Tubuh Manusia",
    "jp": "太股",
    "romaji": "futomomo",
    "arti": "paha"
  },
  {
    "id": 167,
    "category": "Anggota Tubuh Manusia",
    "jp": "⽪膚",
    "romaji": "hifu",
    "arti": "kulit"
  },
  {
    "id": 168,
    "category": "Anggota Tubuh Manusia",
    "jp": "⾎液/⾎",
    "romaji": "ketsueki/chi",
    "arti": "darah"
  },
  {
    "id": 169,
    "category": "Anggota Tubuh Manusia",
    "jp": "眉",
    "romaji": "mayu",
    "arti": "alis"
  },
  {
    "id": 170,
    "category": "Anggota Tubuh Manusia",
    "jp": "胸",
    "romaji": "mune",
    "arti": "dada"
  },
  {
    "id": 171,
    "category": "Anggota Tubuh Manusia",
    "jp": "肘",
    "romaji": "hiji",
    "arti": "siku"
  },
  {
    "id": 172,
    "category": "Anggota Tubuh Manusia",
    "jp": "臍",
    "romaji": "heso",
    "arti": "pusar"
  },
  {
    "id": 173,
    "category": "Anggota Tubuh Manusia",
    "jp": "腋の下",
    "romaji": "wakinoshita",
    "arti": "ketiak"
  },
  {
    "id": 174,
    "category": "Anggota Tubuh Manusia",
    "jp": "⾜⾸",
    "romaji": "ashikubi",
    "arti": "pergelangan kaki"
  },
  {
    "id": 175,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼿⾸",
    "romaji": "tekubi",
    "arti": "pergelangan tangan"
  },
  {
    "id": 176,
    "category": "Anggota Tubuh Manusia",
    "jp": "眼球",
    "romaji": "gankyuu",
    "arti": "bola mata"
  },
  {
    "id": 177,
    "category": "Anggota Tubuh Manusia",
    "jp": "内臓",
    "romaji": "naizou",
    "arti": "tubuh bagian dalam"
  },
  {
    "id": 178,
    "category": "Anggota Tubuh Manusia",
    "jp": "腎臓",
    "romaji": "jinzou",
    "arti": "ginjal"
  },
  {
    "id": 179,
    "category": "Anggota Tubuh Manusia",
    "jp": "肝臓",
    "romaji": "kanzou",
    "arti": "hati"
  },
  {
    "id": 180,
    "category": "Anggota Tubuh Manusia",
    "jp": "肋⻣",
    "romaji": "rokkotsu",
    "arti": "tulang rusuk/iga"
  },
  {
    "id": 181,
    "category": "Anggota Tubuh Manusia",
    "jp": "卵巣",
    "romaji": "ransou",
    "arti": "indung telur"
  },
  {
    "id": 182,
    "category": "Anggota Tubuh Manusia",
    "jp": "胎児",
    "romaji": "taiji",
    "arti": "janin"
  },
  {
    "id": 183,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼼臓",
    "romaji": "shinzou",
    "arti": "jantung"
  },
  {
    "id": 184,
    "category": "Anggota Tubuh Manusia",
    "jp": "脾臓",
    "romaji": "hizou",
    "arti": "limpa"
  },
  {
    "id": 185,
    "category": "Anggota Tubuh Manusia",
    "jp": "脳",
    "romaji": "nou",
    "arti": "otak"
  },
  {
    "id": 186,
    "category": "Anggota Tubuh Manusia",
    "jp": "筋⾁",
    "romaji": "kinniku",
    "arti": "otot"
  },
  {
    "id": 187,
    "category": "Anggota Tubuh Manusia",
    "jp": "肺",
    "romaji": "hai",
    "arti": "paru-paru"
  },
  {
    "id": 188,
    "category": "Anggota Tubuh Manusia",
    "jp": "⾎管",
    "romaji": "kekkan",
    "arti": "pembuluh darah"
  },
  {
    "id": 189,
    "category": "Anggota Tubuh Manusia",
    "jp": "動脈",
    "romaji": "doumyaku",
    "arti": "nadi"
  },
  {
    "id": 190,
    "category": "Anggota Tubuh Manusia",
    "jp": "静脈",
    "romaji": "joumyaku",
    "arti": "urat"
  },
  {
    "id": 191,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼦宮",
    "romaji": "shikyuu",
    "arti": "rahim"
  },
  {
    "id": 192,
    "category": "Anggota Tubuh Manusia",
    "jp": "網膜",
    "romaji": "moumaku",
    "arti": "rahim"
  },
  {
    "id": 193,
    "category": "Anggota Tubuh Manusia",
    "jp": "精⼦",
    "romaji": "seishi",
    "arti": "sperma"
  },
  {
    "id": 194,
    "category": "Anggota Tubuh Manusia",
    "jp": "臍の緒",
    "romaji": "heso no o",
    "arti": "tali pusar"
  },
  {
    "id": 195,
    "category": "Anggota Tubuh Manusia",
    "jp": "頭蓋⻣",
    "romaji": "zugaikotsu",
    "arti": "tengkorak"
  },
  {
    "id": 196,
    "category": "Anggota Tubuh Manusia",
    "jp": "⻣",
    "romaji": "hone",
    "arti": "tulang"
  },
  {
    "id": 197,
    "category": "Anggota Tubuh Manusia",
    "jp": "腸",
    "romaji": "chou",
    "arti": "usus"
  },
  {
    "id": 198,
    "category": "Anggota Tubuh Manusia",
    "jp": "⼤腸",
    "romaji": "daichou",
    "arti": "usus besar"
  },
  {
    "id": 199,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "ボールペン",
    "romaji": "Boorupen",
    "arti": "pulpen"
  },
  {
    "id": 200,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "本 (ほん)",
    "romaji": "Hon",
    "arti": "buku"
  },
  {
    "id": 201,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "分度器 (ぶんどき)",
    "romaji": "Bundoki",
    "arti": "Busur Derajat"
  },
  {
    "id": 202,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "教科書 (きょうかしょ)",
    "romaji": "Kyoukasho",
    "arti": "Buku Pelajaran"
  },
  {
    "id": 203,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "百科事典 (ひゃっかじてん)",
    "romaji": "Hyakkajiten",
    "arti": "Ensiklopedia"
  },
  {
    "id": 204,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "鋏 (はさみ)",
    "romaji": "Hasami",
    "arti": "Gunting"
  },
  {
    "id": 205,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "電卓 計算機 (でんたくけいさんき )",
    "romaji": "Dentaku Keisanki",
    "arti": "Kalkulator"
  },
  {
    "id": 206,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "チョークChooku",
    "romaji": "",
    "arti": "Kapur"
  },
  {
    "id": 207,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "椅⼦ (いす)",
    "romaji": "Isu",
    "arti": "Kursi"
  },
  {
    "id": 208,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "コンピューター Konpyu",
    "romaji": "",
    "arti": "ta– komputer"
  },
  {
    "id": 209,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "辞書 (じしょ)",
    "romaji": "Jisho",
    "arti": "kamus"
  },
  {
    "id": 210,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "紙 (かみ)",
    "romaji": "Kami",
    "arti": "kertas"
  },
  {
    "id": 211,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "机 (つくえ)",
    "romaji": "Tsukue",
    "arti": "meja"
  },
  {
    "id": 212,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "教卓 (きょうたく)",
    "romaji": "Kyoutaku",
    "arti": "guru"
  },
  {
    "id": 213,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "黒板 (こくばん) Kokuban",
    "romaji": "",
    "arti": "Papan Tulis"
  },
  {
    "id": 214,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "定規 (じょうぎ)",
    "romaji": "Jougi",
    "arti": "Penggaris"
  },
  {
    "id": 215,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "黒板消し",
    "romaji": "Kokuban",
    "arti": "Penghapus"
  },
  {
    "id": 216,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "こくばんけし",
    "romaji": "keshi",
    "arti": "Papan Tulis"
  },
  {
    "id": 217,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "鉛筆 (えんぴつ)",
    "romaji": "Enpitsu",
    "arti": "Pensil"
  },
  {
    "id": 218,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "シャーペン",
    "romaji": "Sha-pen",
    "arti": "Pensil Mekanik"
  },
  {
    "id": 219,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "地図 (ちず)",
    "romaji": "Chizu",
    "arti": "Peta"
  },
  {
    "id": 220,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "ペン",
    "romaji": "Pen",
    "arti": "Pulpen"
  },
  {
    "id": 221,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "本棚 (ほんだな)",
    "romaji": "Hondana",
    "arti": "Rak Buku"
  },
  {
    "id": 222,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "鉛筆削り(えんぴつけずり)",
    "romaji": "Enpitsu , Kezuri",
    "arti": "Rautan Pensil"
  },
  {
    "id": 223,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "征服 (せいふく)",
    "romaji": "Seifuku",
    "arti": "Seragam"
  },
  {
    "id": 224,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "ホチキス",
    "romaji": "Hochikisu",
    "arti": "Staples"
  },
  {
    "id": 225,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "マーカー Ma",
    "romaji": "ka",
    "arti": "Spidol"
  },
  {
    "id": 226,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "通学鞄 (つうがくかばん)",
    "romaji": "Tsuugaku, Kaban",
    "arti": "Tas Sekolah"
  },
  {
    "id": 227,
    "category": "Alat Tulis dan Peralatan Sekolah",
    "jp": "筆箱 (ふでばこ)",
    "romaji": "Fudebako",
    "arti": "Tempat Pensil"
  },
  {
    "id": 228,
    "category": "Peralatan Dapur",
    "jp": "包丁",
    "romaji": "houchou",
    "arti": "pisau dapur"
  },
  {
    "id": 229,
    "category": "Peralatan Dapur",
    "jp": "まな板",
    "romaji": "manaita",
    "arti": "talenan"
  },
  {
    "id": 230,
    "category": "Peralatan Dapur",
    "jp": "浄⽔器",
    "romaji": "jousuiki",
    "arti": "penyuling air"
  },
  {
    "id": 231,
    "category": "Peralatan Dapur",
    "jp": "鍋",
    "romaji": "nabe",
    "arti": "panci"
  },
  {
    "id": 232,
    "category": "Peralatan Dapur",
    "jp": "フライパン",
    "romaji": "furaipan",
    "arti": "wajan"
  },
  {
    "id": 233,
    "category": "Peralatan Dapur",
    "jp": "やかん",
    "romaji": "yakan",
    "arti": "ketel"
  },
  {
    "id": 234,
    "category": "Peralatan Dapur",
    "jp": "おたま",
    "romaji": "otama",
    "arti": "sendok sayur"
  },
  {
    "id": 235,
    "category": "Peralatan Dapur",
    "jp": "排⽔溝",
    "romaji": "haisuikou",
    "arti": "saringan"
  },
  {
    "id": 236,
    "category": "Peralatan Dapur",
    "jp": "ボウル",
    "romaji": "bouru",
    "arti": "mangkuk"
  },
  {
    "id": 237,
    "category": "Peralatan Dapur",
    "jp": "ミキサー",
    "romaji": "mikisaa",
    "arti": "blender"
  },
  {
    "id": 238,
    "category": "Peralatan Dapur",
    "jp": "おろし⾦",
    "romaji": "oroshigane",
    "arti": "parutan"
  },
  {
    "id": 239,
    "category": "Peralatan Dapur",
    "jp": "⽪むき機",
    "romaji": "kawa muki ki",
    "arti": "alat pengupas"
  },
  {
    "id": 240,
    "category": "Peralatan Dapur",
    "jp": "栓抜き",
    "romaji": "sennuki",
    "arti": "pembuka botol"
  },
  {
    "id": 241,
    "category": "Peralatan Dapur",
    "jp": "⽸切り",
    "romaji": "kankiri",
    "arti": "pembuka kaleng"
  },
  {
    "id": 242,
    "category": "Peralatan Dapur",
    "jp": "コルク抜き",
    "romaji": "koruku nuki",
    "arti": "kotrek"
  },
  {
    "id": 243,
    "category": "Nama Buah dan Sayur",
    "jp": "果物",
    "romaji": "kudamono",
    "arti": "buah"
  },
  {
    "id": 244,
    "category": "Nama Buah dan Sayur",
    "jp": "苺",
    "romaji": "ichigo",
    "arti": "strawberry"
  },
  {
    "id": 245,
    "category": "Nama Buah dan Sayur",
    "jp": "蜜柑",
    "romaji": "mikan",
    "arti": "jeruk mandarin"
  },
  {
    "id": 246,
    "category": "Nama Buah dan Sayur",
    "jp": "オレンジ",
    "romaji": "orenji",
    "arti": "jeruk"
  },
  {
    "id": 247,
    "category": "Nama Buah dan Sayur",
    "jp": "レモン",
    "romaji": "remon",
    "arti": "lemon"
  },
  {
    "id": 248,
    "category": "Nama Buah dan Sayur",
    "jp": "西⽠",
    "romaji": "suika",
    "arti": "semangka"
  },
  {
    "id": 249,
    "category": "Nama Buah dan Sayur",
    "jp": "葡萄",
    "romaji": "budou",
    "arti": "anggur"
  },
  {
    "id": 250,
    "category": "Nama Buah dan Sayur",
    "jp": "パイナップッル",
    "romaji": "painappurru",
    "arti": "nanas"
  },
  {
    "id": 251,
    "category": "Nama Buah dan Sayur",
    "jp": "林檎",
    "romaji": "ringo",
    "arti": "apel"
  },
  {
    "id": 252,
    "category": "Nama Buah dan Sayur",
    "jp": "ドリアン",
    "romaji": "dorian",
    "arti": "durian"
  },
  {
    "id": 253,
    "category": "Nama Buah dan Sayur",
    "jp": "パパイヤ",
    "romaji": "papaiya",
    "arti": "pepaya"
  },
  {
    "id": 254,
    "category": "Nama Buah dan Sayur",
    "jp": "桃",
    "romaji": "momo",
    "arti": "buah persik"
  },
  {
    "id": 255,
    "category": "Nama Buah dan Sayur",
    "jp": "李 / 梅",
    "romaji": "sumomo/ume",
    "arti": "buah plum"
  },
  {
    "id": 256,
    "category": "Nama Buah dan Sayur",
    "jp": "マンゴー",
    "romaji": "mangoo",
    "arti": "mangga"
  },
  {
    "id": 257,
    "category": "Nama Buah dan Sayur",
    "jp": "キウイ",
    "romaji": "kiui",
    "arti": "kiwi"
  },
  {
    "id": 258,
    "category": "Nama Buah dan Sayur",
    "jp": "グアバ",
    "romaji": "guaba",
    "arti": "jambu biji"
  },
  {
    "id": 259,
    "category": "Nama Buah dan Sayur",
    "jp": "ホシブドウ",
    "romaji": "hoshibudou",
    "arti": "kismis"
  },
  {
    "id": 260,
    "category": "Nama Buah dan Sayur",
    "jp": "栗",
    "romaji": "kuri",
    "arti": "buah coklak"
  },
  {
    "id": 261,
    "category": "Nama Buah dan Sayur",
    "jp": "ザクロ",
    "romaji": "zakuro",
    "arti": "delima"
  },
  {
    "id": 262,
    "category": "Nama Buah dan Sayur",
    "jp": "ココノッツ",
    "romaji": "kokonottsu",
    "arti": "kelapa"
  },
  {
    "id": 263,
    "category": "Nama Buah dan Sayur",
    "jp": "ジャックフルッツ",
    "romaji": "jakkufuruttsu",
    "arti": "nangka"
  },
  {
    "id": 264,
    "category": "Nama Buah dan Sayur",
    "jp": "きいちご",
    "romaji": "kiichigo",
    "arti": "rasberry"
  },
  {
    "id": 265,
    "category": "Nama Buah dan Sayur",
    "jp": "柿",
    "romaji": "kaki",
    "arti": "kesemek"
  },
  {
    "id": 266,
    "category": "Nama Buah dan Sayur",
    "jp": "アボカド",
    "romaji": "abokado",
    "arti": "alpukat"
  },
  {
    "id": 267,
    "category": "Nama Buah dan Sayur",
    "jp": "梨",
    "romaji": "nashi",
    "arti": "pir"
  },
  {
    "id": 268,
    "category": "Nama Buah dan Sayur",
    "jp": "野菜",
    "romaji": "yasai",
    "arti": "sayur"
  },
  {
    "id": 269,
    "category": "Nama Buah dan Sayur",
    "jp": "⼤根",
    "romaji": "daikon",
    "arti": "lobak jepang"
  },
  {
    "id": 270,
    "category": "Nama Buah dan Sayur",
    "jp": "レタス",
    "romaji": "retasu",
    "arti": "selada"
  },
  {
    "id": 271,
    "category": "Nama Buah dan Sayur",
    "jp": "トマト",
    "romaji": "tomato",
    "arti": "tomat"
  },
  {
    "id": 272,
    "category": "Nama Buah dan Sayur",
    "jp": "⽊の実",
    "romaji": "kinomi",
    "arti": "kacang-kacangan"
  },
  {
    "id": 273,
    "category": "Nama Buah dan Sayur",
    "jp": "じゃが芋",
    "romaji": "jagaimo",
    "arti": "kentang"
  },
  {
    "id": 274,
    "category": "Nama Buah dan Sayur",
    "jp": "キャベツ",
    "romaji": "kyabetsu",
    "arti": "kubis"
  },
  {
    "id": 275,
    "category": "Nama Buah dan Sayur",
    "jp": "しょうが",
    "romaji": "shouga",
    "arti": "jahe"
  },
  {
    "id": 276,
    "category": "Nama Buah dan Sayur",
    "jp": "茄⼦",
    "romaji": "nasu",
    "arti": "terong"
  },
  {
    "id": 277,
    "category": "Nama Buah dan Sayur",
    "jp": "ブルーベリー",
    "romaji": "buruuberii",
    "arti": "blueberry"
  },
  {
    "id": 278,
    "category": "Nama Buah dan Sayur",
    "jp": "ブラックベリー",
    "romaji": "burakkuberii",
    "arti": "blackberry"
  },
  {
    "id": 279,
    "category": "Nama Buah dan Sayur",
    "jp": "さくらんぼう",
    "romaji": "sakuranbou",
    "arti": "cherry"
  },
  {
    "id": 280,
    "category": "Nama Buah dan Sayur",
    "jp": "オリーブ",
    "romaji": "oriibu",
    "arti": "buah jaitun"
  },
  {
    "id": 281,
    "category": "Nama Buah dan Sayur",
    "jp": "イチジク",
    "romaji": "ichijiku",
    "arti": "buah ara"
  },
  {
    "id": 282,
    "category": "Nama Buah dan Sayur",
    "jp": "バナナ",
    "romaji": "banana",
    "arti": "pisang"
  },
  {
    "id": 283,
    "category": "Nama Buah dan Sayur",
    "jp": "なつめやしのみ",
    "romaji": "natsumeyashi no mi",
    "arti": "kurma"
  },
  {
    "id": 284,
    "category": "Nama Buah dan Sayur",
    "jp": "⼈参",
    "romaji": "ninjin",
    "arti": "wartel"
  },
  {
    "id": 285,
    "category": "Nama Buah dan Sayur",
    "jp": "⽟葱",
    "romaji": "tamanegi",
    "arti": "bawang merah"
  },
  {
    "id": 286,
    "category": "Nama Buah dan Sayur",
    "jp": "⼤蒜",
    "romaji": "ninniku",
    "arti": "bawang putih"
  },
  {
    "id": 287,
    "category": "Nama Buah dan Sayur",
    "jp": "さやえんどう",
    "romaji": "sayaendou",
    "arti": "kacang panjang"
  },
  {
    "id": 288,
    "category": "Nama Buah dan Sayur",
    "jp": "えんどう⾖/⻘⾖",
    "romaji": "endou mame/aomame",
    "arti": "kacang polong"
  },
  {
    "id": 289,
    "category": "Nama Buah dan Sayur",
    "jp": "カリフラワー",
    "romaji": "karifurawaa",
    "arti": "kembang kol"
  },
  {
    "id": 290,
    "category": "Nama Buah dan Sayur",
    "jp": "メキャベツ",
    "romaji": "mekyabetsu",
    "arti": "touge"
  },
  {
    "id": 291,
    "category": "Nama Buah dan Sayur",
    "jp": "胡⽠",
    "romaji": "kyuuri",
    "arti": "mentimun"
  },
  {
    "id": 292,
    "category": "Nama Buah dan Sayur",
    "jp": "ぴまん",
    "romaji": "piman",
    "arti": "cabe hijau"
  },
  {
    "id": 293,
    "category": "Nama Buah dan Sayur",
    "jp": "⾖",
    "romaji": "mame",
    "arti": "kacang"
  },
  {
    "id": 294,
    "category": "Nama Buah dan Sayur",
    "jp": "マッシュルーム",
    "romaji": "masshuruumu",
    "arti": "jamur"
  },
  {
    "id": 295,
    "category": "Nama Buah dan Sayur",
    "jp": "⽩菜",
    "romaji": "hakusai",
    "arti": "sawi"
  },
  {
    "id": 296,
    "category": "Nama Buah dan Sayur",
    "jp": "南⽠",
    "romaji": "kabocha",
    "arti": "labu"
  },
  {
    "id": 297,
    "category": "Nama Buah dan Sayur",
    "jp": "ブロッコリー",
    "romaji": "burokkorii",
    "arti": "brokoli"
  },
  {
    "id": 298,
    "category": "Nama Buah dan Sayur",
    "jp": "⼤⾖",
    "romaji": "daizu",
    "arti": "kacang kedelai"
  },
  {
    "id": 299,
    "category": "Nama Buah dan Sayur",
    "jp": "⼩⾖",
    "romaji": "azuki",
    "arti": "kacang azuki"
  },
  {
    "id": 300,
    "category": "Nama Buah dan Sayur",
    "jp": "インゲン⾖",
    "romaji": "ingen mame",
    "arti": "kacang merah"
  },
  {
    "id": 301,
    "category": "Kata Sifat Dasar",
    "jp": "⼤きい(おおきい)",
    "romaji": "ookii",
    "arti": "besar"
  },
  {
    "id": 302,
    "category": "Kata Sifat Dasar",
    "jp": "⼩さい(ちいさい)",
    "romaji": "chiisai",
    "arti": "kecil"
  },
  {
    "id": 303,
    "category": "Kata Sifat Dasar",
    "jp": "⻑い(ながい)",
    "romaji": "nagai",
    "arti": "panjang"
  },
  {
    "id": 304,
    "category": "Kata Sifat Dasar",
    "jp": "短い(みじかい)",
    "romaji": "mijikai",
    "arti": "pendek"
  },
  {
    "id": 305,
    "category": "Kata Sifat Dasar",
    "jp": "多い(おおい)",
    "romaji": "ooi",
    "arti": "banyak"
  },
  {
    "id": 306,
    "category": "Kata Sifat Dasar",
    "jp": "少ない(すくない)",
    "romaji": "sukunai",
    "arti": "sedikit"
  },
  {
    "id": 307,
    "category": "Kata Sifat Dasar",
    "jp": "太い(ふとい)",
    "romaji": "futoi",
    "arti": "gemuk, tebal"
  },
  {
    "id": 308,
    "category": "Kata Sifat Dasar",
    "jp": "細い(ほそい)",
    "romaji": "hosoi",
    "arti": "ramping, tipis"
  },
  {
    "id": 309,
    "category": "Kata Sifat Dasar",
    "jp": "厚い(あつい)",
    "romaji": "atsui",
    "arti": "tebal"
  },
  {
    "id": 310,
    "category": "Kata Sifat Dasar",
    "jp": "薄い(うすい)",
    "romaji": "usui",
    "arti": "tipis"
  },
  {
    "id": 311,
    "category": "Kata Sifat Dasar",
    "jp": "固い(かたい)",
    "romaji": "katai",
    "arti": "keras"
  },
  {
    "id": 312,
    "category": "Kata Sifat Dasar",
    "jp": "柔かい(やわらかい)",
    "romaji": "yawarakai",
    "arti": "lunak"
  },
  {
    "id": 313,
    "category": "Kata Sifat Dasar",
    "jp": "細かい(こまかい)",
    "romaji": "komakai",
    "arti": "kecil(uang)"
  },
  {
    "id": 314,
    "category": "Kata Sifat Dasar",
    "jp": "粗い(あらい)",
    "romaji": "arai",
    "arti": "kasar"
  },
  {
    "id": 315,
    "category": "Kata Sifat Dasar",
    "jp": "新しい(あたらしい)",
    "romaji": "atarashii",
    "arti": "baru"
  },
  {
    "id": 316,
    "category": "Kata Sifat Dasar",
    "jp": "古い(ふるい)",
    "romaji": "furui",
    "arti": "lama, tua"
  },
  {
    "id": 317,
    "category": "Kata Sifat Dasar",
    "jp": "⾼い(たかい)",
    "romaji": "takai",
    "arti": "mahal"
  },
  {
    "id": 318,
    "category": "Kata Sifat Dasar",
    "jp": "安い(やすい)",
    "romaji": "yasui",
    "arti": "murah"
  },
  {
    "id": 319,
    "category": "Kata Sifat Dasar",
    "jp": "早い(はやい)",
    "romaji": "hayai",
    "arti": "cepat (waktu)"
  },
  {
    "id": 320,
    "category": "Kata Sifat Dasar",
    "jp": "速い(はやい)",
    "romaji": "hayai",
    "arti": "cepat (kelajuan)"
  },
  {
    "id": 321,
    "category": "Kata Sifat Dasar",
    "jp": "遅い(おそい)",
    "romaji": "osoi",
    "arti": "lambat"
  },
  {
    "id": 322,
    "category": "Kata Sifat Dasar",
    "jp": "遠い(とおい)",
    "romaji": "tooi",
    "arti": "jauh"
  },
  {
    "id": 323,
    "category": "Kata Sifat Dasar",
    "jp": "近い(ちかい)",
    "romaji": "chikai",
    "arti": "dekat"
  },
  {
    "id": 324,
    "category": "Kata Sifat Dasar",
    "jp": "強い(つよい)",
    "romaji": "tsuyoi",
    "arti": "kuat"
  },
  {
    "id": 325,
    "category": "Kata Sifat Dasar",
    "jp": "弱い(よわい)",
    "romaji": "yowai",
    "arti": "lemah"
  },
  {
    "id": 326,
    "category": "Kata Sifat Dasar",
    "jp": "⾼い(たかい)",
    "romaji": "takai",
    "arti": "tinggi, mahal"
  },
  {
    "id": 327,
    "category": "Kata Sifat Dasar",
    "jp": "低い(ひくい)",
    "romaji": "hikui",
    "arti": "rendah"
  },
  {
    "id": 328,
    "category": "Kata Sifat Dasar",
    "jp": "熱い(あつい)",
    "romaji": "atsui",
    "arti": "panas (untuk benda seperti makanan, minuman, air, dll)"
  },
  {
    "id": 329,
    "category": "Kata Sifat Dasar",
    "jp": "冷たい(つめたい)",
    "romaji": "tsumetai",
    "arti": "dingin (untuk benda seperti makanan, minuman,"
  },
  {
    "id": 330,
    "category": "Kata Sifat Dasar",
    "jp": "温 か い ( あ た た か い )",
    "romaji": "atatakai",
    "arti": "hangat (untuk benda seperti makanan,"
  },
  {
    "id": 331,
    "category": "Kata Sifat Dasar",
    "jp": "ぬるい",
    "romaji": "nurui",
    "arti": "kurang panas. tidak panas dan tidak dingin juga. (air)"
  },
  {
    "id": 332,
    "category": "Kata Sifat Dasar",
    "jp": "丸い(まるい)",
    "romaji": "marui",
    "arti": "bundar, bulat"
  },
  {
    "id": 333,
    "category": "Kata Sifat Dasar",
    "jp": "⽢い(あまい)",
    "romaji": "amai",
    "arti": "manis"
  },
  {
    "id": 334,
    "category": "Kata Sifat Dasar",
    "jp": "⾟い(からい)",
    "romaji": "karai",
    "arti": "pedas"
  },
  {
    "id": 335,
    "category": "Kata Sifat Dasar",
    "jp": "すっぱい",
    "romaji": "suppai",
    "arti": "asam"
  },
  {
    "id": 336,
    "category": "Kata Sifat Dasar",
    "jp": "塩⾟い(しおからい)",
    "romaji": "shiokarai",
    "arti": "asin"
  },
  {
    "id": 337,
    "category": "Kata Sifat Dasar",
    "jp": "苦い(にがい)",
    "romaji": "nigai",
    "arti": "pahit"
  },
  {
    "id": 338,
    "category": "Kata Sifat Dasar",
    "jp": "濃い(こい)",
    "romaji": "koi",
    "arti": "pekat"
  },
  {
    "id": 339,
    "category": "Kata Sifat Dasar",
    "jp": "薄い(うすい)",
    "romaji": "usui",
    "arti": "tipis, encer(rasanya)"
  },
  {
    "id": 340,
    "category": "Kata Sifat Dasar",
    "jp": "おいしい",
    "romaji": "oishii",
    "arti": "enak"
  },
  {
    "id": 341,
    "category": "Kata Sifat Dasar",
    "jp": "まずい",
    "romaji": "mazui",
    "arti": "tidak enak"
  },
  {
    "id": 342,
    "category": "Kata Sifat Dasar",
    "jp": "暑い(あつい)",
    "romaji": "atsui",
    "arti": "panas(suhu)"
  },
  {
    "id": 343,
    "category": "Kata Sifat Dasar",
    "jp": "寒い(さむい)",
    "romaji": "samui",
    "arti": "dingin(suhu)"
  },
  {
    "id": 344,
    "category": "Kata Sifat Dasar",
    "jp": "暖かい(あたたかい)",
    "romaji": "atatakai",
    "arti": "hangat(suhu)"
  },
  {
    "id": 345,
    "category": "Kata Sifat Dasar",
    "jp": "涼しい(すずしい)",
    "romaji": "suzushii",
    "arti": "sejuk(suhu)"
  },
  {
    "id": 346,
    "category": "Kata Sifat Dasar",
    "jp": "蒸暑い(むしあつい)",
    "romaji": "mushiatsui",
    "arti": "panas gerah(suhu)"
  },
  {
    "id": 347,
    "category": "Kata Sifat Dasar",
    "jp": "明るい(あかるい)",
    "romaji": "akarui",
    "arti": "terang, riang"
  },
  {
    "id": 348,
    "category": "Kata Sifat Dasar",
    "jp": "暗い(くらい)",
    "romaji": "kurai",
    "arti": "gelap, suram"
  },
  {
    "id": 349,
    "category": "Kata Sifat Dasar",
    "jp": "汚い(きたない)",
    "romaji": "kitanai",
    "arti": "kotor"
  },
  {
    "id": 350,
    "category": "Kata Sifat Dasar",
    "jp": "重い(おもい)",
    "romaji": "omoi",
    "arti": "berat"
  },
  {
    "id": 351,
    "category": "Kata Sifat Dasar",
    "jp": "軽い(かるい)",
    "romaji": "karui",
    "arti": "ringan"
  },
  {
    "id": 352,
    "category": "Kata Sifat Dasar",
    "jp": "詳しい(くわしい)",
    "romaji": "kuwashii",
    "arti": "detail"
  },
  {
    "id": 353,
    "category": "Kata Sifat Dasar",
    "jp": "難しい(むずかしい)",
    "romaji": "muzukashii",
    "arti": "sulit"
  },
  {
    "id": 354,
    "category": "Kata Sifat Dasar",
    "jp": "易しい(やさしい)",
    "romaji": "yasashii",
    "arti": "mudah"
  },
  {
    "id": 355,
    "category": "Kata Sifat Dasar",
    "jp": "珍しい(めずらしい)",
    "romaji": "mezurashii",
    "arti": "langka"
  },
  {
    "id": 356,
    "category": "Kata Sifat Dasar",
    "jp": "おかしい(おかしい)",
    "romaji": "okashii",
    "arti": "aneh, lucu"
  },
  {
    "id": 357,
    "category": "Kata Sifat Dasar",
    "jp": "危ない(あぶない)",
    "romaji": "abunai",
    "arti": "berbahaya"
  },
  {
    "id": 358,
    "category": "Kata Sifat Dasar",
    "jp": "うまい(うまい)",
    "romaji": "umai",
    "arti": "enak, pandai"
  },
  {
    "id": 359,
    "category": "Kata Sifat Dasar",
    "jp": "いい(いい)",
    "romaji": "ii",
    "arti": "bagus"
  },
  {
    "id": 360,
    "category": "Kata Sifat Dasar",
    "jp": "悪い(わるい)",
    "romaji": "warui",
    "arti": "jelek"
  },
  {
    "id": 361,
    "category": "Kata Sifat Dasar",
    "jp": "ひどい(ひどい)",
    "romaji": "hidoi",
    "arti": "kejam"
  },
  {
    "id": 362,
    "category": "Kata Sifat Dasar",
    "jp": "うるさい(うるさい)",
    "romaji": "urusai",
    "arti": "berisik"
  },
  {
    "id": 363,
    "category": "Kata Sifat Dasar",
    "jp": "忙しい(いそがしい)",
    "romaji": "isogashii",
    "arti": "sibuk"
  },
  {
    "id": 364,
    "category": "Kata Sifat Dasar",
    "jp": "正しい(ただしい)",
    "romaji": "tadashii",
    "arti": "benar"
  },
  {
    "id": 365,
    "category": "Kata Sifat Dasar",
    "jp": "すごい",
    "romaji": "sugoi",
    "arti": "hebat"
  },
  {
    "id": 366,
    "category": "Kata Sifat Dasar",
    "jp": "素晴らしい(すばらしい)",
    "romaji": "subarashii",
    "arti": "luar biasa"
  },
  {
    "id": 367,
    "category": "Kata Sifat Dasar",
    "jp": "かっこいい",
    "romaji": "kakkoii",
    "arti": "keren, terlihat bagus"
  },
  {
    "id": 368,
    "category": "Kata Sifat Dasar",
    "jp": "えらい",
    "romaji": "erai",
    "arti": "pintar, hebat, bagus"
  },
  {
    "id": 369,
    "category": "Kata Sifat Dasar",
    "jp": "仲がいい ( なかがいい )",
    "romaji": "naka ga ii",
    "arti": "rukun, akrab (*ini bukan kosa kata tp"
  },
  {
    "id": 370,
    "category": "Kata Sifat Dasar",
    "jp": "親しい(したしい)",
    "romaji": "shitashii",
    "arti": "akrab"
  },
  {
    "id": 371,
    "category": "Kata Sifat Dasar",
    "jp": "優しい(やさしい)",
    "romaji": "yasashii",
    "arti": "baik hati, ramah"
  },
  {
    "id": 372,
    "category": "Kata Sifat Dasar",
    "jp": "かわいい(かわいい)",
    "romaji": "kawaii",
    "arti": "cantik, lucu, imut"
  },
  {
    "id": 373,
    "category": "Kata Sifat Dasar",
    "jp": "美しい(うつくしい)",
    "romaji": "utsukushii",
    "arti": "indah"
  },
  {
    "id": 374,
    "category": "Kata Sifat Dasar",
    "jp": "厳しい(きびしい)",
    "romaji": "kibishii",
    "arti": "tegas"
  },
  {
    "id": 375,
    "category": "Kata Sifat Dasar",
    "jp": "⼤⼈しい(おとなしい)",
    "romaji": "otonashii",
    "arti": "bersifat lemah lembut dan tidak keras"
  },
  {
    "id": 376,
    "category": "Kata Sifat Dasar",
    "jp": "楽しい(たのしい)",
    "romaji": "tanoshii",
    "arti": "menyenangkan"
  },
  {
    "id": 377,
    "category": "Kata Sifat Dasar",
    "jp": "⾯⽩い(おもしろい)",
    "romaji": "omoshiroi",
    "arti": "menarik, lucu"
  },
  {
    "id": 378,
    "category": "Kata Sifat Dasar",
    "jp": "つまらない",
    "romaji": "tsumaranai",
    "arti": "membosankan, tidak menarik"
  },
  {
    "id": 379,
    "category": "Kata Sifat Dasar",
    "jp": "うれしい",
    "romaji": "ureshii",
    "arti": "senang, gembira"
  },
  {
    "id": 380,
    "category": "Kata Sifat Dasar",
    "jp": "寂しい(さびしい)",
    "romaji": "sabishii",
    "arti": "merasa sepi"
  },
  {
    "id": 381,
    "category": "Kata Sifat Dasar",
    "jp": "怖い(こわい)",
    "romaji": "kowai",
    "arti": "takut"
  },
  {
    "id": 382,
    "category": "Kata Sifat Dasar",
    "jp": "悲しい(かなしい)",
    "romaji": "kanashii",
    "arti": "sedih"
  },
  {
    "id": 383,
    "category": "Kata Sifat Dasar",
    "jp": "恥かしい(はずかしい)",
    "romaji": "hazukashii",
    "arti": "malu"
  },
  {
    "id": 384,
    "category": "Kata Sifat Dasar",
    "jp": "羨ましい(うらやましい)",
    "romaji": "urayamashii",
    "arti": "iri hati"
  },
  {
    "id": 385,
    "category": "Kata Sifat Dasar",
    "jp": "懐かしい(なつかしい)",
    "romaji": "natsukashii",
    "arti": "terkenang, melepaskan rindu"
  },
  {
    "id": 386,
    "category": "Kata Sifat Dasar",
    "jp": "眠い(ねむい)",
    "romaji": "nemui",
    "arti": "mengantuk"
  },
  {
    "id": 387,
    "category": "Kata Sifat Dasar",
    "jp": "痛い(いたい)",
    "romaji": "itai",
    "arti": "merasa nyeri,sakit"
  },
  {
    "id": 388,
    "category": "Kata Sifat Dasar",
    "jp": "欲しい(ほしい)",
    "romaji": "hoshii",
    "arti": "ingin mendapatkan"
  },
  {
    "id": 389,
    "category": "Kata Sifat Dasar",
    "jp": "無い(ない)",
    "romaji": "nai",
    "arti": "tidak ada"
  },
  {
    "id": 390,
    "category": "Kata Sifat Dasar",
    "jp": "残念(ざんねん)",
    "romaji": "zannen",
    "arti": "menyayangkan"
  },
  {
    "id": 391,
    "category": "Kata Sifat Dasar",
    "jp": "⼼配(しんぱい)",
    "romaji": "shinpai",
    "arti": "khawatir"
  },
  {
    "id": 392,
    "category": "Kata Sifat Dasar",
    "jp": "不安(ふあん)",
    "romaji": "fuan",
    "arti": "cemas"
  },
  {
    "id": 393,
    "category": "Kata Sifat Dasar",
    "jp": "好き(すき)",
    "romaji": "suki",
    "arti": "suka"
  },
  {
    "id": 394,
    "category": "Kata Sifat Dasar",
    "jp": "嫌い(きらい)",
    "romaji": "kirai",
    "arti": "tidak suka・benci"
  },
  {
    "id": 395,
    "category": "Kata Sifat Dasar",
    "jp": "⼤好き(だいすき)",
    "romaji": "daisuki",
    "arti": "suka sekali"
  },
  {
    "id": 396,
    "category": "Kata Sifat Dasar",
    "jp": "⼤嫌い(だいきらい)",
    "romaji": "daikirai",
    "arti": "benci sekali"
  },
  {
    "id": 397,
    "category": "Kata Sifat Dasar",
    "jp": "きれい",
    "romaji": "kiree",
    "arti": "cantik, bersih"
  },
  {
    "id": 398,
    "category": "Kata Sifat Dasar",
    "jp": "にぎやか",
    "romaji": "nigiyaka",
    "arti": "ramai"
  },
  {
    "id": 399,
    "category": "Kata Sifat Dasar",
    "jp": "静か(しずか)",
    "romaji": "shizuka",
    "arti": "tenang"
  },
  {
    "id": 400,
    "category": "Kata Sifat Dasar",
    "jp": "複雑(ふくざつ)",
    "romaji": "fukuzatsu",
    "arti": "rumit"
  },
  {
    "id": 401,
    "category": "Kata Sifat Dasar",
    "jp": "簡単(かんたん)",
    "romaji": "kantan",
    "arti": "mudah"
  },
  {
    "id": 402,
    "category": "Kata Sifat Dasar",
    "jp": "便利(べんり)",
    "romaji": "benri",
    "arti": "praktis"
  },
  {
    "id": 403,
    "category": "Kata Sifat Dasar",
    "jp": "不便(ふべん)",
    "romaji": "fuben",
    "arti": "tidak praktis"
  },
  {
    "id": 404,
    "category": "Kata Sifat Dasar",
    "jp": "幸せ(しあわせ)",
    "romaji": "shiawase",
    "arti": "bahagia"
  },
  {
    "id": 405,
    "category": "Kata Sifat Dasar",
    "jp": "素敵(すてき)",
    "romaji": "suteki",
    "arti": "bagus(dan terpesona)"
  },
  {
    "id": 406,
    "category": "Kata Sifat Dasar",
    "jp": "有名(ゆうめい)",
    "romaji": "yuumee",
    "arti": "terkenal"
  },
  {
    "id": 407,
    "category": "Kata Sifat Dasar",
    "jp": "安全(あんぜん)",
    "romaji": "anzen",
    "arti": "aman"
  },
  {
    "id": 408,
    "category": "Kata Sifat Dasar",
    "jp": "危険(きけん)",
    "romaji": "kiken",
    "arti": "berbahaya"
  },
  {
    "id": 409,
    "category": "Kata Sifat Dasar",
    "jp": "⾊々(いろいろ)",
    "romaji": "iroiro",
    "arti": "bermacam"
  },
  {
    "id": 410,
    "category": "Kata Sifat Dasar",
    "jp": "⼤丈夫(だいじょうぶ)",
    "romaji": "daijoobu",
    "arti": "tidak apa apa"
  },
  {
    "id": 411,
    "category": "Kata Sifat Dasar",
    "jp": "⼤事(だいじ)",
    "romaji": "daiji",
    "arti": "penting"
  },
  {
    "id": 412,
    "category": "Kata Sifat Dasar",
    "jp": "⼤切(たいせつ)",
    "romaji": "taisetsu",
    "arti": "penting"
  },
  {
    "id": 413,
    "category": "Kata Sifat Dasar",
    "jp": "駄⽬(だめ)",
    "romaji": "dame",
    "arti": "tidak boleh,situasinya tidak bagus"
  },
  {
    "id": 414,
    "category": "Kata Sifat Dasar",
    "jp": "変(へん)",
    "romaji": "hen",
    "arti": "aneh"
  },
  {
    "id": 415,
    "category": "Kata Sifat Dasar",
    "jp": "無駄(むだ)",
    "romaji": "muda",
    "arti": "sia-sia"
  },
  {
    "id": 416,
    "category": "Kata Sifat Dasar",
    "jp": "急(きゅう)",
    "romaji": "kyuu",
    "arti": "mendadak"
  },
  {
    "id": 417,
    "category": "Kata Sifat Dasar",
    "jp": "上⼿(じょうず)",
    "romaji": "joozu",
    "arti": "pandai"
  },
  {
    "id": 418,
    "category": "Kata Sifat Dasar",
    "jp": "下⼿(へた)",
    "romaji": "heta",
    "arti": "tidak pandai"
  },
  {
    "id": 419,
    "category": "Kata Sifat Dasar",
    "jp": "得意(とくい)",
    "romaji": "tokui",
    "arti": "pandai, jago"
  },
  {
    "id": 420,
    "category": "Kata Sifat Dasar",
    "jp": "苦⼿(にがて)",
    "romaji": "nigate",
    "arti": "tidak begitu suka, tidak pandai, lemah"
  },
  {
    "id": 421,
    "category": "Kata Sifat Dasar",
    "jp": "暇(ひま)",
    "romaji": "hima",
    "arti": "senggang"
  },
  {
    "id": 422,
    "category": "Kata Sifat Dasar",
    "jp": "かわいそう",
    "romaji": "kawaisoo",
    "arti": "kasihan"
  },
  {
    "id": 423,
    "category": "Kata Sifat Dasar",
    "jp": "⽴派(りっぱ)",
    "romaji": "rippa",
    "arti": "megah, layak dihormati"
  },
  {
    "id": 424,
    "category": "Kata Sifat Dasar",
    "jp": "⼤変(たいへん)",
    "romaji": "taihen",
    "arti": "berat (*hal, kasus, peristiwa, dll, bukan benda)"
  },
  {
    "id": 425,
    "category": "Kata Sifat Dasar",
    "jp": "楽(らく)",
    "romaji": "raku",
    "arti": "enteng, mudah"
  },
  {
    "id": 426,
    "category": "Kata Sifat Dasar",
    "jp": "無理(むり)",
    "romaji": "muri",
    "arti": "mustahil"
  },
  {
    "id": 427,
    "category": "Kata Sifat Dasar",
    "jp": "おしゃれ",
    "romaji": "oshare",
    "arti": "modis"
  },
  {
    "id": 428,
    "category": "Kata Sifat Dasar",
    "jp": "丁寧(ていねい)",
    "romaji": "teenee",
    "arti": "sopan, halus, ramah, teliti"
  },
  {
    "id": 429,
    "category": "Kata Sifat Dasar",
    "jp": "親切(しんせつ)",
    "romaji": "shinsetsu",
    "arti": "baik hati, ramah"
  },
  {
    "id": 430,
    "category": "Kata Sifat Dasar",
    "jp": "ハンサム(はんさむ)",
    "romaji": "hansamu",
    "arti": "ganteng"
  },
  {
    "id": 431,
    "category": "Kata Sifat Dasar",
    "jp": "真⾯⽬(まじめ)",
    "romaji": "majime",
    "arti": "rajin, serius, jujur"
  },
  {
    "id": 432,
    "category": "Kata Sifat Dasar",
    "jp": "不真⾯⽬(ふまじめ)",
    "romaji": "fumajime",
    "arti": "tidak serius, tidak jujur"
  },
  {
    "id": 433,
    "category": "Kata Sifat Dasar",
    "jp": "嫌(いや)",
    "romaji": "iya",
    "arti": "tidak suka / benci"
  },
  {
    "id": 434,
    "category": "Kata Sifat Dasar",
    "jp": "isshookenmei",
    "romaji": "",
    "arti": "sungguh-sungguh"
  },
  {
    "id": 435,
    "category": "Kata Sifat Dasar",
    "jp": "盛ん(さかん)",
    "romaji": "sakan",
    "arti": "popular"
  },
  {
    "id": 436,
    "category": "Kata Sifat Dasar",
    "jp": "邪魔(じゃま)",
    "romaji": "jama",
    "arti": "mengganggu"
  },
  {
    "id": 437,
    "category": "Kata Sifat Dasar",
    "jp": "⼗分(じゅうぶん)",
    "romaji": "juubun",
    "arti": "cukup"
  },
  {
    "id": 438,
    "category": "Kata Sifat Dasar",
    "jp": "丈夫(じょうぶ)",
    "romaji": "joobu",
    "arti": "kuat"
  },
  {
    "id": 439,
    "category": "Kata Sifat Dasar",
    "jp": "適当(てきとう)",
    "romaji": "tekitoo",
    "arti": "tepat, yg sesuai"
  },
  {
    "id": 440,
    "category": "Kata Sifat Dasar",
    "jp": "特別(とくべつ)",
    "romaji": "tokubetsu",
    "arti": "khusus, spesial"
  },
  {
    "id": 441,
    "category": "Kata Sifat Dasar",
    "jp": "⾃由(じゆう)",
    "romaji": "jiyuu",
    "arti": "bebas"
  },
  {
    "id": 442,
    "category": "Kata Sifat Dasar",
    "jp": "まっすぐ",
    "romaji": "massugu",
    "arti": "lurus"
  },
  {
    "id": 443,
    "category": "Kata Sifat Dasar",
    "jp": "熱⼼(ねっしん)",
    "romaji": "nesshin",
    "arti": "dng sungguh hati, dng rajin"
  },
  {
    "id": 444,
    "category": "Kata Sifat Dasar",
    "jp": "必要(ひつよう)",
    "romaji": "hitsuyoo",
    "arti": "perlu"
  },
  {
    "id": 445,
    "category": "Kata Sifat Dasar",
    "jp": "別(べつ)",
    "romaji": "betsu",
    "arti": "lain, beda"
  },
  {
    "id": 446,
    "category": "Kata Sifat Dasar",
    "jp": "不思議(ふしぎ)",
    "romaji": "fushigi",
    "arti": "ajaib"
  },
  {
    "id": 447,
    "category": "Kata Sifat Dasar",
    "jp": "豪華(ごうか)",
    "romaji": "gooka",
    "arti": "mewah"
  },
  {
    "id": 448,
    "category": "Kata Sifat Dasar",
    "jp": "同じ(おなじ)",
    "romaji": "onaji",
    "arti": "sama"
  },
  {
    "id": 449,
    "category": "Kata Sifat Dasar",
    "jp": "伝統的(でんとうてき)",
    "romaji": "dentoteki",
    "arti": "tradisional"
  },
  {
    "id": 450,
    "category": "Kata Sifat Dasar",
    "jp": "活発(かっぱつ)",
    "romaji": "kappatsu",
    "arti": "aktif"
  },
  {
    "id": 451,
    "category": "Kata Sifat Dasar",
    "jp": "誠実(せいじつ)",
    "romaji": "seejitsu",
    "arti": "tulus hati, setia"
  },
  {
    "id": 452,
    "category": "Kata Sifat Dasar",
    "jp": "わがまま(わがまま)",
    "romaji": "wagamama",
    "arti": "bersifat egois"
  },
  {
    "id": 453,
    "category": "Kata Sifat Dasar",
    "jp": "頑固(がんこ)",
    "romaji": "ganko",
    "arti": "keras kepala"
  },
  {
    "id": 454,
    "category": "Kata Sifat Dasar",
    "jp": "素直(すなお)",
    "romaji": "sunao",
    "arti": "patuh, polos"
  },
  {
    "id": 455,
    "category": "Kata Sifat Dasar",
    "jp": "意地悪(いじわる)",
    "romaji": "ijiwaru",
    "arti": "bersifat tega, jahat"
  },
  {
    "id": 456,
    "category": "Kata Sifat Dasar",
    "jp": "勝ち気(かちき)",
    "romaji": "kachiki",
    "arti": "tidak mau kalah"
  },
  {
    "id": 457,
    "category": "Kata Sifat Dasar",
    "jp": "神経質(しんけいしつ)",
    "romaji": "shinkeeshitsu",
    "arti": "bersifat sensitif, khawatir berlebihan"
  },
  {
    "id": 458,
    "category": "Kata Kerja",
    "jp": "有る",
    "romaji": "aru",
    "arti": "ada"
  },
  {
    "id": 459,
    "category": "Kata Kerja",
    "jp": "居る",
    "romaji": "oru/iru",
    "arti": "ada"
  },
  {
    "id": 460,
    "category": "Kata Kerja",
    "jp": "作業する",
    "romaji": "sagyou suru",
    "arti": "bekerja"
  },
  {
    "id": 461,
    "category": "Kata Kerja",
    "jp": "協⼒する",
    "romaji": "kyouryoku suru",
    "arti": "bekerja sama"
  },
  {
    "id": 462,
    "category": "Kata Kerja",
    "jp": "勉強する",
    "romaji": "benkyou suru",
    "arti": "belajar"
  },
  {
    "id": 463,
    "category": "Kata Kerja",
    "jp": "学ぶ",
    "romaji": "manabu",
    "arti": "belajar"
  },
  {
    "id": 464,
    "category": "Kata Kerja",
    "jp": "出発する",
    "romaji": "shuppatsu suru",
    "arti": "berangkat"
  },
  {
    "id": 465,
    "category": "Kata Kerja",
    "jp": "話し合う",
    "romaji": "hanashiau",
    "arti": "berbincang-bincang"
  },
  {
    "id": 466,
    "category": "Kata Kerja",
    "jp": "呼吸する",
    "romaji": "kokyuu suru",
    "arti": "bernafas"
  },
  {
    "id": 467,
    "category": "Kata Kerja",
    "jp": "運動する",
    "romaji": "undou suru",
    "arti": "berolahraga"
  },
  {
    "id": 468,
    "category": "Kata Kerja",
    "jp": "組む",
    "romaji": "kumu",
    "arti": "berpasangan"
  },
  {
    "id": 469,
    "category": "Kata Kerja",
    "jp": "経験する",
    "romaji": "keiken suru",
    "arti": "berpengalaman"
  },
  {
    "id": 470,
    "category": "Kata Kerja",
    "jp": "思う",
    "romaji": "omou",
    "arti": "berpikir"
  },
  {
    "id": 471,
    "category": "Kata Kerja",
    "jp": "離れる",
    "romaji": "hanareru",
    "arti": "berpisah"
  },
  {
    "id": 472,
    "category": "Kata Kerja",
    "jp": "悲しむ",
    "romaji": "kanashimu",
    "arti": "bersedih"
  },
  {
    "id": 473,
    "category": "Kata Kerja",
    "jp": "隠れる",
    "romaji": "kakureru",
    "arti": "bersembunyi"
  },
  {
    "id": 474,
    "category": "Kata Kerja",
    "jp": "掃除する",
    "romaji": "souji suru",
    "arti": "bersih-bersih"
  },
  {
    "id": 475,
    "category": "Kata Kerja",
    "jp": "輝く",
    "romaji": "kagayaku",
    "arti": "bersinar"
  },
  {
    "id": 476,
    "category": "Kata Kerja",
    "jp": "悩む",
    "romaji": "nayamu",
    "arti": "bersusah hati"
  },
  {
    "id": 477,
    "category": "Kata Kerja",
    "jp": "伺う",
    "romaji": "ukagau",
    "arti": "bertanya"
  },
  {
    "id": 478,
    "category": "Kata Kerja",
    "jp": "戦う",
    "romaji": "tatakau",
    "arti": "bertarung"
  },
  {
    "id": 479,
    "category": "Kata Kerja",
    "jp": "出会う",
    "romaji": "deau",
    "arti": "bertemu"
  },
  {
    "id": 480,
    "category": "Kata Kerja",
    "jp": "喧嘩する",
    "romaji": "kenka suru",
    "arti": "bertengkar"
  },
  {
    "id": 481,
    "category": "Kata Kerja",
    "jp": "叫ぶ",
    "romaji": "sakebu",
    "arti": "berteriak"
  },
  {
    "id": 482,
    "category": "Kata Kerja",
    "jp": "感謝する",
    "romaji": "kansha suru",
    "arti": "berterima kasih"
  },
  {
    "id": 483,
    "category": "Kata Kerja",
    "jp": "婚約する",
    "romaji": "konyaku suru",
    "arti": "bertunangan"
  },
  {
    "id": 484,
    "category": "Kata Kerja",
    "jp": "努⼒する",
    "romaji": "doryoku suru",
    "arti": "berusaha keras"
  },
  {
    "id": 485,
    "category": "Kata Kerja",
    "jp": "観光する",
    "romaji": "kankou suru",
    "arti": "berwisata"
  },
  {
    "id": 486,
    "category": "Kata Kerja",
    "jp": "出来る",
    "romaji": "dekiru",
    "arti": "bisa"
  },
  {
    "id": 487,
    "category": "Kata Kerja",
    "jp": "⾃殺する",
    "romaji": "jisatsu suru",
    "arti": "bunuh diri"
  },
  {
    "id": 488,
    "category": "Kata Kerja",
    "jp": "適する",
    "romaji": "tekisuru",
    "arti": "cocok"
  },
  {
    "id": 489,
    "category": "Kata Kerja",
    "jp": "似合う",
    "romaji": "niau",
    "arti": "cocok, sesuai"
  },
  {
    "id": 490,
    "category": "Kata Kerja",
    "jp": "効く",
    "romaji": "kiku",
    "arti": "efektif"
  },
  {
    "id": 491,
    "category": "Kata Kerja",
    "jp": "好む",
    "romaji": "konomu",
    "arti": "gemar, menyukai"
  },
  {
    "id": 492,
    "category": "Kata Kerja",
    "jp": "騒ぐ",
    "romaji": "sawagu",
    "arti": "gempar"
  },
  {
    "id": 493,
    "category": "Kata Kerja",
    "jp": "緊張する",
    "romaji": "kinchou suru",
    "arti": "gugup"
  },
  {
    "id": 494,
    "category": "Kata Kerja",
    "jp": "希望する",
    "romaji": "kibou suru",
    "arti": "hendak"
  },
  {
    "id": 495,
    "category": "Kata Kerja",
    "jp": "暮らす",
    "romaji": "kurasu",
    "arti": "hidup"
  },
  {
    "id": 496,
    "category": "Kata Kerja",
    "jp": "気に⼊る",
    "romaji": "ki ni iru",
    "arti": "jadi penasaran, jadi pikiran"
  },
  {
    "id": 497,
    "category": "Kata Kerja",
    "jp": "散歩する",
    "romaji": "sanpo suru",
    "arti": "jalan jalan"
  },
  {
    "id": 498,
    "category": "Kata Kerja",
    "jp": "飽きる",
    "romaji": "akiru",
    "arti": "jenuh"
  },
  {
    "id": 499,
    "category": "Kata Kerja",
    "jp": "劣る",
    "romaji": "otoru",
    "arti": "kalah"
  },
  {
    "id": 500,
    "category": "Kata Kerja",
    "jp": "混乱する",
    "romaji": "konran suru",
    "arti": "kalut, melakukan kekacauan"
  },
  {
    "id": 501,
    "category": "Kata Kerja",
    "jp": "がっかりする",
    "romaji": "gakkari suru",
    "arti": "kecewa"
  },
  {
    "id": 502,
    "category": "Kata Kerja",
    "jp": "失望する",
    "romaji": "shitsubou suru",
    "arti": "kecewa"
  },
  {
    "id": 503,
    "category": "Kata Kerja",
    "jp": "失う",
    "romaji": "ushinau",
    "arti": "kehilangan"
  },
  {
    "id": 504,
    "category": "Kata Kerja",
    "jp": "⽋ける",
    "romaji": "kakeru",
    "arti": "kekurangan"
  },
  {
    "id": 505,
    "category": "Kata Kerja",
    "jp": "外出する",
    "romaji": "gaishutsu suru",
    "arti": "keluar"
  },
  {
    "id": 506,
    "category": "Kata Kerja",
    "jp": "当たる",
    "romaji": "ataru",
    "arti": "kena"
  },
  {
    "id": 507,
    "category": "Kata Kerja",
    "jp": "相談する",
    "romaji": "soudan suru",
    "arti": "konsultasi"
  },
  {
    "id": 508,
    "category": "Kata Kerja",
    "jp": "合格する",
    "romaji": "goukaku suru",
    "arti": "lulus"
  },
  {
    "id": 509,
    "category": "Kata Kerja",
    "jp": "真っ直ぐ",
    "romaji": "massugu",
    "arti": "lurus"
  },
  {
    "id": 510,
    "category": "Kata Kerja",
    "jp": "⻝う",
    "romaji": "kuu",
    "arti": "makan"
  },
  {
    "id": 511,
    "category": "Kata Kerja",
    "jp": "怠ける",
    "romaji": "namakeru",
    "arti": "malas"
  },
  {
    "id": 512,
    "category": "Kata Kerja",
    "jp": "浴びる",
    "romaji": "abiru",
    "arti": "mandi"
  },
  {
    "id": 513,
    "category": "Kata Kerja",
    "jp": "⼊院する",
    "romaji": "nyuuin suru",
    "arti": "masuk rumah sakit"
  },
  {
    "id": 514,
    "category": "Kata Kerja",
    "jp": "⼊学する",
    "romaji": "nyuugaku suru",
    "arti": "masuk sekolah"
  },
  {
    "id": 515,
    "category": "Kata Kerja",
    "jp": "解釈する",
    "romaji": "kaishaku suru",
    "arti": "mejelaskan, menginterpretasikan"
  },
  {
    "id": 516,
    "category": "Kata Kerja",
    "jp": "越える",
    "romaji": "koeru",
    "arti": "melampaui"
  },
  {
    "id": 517,
    "category": "Kata Kerja",
    "jp": "優れる",
    "romaji": "sugureru",
    "arti": "melampaui"
  },
  {
    "id": 518,
    "category": "Kata Kerja",
    "jp": "進学する",
    "romaji": "shingaku suru",
    "arti": "melanjutkan sekolah"
  },
  {
    "id": 519,
    "category": "Kata Kerja",
    "jp": "報告する",
    "romaji": "houkoku suru",
    "arti": "melaporkan"
  },
  {
    "id": 520,
    "category": "Kata Kerja",
    "jp": "禁⽌する",
    "romaji": "kinshi suru",
    "arti": "melarang"
  },
  {
    "id": 521,
    "category": "Kata Kerja",
    "jp": "爆発する",
    "romaji": "bakuhatsu suru",
    "arti": "meledakkan"
  },
  {
    "id": 522,
    "category": "Kata Kerja",
    "jp": "抜く",
    "romaji": "nuku",
    "arti": "melepas"
  },
  {
    "id": 523,
    "category": "Kata Kerja",
    "jp": "放す",
    "romaji": "hanasu",
    "arti": "melepas"
  },
  {
    "id": 524,
    "category": "Kata Kerja",
    "jp": "外す",
    "romaji": "hazusu",
    "arti": "melepaskan, menghilangkan"
  },
  {
    "id": 525,
    "category": "Kata Kerja",
    "jp": "⾒る",
    "romaji": "miru",
    "arti": "melihat"
  },
  {
    "id": 526,
    "category": "Kata Kerja",
    "jp": "守る",
    "romaji": "mamoru",
    "arti": "melindungi"
  },
  {
    "id": 527,
    "category": "Kata Kerja",
    "jp": "横断する",
    "romaji": "oudan suru",
    "arti": "melintasi"
  },
  {
    "id": 528,
    "category": "Kata Kerja",
    "jp": "横切る",
    "romaji": "yokogiru",
    "arti": "melintasi"
  },
  {
    "id": 529,
    "category": "Kata Kerja",
    "jp": "含む",
    "romaji": "fukumu",
    "arti": "meliputi, mengandung"
  },
  {
    "id": 530,
    "category": "Kata Kerja",
    "jp": "⾶び出す",
    "romaji": "tobidasu",
    "arti": "melompat"
  },
  {
    "id": 531,
    "category": "Kata Kerja",
    "jp": "広がる",
    "romaji": "hirogaru",
    "arti": "meluas, melebar, menjalar"
  },
  {
    "id": 532,
    "category": "Kata Kerja",
    "jp": "描く",
    "romaji": "kaku",
    "arti": "melukis/menggambar"
  },
  {
    "id": 533,
    "category": "Kata Kerja",
    "jp": "発⾞する",
    "romaji": "hassha suru",
    "arti": "meluncur"
  },
  {
    "id": 534,
    "category": "Kata Kerja",
    "jp": "許す",
    "romaji": "yurusu",
    "arti": "memaafkan"
  },
  {
    "id": 535,
    "category": "Kata Kerja",
    "jp": "理解する",
    "romaji": "rikai suru",
    "arti": "memahami"
  },
  {
    "id": 536,
    "category": "Kata Kerja",
    "jp": "奏でる",
    "romaji": "kanaderu",
    "arti": "memainkan (musik)"
  },
  {
    "id": 537,
    "category": "Kata Kerja",
    "jp": "進める",
    "romaji": "susumeru",
    "arti": "memajukan"
  },
  {
    "id": 538,
    "category": "Kata Kerja",
    "jp": "被る",
    "romaji": "kaburu",
    "arti": "memakai (untuk dikepala)"
  },
  {
    "id": 539,
    "category": "Kata Kerja",
    "jp": "⽤いる",
    "romaji": "mochiiru",
    "arti": "memakai, mempergunakan"
  },
  {
    "id": 540,
    "category": "Kata Kerja",
    "jp": "無理する",
    "romaji": "muri suru",
    "arti": "memaksakan diri"
  },
  {
    "id": 541,
    "category": "Kata Kerja",
    "jp": "眺める",
    "romaji": "nagameru",
    "arti": "memandang"
  },
  {
    "id": 542,
    "category": "Kata Kerja",
    "jp": "収穫する",
    "romaji": "shuukaku suru",
    "arti": "memanen"
  },
  {
    "id": 543,
    "category": "Kata Kerja",
    "jp": "刈る",
    "romaji": "karu",
    "arti": "memangkas"
  },
  {
    "id": 544,
    "category": "Kata Kerja",
    "jp": "付ける",
    "romaji": "tsukeru",
    "arti": "memasang, menempelkan"
  },
  {
    "id": 545,
    "category": "Kata Kerja",
    "jp": "確かめる",
    "romaji": "tashikameru",
    "arti": "memastikan"
  },
  {
    "id": 546,
    "category": "Kata Kerja",
    "jp": "割る",
    "romaji": "waru",
    "arti": "membagi"
  },
  {
    "id": 547,
    "category": "Kata Kerja",
    "jp": "応じる",
    "romaji": "oujiru",
    "arti": "membalas, memenuhi"
  },
  {
    "id": 548,
    "category": "Kata Kerja",
    "jp": "⽐較する",
    "romaji": "hikaku suru",
    "arti": "membandingkan"
  },
  {
    "id": 549,
    "category": "Kata Kerja",
    "jp": "援助する",
    "romaji": "enjo suru",
    "arti": "membantu, mendukung"
  },
  {
    "id": 550,
    "category": "Kata Kerja",
    "jp": "限る",
    "romaji": "kagiru",
    "arti": "membatasi"
  },
  {
    "id": 551,
    "category": "Kata Kerja",
    "jp": "制限する",
    "romaji": "seigen suru",
    "arti": "membatasi"
  },
  {
    "id": 552,
    "category": "Kata Kerja",
    "jp": "⽀払う",
    "romaji": "shiharau",
    "arti": "membayar"
  },
  {
    "id": 553,
    "category": "Kata Kerja",
    "jp": "凍る",
    "romaji": "kogoeru",
    "arti": "membeku"
  },
  {
    "id": 554,
    "category": "Kata Kerja",
    "jp": "分ける",
    "romaji": "wakeru",
    "arti": "membelah"
  },
  {
    "id": 555,
    "category": "Kata Kerja",
    "jp": "嫌う",
    "romaji": "kirau",
    "arti": "membenci"
  },
  {
    "id": 556,
    "category": "Kata Kerja",
    "jp": "伸ばす",
    "romaji": "nobasu",
    "arti": "membentangkan"
  },
  {
    "id": 557,
    "category": "Kata Kerja",
    "jp": "飼う",
    "romaji": "kau",
    "arti": "memberi makan"
  },
  {
    "id": 558,
    "category": "Kata Kerja",
    "jp": "与える",
    "romaji": "ataeru",
    "arti": "memberikan, mempersembahkan"
  },
  {
    "id": 559,
    "category": "Kata Kerja",
    "jp": "建設する",
    "romaji": "kensetsu suru",
    "arti": "membina"
  },
  {
    "id": 560,
    "category": "Kata Kerja",
    "jp": "伸びる",
    "romaji": "nobiru",
    "arti": "membujur, memanjang"
  },
  {
    "id": 561,
    "category": "Kata Kerja",
    "jp": "証明する",
    "romaji": "shoumei suru",
    "arti": "membuktikan"
  },
  {
    "id": 562,
    "category": "Kata Kerja",
    "jp": "殺す",
    "romaji": "korosu",
    "arti": "membunuh"
  },
  {
    "id": 563,
    "category": "Kata Kerja",
    "jp": "腐る",
    "romaji": "kusaru",
    "arti": "membusuk"
  },
  {
    "id": 564,
    "category": "Kata Kerja",
    "jp": "解く",
    "romaji": "toku",
    "arti": "memecahkan"
  },
  {
    "id": 565,
    "category": "Kata Kerja",
    "jp": "掴む",
    "romaji": "tsukamu",
    "arti": "memegang"
  },
  {
    "id": 566,
    "category": "Kata Kerja",
    "jp": "抱く",
    "romaji": "idaku",
    "arti": "memeluk"
  },
  {
    "id": 567,
    "category": "Kata Kerja",
    "jp": "検査する",
    "romaji": "kensa suru",
    "arti": "memeriksa"
  },
  {
    "id": 568,
    "category": "Kata Kerja",
    "jp": "命じる",
    "romaji": "meijiru",
    "arti": "memerintah"
  },
  {
    "id": 569,
    "category": "Kata Kerja",
    "jp": "注⽂する",
    "romaji": "chuumon suru",
    "arti": "memesan"
  },
  {
    "id": 570,
    "category": "Kata Kerja",
    "jp": "選択する",
    "romaji": "sentaku suru",
    "arti": "memilih"
  },
  {
    "id": 571,
    "category": "Kata Kerja",
    "jp": "移す",
    "romaji": "utsusu",
    "arti": "memindah"
  },
  {
    "id": 572,
    "category": "Kata Kerja",
    "jp": "求める",
    "romaji": "motomeru",
    "arti": "meminta"
  },
  {
    "id": 573,
    "category": "Kata Kerja",
    "jp": "省く",
    "romaji": "habuku",
    "arti": "memotong, mengesampingkan"
  },
  {
    "id": 574,
    "category": "Kata Kerja",
    "jp": "構う",
    "romaji": "kamau",
    "arti": "mempedulikan, menghiraukan"
  },
  {
    "id": 575,
    "category": "Kata Kerja",
    "jp": "修理する",
    "romaji": "shuuri suru",
    "arti": "memperbaiki"
  },
  {
    "id": 576,
    "category": "Kata Kerja",
    "jp": "議論する",
    "romaji": "giron suru",
    "arti": "memperbincangkan"
  },
  {
    "id": 577,
    "category": "Kata Kerja",
    "jp": "論じる",
    "romaji": "ronjiru",
    "arti": "memperbincangkan, membahas"
  },
  {
    "id": 578,
    "category": "Kata Kerja",
    "jp": "警告する",
    "romaji": "keikoku suru",
    "arti": "memperingati"
  },
  {
    "id": 579,
    "category": "Kata Kerja",
    "jp": "防ぐ",
    "romaji": "fusegu",
    "arti": "menangkal"
  },
  {
    "id": 580,
    "category": "Kata Kerja",
    "jp": "逮捕する",
    "romaji": "taiho suru",
    "arti": "menangkap"
  },
  {
    "id": 581,
    "category": "Kata Kerja",
    "jp": "捕まる",
    "romaji": "tsukamaru",
    "arti": "menangkap"
  },
  {
    "id": 582,
    "category": "Kata Kerja",
    "jp": "供給する",
    "romaji": "kyoukyuu suru",
    "arti": "menawarkan, memberikan"
  },
  {
    "id": 583,
    "category": "Kata Kerja",
    "jp": "達する",
    "romaji": "tassuru",
    "arti": "mencapai"
  },
  {
    "id": 584,
    "category": "Kata Kerja",
    "jp": "届く",
    "romaji": "todoku",
    "arti": "mencapai, sampai"
  },
  {
    "id": 585,
    "category": "Kata Kerja",
    "jp": "就職する",
    "romaji": "shuushoku suru",
    "arti": "mencari pekerjaan"
  },
  {
    "id": 586,
    "category": "Kata Kerja",
    "jp": "予防する",
    "romaji": "yobou suru",
    "arti": "mencegah"
  },
  {
    "id": 587,
    "category": "Kata Kerja",
    "jp": "営業する",
    "romaji": "eigyou suru",
    "arti": "berbisnis"
  },
  {
    "id": 588,
    "category": "Kata Kerja",
    "jp": "語る",
    "romaji": "kataru",
    "arti": "bercerita"
  },
  {
    "id": 589,
    "category": "Kata Kerja",
    "jp": "商売する",
    "romaji": "shoubai suru",
    "arti": "berdagang"
  },
  {
    "id": 590,
    "category": "Kata Kerja",
    "jp": "基づく",
    "romaji": "motodzuku",
    "arti": "berdasarkan"
  },
  {
    "id": 591,
    "category": "Kata Kerja",
    "jp": "黙る",
    "romaji": "damaru",
    "arti": "berdiam"
  },
  {
    "id": 592,
    "category": "Kata Kerja",
    "jp": "⽴ち上げる",
    "romaji": "tachiageru",
    "arti": "berdiri"
  },
  {
    "id": 593,
    "category": "Kata Kerja",
    "jp": "泳ぐ",
    "romaji": "oyogu",
    "arti": "berenang"
  },
  {
    "id": 594,
    "category": "Kata Kerja",
    "jp": "参加する",
    "romaji": "sanka suru",
    "arti": "bergabung"
  },
  {
    "id": 595,
    "category": "Kata Kerja",
    "jp": "期待する",
    "romaji": "kitai suru",
    "arti": "berharap"
  },
  {
    "id": 596,
    "category": "Kata Kerja",
    "jp": "願う",
    "romaji": "negau",
    "arti": "berharap"
  },
  {
    "id": 597,
    "category": "Kata Kerja",
    "jp": "辞める",
    "romaji": "yameru",
    "arti": "berhenti"
  },
  {
    "id": 598,
    "category": "Kata Kerja",
    "jp": "留める",
    "romaji": "tomeru",
    "arti": "berhenti, bermalam"
  },
  {
    "id": 599,
    "category": "Kata Kerja",
    "jp": "約束する",
    "romaji": "yakusoku suru",
    "arti": "berjanji, membuat janji"
  },
  {
    "id": 600,
    "category": "Kata Kerja",
    "jp": "関連する",
    "romaji": "kanren suru",
    "arti": "berkaitan"
  },
  {
    "id": 601,
    "category": "Kata Kerja",
    "jp": "⾔う",
    "romaji": "iu",
    "arti": "berkata"
  },
  {
    "id": 602,
    "category": "Kata Kerja",
    "jp": "裏切る",
    "romaji": "uragiru",
    "arti": "berkhianat"
  },
  {
    "id": 603,
    "category": "Kata Kerja",
    "jp": "集中する",
    "romaji": "shuuchuu suru",
    "arti": "berkonsentrasi"
  },
  {
    "id": 604,
    "category": "Kata Kerja",
    "jp": "貢献する",
    "romaji": "kouken suru",
    "arti": "berkonstribusi"
  },
  {
    "id": 605,
    "category": "Kata Kerja",
    "jp": "会合する",
    "romaji": "kaigou suru",
    "arti": "berkumpull"
  },
  {
    "id": 606,
    "category": "Kata Kerja",
    "jp": "減る",
    "romaji": "heru",
    "arti": "berkurang"
  },
  {
    "id": 607,
    "category": "Kata Kerja",
    "jp": "異なる",
    "romaji": "kotonaru",
    "arti": "berlainan"
  },
  {
    "id": 608,
    "category": "Kata Kerja",
    "jp": "訓練する",
    "romaji": "kunren suru",
    "arti": "berlatih"
  },
  {
    "id": 609,
    "category": "Kata Kerja",
    "jp": "練習する",
    "romaji": "renshuu suru",
    "arti": "berlatih"
  },
  {
    "id": 610,
    "category": "Kata Kerja",
    "jp": "愛する",
    "romaji": "aisuru",
    "arti": "mencintai"
  },
  {
    "id": 611,
    "category": "Kata Kerja",
    "jp": "試す",
    "romaji": "tamesu",
    "arti": "mencoba"
  },
  {
    "id": 612,
    "category": "Kata Kerja",
    "jp": "注ぐ",
    "romaji": "tsugu",
    "arti": "mencurahi"
  },
  {
    "id": 613,
    "category": "Kata Kerja",
    "jp": "苦しむ",
    "romaji": "kurushimu",
    "arti": "menderita"
  },
  {
    "id": 614,
    "category": "Kata Kerja",
    "jp": "発⾒する",
    "romaji": "hakken suru",
    "arti": "mendeteksi, mendapati"
  },
  {
    "id": 615,
    "category": "Kata Kerja",
    "jp": "建築する",
    "romaji": "kenchiku suru",
    "arti": "mendirikan"
  },
  {
    "id": 616,
    "category": "Kata Kerja",
    "jp": "強調する",
    "romaji": "kyouchou suru",
    "arti": "menekankan, menonjolkan"
  },
  {
    "id": 617,
    "category": "Kata Kerja",
    "jp": "検討する",
    "romaji": "kentou suru",
    "arti": "meneliti"
  },
  {
    "id": 618,
    "category": "Kata Kerja",
    "jp": "通す",
    "romaji": "toosu",
    "arti": "menembus"
  },
  {
    "id": 619,
    "category": "Kata Kerja",
    "jp": "占める",
    "romaji": "shimeru",
    "arti": "menempel"
  },
  {
    "id": 620,
    "category": "Kata Kerja",
    "jp": "張る",
    "romaji": "haru",
    "arti": "menepuk"
  },
  {
    "id": 621,
    "category": "Kata Kerja",
    "jp": "⾶ばす",
    "romaji": "tobasu",
    "arti": "menerbangkan"
  },
  {
    "id": 622,
    "category": "Kata Kerja",
    "jp": "出版する",
    "romaji": "shuppan suru",
    "arti": "menerbitkan"
  },
  {
    "id": 623,
    "category": "Kata Kerja",
    "jp": "頂く",
    "romaji": "itadaku",
    "arti": "menerima"
  },
  {
    "id": 624,
    "category": "Kata Kerja",
    "jp": "受け取る",
    "romaji": "uketoru",
    "arti": "menerima"
  },
  {
    "id": 625,
    "category": "Kata Kerja",
    "jp": "貰う",
    "romaji": "morau",
    "arti": "menerima"
  },
  {
    "id": 626,
    "category": "Kata Kerja",
    "jp": "決定する",
    "romaji": "kettei suru",
    "arti": "menetapkan"
  },
  {
    "id": 627,
    "category": "Kata Kerja",
    "jp": "記録する",
    "romaji": "kiroku suru",
    "arti": "mengabadikan, mencatat"
  },
  {
    "id": 628,
    "category": "Kata Kerja",
    "jp": "適⽤する",
    "romaji": "tekiyou suru",
    "arti": "mengadopsi, menggunakan (mesin)"
  },
  {
    "id": 629,
    "category": "Kata Kerja",
    "jp": "誘う",
    "romaji": "sasou",
    "arti": "mengajak, mengundang"
  },
  {
    "id": 630,
    "category": "Kata Kerja",
    "jp": "勧める",
    "romaji": "susumeru",
    "arti": "mengajukan"
  },
  {
    "id": 631,
    "category": "Kata Kerja",
    "jp": "終える",
    "romaji": "oeru",
    "arti": "mengakhiri"
  },
  {
    "id": 632,
    "category": "Kata Kerja",
    "jp": "通じる",
    "romaji": "tsuujiru",
    "arti": "mengalirkan"
  },
  {
    "id": 633,
    "category": "Kata Kerja",
    "jp": "流す",
    "romaji": "nagasu",
    "arti": "mengalirkan"
  },
  {
    "id": 634,
    "category": "Kata Kerja",
    "jp": "観察する",
    "romaji": "kansatsu suru",
    "arti": "mengamati"
  },
  {
    "id": 635,
    "category": "Kata Kerja",
    "jp": "取り上げる",
    "romaji": "toriageru",
    "arti": "mengambil"
  },
  {
    "id": 636,
    "category": "Kata Kerja",
    "jp": "分析する",
    "romaji": "bunseki suru",
    "arti": "menganalisa"
  },
  {
    "id": 637,
    "category": "Kata Kerja",
    "jp": "頼る",
    "romaji": "tayoru",
    "arti": "mengandalkan"
  },
  {
    "id": 638,
    "category": "Kata Kerja",
    "jp": "失業する",
    "romaji": "shitsugyou suru",
    "arti": "menganggur"
  },
  {
    "id": 639,
    "category": "Kata Kerja",
    "jp": "持ち上げる",
    "romaji": "mochiageru",
    "arti": "mengangkat"
  },
  {
    "id": 640,
    "category": "Kata Kerja",
    "jp": "配達する",
    "romaji": "haitatsu suru",
    "arti": "mengantarkan"
  },
  {
    "id": 641,
    "category": "Kata Kerja",
    "jp": "振る",
    "romaji": "furu",
    "arti": "mengayunkan"
  },
  {
    "id": 642,
    "category": "Kata Kerja",
    "jp": "批評する",
    "romaji": "hihyou suru",
    "arti": "mengecam, mengkritik"
  },
  {
    "id": 643,
    "category": "Kata Kerja",
    "jp": "変更する",
    "romaji": "henkou suru",
    "arti": "mengedit"
  },
  {
    "id": 644,
    "category": "Kata Kerja",
    "jp": "追う",
    "romaji": "ou",
    "arti": "mengejar"
  },
  {
    "id": 645,
    "category": "Kata Kerja",
    "jp": "輸出する",
    "romaji": "yushutsu suru",
    "arti": "mengekspor"
  },
  {
    "id": 646,
    "category": "Kata Kerja",
    "jp": "表す",
    "romaji": "arawasu",
    "arti": "mengekspresikan"
  },
  {
    "id": 647,
    "category": "Kata Kerja",
    "jp": "回す",
    "romaji": "mawasu",
    "arti": "mengelilingi"
  },
  {
    "id": 648,
    "category": "Kata Kerja",
    "jp": "経営する",
    "romaji": "keiei suru",
    "arti": "mengelola"
  },
  {
    "id": 649,
    "category": "Kata Kerja",
    "jp": "戻す",
    "romaji": "modosu",
    "arti": "mengembalikan"
  },
  {
    "id": 650,
    "category": "Kata Kerja",
    "jp": "発展する",
    "romaji": "hatten suru",
    "arti": "mengembangkan"
  },
  {
    "id": 651,
    "category": "Kata Kerja",
    "jp": "述べる",
    "romaji": "noberu",
    "arti": "mengemukakan, menceritakan"
  },
  {
    "id": 652,
    "category": "Kata Kerja",
    "jp": "履く",
    "romaji": "haku",
    "arti": "mengenakan, memakai (untuk kaki)"
  },
  {
    "id": 653,
    "category": "Kata Kerja",
    "jp": "握る",
    "romaji": "nigiru",
    "arti": "mengepal"
  },
  {
    "id": 654,
    "category": "Kata Kerja",
    "jp": "囲む",
    "romaji": "kakomu",
    "arti": "mengepung"
  },
  {
    "id": 655,
    "category": "Kata Kerja",
    "jp": "唸る",
    "romaji": "unaru",
    "arti": "mengerang, merintih"
  },
  {
    "id": 656,
    "category": "Kata Kerja",
    "jp": "除く",
    "romaji": "nozoku",
    "arti": "mengesampingkan"
  },
  {
    "id": 657,
    "category": "Kata Kerja",
    "jp": "雇う",
    "romaji": "yatou",
    "arti": "menggaji, mempekerjakan"
  },
  {
    "id": 658,
    "category": "Kata Kerja",
    "jp": "描く",
    "romaji": "egaku",
    "arti": "menggambar"
  },
  {
    "id": 659,
    "category": "Kata Kerja",
    "jp": "邪魔する",
    "romaji": "jama suru",
    "arti": "mengganggu"
  },
  {
    "id": 660,
    "category": "Kata Kerja",
    "jp": "迷惑する",
    "romaji": "meiwaku suru",
    "arti": "mengganggu"
  },
  {
    "id": 661,
    "category": "Kata Kerja",
    "jp": "換える",
    "romaji": "kaeru",
    "arti": "mengganti"
  },
  {
    "id": 662,
    "category": "Kata Kerja",
    "jp": "交換する",
    "romaji": "koukan suru",
    "arti": "mengganti, menukar"
  },
  {
    "id": 663,
    "category": "Kata Kerja",
    "jp": "掛ける",
    "romaji": "kakeru",
    "arti": "menggantung"
  },
  {
    "id": 664,
    "category": "Kata Kerja",
    "jp": "動かす",
    "romaji": "ugokasu",
    "arti": "menggerakan"
  },
  {
    "id": 665,
    "category": "Kata Kerja",
    "jp": "震える",
    "romaji": "furueru",
    "arti": "menggigil, gemetaran"
  },
  {
    "id": 666,
    "category": "Kata Kerja",
    "jp": "狂う",
    "romaji": "kuruu",
    "arti": "menggila"
  },
  {
    "id": 667,
    "category": "Kata Kerja",
    "jp": "転ぶ",
    "romaji": "korobu",
    "arti": "mengguling,berguling"
  },
  {
    "id": 668,
    "category": "Kata Kerja",
    "jp": "及ぼす",
    "romaji": "oyobosu",
    "arti": "menggunakan"
  },
  {
    "id": 669,
    "category": "Kata Kerja",
    "jp": "使⽤する",
    "romaji": "shiyou suru",
    "arti": "menggunakan"
  },
  {
    "id": 670,
    "category": "Kata Kerja",
    "jp": "過ごす",
    "romaji": "sugosu",
    "arti": "menghabiskan"
  },
  {
    "id": 671,
    "category": "Kata Kerja",
    "jp": "向ける",
    "romaji": "mukeru",
    "arti": "menghadapkan, mengarahkan"
  },
  {
    "id": 672,
    "category": "Kata Kerja",
    "jp": "出席する",
    "romaji": "shusseki suru",
    "arti": "menghadiri"
  },
  {
    "id": 673,
    "category": "Kata Kerja",
    "jp": "望む",
    "romaji": "nozomu",
    "arti": "mengharapkan, berkeinginan"
  },
  {
    "id": 674,
    "category": "Kata Kerja",
    "jp": "避ける",
    "romaji": "sakeru",
    "arti": "menghindar"
  },
  {
    "id": 675,
    "category": "Kata Kerja",
    "jp": "数える",
    "romaji": "kazoeru",
    "arti": "menghitung"
  },
  {
    "id": 676,
    "category": "Kata Kerja",
    "jp": "計算する",
    "romaji": "keisan suru",
    "arti": "menghitung, menjabarkan"
  },
  {
    "id": 677,
    "category": "Kata Kerja",
    "jp": "尊敬する",
    "romaji": "sonkei suru",
    "arti": "menghormati"
  },
  {
    "id": 678,
    "category": "Kata Kerja",
    "jp": "罰する",
    "romaji": "bassuru",
    "arti": "menghukum"
  },
  {
    "id": 679,
    "category": "Kata Kerja",
    "jp": "結ぶ",
    "romaji": "musubu",
    "arti": "mengikat"
  },
  {
    "id": 680,
    "category": "Kata Kerja",
    "jp": "従う",
    "romaji": "shitagau",
    "arti": "mengikuti"
  },
  {
    "id": 681,
    "category": "Kata Kerja",
    "jp": "輸⼊する",
    "romaji": "yunyuu suru",
    "arti": "mengimpor"
  },
  {
    "id": 682,
    "category": "Kata Kerja",
    "jp": "現す",
    "romaji": "arawasu",
    "arti": "mengindikasikan"
  },
  {
    "id": 683,
    "category": "Kata Kerja",
    "jp": "思い出す",
    "romaji": "omoidasu",
    "arti": "mengingat"
  },
  {
    "id": 684,
    "category": "Kata Kerja",
    "jp": "贈る",
    "romaji": "okuru",
    "arti": "mengirim hadiah"
  },
  {
    "id": 685,
    "category": "Kata Kerja",
    "jp": "記⼊する",
    "romaji": "kinyuu suru",
    "arti": "mengisi, menginput"
  },
  {
    "id": 686,
    "category": "Kata Kerja",
    "jp": "許可する",
    "romaji": "kyoka suru",
    "arti": "mengizinkan"
  },
  {
    "id": 687,
    "category": "Kata Kerja",
    "jp": "⼼配する",
    "romaji": "shinpai suru",
    "arti": "mengkhawatirkan"
  },
  {
    "id": 688,
    "category": "Kata Kerja",
    "jp": "確認する",
    "romaji": "kakunin suru",
    "arti": "mengkomﬁrmasi"
  },
  {
    "id": 689,
    "category": "Kata Kerja",
    "jp": "承認する",
    "romaji": "shounin suru",
    "arti": "mengkomﬁrmasi"
  },
  {
    "id": 690,
    "category": "Kata Kerja",
    "jp": "消費する",
    "romaji": "shouhi suru",
    "arti": "mengkonsumsi"
  },
  {
    "id": 691,
    "category": "Kata Kerja",
    "jp": "喋る",
    "romaji": "oshaberu",
    "arti": "mengobrol"
  },
  {
    "id": 692,
    "category": "Kata Kerja",
    "jp": "叱る",
    "romaji": "shikaru",
    "arti": "mengomeli, memarahi"
  },
  {
    "id": 693,
    "category": "Kata Kerja",
    "jp": "契約する",
    "romaji": "keiyaku suru",
    "arti": "mengontrak"
  },
  {
    "id": 694,
    "category": "Kata Kerja",
    "jp": "左右する",
    "romaji": "sayuu suru",
    "arti": "menguasai, mengendalikan"
  },
  {
    "id": 695,
    "category": "Kata Kerja",
    "jp": "変化する",
    "romaji": "henka suru",
    "arti": "mengubah"
  },
  {
    "id": 696,
    "category": "Kata Kerja",
    "jp": "計る",
    "romaji": "hakaru",
    "arti": "mengukur"
  },
  {
    "id": 697,
    "category": "Kata Kerja",
    "jp": "繰り返す",
    "romaji": "kurikaesu",
    "arti": "mengulang"
  },
  {
    "id": 698,
    "category": "Kata Kerja",
    "jp": "積もる",
    "romaji": "tsumoru",
    "arti": "mengumpulkan"
  },
  {
    "id": 699,
    "category": "Kata Kerja",
    "jp": "発表する",
    "romaji": "happyou suru",
    "arti": "mengumumkan"
  },
  {
    "id": 700,
    "category": "Kata Kerja",
    "jp": "招待する",
    "romaji": "shoutai suru",
    "arti": "mengundang"
  },
  {
    "id": 701,
    "category": "Kata Kerja",
    "jp": "訪問する",
    "romaji": "houmon suru",
    "arti": "mengunjungi"
  },
  {
    "id": 702,
    "category": "Kata Kerja",
    "jp": "減らす",
    "romaji": "herasu",
    "arti": "mengurangi"
  },
  {
    "id": 703,
    "category": "Kata Kerja",
    "jp": "管理する",
    "romaji": "kanri suru",
    "arti": "mengurus"
  },
  {
    "id": 704,
    "category": "Kata Kerja",
    "jp": "処理する",
    "romaji": "shori suru",
    "arti": "mengurus, mengolah"
  },
  {
    "id": 705,
    "category": "Kata Kerja",
    "jp": "評価する",
    "romaji": "hyouka suru",
    "arti": "menilai"
  },
  {
    "id": 706,
    "category": "Kata Kerja",
    "jp": "修正する",
    "romaji": "shuusei suru",
    "arti": "meninjau kembali"
  },
  {
    "id": 707,
    "category": "Kata Kerja",
    "jp": "預ける",
    "romaji": "azukeru",
    "arti": "menitipkan"
  },
  {
    "id": 708,
    "category": "Kata Kerja",
    "jp": "就く",
    "romaji": "tsuku",
    "arti": "menjabat"
  },
  {
    "id": 709,
    "category": "Kata Kerja",
    "jp": "成る",
    "romaji": "naru",
    "arti": "menjadi"
  },
  {
    "id": 710,
    "category": "Kata Kerja",
    "jp": "濡れる",
    "romaji": "nureru",
    "arti": "menjadi basah"
  },
  {
    "id": 711,
    "category": "Kata Kerja",
    "jp": "空く",
    "romaji": "suku",
    "arti": "menjadi kosong"
  },
  {
    "id": 712,
    "category": "Kata Kerja",
    "jp": "明ける",
    "romaji": "akeru",
    "arti": "menjadi terang"
  },
  {
    "id": 713,
    "category": "Kata Kerja",
    "jp": "⽀配する",
    "romaji": "shihai suru",
    "arti": "menjajah"
  },
  {
    "id": 714,
    "category": "Kata Kerja",
    "jp": "保障する",
    "romaji": "hoshou suru",
    "arti": "menjamin"
  },
  {
    "id": 715,
    "category": "Kata Kerja",
    "jp": "離す",
    "romaji": "hanasu",
    "arti": "menjauhkan"
  },
  {
    "id": 716,
    "category": "Kata Kerja",
    "jp": "混雑する",
    "romaji": "konzatsu suru",
    "arti": "menjejal"
  },
  {
    "id": 717,
    "category": "Kata Kerja",
    "jp": "詰める",
    "romaji": "tsumeru",
    "arti": "menjejalkan"
  },
  {
    "id": 718,
    "category": "Kata Kerja",
    "jp": "優勝する",
    "romaji": "yuushou suru",
    "arti": "menjuarai, memenangi"
  },
  {
    "id": 719,
    "category": "Kata Kerja",
    "jp": "批判する",
    "romaji": "hihan suru",
    "arti": "menkritik"
  },
  {
    "id": 720,
    "category": "Kata Kerja",
    "jp": "断る",
    "romaji": "kotowaru",
    "arti": "menolak"
  },
  {
    "id": 721,
    "category": "Kata Kerja",
    "jp": "振り向く",
    "romaji": "furimuku",
    "arti": "menoleh"
  },
  {
    "id": 722,
    "category": "Kata Kerja",
    "jp": "向く",
    "romaji": "muku",
    "arti": "menoleh, berpaling"
  },
  {
    "id": 723,
    "category": "Kata Kerja",
    "jp": "助ける",
    "romaji": "tasukeru",
    "arti": "menolong"
  },
  {
    "id": 724,
    "category": "Kata Kerja",
    "jp": "収める",
    "romaji": "osameru",
    "arti": "menuai"
  },
  {
    "id": 725,
    "category": "Kata Kerja",
    "jp": "替える",
    "romaji": "kaeru",
    "arti": "menukar"
  },
  {
    "id": 726,
    "category": "Kata Kerja",
    "jp": "指す",
    "romaji": "sasu",
    "arti": "menunjuk"
  },
  {
    "id": 727,
    "category": "Kata Kerja",
    "jp": "⽰す",
    "romaji": "shimesu",
    "arti": "menunjukan, mengindikasikan"
  },
  {
    "id": 728,
    "category": "Kata Kerja",
    "jp": "下ろす",
    "romaji": "orosu",
    "arti": "menurunkan"
  },
  {
    "id": 729,
    "category": "Kata Kerja",
    "jp": "刺す",
    "romaji": "sasu",
    "arti": "menusuk, menikam"
  },
  {
    "id": 730,
    "category": "Kata Kerja",
    "jp": "閉じる",
    "romaji": "tojiru",
    "arti": "menutup"
  },
  {
    "id": 731,
    "category": "Kata Kerja",
    "jp": "覆う",
    "romaji": "oou",
    "arti": "menutupi"
  },
  {
    "id": 732,
    "category": "Kata Kerja",
    "jp": "気付く",
    "romaji": "kidzuku",
    "arti": "menyadari"
  },
  {
    "id": 733,
    "category": "Kata Kerja",
    "jp": "責める",
    "romaji": "semeru",
    "arti": "menyalahkan"
  },
  {
    "id": 734,
    "category": "Kata Kerja",
    "jp": "吠える",
    "romaji": "hoeru",
    "arti": "menyalak, menggonggong, meraung"
  },
  {
    "id": 735,
    "category": "Kata Kerja",
    "jp": "歓迎する",
    "romaji": "kangei suru",
    "arti": "menyambut"
  },
  {
    "id": 736,
    "category": "Kata Kerja",
    "jp": "合わせる",
    "romaji": "awaseru",
    "arti": "menyatukan"
  },
  {
    "id": 737,
    "category": "Kata Kerja",
    "jp": "注ぐ",
    "romaji": "sosogu",
    "arti": "menyeduh, melimpahkan, mencurahi"
  },
  {
    "id": 738,
    "category": "Kata Kerja",
    "jp": "救う",
    "romaji": "sukuu",
    "arti": "menyelamatkan"
  },
  {
    "id": 739,
    "category": "Kata Kerja",
    "jp": "調査する",
    "romaji": "chousa suru",
    "arti": "menyelidiki"
  },
  {
    "id": 740,
    "category": "Kata Kerja",
    "jp": "隠す",
    "romaji": "kakusu",
    "arti": "menyembunyikan"
  },
  {
    "id": 741,
    "category": "Kata Kerja",
    "jp": "完成する",
    "romaji": "kansei suru",
    "arti": "menyempurnakan, rampung"
  },
  {
    "id": 742,
    "category": "Kata Kerja",
    "jp": "触れる",
    "romaji": "fureru",
    "arti": "menyentuh"
  },
  {
    "id": 743,
    "category": "Kata Kerja",
    "jp": "諦める",
    "romaji": "akirameru",
    "arti": "menyerah"
  },
  {
    "id": 744,
    "category": "Kata Kerja",
    "jp": "任せる",
    "romaji": "makaseru",
    "arti": "menyerahkan"
  },
  {
    "id": 745,
    "category": "Kata Kerja",
    "jp": "撃つ",
    "romaji": "utsu",
    "arti": "menyerang"
  },
  {
    "id": 746,
    "category": "Kata Kerja",
    "jp": "攻撃する",
    "romaji": "kougeki suru",
    "arti": "menyerang"
  },
  {
    "id": 747,
    "category": "Kata Kerja",
    "jp": "運転する",
    "romaji": "unten suru",
    "arti": "menyetir"
  },
  {
    "id": 748,
    "category": "Kata Kerja",
    "jp": "放送する",
    "romaji": "housou suru",
    "arti": "menyiarkan"
  },
  {
    "id": 749,
    "category": "Kata Kerja",
    "jp": "結論する",
    "romaji": "ketsuron suru",
    "arti": "menyimpulkan"
  },
  {
    "id": 750,
    "category": "Kata Kerja",
    "jp": "残す",
    "romaji": "nokosu",
    "arti": "menyisakan"
  },
  {
    "id": 751,
    "category": "Kata Kerja",
    "jp": "⽀える",
    "romaji": "sasaeru",
    "arti": "menyokong, menopang"
  },
  {
    "id": 752,
    "category": "Kata Kerja",
    "jp": "刺激する",
    "romaji": "shigeki suru",
    "arti": "merangsang"
  },
  {
    "id": 753,
    "category": "Kata Kerja",
    "jp": "感じる",
    "romaji": "kanjiru",
    "arti": "merasa"
  },
  {
    "id": 754,
    "category": "Kata Kerja",
    "jp": "祝う",
    "romaji": "iwau",
    "arti": "merayakan"
  },
  {
    "id": 755,
    "category": "Kata Kerja",
    "jp": "済ませる",
    "romaji": "sumaseru",
    "arti": "meredakan"
  },
  {
    "id": 756,
    "category": "Kata Kerja",
    "jp": "推薦する",
    "romaji": "suisen suru",
    "arti": "merekomendasikan"
  },
  {
    "id": 757,
    "category": "Kata Kerja",
    "jp": "対する",
    "romaji": "taisuru",
    "arti": "terhadap, menghadapi"
  },
  {
    "id": 758,
    "category": "Kata Kerja",
    "jp": "感動する",
    "romaji": "kandou suru",
    "arti": "terharu, miris"
  },
  {
    "id": 759,
    "category": "Kata Kerja",
    "jp": "繋ぐ",
    "romaji": "tsunagu",
    "arti": "terhubung"
  },
  {
    "id": 760,
    "category": "Kata Kerja",
    "jp": "起こる",
    "romaji": "okoru",
    "arti": "terjadi"
  },
  {
    "id": 761,
    "category": "Kata Kerja",
    "jp": "覚める",
    "romaji": "sameru",
    "arti": "terjaga, terbangun"
  },
  {
    "id": 762,
    "category": "Kata Kerja",
    "jp": "売れる",
    "romaji": "ureru",
    "arti": "terjual"
  },
  {
    "id": 763,
    "category": "Kata Kerja",
    "jp": "びっくりする",
    "romaji": "bikkuri suru",
    "arti": "terkejut"
  },
  {
    "id": 764,
    "category": "Kata Kerja",
    "jp": "感⼼する",
    "romaji": "kanshin suru",
    "arti": "terkesan, mengagumi"
  },
  {
    "id": 765,
    "category": "Kata Kerja",
    "jp": "得る",
    "romaji": "eru",
    "arti": "memperoleh"
  },
  {
    "id": 766,
    "category": "Kata Kerja",
    "jp": "稼ぐ",
    "romaji": "kasegu",
    "arti": "memperoleh pendapatan"
  },
  {
    "id": 767,
    "category": "Kata Kerja",
    "jp": "備える",
    "romaji": "sonaeru",
    "arti": "mempersiapkan"
  },
  {
    "id": 768,
    "category": "Kata Kerja",
    "jp": "⽣産する",
    "romaji": "seisan suru",
    "arti": "memproduksi"
  },
  {
    "id": 769,
    "category": "Kata Kerja",
    "jp": "褒める",
    "romaji": "homeru",
    "arti": "memuji"
  },
  {
    "id": 770,
    "category": "Kata Kerja",
    "jp": "当てる",
    "romaji": "ateru",
    "arti": "memukul"
  },
  {
    "id": 771,
    "category": "Kata Kerja",
    "jp": "開始する",
    "romaji": "kashi suru",
    "arti": "memulai"
  },
  {
    "id": 772,
    "category": "Kata Kerja",
    "jp": "快復する",
    "romaji": "kaifuku suru",
    "arti": "memulihkan"
  },
  {
    "id": 773,
    "category": "Kata Kerja",
    "jp": "決⼼する",
    "romaji": "kesshin suru",
    "arti": "menabahkan"
  },
  {
    "id": 774,
    "category": "Kata Kerja",
    "jp": "叩く",
    "romaji": "tataku",
    "arti": "menabuk"
  },
  {
    "id": 775,
    "category": "Kata Kerja",
    "jp": "貯⾦する",
    "romaji": "chokin suru",
    "arti": "menabung"
  },
  {
    "id": 776,
    "category": "Kata Kerja",
    "jp": "請求する",
    "romaji": "seikyuu suru",
    "arti": "menagih"
  },
  {
    "id": 777,
    "category": "Kata Kerja",
    "jp": "我慢する",
    "romaji": "gaman suru",
    "arti": "menahan, bersabar"
  },
  {
    "id": 778,
    "category": "Kata Kerja",
    "jp": "乗せる",
    "romaji": "noseru",
    "arti": "menaikkan"
  },
  {
    "id": 779,
    "category": "Kata Kerja",
    "jp": "増す",
    "romaji": "masu",
    "arti": "menambah"
  },
  {
    "id": 780,
    "category": "Kata Kerja",
    "jp": "加える",
    "romaji": "kuwaeru",
    "arti": "menambah, menambahkan"
  },
  {
    "id": 781,
    "category": "Kata Kerja",
    "jp": "遅刻する",
    "romaji": "chikoku suru",
    "arti": "terlambat"
  },
  {
    "id": 782,
    "category": "Kata Kerja",
    "jp": "抜ける",
    "romaji": "nukeru",
    "arti": "terlepas"
  },
  {
    "id": 783,
    "category": "Kata Kerja",
    "jp": "切れる",
    "romaji": "kireru",
    "arti": "terpotong, cakap, habis"
  },
  {
    "id": 784,
    "category": "Kata Kerja",
    "jp": "微笑む",
    "romaji": "hohoemu",
    "arti": "tersenyum"
  },
  {
    "id": 785,
    "category": "Kata Kerja",
    "jp": "残る",
    "romaji": "nokoru",
    "arti": "tertinggal, tersisa"
  },
  {
    "id": 786,
    "category": "Kata Kerja",
    "jp": "到着する",
    "romaji": "touchaku suru",
    "arti": "tiba"
  },
  {
    "id": 787,
    "category": "Kata Kerja",
    "jp": "計画する",
    "romaji": "keikaku suru",
    "arti": "merencanakan"
  },
  {
    "id": 788,
    "category": "Kata Kerja",
    "jp": "奪う",
    "romaji": "ubau",
    "arti": "merenggut"
  },
  {
    "id": 789,
    "category": "Kata Kerja",
    "jp": "破る",
    "romaji": "yaburu",
    "arti": "merobek"
  },
  {
    "id": 790,
    "category": "Kata Kerja",
    "jp": "倒す",
    "romaji": "taosu",
    "arti": "merobohkan, meruntuhkan, mengalahkan"
  },
  {
    "id": 791,
    "category": "Kata Kerja",
    "jp": "掲⽰する",
    "romaji": "keiji suru",
    "arti": "mewahyukan"
  },
  {
    "id": 792,
    "category": "Kata Kerja",
    "jp": "譲る",
    "romaji": "yuzuru",
    "arti": "mewariskan, memindahkan"
  },
  {
    "id": 793,
    "category": "Kata Kerja",
    "jp": "現れる",
    "romaji": "arawareru",
    "arti": "muncul"
  },
  {
    "id": 794,
    "category": "Kata Kerja",
    "jp": "吐く",
    "romaji": "haku",
    "arti": "muntah"
  },
  {
    "id": 795,
    "category": "Kata Kerja",
    "jp": "昇る",
    "romaji": "noboru",
    "arti": "naik, terbit"
  },
  {
    "id": 796,
    "category": "Kata Kerja",
    "jp": "承知する",
    "romaji": "shouchi suru",
    "arti": "paham, mengerti"
  },
  {
    "id": 797,
    "category": "Kata Kerja",
    "jp": "解ける",
    "romaji": "tokeru",
    "arti": "pecah, terurai"
  },
  {
    "id": 798,
    "category": "Kata Kerja",
    "jp": "満ちる",
    "romaji": "michiru",
    "arti": "penuh"
  },
  {
    "id": 799,
    "category": "Kata Kerja",
    "jp": "信じる",
    "romaji": "shinjiru",
    "arti": "percaya"
  },
  {
    "id": 800,
    "category": "Kata Kerja",
    "jp": "⾏く",
    "romaji": "iku",
    "arti": "pergi"
  },
  {
    "id": 801,
    "category": "Kata Kerja",
    "jp": "去る",
    "romaji": "saru",
    "arti": "pergi, meninggalkan"
  },
  {
    "id": 802,
    "category": "Kata Kerja",
    "jp": "出張する",
    "romaji": "shucchou suru",
    "arti": "perjalanan bisnis"
  },
  {
    "id": 803,
    "category": "Kata Kerja",
    "jp": "帰宅する",
    "romaji": "kitaku suru",
    "arti": "pulang ke rumah"
  },
  {
    "id": 804,
    "category": "Kata Kerja",
    "jp": "関する",
    "romaji": "kansuru",
    "arti": "sehubungan dengan, berkenaan dengan"
  },
  {
    "id": 805,
    "category": "Kata Kerja",
    "jp": "留学する",
    "romaji": "ryuugaku suru",
    "arti": "sekolah di luar negeri"
  },
  {
    "id": 806,
    "category": "Kata Kerja",
    "jp": "完了する",
    "romaji": "kanryou suru",
    "arti": "selesai, rampung"
  },
  {
    "id": 807,
    "category": "Kata Kerja",
    "jp": "訴える",
    "romaji": "uttaeru",
    "arti": "sue person, resort"
  },
  {
    "id": 808,
    "category": "Kata Kerja",
    "jp": "成功する",
    "romaji": "seikou suru",
    "arti": "sukses"
  },
  {
    "id": 809,
    "category": "Kata Kerja",
    "jp": "恐れる",
    "romaji": "osoreru",
    "arti": "takut"
  },
  {
    "id": 810,
    "category": "Kata Kerja",
    "jp": "溺れる",
    "romaji": "oboreru",
    "arti": "tenggelam"
  },
  {
    "id": 811,
    "category": "Kata Kerja",
    "jp": "沈む",
    "romaji": "shizumu",
    "arti": "tenggelam"
  },
  {
    "id": 812,
    "category": "Kata Kerja",
    "jp": "燃える",
    "romaji": "moeru",
    "arti": "terbakar"
  },
  {
    "id": 813,
    "category": "Kata Kerja",
    "jp": "育つ",
    "romaji": "sodatsu",
    "arti": "terdidik, besar"
  }
];
