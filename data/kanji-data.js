
const kanjiData = [
  {
    "id": 1,
    "arti": "Satu",
    "kanji": "一",
    "onyomi": [
      "イチ",
      "イツ"
    ],
    "kunyomi": [
      "ひと",
      "ひとつ"
    ],
    "kosakata": [
      {
        "kata": "一人",
        "reading": "ひとり",
        "arti": "Satu orang"
      },
      {
        "kata": "一つ",
        "reading": "ひとつ",
        "arti": "Satu buah"
      }
    ]
  },
  {
    "id": 2,
    "arti": "Dua",
    "kanji": "二",
    "onyomi": [
      "ニ"
    ],
    "kunyomi": [
      "ふた",
      "ふたつ"
    ],
    "kosakata": [
      {
        "kata": "二人",
        "reading": "ふたり",
        "arti": "Dua orang"
      },
      {
        "kata": "二月",
        "reading": "にがつ",
        "arti": "Bulan dua / Februari"
      }
    ]
  },
  {
    "id": 3,
    "arti": "Tiga",
    "kanji": "三",
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "み",
      "みっつ"
    ],
    "kosakata": [
      {
        "kata": "三度",
        "reading": "さんど",
        "arti": "Tiga kali"
      },
      {
        "kata": "三月",
        "reading": "さんがつ",
        "arti": "Bulan tiga / Maret"
      }
    ]
  },
  {
    "id": 4,
    "arti": "Empat",
    "kanji": "四",
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "よ",
      "よっつ",
      "よん"
    ],
    "kosakata": [
      {
        "kata": "四季",
        "reading": "しき",
        "arti": "Empat musim"
      },
      {
        "kata": "四つ",
        "reading": "よっつ",
        "arti": "Empat buah"
      }
    ]
  },
  {
    "id": 5,
    "arti": "Lima",
    "kanji": "五",
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "いつ",
      "いつつ"
    ],
    "kosakata": [
      {
        "kata": "五日",
        "reading": "いつか",
        "arti": "Tanggal lima / lima hari"
      },
      {
        "kata": "五月",
        "reading": "ごがつ",
        "arti": "Bulan lima / Mei"
      }
    ]
  },
  {
    "id": 6,
    "arti": "Enam",
    "kanji": "六",
    "onyomi": [
      "ロク"
    ],
    "kunyomi": [
      "む",
      "むっつ"
    ],
    "kosakata": [
      {
        "kata": "六月",
        "reading": "ろくがつ",
        "arti": "Bulan enam / Juni"
      },
      {
        "kata": "六日",
        "reading": "むいか",
        "arti": "Tanggal enam / enam hari"
      }
    ]
  },
  {
    "id": 7,
    "arti": "Tujuh",
    "kanji": "七",
    "onyomi": [
      "シチ"
    ],
    "kunyomi": [
      "なな",
      "ななつ"
    ],
    "kosakata": [
      {
        "kata": "七夕",
        "reading": "たなばた",
        "arti": "Festival bintang / Tanabata"
      },
      {
        "kata": "七日",
        "reading": "なのか",
        "arti": "Tanggal tujuh / tujuh hari"
      }
    ]
  },
  {
    "id": 8,
    "arti": "Delapan",
    "kanji": "八",
    "onyomi": [
      "ハチ"
    ],
    "kunyomi": [
      "や",
      "やっつ"
    ],
    "kosakata": [
      {
        "kata": "八月",
        "reading": "はちがつ",
        "arti": "Bulan delapan / Agustus"
      },
      {
        "kata": "八百屋",
        "reading": "やおや",
        "arti": "Toko sayur dan buah"
      }
    ]
  },
  {
    "id": 9,
    "arti": "Sembilan",
    "kanji": "九",
    "onyomi": [
      "キュウ",
      "ク"
    ],
    "kunyomi": [
      "ここの",
      "ここのつ"
    ],
    "kosakata": [
      {
        "kata": "九月",
        "reading": "くがつ",
        "arti": "Bulan sembilan / September"
      },
      {
        "kata": "九日",
        "reading": "ここのか",
        "arti": "Tanggal sembilan / sembilan hari"
      }
    ]
  },
  {
    "id": 10,
    "arti": "Sepuluh",
    "kanji": "十",
    "onyomi": [
      "ジュウ",
      "ジ"
    ],
    "kunyomi": [
      "とう",
      "と"
    ],
    "kosakata": [
      {
        "kata": "十分",
        "reading": "じゅっぷん",
        "arti": "Sepuluh menit"
      },
      {
        "kata": "十月",
        "reading": "じゅうがつ",
        "arti": "Bulan sepuluh / Oktober"
      }
    ]
  },
  {
    "id": 11,
    "arti": "Seratus",
    "kanji": "百",
    "onyomi": [
      "ヒャク"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "百万",
        "reading": "ひゃくまん",
        "arti": "Satu juta"
      },
      {
        "kata": "三百",
        "reading": "さんびゃく",
        "arti": "Tiga ratus"
      }
    ]
  },
  {
    "id": 12,
    "arti": "Seribu",
    "kanji": "千",
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "ち"
    ],
    "kosakata": [
      {
        "kata": "三千",
        "reading": "さんぜん",
        "arti": "Tiga ribu"
      },
      {
        "kata": "千円",
        "reading": "せんえん",
        "arti": "Seribu yen"
      }
    ]
  },
  {
    "id": 13,
    "arti": "Sepuluh ribu",
    "kanji": "万",
    "onyomi": [
      "マン",
      "バン"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "百万円",
        "reading": "ひゃくまんえん",
        "arti": "Satu juta yen"
      },
      {
        "kata": "万年筆",
        "reading": "まんねんひつ",
        "arti": "Pena"
      }
    ]
  },
  {
    "id": 14,
    "arti": "Yen, bulat",
    "kanji": "円",
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "まるい"
    ],
    "kosakata": [
      {
        "kata": "円い",
        "reading": "まるい",
        "arti": "Bulat"
      },
      {
        "kata": "百円",
        "reading": "ひゃくえん",
        "arti": "Seratus yen"
      }
    ]
  },
  {
    "id": 15,
    "arti": "Tanggal, hari, matahari",
    "kanji": "日",
    "onyomi": [
      "ニチ",
      "ジツ"
    ],
    "kunyomi": [
      "ひ",
      "び",
      "か"
    ],
    "kosakata": [
      {
        "kata": "日本",
        "reading": "にほん",
        "arti": "Jepang"
      },
      {
        "kata": "一日",
        "reading": "いちにち",
        "arti": "Satu hari / sepanjang hari"
      }
    ]
  },
  {
    "id": 16,
    "arti": "Minggu",
    "kanji": "週",
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "一週間",
        "reading": "いっしゅうかん",
        "arti": "Satu minggu"
      },
      {
        "kata": "週末",
        "reading": "しゅうまつ",
        "arti": "Akhir minggu"
      }
    ]
  },
  {
    "id": 17,
    "arti": "Bulan",
    "kanji": "月",
    "onyomi": [
      "ゲツ",
      "ガツ"
    ],
    "kunyomi": [
      "つき"
    ],
    "kosakata": [
      {
        "kata": "来月",
        "reading": "らいげつ",
        "arti": "Bulan depan"
      },
      {
        "kata": "一月",
        "reading": "いちがつ",
        "arti": "Januari"
      }
    ]
  },
  {
    "id": 18,
    "arti": "Tahun",
    "kanji": "年",
    "onyomi": [
      "ネン"
    ],
    "kunyomi": [
      "とし"
    ],
    "kosakata": [
      {
        "kata": "年齢",
        "reading": "ねんれい",
        "arti": "Usia"
      },
      {
        "kata": "新年",
        "reading": "しんねん",
        "arti": "Tahun baru"
      }
    ]
  },
  {
    "id": 19,
    "arti": "Waktu, jam",
    "kanji": "時",
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "とき",
      "どき"
    ],
    "kosakata": [
      {
        "kata": "時間",
        "reading": "じかん",
        "arti": "Waktu"
      },
      {
        "kata": "時代",
        "reading": "じだい",
        "arti": "Periode / zaman"
      }
    ]
  },
  {
    "id": 20,
    "arti": "Jangka waktu, antara",
    "kanji": "間",
    "onyomi": [
      "カン",
      "ケン"
    ],
    "kunyomi": [
      "あいだ",
      "ま",
      "あい"
    ],
    "kosakata": [
      {
        "kata": "仲間",
        "reading": "なかま",
        "arti": "Sahabat"
      },
      {
        "kata": "人間",
        "reading": "にんげん",
        "arti": "Manusia / orang"
      }
    ]
  },
  {
    "id": 21,
    "arti": "Menit, bagian, membagi, mengerti",
    "kanji": "分",
    "onyomi": [
      "ブン",
      "プン",
      "ブ"
    ],
    "kunyomi": [
      "わける",
      "わかる"
    ],
    "kosakata": [
      {
        "kata": "自分",
        "reading": "じぶん",
        "arti": "Diri sendiri"
      },
      {
        "kata": "三十分",
        "reading": "さんじゅっぷん",
        "arti": "30 menit"
      }
    ]
  },
  {
    "id": 22,
    "arti": "Sebelum, depan",
    "kanji": "前",
    "onyomi": [
      "ゼン"
    ],
    "kunyomi": [
      "まえ"
    ],
    "kosakata": [
      {
        "kata": "名前",
        "reading": "なまえ",
        "arti": "Nama"
      },
      {
        "kata": "午前",
        "reading": "ごぜん",
        "arti": "Pagi / A.M."
      }
    ]
  },
  {
    "id": 23,
    "arti": "Setelah, belakang",
    "kanji": "後",
    "onyomi": [
      "ゴ",
      "コウ"
    ],
    "kunyomi": [
      "あと",
      "うしろ"
    ],
    "kosakata": [
      {
        "kata": "後ろ",
        "reading": "うしろ",
        "arti": "Belakang"
      },
      {
        "kata": "最後",
        "reading": "さいご",
        "arti": "Terakhir"
      }
    ]
  },
  {
    "id": 24,
    "arti": "Sekarang",
    "kanji": "今",
    "onyomi": [
      "コン",
      "キン"
    ],
    "kunyomi": [
      "いま"
    ],
    "kosakata": [
      {
        "kata": "今朝",
        "reading": "けさ",
        "arti": "Pagi ini"
      },
      {
        "kata": "今",
        "reading": "いま",
        "arti": "Sekarang"
      }
    ]
  },
  {
    "id": 25,
    "arti": "Lebih dulu, sebelumnya, masa depan",
    "kanji": "先",
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "さき",
      "まず"
    ],
    "kosakata": [
      {
        "kata": "先生",
        "reading": "せんせい",
        "arti": "Guru"
      },
      {
        "kata": "先週",
        "reading": "せんしゅう",
        "arti": "Minggu lalu"
      }
    ]
  },
  {
    "id": 26,
    "arti": "Datang, yang akan datang",
    "kanji": "来",
    "onyomi": [
      "ライ"
    ],
    "kunyomi": [
      "くる",
      "き",
      "こ"
    ],
    "kosakata": [
      {
        "kata": "来る",
        "reading": "くる",
        "arti": "Datang"
      },
      {
        "kata": "来年",
        "reading": "らいねん",
        "arti": "Tahun depan"
      }
    ]
  },
  {
    "id": 27,
    "arti": "Setengah",
    "kanji": "半",
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [
      "なかば"
    ],
    "kosakata": [
      {
        "kata": "半分",
        "reading": "はんぶん",
        "arti": "Setengah / sebagian"
      },
      {
        "kata": "一時半",
        "reading": "いちじはん",
        "arti": "Jam 1.30"
      }
    ]
  },
  {
    "id": 28,
    "arti": "Setiap",
    "kanji": "毎",
    "onyomi": [
      "マイ"
    ],
    "kunyomi": [
      "ごと"
    ],
    "kosakata": [
      {
        "kata": "毎日",
        "reading": "まいにち",
        "arti": "Setiap hari"
      },
      {
        "kata": "毎朝",
        "reading": "まいあさ",
        "arti": "Setiap pagi"
      }
    ]
  },
  {
    "id": 29,
    "arti": "Apa",
    "kanji": "何",
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "なに",
      "なん"
    ],
    "kosakata": [
      {
        "kata": "何人",
        "reading": "なんにん",
        "arti": "Berapa orang"
      },
      {
        "kata": "何月",
        "reading": "なんがつ",
        "arti": "Bulan apa"
      }
    ]
  },
  {
    "id": 30,
    "arti": "Orang",
    "kanji": "人",
    "onyomi": [
      "ニン",
      "ジン"
    ],
    "kunyomi": [
      "ひと",
      "り",
      "と"
    ],
    "kosakata": [
      {
        "kata": "人口",
        "reading": "じんこう",
        "arti": "Populasi"
      },
      {
        "kata": "人間",
        "reading": "にんげん",
        "arti": "Manusia"
      }
    ]
  },
  {
    "id": 31,
    "arti": "Laki-laki",
    "kanji": "男",
    "onyomi": [
      "ダン",
      "ナン"
    ],
    "kunyomi": [
      "おとこ"
    ],
    "kosakata": [
      {
        "kata": "男性",
        "reading": "だんせい",
        "arti": "Laki-laki"
      },
      {
        "kata": "男の子",
        "reading": "おとこのこ",
        "arti": "Anak laki-laki"
      }
    ]
  },
  {
    "id": 32,
    "arti": "Perempuan",
    "kanji": "女",
    "onyomi": [
      "ジョ",
      "ニョ"
    ],
    "kunyomi": [
      "おんな",
      "め"
    ],
    "kosakata": [
      {
        "kata": "女性",
        "reading": "じょせい",
        "arti": "Perempuan"
      },
      {
        "kata": "女の子",
        "reading": "おんなのこ",
        "arti": "Anak perempuan"
      }
    ]
  },
  {
    "id": 33,
    "arti": "Anak",
    "kanji": "子",
    "onyomi": [
      "シ",
      "ス"
    ],
    "kunyomi": [
      "こ"
    ],
    "kosakata": [
      {
        "kata": "子供",
        "reading": "こども",
        "arti": "Anak"
      },
      {
        "kata": "帽子",
        "reading": "ぼうし",
        "arti": "Topi"
      }
    ]
  },
  {
    "id": 34,
    "arti": "Teman",
    "kanji": "友",
    "onyomi": [
      "ユウ"
    ],
    "kunyomi": [
      "とも"
    ],
    "kosakata": [
      {
        "kata": "友達",
        "reading": "ともだち",
        "arti": "Teman"
      },
      {
        "kata": "友人",
        "reading": "ゆうじん",
        "arti": "Teman"
      }
    ]
  },
  {
    "id": 35,
    "arti": "Nama",
    "kanji": "名",
    "onyomi": [
      "メイ",
      "ミョウ"
    ],
    "kunyomi": [
      "な"
    ],
    "kosakata": [
      {
        "kata": "名前",
        "reading": "なまえ",
        "arti": "Nama"
      },
      {
        "kata": "有名",
        "reading": "ゆうめい",
        "arti": "Terkenal"
      }
    ]
  },
  {
    "id": 36,
    "arti": "Telinga",
    "kanji": "耳",
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "みみ"
    ],
    "kosakata": [
      {
        "kata": "耳",
        "reading": "みみ",
        "arti": "Telinga"
      },
      {
        "kata": "耳打ち",
        "reading": "みみうち",
        "arti": "Berbisik di telinga"
      }
    ]
  },
  {
    "id": 37,
    "arti": "Tangan",
    "kanji": "手",
    "onyomi": [
      "シュ",
      "ズ"
    ],
    "kunyomi": [
      "て"
    ],
    "kosakata": [
      {
        "kata": "相手",
        "reading": "あいて",
        "arti": "Partner / pihak lain"
      },
      {
        "kata": "切手",
        "reading": "きって",
        "arti": "Perangko"
      }
    ]
  },
  {
    "id": 38,
    "arti": "Kaki",
    "kanji": "足",
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "あし",
      "たす",
      "たりる"
    ],
    "kosakata": [
      {
        "kata": "不足",
        "reading": "ふそく",
        "arti": "Kekurangan"
      },
      {
        "kata": "足跡",
        "reading": "あしあと",
        "arti": "Jejak kaki"
      }
    ]
  },
  {
    "id": 39,
    "arti": "Mata",
    "kanji": "目",
    "onyomi": [
      "モク"
    ],
    "kunyomi": [
      "め"
    ],
    "kosakata": [
      {
        "kata": "目的",
        "reading": "もくてき",
        "arti": "Tujuan"
      },
      {
        "kata": "注目",
        "reading": "ちゅうもく",
        "arti": "Perhatian"
      }
    ]
  },
  {
    "id": 40,
    "arti": "Mulut",
    "kanji": "口",
    "onyomi": [
      "コウ",
      "ク"
    ],
    "kunyomi": [
      "くち"
    ],
    "kosakata": [
      {
        "kata": "悪口",
        "reading": "わるぐち",
        "arti": "Berkata buruk / ejekan"
      },
      {
        "kata": "入り口",
        "reading": "いりぐち",
        "arti": "Pintu masuk"
      }
    ]
  },
  {
    "id": 41,
    "arti": "Ayah",
    "kanji": "父",
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "ちち"
    ],
    "kosakata": [
      {
        "kata": "お父さん",
        "reading": "おとうさん",
        "arti": "Ayah"
      },
      {
        "kata": "祖父",
        "reading": "そふ",
        "arti": "Kakek"
      }
    ]
  },
  {
    "id": 42,
    "arti": "Ibu",
    "kanji": "母",
    "onyomi": [
      "ボ"
    ],
    "kunyomi": [
      "はは"
    ],
    "kosakata": [
      {
        "kata": "お母さん",
        "reading": "おかあさん",
        "arti": "Ibu"
      },
      {
        "kata": "祖母",
        "reading": "そぼ",
        "arti": "Nenek"
      }
    ]
  },
  {
    "id": 43,
    "arti": "Api",
    "kanji": "火",
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "ひ",
      "び"
    ],
    "kosakata": [
      {
        "kata": "火山",
        "reading": "かざん",
        "arti": "Gunung berapi"
      },
      {
        "kata": "火曜日",
        "reading": "かようび",
        "arti": "Selasa"
      }
    ]
  },
  {
    "id": 44,
    "arti": "Air",
    "kanji": "水",
    "onyomi": [
      "スイ"
    ],
    "kunyomi": [
      "みず"
    ],
    "kosakata": [
      {
        "kata": "水道",
        "reading": "すいどう",
        "arti": "Saluran air"
      },
      {
        "kata": "水曜日",
        "reading": "すいようび",
        "arti": "Rabu"
      }
    ]
  },
  {
    "id": 45,
    "arti": "Pohon, kayu",
    "kanji": "木",
    "onyomi": [
      "ボク",
      "モク"
    ],
    "kunyomi": [
      "き",
      "こ"
    ],
    "kosakata": [
      {
        "kata": "木材",
        "reading": "もくざい",
        "arti": "Kayu"
      },
      {
        "kata": "木曜日",
        "reading": "もくようび",
        "arti": "Kamis"
      }
    ]
  },
  {
    "id": 46,
    "arti": "Bumi, tanah",
    "kanji": "土",
    "onyomi": [
      "ド",
      "ト"
    ],
    "kunyomi": [
      "つち"
    ],
    "kosakata": [
      {
        "kata": "お土産",
        "reading": "おみやげ",
        "arti": "Oleh-oleh"
      },
      {
        "kata": "土曜日",
        "reading": "どようび",
        "arti": "Sabtu"
      }
    ]
  },
  {
    "id": 47,
    "arti": "Uang, emas",
    "kanji": "金",
    "onyomi": [
      "キン",
      "コン"
    ],
    "kunyomi": [
      "かね"
    ],
    "kosakata": [
      {
        "kata": "お金",
        "reading": "おかね",
        "arti": "Uang"
      },
      {
        "kata": "金曜日",
        "reading": "きんようび",
        "arti": "Jumat"
      }
    ]
  },
  {
    "id": 48,
    "arti": "Sungai",
    "kanji": "川",
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "かわ"
    ],
    "kosakata": [
      {
        "kata": "川口",
        "reading": "かわぐち",
        "arti": "Mulut sungai"
      },
      {
        "kata": "川端",
        "reading": "かわばた",
        "arti": "Tepian sungai"
      }
    ]
  },
  {
    "id": 49,
    "arti": "Bunga",
    "kanji": "花",
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "はな"
    ],
    "kosakata": [
      {
        "kata": "花見",
        "reading": "はなみ",
        "arti": "Kegiatan melihat bunga"
      },
      {
        "kata": "花びら",
        "reading": "はなびら",
        "arti": "Kelopak bunga"
      }
    ]
  },
  {
    "id": 50,
    "arti": "Pikiran, semangat",
    "kanji": "気",
    "onyomi": [
      "キ",
      "ケ"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "空気",
        "reading": "くうき",
        "arti": "Udara / atmosfer"
      },
      {
        "kata": "人気",
        "reading": "にんき",
        "arti": "Populer"
      }
    ]
  },
  {
    "id": 51,
    "arti": "Kehidupan",
    "kanji": "生",
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "いきる",
      "うまれる",
      "はやす"
    ],
    "kosakata": [
      {
        "kata": "生活",
        "reading": "せいかつ",
        "arti": "Kehidupan"
      },
      {
        "kata": "生物",
        "reading": "せいぶつ",
        "arti": "Makhluk hidup"
      }
    ]
  },
  {
    "id": 52,
    "arti": "Ikan",
    "kanji": "魚",
    "onyomi": [
      "ギョ"
    ],
    "kunyomi": [
      "さかな",
      "うお"
    ],
    "kosakata": [
      {
        "kata": "金魚",
        "reading": "きんぎょ",
        "arti": "Ikan mas"
      },
      {
        "kata": "魚屋",
        "reading": "さかなや",
        "arti": "Toko ikan"
      }
    ]
  },
  {
    "id": 53,
    "arti": "Surga",
    "kanji": "天",
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "あめ",
      "あま"
    ],
    "kosakata": [
      {
        "kata": "天気",
        "reading": "てんき",
        "arti": "Cuaca"
      },
      {
        "kata": "天災",
        "reading": "てんさい",
        "arti": "Bencana alam"
      }
    ]
  },
  {
    "id": 54,
    "arti": "Langit, kosong",
    "kanji": "空",
    "onyomi": [
      "クウ"
    ],
    "kunyomi": [
      "そら",
      "あける"
    ],
    "kosakata": [
      {
        "kata": "空",
        "reading": "そら",
        "arti": "Langit"
      },
      {
        "kata": "空港",
        "reading": "くうこう",
        "arti": "Bandara"
      }
    ]
  },
  {
    "id": 55,
    "arti": "Gunung",
    "kanji": "山",
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "やま"
    ],
    "kosakata": [
      {
        "kata": "登山",
        "reading": "とざん",
        "arti": "Panjat gunung"
      },
      {
        "kata": "山林",
        "reading": "さんりん",
        "arti": "Hutan gunung"
      }
    ]
  },
  {
    "id": 56,
    "arti": "Hujan",
    "kanji": "雨",
    "onyomi": [
      "ウ"
    ],
    "kunyomi": [
      "あめ"
    ],
    "kosakata": [
      {
        "kata": "大雨",
        "reading": "おおあめ",
        "arti": "Hujan lebat"
      },
      {
        "kata": "雨天",
        "reading": "うてん",
        "arti": "Cuaca hujan"
      }
    ]
  },
  {
    "id": 57,
    "arti": "Listrik",
    "kanji": "電",
    "onyomi": [
      "デン"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "電車",
        "reading": "でんしゃ",
        "arti": "Kereta"
      },
      {
        "kata": "電気",
        "reading": "でんき",
        "arti": "Listrik"
      }
    ]
  },
  {
    "id": 58,
    "arti": "Buku, dasar, sumber",
    "kanji": "本",
    "onyomi": [
      "ホン"
    ],
    "kunyomi": [
      "もと"
    ],
    "kosakata": [
      {
        "kata": "日本",
        "reading": "にほん",
        "arti": "Jepang"
      },
      {
        "kata": "基本",
        "reading": "きほん",
        "arti": "Dasar"
      }
    ]
  },
  {
    "id": 59,
    "arti": "Mobil, kendaraan",
    "kanji": "車",
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "くるま"
    ],
    "kosakata": [
      {
        "kata": "自動車",
        "reading": "じどうしゃ",
        "arti": "Mobil"
      },
      {
        "kata": "自転車",
        "reading": "じてんしゃ",
        "arti": "Sepeda"
      }
    ]
  },
  {
    "id": 60,
    "arti": "Bahasa, kata",
    "kanji": "語",
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "かたる"
    ],
    "kosakata": [
      {
        "kata": "日本語",
        "reading": "にほんご",
        "arti": "Bahasa Jepang"
      },
      {
        "kata": "英語",
        "reading": "えいご",
        "arti": "Bahasa Inggris"
      }
    ]
  },
  {
    "id": 61,
    "arti": "Toko",
    "kanji": "店",
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "みせ"
    ],
    "kosakata": [
      {
        "kata": "店員",
        "reading": "てんいん",
        "arti": "Pegawai toko"
      },
      {
        "kata": "喫茶店",
        "reading": "きっさてん",
        "arti": "Kafe / kedai kopi"
      }
    ]
  },
  {
    "id": 62,
    "arti": "Stasiun",
    "kanji": "駅",
    "onyomi": [
      "エキ"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "駅",
        "reading": "えき",
        "arti": "Stasiun"
      },
      {
        "kata": "駅前",
        "reading": "えきまえ",
        "arti": "Depan stasiun"
      }
    ]
  },
  {
    "id": 63,
    "arti": "Jalan",
    "kanji": "道",
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "みち"
    ],
    "kosakata": [
      {
        "kata": "道路",
        "reading": "どうろ",
        "arti": "Jalan raya"
      },
      {
        "kata": "水道",
        "reading": "すいどう",
        "arti": "Saluran air"
      }
    ]
  },
  {
    "id": 64,
    "arti": "Kuil, masyarakat",
    "kanji": "社",
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "やしろ"
    ],
    "kosakata": [
      {
        "kata": "神社",
        "reading": "じんじゃ",
        "arti": "Kuil"
      },
      {
        "kata": "会社",
        "reading": "かいしゃ",
        "arti": "Kantor / perusahaan"
      }
    ]
  },
  {
    "id": 65,
    "arti": "Negara",
    "kanji": "国",
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "くに"
    ],
    "kosakata": [
      {
        "kata": "外国",
        "reading": "がいこく",
        "arti": "Luar negeri"
      },
      {
        "kata": "国民",
        "reading": "こくみん",
        "arti": "Penduduk"
      }
    ]
  },
  {
    "id": 66,
    "arti": "Luar",
    "kanji": "外",
    "onyomi": [
      "ガイ",
      "ゲ"
    ],
    "kunyomi": [
      "そと",
      "はずれる",
      "ほか"
    ],
    "kosakata": [
      {
        "kata": "海外",
        "reading": "かいがい",
        "arti": "Luar pulau / luar negeri"
      },
      {
        "kata": "外出",
        "reading": "がいしゅつ",
        "arti": "Pergi keluar"
      }
    ]
  },
  {
    "id": 67,
    "arti": "Sekolah, belajar",
    "kanji": "学",
    "onyomi": [
      "ガク"
    ],
    "kunyomi": [
      "まなぶ"
    ],
    "kosakata": [
      {
        "kata": "学生",
        "reading": "がくせい",
        "arti": "Murid"
      },
      {
        "kata": "学ぶ",
        "reading": "まなぶ",
        "arti": "Belajar"
      }
    ]
  },
  {
    "id": 68,
    "arti": "Sekolah",
    "kanji": "校",
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "-"
    ],
    "kosakata": [
      {
        "kata": "学校",
        "reading": "がっこう",
        "arti": "Sekolah"
      },
      {
        "kata": "高校",
        "reading": "こうこう",
        "arti": "SMA"
      }
    ]
  },
  {
    "id": 69,
    "arti": "Atas",
    "kanji": "上",
    "onyomi": [
      "ショウ",
      "ジョウ"
    ],
    "kunyomi": [
      "あがる",
      "のぼる",
      "うえ"
    ],
    "kosakata": [
      {
        "kata": "売り上げ",
        "reading": "うりあげ",
        "arti": "Penjualan"
      },
      {
        "kata": "上手",
        "reading": "じょうず",
        "arti": "Ahli / jago"
      }
    ]
  },
  {
    "id": 70,
    "arti": "Bawah",
    "kanji": "下",
    "onyomi": [
      "カ",
      "ゲ"
    ],
    "kunyomi": [
      "さがる",
      "おりる",
      "した"
    ],
    "kosakata": [
      {
        "kata": "下手",
        "reading": "へた",
        "arti": "Lemah / tidak jago"
      },
      {
        "kata": "以下",
        "reading": "いか",
        "arti": "Di bawah / tidak lebih"
      }
    ]
  },
  {
    "id": 71,
    "arti": "Dalam, tengah, di antara",
    "kanji": "中",
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "なか"
    ],
    "kosakata": [
      {
        "kata": "中心",
        "reading": "ちゅうしん",
        "arti": "Pusat / tengah-tengah"
      },
      {
        "kata": "水中",
        "reading": "すいちゅう",
        "arti": "Di dalam air"
      }
    ]
  },
  {
    "id": 72,
    "arti": "Utara",
    "kanji": "北",
    "onyomi": [
      "ホク"
    ],
    "kunyomi": [
      "きた"
    ],
    "kosakata": [
      {
        "kata": "北極",
        "reading": "ほっきょく",
        "arti": "Kutub utara"
      },
      {
        "kata": "東北",
        "reading": "とうほく",
        "arti": "Timur laut"
      }
    ]
  },
  {
    "id": 73,
    "arti": "Barat",
    "kanji": "西",
    "onyomi": [
      "サイ",
      "セイ"
    ],
    "kunyomi": [
      "にし"
    ],
    "kosakata": [
      {
        "kata": "関西",
        "reading": "かんさい",
        "arti": "Kansai"
      },
      {
        "kata": "西部",
        "reading": "せいぶ",
        "arti": "Bagian barat"
      }
    ]
  },
  {
    "id": 74,
    "arti": "Timur",
    "kanji": "東",
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ひがし"
    ],
    "kosakata": [
      {
        "kata": "東京",
        "reading": "とうきょう",
        "arti": "Tokyo"
      },
      {
        "kata": "中東",
        "reading": "ちゅうとう",
        "arti": "Timur Tengah"
      }
    ]
  },
  {
    "id": 75,
    "arti": "Selatan",
    "kanji": "南",
    "onyomi": [
      "ナン"
    ],
    "kunyomi": [
      "みなみ"
    ],
    "kosakata": [
      {
        "kata": "南西",
        "reading": "なんせい",
        "arti": "Barat daya"
      },
      {
        "kata": "南極",
        "reading": "なんきょく",
        "arti": "Kutub selatan"
      }
    ]
  },
  {
    "id": 76,
    "arti": "Kanan",
    "kanji": "右",
    "onyomi": [
      "ユウ"
    ],
    "kunyomi": [
      "みぎ"
    ],
    "kosakata": [
      {
        "kata": "右手",
        "reading": "みぎて",
        "arti": "Tangan kanan"
      },
      {
        "kata": "右側",
        "reading": "みぎがわ",
        "arti": "Sebelah kanan"
      }
    ]
  },
  {
    "id": 77,
    "arti": "Kiri",
    "kanji": "左",
    "onyomi": [
      "サ"
    ],
    "kunyomi": [
      "ひだり"
    ],
    "kosakata": [
      {
        "kata": "左手",
        "reading": "ひだりて",
        "arti": "Tangan kiri"
      },
      {
        "kata": "左側",
        "reading": "ひだりがわ",
        "arti": "Sebelah kiri"
      }
    ]
  },
  {
    "id": 78,
    "arti": "Melihat, menonton, menunjukkan",
    "kanji": "見",
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "みる"
    ],
    "kosakata": [
      {
        "kata": "意見",
        "reading": "いけん",
        "arti": "Pendapat"
      },
      {
        "kata": "見える",
        "reading": "みえる",
        "arti": "Kelihatan / terlihat"
      }
    ]
  },
  {
    "id": 79,
    "arti": "Mendengar, bertanya",
    "kanji": "聞",
    "onyomi": [
      "モン",
      "ブン"
    ],
    "kunyomi": [
      "きく"
    ],
    "kosakata": [
      {
        "kata": "新聞",
        "reading": "しんぶん",
        "arti": "Koran"
      },
      {
        "kata": "聞こえる",
        "reading": "きこえる",
        "arti": "Kedengaran / terdengar"
      }
    ]
  },
  {
    "id": 80,
    "arti": "Menulis",
    "kanji": "書",
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "かく"
    ],
    "kosakata": [
      {
        "kata": "文書",
        "reading": "ぶんしょ",
        "arti": "Dokumen / karya tulis"
      },
      {
        "kata": "読書",
        "reading": "どくしょ",
        "arti": "Membaca"
      }
    ]
  },
  {
    "id": 81,
    "arti": "Membaca",
    "kanji": "読",
    "onyomi": [
      "ドク"
    ],
    "kunyomi": [
      "よむ"
    ],
    "kosakata": [
      {
        "kata": "読者",
        "reading": "どくしゃ",
        "arti": "Pembaca"
      },
      {
        "kata": "読み方",
        "reading": "よみかた",
        "arti": "Cara baca"
      }
    ]
  },
  {
    "id": 82,
    "arti": "Berbicara, bercerita",
    "kanji": "話",
    "onyomi": [
      "ワ"
    ],
    "kunyomi": [
      "はなす",
      "はなし"
    ],
    "kosakata": [
      {
        "kata": "電話",
        "reading": "でんわ",
        "arti": "Telepon"
      },
      {
        "kata": "会話",
        "reading": "かいわ",
        "arti": "Percakapan"
      }
    ]
  },
  {
    "id": 83,
    "arti": "Membeli, berbelanja",
    "kanji": "買",
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [
      "かう"
    ],
    "kosakata": [
      {
        "kata": "買い物",
        "reading": "かいもの",
        "arti": "Belanjaan"
      },
      {
        "kata": "売買",
        "reading": "ばいばい",
        "arti": "Jual beli / perdagangan"
      }
    ]
  },
  {
    "id": 84,
    "arti": "Pergi, membawa pergi",
    "kanji": "行",
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "いく",
      "おこなう"
    ],
    "kosakata": [
      {
        "kata": "旅行",
        "reading": "りょこう",
        "arti": "Perjalanan / jalan-jalan"
      },
      {
        "kata": "銀行",
        "reading": "ぎんこう",
        "arti": "Bank"
      }
    ]
  },
  {
    "id": 85,
    "arti": "Keluar",
    "kanji": "出",
    "onyomi": [
      "シュツ"
    ],
    "kunyomi": [
      "でる",
      "だす"
    ],
    "kosakata": [
      {
        "kata": "輸出",
        "reading": "ゆしゅつ",
        "arti": "Ekspor"
      },
      {
        "kata": "出口",
        "reading": "でぐち",
        "arti": "Pintu keluar"
      }
    ]
  },
  {
    "id": 86,
    "arti": "Masuk",
    "kanji": "入",
    "onyomi": [
      "ニュウ"
    ],
    "kunyomi": [
      "いる",
      "はいる",
      "いれる"
    ],
    "kosakata": [
      {
        "kata": "輸入",
        "reading": "ゆにゅう",
        "arti": "Impor"
      },
      {
        "kata": "入口",
        "reading": "いりぐち",
        "arti": "Pintu masuk"
      }
    ]
  },
  {
    "id": 87,
    "arti": "Beristirahat, berlibur",
    "kanji": "休",
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "やすむ",
      "やすみ"
    ],
    "kosakata": [
      {
        "kata": "休日",
        "reading": "きゅうじつ",
        "arti": "Hari libur"
      },
      {
        "kata": "夏休み",
        "reading": "なつやすみ",
        "arti": "Libur musim panas"
      }
    ]
  },
  {
    "id": 88,
    "arti": "Makan, makanan",
    "kanji": "食",
    "onyomi": [
      "ショク"
    ],
    "kunyomi": [
      "たべる"
    ],
    "kosakata": [
      {
        "kata": "食品",
        "reading": "しょくひん",
        "arti": "Makanan / produk makanan"
      },
      {
        "kata": "食堂",
        "reading": "しょくどう",
        "arti": "Kantin / kafetaria / tempat makan"
      }
    ]
  },
  {
    "id": 89,
    "arti": "Minum, minuman",
    "kanji": "飲",
    "onyomi": [
      "イン"
    ],
    "kunyomi": [
      "のむ"
    ],
    "kosakata": [
      {
        "kata": "飲み物",
        "reading": "のみもの",
        "arti": "Minuman"
      },
      {
        "kata": "飲食",
        "reading": "いんしょく",
        "arti": "Makan-minum / makanan dan minuman"
      }
    ]
  },
  {
    "id": 90,
    "arti": "Bicara, kata",
    "kanji": "言",
    "onyomi": [
      "ゲン",
      "ゴン"
    ],
    "kunyomi": [
      "いう"
    ],
    "kosakata": [
      {
        "kata": "言葉",
        "reading": "ことば",
        "arti": "Kata / bahasa"
      },
      {
        "kata": "言語",
        "reading": "げんご",
        "arti": "Bahasa"
      }
    ]
  },
  {
    "id": 91,
    "arti": "Berdiri",
    "kanji": "立",
    "onyomi": [
      "リツ"
    ],
    "kunyomi": [
      "たつ"
    ],
    "kosakata": [
      {
        "kata": "独立",
        "reading": "どくりつ",
        "arti": "Merdeka"
      },
      {
        "kata": "国立",
        "reading": "こくりつ",
        "arti": "Nasional"
      }
    ]
  },
  {
    "id": 92,
    "arti": "Bertemu, masyarakat",
    "kanji": "会",
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [
      "あう"
    ],
    "kosakata": [
      {
        "kata": "社会",
        "reading": "しゃかい",
        "arti": "Publik / masyarakat"
      },
      {
        "kata": "会社",
        "reading": "かいしゃ",
        "arti": "Perusahaan"
      }
    ]
  },
  {
    "id": 93,
    "arti": "Banyak",
    "kanji": "多",
    "onyomi": [
      "タ"
    ],
    "kunyomi": [
      "おおい"
    ],
    "kosakata": [
      {
        "kata": "多分",
        "reading": "たぶん",
        "arti": "Mungkin"
      },
      {
        "kata": "多数",
        "reading": "たすう",
        "arti": "Banyak / jumlah yang banyak"
      }
    ]
  },
  {
    "id": 94,
    "arti": "Sedikit",
    "kanji": "少",
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "すこし",
      "すくない"
    ],
    "kosakata": [
      {
        "kata": "少し",
        "reading": "すこし",
        "arti": "Sedikit"
      },
      {
        "kata": "少数",
        "reading": "しょうすう",
        "arti": "Sedikit / jumlah yang sedikit"
      }
    ]
  },
  {
    "id": 95,
    "arti": "Tua, lama",
    "kanji": "古",
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "ふるい"
    ],
    "kosakata": [
      {
        "kata": "中古",
        "reading": "ちゅうこ",
        "arti": "Bekas / tua"
      },
      {
        "kata": "古本",
        "reading": "ふるほん",
        "arti": "Buku tua"
      }
    ]
  },
  {
    "id": 96,
    "arti": "Baru",
    "kanji": "新",
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "あたらしい"
    ],
    "kosakata": [
      {
        "kata": "新年",
        "reading": "しんねん",
        "arti": "Tahun baru"
      },
      {
        "kata": "最新",
        "reading": "さいしん",
        "arti": "Yang terbaru"
      }
    ]
  },
  {
    "id": 97,
    "arti": "Besar, banyak",
    "kanji": "大",
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "おおきい"
    ],
    "kosakata": [
      {
        "kata": "大学",
        "reading": "だいがく",
        "arti": "Universitas"
      },
      {
        "kata": "大人",
        "reading": "おとな",
        "arti": "Orang dewasa"
      }
    ]
  },
  {
    "id": 98,
    "arti": "Kecil",
    "kanji": "小",
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "ちいさい",
      "こ"
    ],
    "kosakata": [
      {
        "kata": "小説",
        "reading": "しょうせつ",
        "arti": "Novel"
      },
      {
        "kata": "小学校",
        "reading": "しょうがっこう",
        "arti": "SD"
      }
    ]
  },
  {
    "id": 99,
    "arti": "Murah, aman",
    "kanji": "安",
    "onyomi": [
      "アン"
    ],
    "kunyomi": [
      "やすい"
    ],
    "kosakata": [
      {
        "kata": "安全",
        "reading": "あんぜん",
        "arti": "Aman"
      },
      {
        "kata": "不安",
        "reading": "ふあん",
        "arti": "Cemas / khawatir"
      }
    ]
  },
  {
    "id": 100,
    "arti": "Mahal, tinggi",
    "kanji": "高",
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "たかい"
    ],
    "kosakata": [
      {
        "kata": "高校",
        "reading": "こうこう",
        "arti": "SMA"
      },
      {
        "kata": "高校生",
        "reading": "こうこうせい",
        "arti": "Murid SMA"
      }
    ]
  },
  {
    "id": 101,
    "arti": "Panjang, pemimpin",
    "kanji": "長",
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "ながい"
    ],
    "kosakata": [
      {
        "kata": "成長",
        "reading": "せいちょう",
        "arti": "Pertumbuhan / perkembangan"
      },
      {
        "kata": "長期",
        "reading": "ちょうき",
        "arti": "Jangka panjang"
      }
    ]
  },
  {
    "id": 102,
    "arti": "Putih",
    "kanji": "白",
    "onyomi": [
      "ハク",
      "ビャク"
    ],
    "kunyomi": [
      "しろ",
      "しろい"
    ],
    "kosakata": [
      {
        "kata": "白人",
        "reading": "はくじん",
        "arti": "Orang kulit putih"
      },
      {
        "kata": "白金",
        "reading": "しろがね",
        "arti": "Perak"
      }
    ]
  }
];

