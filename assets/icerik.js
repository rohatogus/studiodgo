/* =========================================================
   STUDIO DGO — SİTE İÇERİĞİ
   Sitenin tüm metinleri ve projeler bu dosyadan yönetilir.
   HTML dosyalarına dokunmanıza gerek yok.
   ========================================================= */

/* DİLLER: Çevrilebilen her metin { tr: "...", en: "...", nl: "..." } şeklinde yazılır.
   Bir dilde metin yoksa Türkçesi gösterilir. Düz yazılmış metin ("...") her dilde aynı kalır. */

window.SITE = {
  ad: "STUDIO DGO",
  slogan: {
    tr: "Mimarlık · İç Mimarlık · Tasarım",
    en: "Architecture · Interior Design · Design",
    nl: "Architectuur · Interieurontwerp · Ontwerp"
  },
  // Ana sayfadaki büyük görselde gösterilecek projenin "slug" değeri
  oneCikanProje: "az-house-kuzguncuk",

  hakkimizda: {
    tr: {
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
    en: {
      baslik: "Two disciplines. One shared vision.",
      giris: "Studio DGO is an independent, Istanbul-based design studio that brings the different perspectives of architecture and engineering together in a shared approach to design.",
      paragraflar: [
        "Founded by architect Defne Gündoğdu Oğus and engineer Hüseyin Rohat Oğus, Studio DGO combines creative thinking with technical expertise, treating aesthetics, function and build quality as one whole.",
        "A graduate of the Department of Architecture at Istanbul Bilgi University, Defne Gündoğdu Oğus specialised in architectural design, interior design and project coordination through professional experience in Türkiye and the Netherlands. The perspective she developed across different cultures and ways of working combines an original design sensibility with careful attention to detail and a strong sense of space.",
        "A graduate of Yıldız Technical University, Hüseyin Rohat Oğus shapes the studio's technical approach with his engineering and project management experience in the shipbuilding and yacht industry. His expertise in projects carried out to international standards, demanding high precision and interdisciplinary coordination, helps turn design ideas into buildable, high-quality solutions."
      ],
      yaklasimBaslik: "Our approach to design",
      yaklasimGiris: "For us, good design is not just an aesthetic outcome; it is a balanced union of thought, function and technical accuracy.",
      yaklasim: [
        "We aim to give every project its own identity, placing the character of the space, the needs of the people who use it and the potential of materials at the heart of the design process.",
        "By combining the creative approach of architecture with the analytical perspective of engineering, we take a holistic approach at every stage, from the first idea to the final construction detail.",
        "Our goal is to design spaces that not only meet today's needs but keep their value and character over time."
      ],
      slogan: "Designed with intention. Built with precision."
    },
    nl: {
      baslik: "Twee disciplines. Eén gedeelde visie.",
      giris: "Studio DGO is een onafhankelijke ontwerpstudio in Istanbul die de verschillende invalshoeken van architectuur en engineering samenbrengt in één gedeelde ontwerpvisie.",
      paragraflar: [
        "Studio DGO is opgericht door architect Defne Gündoğdu Oğus en ingenieur Hüseyin Rohat Oğus en verbindt creatief denken met technische expertise. Esthetiek, functionaliteit en uitvoeringskwaliteit worden daarbij als één geheel benaderd.",
        "Defne Gündoğdu Oğus studeerde architectuur aan de Istanbul Bilgi Universiteit en specialiseerde zich, met werkervaring in Turkije en Nederland, in architectonisch ontwerp, interieurontwerp en projectcoördinatie. De blik die zij ontwikkelde binnen verschillende culturen en werkwijzen verbindt een eigen ontwerphouding met zorg voor detail en een sterk ruimtelijk gevoel.",
        "Hüseyin Rohat Oğus studeerde af aan de Yıldız Technische Universiteit en geeft met zijn ervaring in engineering en projectmanagement in de scheeps- en jachtbouw richting aan de technische aanpak van de studio. Zijn expertise in projecten volgens internationale standaarden, die hoge precisie en interdisciplinaire coördinatie vragen, helpt ontwerpideeën te vertalen naar uitvoerbare oplossingen van hoge kwaliteit."
      ],
      yaklasimBaslik: "Onze ontwerpaanpak",
      yaklasimGiris: "Goed ontwerp is voor ons niet alleen een esthetisch resultaat, maar een evenwichtige samenkomst van idee, functie en technische nauwkeurigheid.",
      yaklasim: [
        "We willen elk project een eigen identiteit geven en plaatsen het karakter van de ruimte, de behoeften van de gebruikers en de mogelijkheden van het materiaal centraal in het ontwerpproces.",
        "Door de creatieve benadering van architectuur te combineren met de analytische blik van engineering, kiezen we in elke fase voor een integrale aanpak, van het eerste idee tot het laatste uitvoeringsdetail.",
        "Ons doel is ruimtes te ontwerpen die niet alleen aan de behoeften van vandaag voldoen, maar ook na verloop van tijd hun waarde en karakter behouden."
      ],
      slogan: "Designed with intention. Built with precision."
    }
  },
  // Kurucular — foto eklenirse görsel de gösterilir
  ekip: [
    { ad: "Defne Gündoğdu Oğus", unvan: { tr: "Kurucu · Mimar", en: "Founder · Architect", nl: "Oprichter · Architect" }, foto: "" },
    { ad: "Hüseyin Rohat Oğus", unvan: { tr: "Kurucu · Mühendis", en: "Founder · Engineer", nl: "Oprichter · Ingenieur" }, foto: "" }
  ],

  iletisim: {
    baslik: { tr: "Bize ulaşın", en: "Get in touch", nl: "Neem contact op" },
    metin: {
      tr: "Yeni bir projeniz mi var? Projeniz hakkında konuşmak, bilgi almak ya da teklif istemek için bize e-posta ile yazabilirsiniz. En kısa sürede size dönüş yapacağız.",
      en: "Have a new project in mind? Write to us by email to talk about your project, ask a question or request a quote. We will get back to you as soon as possible.",
      nl: "Heeft u een nieuw project? Stuur ons een e-mail om over uw project te praten, informatie te vragen of een offerte aan te vragen. We nemen zo snel mogelijk contact met u op."
    },
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
    konum: { tr: "Ulus, İstanbul", en: "Ulus, Istanbul", nl: "Ulus, Istanbul" },
    kategori: { tr: "İç Mimarlık", en: "Interior Design", nl: "Interieurontwerp" },
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
    konum: { tr: "Kuzguncuk, İstanbul", en: "Kuzguncuk, Istanbul", nl: "Kuzguncuk, Istanbul" },
    kategori: { tr: "İç Mimarlık", en: "Interior Design", nl: "Interieurontwerp" },
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
