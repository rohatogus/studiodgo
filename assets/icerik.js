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

  hakkimizda: {
    baslik: "İki disiplin. Ortak bir vizyon.",
    giris: "Studio DGO, mimarlık ve mühendisliğin farklı bakış açılarını ortak bir tasarım anlayışında buluşturan, İstanbul merkezli bağımsız bir tasarım stüdyosudur.",
    paragraflar: [
      "Mimar Defne Gündoğdu Oğus ve mühendis Hüseyin Rohat Oğus tarafından kurulan Studio DGO, yaratıcı düşünceyi teknik uzmanlıkla bir araya getirerek estetik, işlevsellik ve uygulama kalitesini bir bütün olarak ele alır.",
      "İstanbul Bilgi Üniversitesi Mimarlık Bölümü mezunu Defne Gündoğdu Oğus, Türkiye ve Hollanda'da edindiği profesyonel deneyimlerle mimari tasarım, iç mekân tasarımı ve proje koordinasyonu alanlarında uzmanlaşmıştır. Farklı kültürler ve çalışma disiplinleri içerisinde geliştirdiği bakış açısı, özgün tasarım anlayışını detaylara gösterilen özen ve güçlü bir mekânsal duyarlılıkla birleştirir.",
      "Yıldız Teknik Üniversitesi mezunu Hüseyin Rohat Oğus ise gemi inşa ve yat sektöründe edindiği mühendislik ve proje yönetimi deneyimiyle stüdyonun teknik yaklaşımına yön verir. Uluslararası standartlarda yürütülen, yüksek hassasiyet ve disiplinler arası koordinasyon gerektiren projelerde kazandığı uzmanlık, tasarım fikirlerinin uygulanabilir ve nitelikli çözümlere dönüşmesini destekler."
    ],
    yaklasimBaslik: "Tasarıma yaklaşımımız",
    yaklasimGiris: "Bizim için iyi tasarım, yalnızca estetik bir sonuç değil; düşünce, işlev ve teknik doğruluğun dengeli bir birlikteliğidir.",
    yaklasim: [
      "Her projeye kendine özgü bir kimlik kazandırmayı amaçlıyor; mekânın karakterini, kullanıcıların ihtiyaçlarını ve malzemenin potansiyelini tasarım sürecinin merkezine yerleştiriyoruz.",
      "Mimarlığın yaratıcı yaklaşımını mühendisliğin analitik bakış açısıyla birleştirerek, ilk fikirden son uygulama detayına kadar her aşamada bütüncül bir tasarım anlayışı benimsiyoruz.",
      "Amacımız, yalnızca bugünün ihtiyaçlarına cevap veren değil, zamanla değerini ve karakterini koruyan mekânlar tasarlamak."
    ],
    slogan: "Designed with intention. Built with precision."
  },
  // Kurucular — foto eklenirse görsel de gösterilir
  ekip: [
    { ad: "Defne Gündoğdu Oğus", unvan: "Kurucu · Mimar", foto: "" },
    { ad: "Hüseyin Rohat Oğus", unvan: "Kurucu · Mühendis", foto: "" }
  ],

  iletisim: {
    adres: "",   // örn: "Sokak No:1<br>Sarıyer, İstanbul" — boşsa gösterilmez
    telefon: "", // örn: "+90 212 000 00 00" — boşsa gösterilmez
    eposta: "info@studiodgo.com",
    harita: "" // Google Maps "Yerleştir" bağlantısı (iframe src) — boş bırakılırsa harita gösterilmez
  },

  sosyal: {
    instagram: "https://www.instagram.com/studiodgo/",
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
    slug: "eu-house-ulus",
    ad: "EU House Ulus",
    yil: "2026",
    konum: "Ulus, İstanbul",
    kategori: "İç Mimarlık",
    alan: "",
    durum: "",
    kapak: "images/eu-house-ulus/kapak.jpg",
    galeri: [
      { src: "images/eu-house-ulus/01.jpg", genis: true },
      "images/eu-house-ulus/02.jpg",
      "images/eu-house-ulus/03.jpg",
      { src: "images/eu-house-ulus/04.jpg", genis: true },
      "images/eu-house-ulus/05.jpg",
      "images/eu-house-ulus/06.jpg",
      { src: "images/eu-house-ulus/07.jpg", genis: true },
      "images/eu-house-ulus/08.jpg",
      "images/eu-house-ulus/09.jpg",
      { src: "images/eu-house-ulus/10.jpg", genis: true },
      { src: "images/eu-house-ulus/11.jpg", genis: true },
      { src: "images/eu-house-ulus/12.jpg", genis: true },
      "images/eu-house-ulus/13.jpg",
      "images/eu-house-ulus/14.jpg"
    ],
    aciklama: [],
    fotograf: ""
  },
  {
    slug: "az-house-kuzguncuk",
    ad: "AZ House Kuzguncuk",
    yil: "2026",
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