const conversations = [
  {
    title: "Percakapan di sekolah",
    focus: ["日", "本", "語", "学", "校", "先", "生"],
    lines: [
      { speaker: "A", jp: "日本語の先生は学校にいますか。", romaji: "Nihongo no sensei wa gakkou ni imasu ka.", arti: "Apakah guru bahasa Jepang ada di sekolah?" },
      { speaker: "B", jp: "はい、先生は教室にいます。", romaji: "Hai, sensei wa kyoushitsu ni imasu.", arti: "Ya, guru ada di kelas." },
      { speaker: "A", jp: "今日、日本語を勉強します。", romaji: "Kyou, nihongo o benkyou shimasu.", arti: "Hari ini saya belajar bahasa Jepang." }
    ]
  },
  {
    title: "Percakapan di stasiun",
    focus: ["駅", "前", "車", "行", "来", "時"],
    lines: [
      { speaker: "A", jp: "駅前に電車が来ますか。", romaji: "Ekimae ni densha ga kimasu ka.", arti: "Apakah kereta datang ke depan stasiun?" },
      { speaker: "B", jp: "はい、三時に来ます。", romaji: "Hai, san-ji ni kimasu.", arti: "Ya, datang jam tiga." },
      { speaker: "A", jp: "私は駅へ行きます。", romaji: "Watashi wa eki e ikimasu.", arti: "Saya pergi ke stasiun." }
    ]
  },
  {
    title: "Percakapan saat belanja",
    focus: ["店", "買", "金", "円", "高", "安"],
    lines: [
      { speaker: "A", jp: "この店で本を買います。", romaji: "Kono mise de hon o kaimasu.", arti: "Saya membeli buku di toko ini." },
      { speaker: "B", jp: "その本は百円です。", romaji: "Sono hon wa hyaku-en desu.", arti: "Buku itu seratus yen." },
      { speaker: "A", jp: "安いですね。", romaji: "Yasui desu ne.", arti: "Murah ya." }
    ]
  },
  {
    title: "Percakapan sehari-hari",
    focus: ["食", "飲", "水", "何", "人", "友"],
    lines: [
      { speaker: "A", jp: "何を食べますか。", romaji: "Nani o tabemasu ka.", arti: "Mau makan apa?" },
      { speaker: "B", jp: "魚を食べて、水を飲みます。", romaji: "Sakana o tabete, mizu o nomimasu.", arti: "Saya makan ikan dan minum air." },
      { speaker: "A", jp: "友達も来ます。", romaji: "Tomodachi mo kimasu.", arti: "Teman juga akan datang." }
    ]
  }
];
