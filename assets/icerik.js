/* =========================================================
   STUDIO DGO — SİTE İÇERİĞİ
   Sitenin tüm metinleri ve projeler bu dosyadan yönetilir.
   HTML dosyalarına dokunmanıza gerek yok.
   ========================================================= */

window.SITE = {
  ad: "STUDIO DGO",
  slogan: "Mimarlık · İç Mimarlık · Tasarım",
  // Ana sayfadaki büyük görselde gösterilecek projenin "slug" değeri
  oneCikanProje: "az-house-kuzguncuk",

  hakkimizda: [
    "Buraya ofisinizi tanıtan ilk paragrafı yazın: ne zaman kuruldu, hangi alanlarda çalışıyorsunuz.",
    "İkinci paragraf: tasarım yaklaşımınız, malzeme ve bağlama dair düşünceleriniz.",
    "Üçüncü paragraf (isteğe bağlı): ekip, ödüller, yayınlar."
  ],
  ekip: [
    // { ad: "Ad Soyad", unvan: "Kurucu Mimar", foto: "images/ekip/ad-soyad.jpg" },
  ],

  iletisim: {
    adres: "Adres satırı 1<br>İlçe, İstanbul, Türkiye",
    telefon: "+90 000 000 00 00",
    eposta: "info@studiodgo.com",
    harita: "" // Google Maps "Yerleştir" bağlantısı (iframe src) — boş bırakılırsa harita gösterilmez
  },

  sosyal: {
    instagram: "https://www.instagram.com/",
    linkedin: "",
    behance: ""
  }
};

/* ---------------------------------------------------------
   PROJELER
   Her proje için bir blok kopyalayıp doldurun.
   - slug: adres çubuğunda görünecek kısa ad (Türkçe karakter ve boşluk kullanmayın)
   - kapak: liste ve proje sayfasındaki ana görsel
   - galeri: proje sayfasındaki diğer görseller.
       Yatay/geniş bir görselin tam genişlikte görünmesi için
       { src: "images/...jpg", genis: true } şeklinde yazın;
       diğerleri ikişerli yan yana dizilir.
   - aciklama: her paragraf ayrı bir tırnak içinde
   Görselleri "images/" klasörüne koyun.
   Listede projeler bu dosyadaki sırayla görünür.
   --------------------------------------------------------- */

window.PROJELER = [
  {
    slug: "az-house-kuzguncuk",
    ad: "AZ House Kuzguncuk",
    yil: "",
    konum: "Kuzguncuk, İstanbul",
    kategori: "İç Mimarlık",
    alan: "",
    durum: "",
    kapak: "images/az-house-kuzguncuk/kapak.jpg",
    galeri: [
      { src: "images/az-house-kuzguncuk/01.jpg", genis: true },
      "images/az-house-kuzguncuk/02.jpg",
      "images/az-house-kuzguncuk/03.jpg",
      { src: "images/az-house-kuzguncuk/04.jpg", genis: true },
      "images/az-house-kuzguncuk/05.jpg",
      "images/az-house-kuzguncuk/06.jpg",
      { src: "images/az-house-kuzguncuk/07.jpg", genis: true }
    ],
    aciklama: [],
    fotograf: ""
  }

  /* YENİ PROJE ŞABLONU — kopyalayıp yukarıdaki bloğun sonuna virgül koyarak ekleyin:
  ,{
    slug: "proje-adi",
    ad: "Proje Adı",
    yil: "2026",
    konum: "Şehir",
    kategori: "Konut",
    alan: "000 m²",
    durum: "Tamamlandı",
    kapak: "images/proje-adi/kapak.jpg",
    galeri: [ { src: "images/proje-adi/01.jpg", genis: true }, "images/proje-adi/02.jpg", "images/proje-adi/03.jpg" ],
    aciklama: [ "Birinci paragraf.", "İkinci paragraf." ],
    fotograf: ""
  }
  */
];
