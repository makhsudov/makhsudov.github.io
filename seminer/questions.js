const ALL_QUESTIONS = [
  {
    "q": "Aşağıdakilerden hangisi RPA (Robotik Süreç Otomasyonu) için doğru bir tanımdır?",
    "opts": ["Fiziksel robotların üretim bantlarında görev yapmasıdır", "Yazılım botlarının tekrarlayan dijital görevleri insan yerine otomatik olarak yürütmesidir", "Yapay zekanın bağımsız karar alarak iş süreçlerini yönetmesidir", "İnsan kaynaklarının dijital ortama aktarılmasıdır"],
    "ans": 1
  },
  {
    "q": "Selenium ile RPA araçları arasındaki ilişki aşağıdakilerden hangisinde doğru açıklanmıştır?",
    "opts": ["Selenium bir RPA aracıdır ve UiPath'in rakibidir", "Selenium yalnızca mobil uygulama testlerinde kullanılır, RPA ile ilgisi yoktur", "Selenium bir RPA aracı değildir; ancak UiPath gibi RPA araçları web işlemlerinde Selenium'u bileşen olarak kullanabilir", "Selenium ve RPA tamamen aynı teknolojidir, sadece isimleri farklıdır"],
    "ans": 3
  },
  {
    "q": "RPA'nın en büyük avantajlarından biri insan hatasını azaltmasıdır. Ancak hangi durumda bu avantaj sınırlı kalır?",
    "opts": ["Yapılandırılmış verilerle çalışıldığında", "Yapılandırılmamış verilerle çalışıldığında", "7/24 kesintisiz çalışıldığında", "Finans sektöründe kullanıldığında"],
    "ans": 1
  },
  {
    "q": "Sosyal medya platformlarında 'örtük veri' (implicit data) toplama süreçleri düşünüldüğünde aşağıdakilerden hangisini doğrudan bir 'örtük veri' kaynağı olarak değerlendirmek mümkündür?",
    "opts": ["Kullanıcının bir gönderiye attığı yorumun metni", "Kullanıcının bir videoyu izlerken duraksadığı saniyeler", "Kullanıcının profil alanına girdiği ilgi alanları", "Kullanıcının bir markanın gönderisine \"İlgilenmiyorum\" seçeneğini işaretlemesi"],
    "ans": 1
  },
  {
    "q": "Sosyal ağların dikey, kısa videolara ve ilgi alanına dayalı sonsuz akış (feed) modellerine doğru evrilmesini ifade eden güncel kavram aşağıdakilerden hangisidir?",
    "opts": ["Datafication", "Atomization", "Tiktokification", "Gamification"],
    "ans": 2
  },
  {
    "q": "Instagram algoritması, kullanıcının bir içerikle kurduğu etkileşimi değerlendirirken hangi aksiyona en yüksek ağırlığı verir?",
    "opts": ["Profil Ziyareti", "Kaydetme ve DM paylaşımı", "Beğeni", "Yorum"],
    "ans": 1
  },
  {
    "q": "Sosyal medyanın bireylerde kaygı (anksiyete) oluşturmasının temel nedenlerinden biri aşağıdakilerden hangisidir?",
    "opts": ["Fiziksel aktiviteyi artırması", "Uyku düzenini tamamen düzene sokması", "Sürekli başkalarıyla karşılaştırma yapılmasına neden olması", "Yüz yüze iletişimi artırması"],
    "ans": 2
  },
  {
    "q": "Aşağıdakilerden hangisi sosyal medyanın olumlu etkilerinden biri değildir?",
    "opts": ["İnsanlar arası iletişimi kolaylaştırması", "Bilgiye hızlı erişim sağlaması", "Bağımlılık oluşturma riskinin olması", "Farklı kültürleri tanıma imkanı sunması"],
    "ans": 2
  },
  {
    "q": "Bir öğrenci, sosyal medyada geçirdiği süre arttıkça kendini yetersiz hissetmeye başladığını fark ediyor. Bu durumun en olası nedeni aşağıdakilerden hangisidir?",
    "opts": ["Sosyal medyanın yalnızca eğlence amaçlı kullanılması", "Sosyal medyada geçirilen sürenin kısa olması", "Sosyal medyada gerçekçi olmayan hayatların idealize edilmesi", "Sosyal medyanın ders çalışmayı kolaylaştırması"],
    "ans": 2
  },
  {
    "q": "Aşağıdakilerden hangisi bir bireyin \"Doomscrolling\" yaptığını gösterir?",
    "opts": ["Bir kutlamanın canlı yayınını izlemek", "Stres oluşturmasına rağmen, olumsuz haberleri saatlerce kaydırmak", "Gelecek hafta için hava durumunu kontrol etmek", "Tarihsel bir olay hakkında eğitici ve uzun bir makale okumak"],
    "ans": 1
  },
  {
    "q": "Psikolojide \"Olumsuzluğa Yatkınlık\" olarak adlandırılan ve insanların çoğu zaman negatif içeriklere yönlenmesine sebep olan durum aşağıdakilerden hangisidir?",
    "opts": ["Sosyal medya platformlarının pürüzsüz bir gezinme sunması", "Çoğu insanın üzgün veya endişeli hissetmekten hoşlanması", "Negatif haberlerin pozitif haberlere göre daha doğru olması", "Beyinlerimizin kalıtımsal olarak \"tehlike\" ve \"tehdit\" uyaranlarına karşı daha çok dikkat göstermesi"],
    "ans": 3
  },
  {
    "q": "Aşağıdakilerden hangisi Doomscrolling yapılmasını azaltabilecek/engelleyebilecek önlemlerden birisidir?",
    "opts": ["Uygulama sınırları getirmek ve ekran süresi uyarılarını açmak", "Daha büyük ekranlı yeni bir telefon almak", "Yazıları daha iyi görebilmek için ekran parlaklığını artırmak", "Telefonu yatağın dibinde şarj etmek"],
    "ans": 0
  },
  {
    "q": "Bir öğrenci yeni bir konuyu öğrenirken ilk başta zorlanmakta, ancak düzenli tekrar yaptıkça konuyu daha hızlı ve kolay kavramaya başlamaktadır. Bu durum aşağıdakilerden hangisi ile en iyi açıklanır?",
    "opts": ["Nöron sayısının artması", "Nöronlar arası bağlantıların güçlenmesi", "Beynin sabit yapıda olması", "Stres hormonlarının tamamen yok olması"],
    "ans": 1
  },
  {
    "q": "Yoğun stres altında çalışan bir öğrencinin kısa vadede daha odaklı olduğu, ancak uzun vadede öğrenme performansının düştüğü gözlemleniyor. Bu durum aşağıdakilerden hangisi ile en doğru şekilde açıklanabilir?",
    "opts": ["Stresin her zaman öğrenmeyi artırması", "Kısa süreli stresin uyarıcı, uzun süreli stresin ise yıkıcı etkisi olması", "Beynin stres altında tamamen durması", "Öğrenmenin sadece tekrar ile gerçekleşmesi"],
    "ans": 1
  },
  {
    "q": "Bir birey kötü alışkanlıklarını bırakmak ve daha sağlıklı bir yaşam tarzı benimsemek için terapiye başlamıştır. Bu sürecin başarılı olması aşağıdakilerden hangisi ile açıklanabilir?",
    "opts": ["Beynin belirli bir yaştan sonra değişmemesi", "Nöronların tamamen yok olması", "Beynin yeni bağlantılar kurarak kendini yeniden organize edebilmesi", "Sadece genetik faktörlerin etkili olması"],
    "ans": 2
  },
  {
    "q": "MAVLink protokolü kullanılarak İnsansız Hava Aracı'ndan (İHA) Yer Kontrol İstasyonu'na (GCS) gönderilen 'Downlink' akışında aşağıdakilerden hangileri yer alır?",
    "opts": ["Komutlar, Waypointler ve Mod bilgisi", "Telemetri, Video ve Durum bilgileri", "Sadece uçuş kontrol kartı güncellemeleri", "Ardupilot yazılım ekosistemi kaynak kodları"],
    "ans": 1
  },
  {
    "q": "PID kontrol mekanizmasında yer alan 'Integral (Birikim)(I)' teriminin sistem üzerindeki temel etkisi nedir?",
    "opts": ["Sistemin gürültüye karşı duyarlılığını artırarak titreşimi azaltır", "Hatanın değişim hızına tepki vererek gelecekteki salınımı önler", "Zamanla biriken ve sistemde kalıcı hale gelen \"steady-state\" hatasını yok eder", "Anlık hataya göre güçlü veya hafif müdahale ederek hızlı tepki sağlar"],
    "ans": 2
  },
  {
    "q": "SITL (Software-In-The-Loop) ve 'Gazebo' simülasyon döngüsünün, gerçek bir İHA'yı sahada uçurmadan önce uygulanmasının en kritik avantajı nedir?",
    "opts": ["İHA'nın fiziksel batarya ömrünü yazılımsal olarak uzatmak", "Yer kontrol istasyonunu görsel tasarımını güzelleştirmek", "Manuel uçuş becerilerini pilot için daha eğlenceli hale getirmek", "Geliştirilen otonom görevlerin ve PID ayarlarının risksiz bir ortamda test edilerek kaza maliyetlerini önlemek"],
    "ans": 3
  },
  {
    "q": "Aşağıdakilerden hangisi Murphy Kanunları'na örnek olabilir?",
    "opts": ["Sınava çok çalışıp yüksek not almak", "Telefonun en önemli anda şarjının bitmesi", "Planlı bir gün geçirmek", "Trafiksiz bir yolda gitmek"],
    "ans": 1
  },
  {
    "q": "Bir öğrenci ödevini tam zamanında bitirir, ancak tam teslim edecekken internet kesilir. Bu durum Murphy Kanunları açısından nasıl yorumlanabilir?",
    "opts": ["Bu tamamen tesadüftür ve anlamı yoktur", "Öğrenci yeterince çalışmamıştır", "Aksiliklerin en kötü zamanda gerçekleşmesi Murphy Kanunları'nı destekler", "İnternet her zaman sorunsuz çalışır"],
    "ans": 2
  },
  {
    "q": "Bir kişi yağmur yağma ihtimali düşük diye şemsiye almaz ve o gün aniden yağmur yağar. Bu durum Murphy Kanunları'na göre nasıl açıklanır?",
    "opts": ["Hava durumu tahminleri her zaman yanlıştır", "Kişi tamamen şanssızdır", "Ters gidebilecek durumlar genellikle en beklenmedik anda gerçekleşir", "Yağmur mevsimsel bir olaydır"],
    "ans": 2
  },
  {
    "q": "Aşağıdakilerden hangisi insanı tefekküre daha çok sevk eder?",
    "opts": ["Doğadaki düzeni sadece alışkanlık gibi görmek", "Kanunları mutlak ve bağımsız güçler kabul etmek", "Sebeplerin arkasında işleyen hikmet, ölçü ve iradeyi sorgulamak", "Hiçbir şeyi sorgulamadan ezber açıklamalarla yetinmek"],
    "ans": 2
  },
  {
    "q": "İnsanlar neden çoğu zaman kanunların bizzat iş yaptığını düşünür?",
    "opts": ["Çünkü tekrar eden olaylar, insan zihninde kanunları gerçek bir fail gibi gösterir", "Çünkü kanunlar maddi bir el gibi nesnelere doğrudan müdahale eder", "Çünkü her bilim insanı kanunların şuurlu olduğunu kabul eder", "Çünkü kanunlar yalnızca dinî inançları zayıflatmak için ortaya atılmıştır"],
    "ans": 0
  },
  {
    "q": "Bir cismin yere düşmesini \"yerçekimi kanunu\" ile açıklamak, aşağıdakilerden hangisini tek başına açıklamaz?",
    "opts": ["Cismin hangi düzene göre düştüğünü", "Düşmenin belirli bir kurallılık ve örüntü içinde gerçekleştiğini", "Bu düzenin niçin var olduğunu, neden bozulmadan sürdüğünü ve hangi iradeye dayandığını", "Cisimlerin yere doğru dünya yüzeyinde 9,81 m/s² hızında hareket ettiğini"],
    "ans": 2
  },
  {
    "q": "Dopaminin \"ödül beklentisi ile davranışı yönlendirmesi\" özelliği aşağıdakilerden hangisini açıklar?",
    "opts": ["İnsanların sadece reflekslerle hareket etmesini", "Davranışların rastgele oluşmasını", "İnsanların gelecekteki ödül için harekete geçmesini", "Beynin yalnızca geçmiş deneyimlere tepki vermesini"],
    "ans": 2
  },
  {
    "q": "Dopamin detoksu uygulayan bir kişinin temel amacı aşağıdakilerden hangisidir?",
    "opts": ["Dopamin üretimini tamamen durdurmak", "Beyni ödül sistemine karşı duyarsız hale getirmek", "Fiziksel performansı artırmak", "Aşırı uyarılmayı azaltarak davranış kontrolünü artırmak"],
    "ans": 3
  },
  {
    "q": "Bir kişi başlangıçta keyif aldığı bir aktiviteden (örneğin sosyal medya) zamanla daha az zevk almaya başlıyor ve aynı hazzı elde etmek için daha fazla zaman harcıyorsa, bu durum aşağıdakilerden hangisi ile en iyi açıklanır?",
    "opts": ["Dopamin üretiminin tamamen durması", "Dopaminin sadece fiziksel hareketleri etkilemesi", "Ödül sisteminin aşırı uyarılması ve tolerans gelişimi", "Beynin öğrenme mekanizmasının devre dışı kalması"],
    "ans": 2
  },
  {
    "q": "BDNF (Brain-Derived Neurotrophic Factor) molekülünün, sinir ağları üzerindeki ikili temel işlevi aşağıdakilerden hangisinde doğru olarak verilmiştir?",
    "opts": ["Sadece yeni nöronların oluşumunu hızlandırmak ve beyni kriz anlarında uyku moduna alarak dinlendirmek", "Kortizol seviyesini kalıcı olarak sıfırlayarak, bireyin panik duygusunu tamamen ortadan kaldırmak", "Yeni ve güçlü sinir bağlantılarının kurulmasını teşvik ederken, aynı anda kullanılmayan ve zayıf sinir ağlarını eleyip budamak", "Fiziksel travmaların beyne ulaşmasını engelleyen kalın bir koruyucu zar tabakası oluşturmak"],
    "ans": 2
  },
  {
    "q": "Bir bireyin günlük hayatında sürekli konfor alanına sığınması veya tam tersine korktuğu zorlu bir eyleme kendini mecbur bırakması durumunda aMCC bölgesinde nasıl bir fiziksel değişim yaşanması beklenir?",
    "opts": ["Konfor alanında kalındığında aMCC bölgesi mevcut formunu korurken, zorlu eylemlerde aşırı yüklenmeden dolayı tamamen işlevsiz hale gelir", "Birey korktuğu ve istemediği bir acıya veya zorluğa katlandığında aMCC bölgesi fiziksel olarak büyür (hipertrofi); bahanelerin arkasına sığınıp konfor alanında kalındığında ise hızla küçülür", "aMCC sadece genetik faktörlere bağlı olarak büyür; bireyin dış dünyada aldığı fiziksel veya psikolojik riskler bu bölgenin boyutunu etkilemez", "Zorlu ve stresli ortamlarda aMCC küçülerek beynin daha az enerji harcamasını sağlar; konfor alanında ise dinlenerek hacmini artırır"],
    "ans": 1
  },
  {
    "q": "Wolff Kanunu göz önüne alındığında, bir bireyin psikolojik dayanıklılığını, iradesini ve soğukkanlılık kapasitesini kalıcı olarak artırabilmesi için en uygun strateji aşağıdakilerden hangisidir?",
    "opts": ["Gerçek risk barındıran durumları yaşamdan tamamen izole ederek, zihni sürekli güvenli bir konfor alanında meşgul etmek", "Beynin strese bağlı yapısal değişimini engellemek adına, zorluklarla karşılaşıldığında sorumluluğu reddedip pasif bir duruş sergilemek", "Hata yapma payının sıfıra indiği, koruyucu psikolojik sığınakların çıkarıldığı ve gerçek sonuçları olan yüksek riskli durumlarla bilinçli olarak yüzleşmek", "Karar verme süreçlerini yavaşlatmak amacıyla çevresel uyarıcıların olmadığı, sadece tekrar eden ve risksiz alışkanlıklara odaklanmak"],
    "ans": 2
  },
  {
    "q": "Satrançta oyuncular taşlarını nasıl hareket ettirir?",
    "opts": ["Konuşarak", "Tahta üzerinde oynatarak", "Zar atarak", "Kart çekerek"],
    "ans": 1
  },
  {
    "q": "Satrançta oyunun amacı nedir?",
    "opts": ["Tüm taşları toplamak", "Rakibin şahını mat etmek", "Çok hamle yapmak", "Rakibin vezirini almak"],
    "ans": 1
  },
  {
    "q": "Satranç oynayan bir kişinin aşağıdaki özelliklerinden hangisini geliştirmesi beklenir?",
    "opts": ["Daha hızlı koşma", "Daha yüksek sesle konuşma", "Daha fazla yemek yeme", "Daha iyi düşünme ve plan yapma"],
    "ans": 3
  },
  {
    "q": "Sosyal mühendisliğin temel amacı aşağıdakilerden hangisidir?",
    "opts": ["Yazılım kodlarındaki açıkları bulmak", "Sunuculara kaba kuvvet (Brute Force) saldırısı yapmak", "Kurbanın güvenini kazanarak güvenlik prosedürlerini atlamak", "Veri tabanını fiziksel olarak çalmak"],
    "ans": 2
  },
  {
    "q": "\"Hesabınız ele geçirildi, hemen tıklayın!\" ifadesi hangi psikolojik tetikleyiciyi kullanmaktadır?",
    "opts": ["Korku ve Otorite", "Açgözlülük", "Merak", "Yardımseverlik"],
    "ans": 0
  },
  {
    "q": "Kurumsal savunmada en etkili hattın yazılımlar değil, 'Sürekli Eğitim' olduğu belirtilmiştir. Bunun temel sebebi nedir?",
    "opts": ["Yazılımların çok pahalı olması", "IT departmanının yükünü azaltmak", "Yasal zorunluluklar", "Güvenlik kültürünün tüm organizasyonun sorumluluğu olması"],
    "ans": 3
  },
  {
    "q": "Kuş türlerinin otomatik tanınması için geliştirilen yapay zeka sistemleri, geleneksel yöntemlere kıyasla hangi açıdan en büyük avantajı sağlar?",
    "opts": ["Yalnızca görsel analiz yapabilmesi", "Uzman ornitologlara ihtiyaç duyulmaması", "Ölçeklenebilir, otomatik ve 7/24 çalışabilir olması", "Yalnızca laboratuvar ortamında kullanılabilmesi"],
    "ans": 2
  },
  {
    "q": "Ses tabanlı kuş tanıma sistemlerinde ham ses sinyali önce hangi forma dönüştürülür ve bu dönüşümün temel amacı nedir?",
    "opts": ["MIDI formatına — müzik notalarına çevirmek için", "Mel Spektrogramına — sesi 2D görüntüye çevirerek CNN ile işleyebilmek için", "WAV formatına — dosya boyutunu küçültmek için", "MP3 formatına — sıkıştırma yaparak depolama alanı kazanmak için"],
    "ans": 1
  },
  {
    "q": "Merlin, iNaturalist ve Seek gibi kuş tanıma uygulamalarında \"Edge (on-device)\" yaklaşımının temel avantajı hangisidir?",
    "opts": ["Daha yüksek doğruluk oranı sağlaması", "Topluluk doğrulama sistemi sunması", "Daha fazla tür desteklemesi", "İnternet bağlantısı olmadan çalışabilmesi"],
    "ans": 3
  },
  {
    "q": "Erteleme davranışı psikolojide en doğru şekilde nasıl tanımlanır?",
    "opts": ["Zamanı kötü kullanma alışkanlığıdır", "Görevleri bilinçli olarak sonraya bırakmaktır", "Sadece tembellik sonucu ortaya çıkar", "Plan yapamama problemidir"],
    "ans": 1
  },
  {
    "q": "Aşağıdakilerden hangisi ertelemenin bilimsel nedenlerinden biri değildir?",
    "opts": ["Duygu yönetimi problemi olması", "Dopamin sisteminin etkisi", "Prefrontal korteksin güçlenmesi", "Negatif duygular (kaygı, korku)"],
    "ans": 2
  },
  {
    "q": "Bir öğrenci sınava çalışması gerektiğini bildiği halde sürekli telefonla vakit geçiriyor ve çalışmayı erteliyor. Bu durum aşağıdakilerden hangisiyle en iyi açıklanır?",
    "opts": ["Zaman yönetimi eksikliği", "Dopaminin hızlı ödül sağlaması nedeniyle kolay olanı seçmesi", "Prefrontal korteksin aşırı aktif olması", "Görevlerin çok kolay olması"],
    "ans": 1
  },
  {
    "q": "Aşağıdakilerden hangisi Roma'nın dönemlerinden birisi değildir?",
    "opts": ["Roma Şehir Devleti", "Roma Cumhuriyeti", "Roma İmparatorluğu", "Roma Arşidüklüğü"],
    "ans": 3
  },
  {
    "q": "Aşağıdakilerden hangisi bir Roma İmparatoru değildir?",
    "opts": ["Augustus", "Kanuni Sultan Süleyman", "Trajan", "Constantine the Great"],
    "ans": 1
  },
  {
    "q": "Aşağıdaki devletlerden hangisi Roma İmparatorluğu'nun varisi olduğunu iddia etmiştir?",
    "opts": ["Rusya", "Hindistan", "Çin", "Suriye"],
    "ans": 0
  },
  {
    "q": "Modern oyunlarda 'Never Trust the Client' (İstemciye Asla Güvenme) prensibinin temel amacı aşağıdakilerden hangisidir?",
    "opts": ["Bellek manipülasyonu yoluyla yapılan hilelerin önüne geçmek", "Oyunun grafik performansını arttırmak", "Oyuncuların internet kota kullanımını minimize etmek", "Oyunun açılış hızını arttırıp dosya boyutunu küçülterek oyuncunun sabretmesi gereken zamanı azaltmak"],
    "ans": 0
  },
  {
    "q": "PlayFab ve Firebase gibi servislerin 'Backend as a Service' (BaaS) olarak adlandırılmasının temel nedeni nedir?",
    "opts": ["Oyun motorlarını (Unity, Unreal) tamamen bulut üzerinden çalıştırmaları", "Geliştiricilerin sunucu altyapısıyla uğraşmadan hazır backend fonksiyonlarını kullanabilmelerine imkan sağlaması", "Oyunun sadece Steam platformunda çalışmasını zorunlu kılması", "Sadece grafik tasarımları için depolama alanı sunmaları"],
    "ans": 1
  },
  {
    "q": "Asenkron Veri Transferi yönteminin senkron transfere göre kullanıcı deneyimi açısından sağladığı temel fark nedir?",
    "opts": ["Veri paketlerinin kaybolma riskini tamamen ortadan kaldırarak veri bütünlüğünü garanti etmesi", "Veri iletimi sırasında ana işlem akışını (main thread) bloklamayarak oyunun akıcılığını koruması ve donmaları engellemesi", "Verileri tek bir büyük paket halinde göndererek internet bant genişliği kullanımını yarı yarıya düşürmesi", "Sunucu ve istemci arasındaki fiziksel mesafeden kaynaklanan ping (gecikme) süresini teorik olarak sıfıra indirmesi"],
    "ans": 1
  },
  {
    "q": "Eğlenceli oyunların iki temel yapısı nedir?",
    "opts": ["Game Lore - Game Core", "Game Horde - Game Core", "Game Horde - Game Code", "Game Lore - Game Code"],
    "ans": 0
  },
  {
    "q": "Oyunlar amaçlarına göre kaça ayrılır ve nedir?",
    "opts": ["Ayrılmaz; eğlence içindir", "2: eğlendirmek ve para kazanmak için olanlar", "3: eğlendirme, serious game ve education game", "Horror, fps, puzzle ve daha fazlası — sayılmayacak kadar çok"],
    "ans": 2
  },
  {
    "q": "Türkiye'de en büyük oyun şirketlerinden Rollic Games hangi şirkete satılmıştır?",
    "opts": ["Zyna", "Zinga", "Peak Games", "Zynga"],
    "ans": 3
  },
  {
    "q": "Nostalji kelimesinin kökeninde yer alan 'Algos' ifadesi neyi temsil eder?",
    "opts": ["Gelecek", "Hız", "Acı", "Mutluluk"],
    "ans": 2
  },
  {
    "q": "\"Zihnimiz aslında bir Photoshop sanatçısıdır\" ifadesiyle anlatılmak istenen temel düşünce aşağıdakilerden hangisidir?",
    "opts": ["Eski fotoğrafları dijital ortamda düzenleme yeteneğimiz", "Beynimizin geçmişteki gri bulutları (olumsuzlukları) silip sadece güneşli anları parlatması", "Teknoloji geliştikçe hafızamızın daha net çalışması", "Gelecek planlarımızı sürekli görselleştirerek kurgulamamız"],
    "ans": 1
  },
  {
    "q": "Atatürk'ün \"Geçmişini bilmeyen bir millet, geleceğine yön veremez\" sözünü sunumun finaline bağlarsak, geçmişin bizim için asıl işlevi ne olmalıdır?",
    "opts": ["Bugünün zorluklarından kaçmak için bir sığınak", "Sadece yaşlıların konuştuğu bir \"eski bayramlar\" hikâyesi", "Tamamen unutulması gereken bir yük", "Geleceği şekillendirmek ve yön vermek için kullanılan bir \"yakıt deposu\""],
    "ans": 3
  },
  {
    "q": "One-Hot Encoding ile Embedding arasındaki temel fark nedir?",
    "opts": ["One-Hot Encoding daha fazla boyut kullanır", "One-Hot Encoding kelimeler arası anlam ilişkisini koruyamaz, Embedding korur", "Embedding sadece görsel veriler için kullanılır", "İkisi arasında fark yoktur"],
    "ans": 1
  },
  {
    "q": "Embedding'de iki vektör arasındaki benzerliği ölçmek için hangi yöntemler kullanılır?",
    "opts": ["Backpropagation ve Tokenization", "One-Hot Encoding ve Bag of Words", "Cosine Similarity ve Euclidean Distance", "Word2Vec ve FastText"],
    "ans": 2
  },
  {
    "q": "Vektör uzayında birbirine yakın konumda bulunan kelimeler ne anlama gelir?",
    "opts": ["Aynı harfle başladıklarını gösterir", "Aynı cümlede geçtikleri anlamına gelir", "Anlamca birbirine benzer olduklarını gösterir", "Zıt anlamlı olduklarını gösterir"],
    "ans": 2
  },
  {
    "q": "Slurm kuyruk sisteminde, bir işin durumunun 'PD' (Pending) olarak görünmesi ve gerekçe olarak '(Resources)' yazması ne anlama gelir?",
    "opts": ["İş gönderilirken yanlış bir komut dizimi (syntax) kullanılmıştır", "İşin çalışması için gereken CPU, GPU veya bellek gibi kaynaklar şu an başka işler tarafından kullanılmaktadır", "Kullanıcının dosya izinleri yetersizdir ve Slurm verilere erişemiyordur", "İşlemci üzerinde donanımsal bir arıza meydana gelmiştir"],
    "ans": 1
  },
  {
    "q": "Kullanıcıların kuyruktaki veya çalışan işlerin durumunu listelemek için kullandığı temel komut hangisidir?",
    "opts": ["sbatch", "scancel", "squeue", "sinfo"],
    "ans": 2
  },
  {
    "q": "Slurm mimarisinde \"merkezi denetimi\" sağlayan ve yönetim düğümünde (head node) çalışan bileşen aşağıdakilerden hangisidir?",
    "opts": ["slurmd", "slurmctld", "srun", "Node"],
    "ans": 1
  },
  {
    "q": "Kahve neden buzdolabında saklanmamalıdır?",
    "opts": ["Kafein soğukta kristalleştiği için", "Kahve çok soğuyunca demlendiği için", "Kahve bir sünger gibi ortamdaki kokuları emdiği için", "Kahve çekirdekleri soğukta çatladığı için"],
    "ans": 2
  },
  {
    "q": "Kahvenin dünyaya yayıldığı, bugün 'çikolatamsı tadıyla' bilinen meşhur liman kenti hangisidir?",
    "opts": ["Mocha (Moka)", "İstanbul", "Viyana", "Kaffa"],
    "ans": 0
  },
  {
    "q": "Fillerin kahve bahçelerine girmesini engellemek için mandalinaların ekilmesi kahvenin tadını nasıl etkilemiştir?",
    "opts": ["Kahveyi acılaştırmıştır", "Kahveyi turunculaştırmıştır", "Kahveye tuzlu bir tat katmıştır", "Mandalina ve narenciye aromaları kazanmasını sağlamıştır"],
    "ans": 3
  },
  {
    "q": "Alexey Pajitnov, 1984'te Tetris'i geliştirdiğinde oyunun tamamen alfanümerik karakterlerden oluşmasının temel sebebi neydi?",
    "opts": ["Görsel tasarım yapmayı bilmemesi", "Metin tabanlı terminal ortamında geliştirmesi", "Daha erişilebilir ve anlaşılır olmasını hedeflemesi", "Görsel bileşenler için yeterli VRAM bulunmaması"],
    "ans": 1
  },
  {
    "q": "Modern Tetris'teki 7-bag randomizer sisteminin klasik tamamen rastgele üretime göre en önemli avantajı nedir?",
    "opts": ["Oyuncunun aynı taşı defalarca alabilmesini sağlaması", "Taşların her elde eşit olasılıkla seçilmesini sağlaması", "Taş üretiminde kıtlık ve aşırılığı önlemesi", "Oyunun işlem performansını artırması"],
    "ans": 2
  },
  {
    "q": "Tetris oyuncularının çok yüksek hızlarda taşları vaktinde konumlandırabilmek için kullandığı \"rolling\" tekniği aşağıdakilerden hangisi ile açıklanabilir?",
    "opts": ["Tuşa uzun süre basılı tutarak otomatik hareket ettirmek", "Parmakları kontrolcünün arkasından sırayla vurarak çok hızlı input üretmek", "Analog çubuğu dairesel hareket ettirerek taşı hızlandırmak", "Taşı hızla yere düşürmek"],
    "ans": 1
  },
  {
    "q": "Propaganda kavramını kitle manipülasyonundan ayıran en temel özellik aşağıdakilerden hangisidir?",
    "opts": ["Herhangi bir hazırlık gerektirmeyen anlık bir etkileşim olması", "Daha organize, planlı ve sistemli bir iletişim süreci olması", "Bireylerin fikirlerini tamamen kendi özgür iradeleriyle değiştirmesini sağlaması", "Sadece sosyal medya platformlarında kullanılması"],
    "ans": 1
  },
  {
    "q": "'Propaganda Nedir?' tanımına göre aşağıdakilerden hangisi bu kavramın temel özelliklerinden biridir?",
    "opts": ["Bireysel ve anlık iletişim", "Planlı ve sistemli iletişim", "Sadece doğru bilgiyi yayma amacı", "Rastgele seçilen kitlelere hitap etme"],
    "ans": 1
  },
  {
    "q": "Bir mesajın sürekli tekrar edilmesi, insanların düşüncelerini nasıl etkileyebilir?",
    "opts": ["Mesajın daha çabuk unutulmasını sağlar", "İnsanların mesajı sorgulamasını artırır", "Mesajın doğru olduğu algısını oluşturabilir", "Hiçbir etkisi olmaz"],
    "ans": 2
  },
  {
    "q": "NBA'de üçlük çizgisinin arkasından atılan üçlük atışlar kaç sayıdır?",
    "opts": ["3", "4", "1", "2"],
    "ans": 0
  },
  {
    "q": "Sunumdaki \"Beklenen Değer\" formülüne göre (İsabet Oranı × Sayı), %36 isabetle atılan bir üçlük şutun beklenen sayı değeri nedir?",
    "opts": ["1.08", "10", "15", "20"],
    "ans": 0
  },
  {
    "q": "\"Stephen Curry Etkisi\" slaytında yer alan bilgilere göre, tüm zamanların üçlük lideri olan oyuncu aşağıdakilerden hangisidir?",
    "opts": ["Stephen Curry", "Hidayet Türkoğlu", "Mehmet Okur", "Alperen Şengün"],
    "ans": 0
  }, 
  {
    "q": "Paris'te sergilenen ünlü Mona Lisa tablosu hangi müzede sergilenmektedir?",
    "opts": ["D'Orsay Müzesi", "Louvre Müzesi", "Vatikan Müzesi", "Prado Müzesi"],
    "ans": 1
  },
  {
    "q": "\"Haute Couture\" aşağıdakilerden hangisini ifade eder?",
    "opts": ["Seri üretim kıyafetler", "Spor giyim tarzı", "Kişiye özel, el işçiliği yüksek moda", "Sokak modası"],
    "ans": 2
  },
  {
    "q": "Paris modası genellikle nasıl tanımlanır?",
    "opts": ["Abartılı ve renkli", "Spor ve rahat", "Eski ve modası geçmiş", "Sade ve şık"],
    "ans": 3
  },
  {
    "q": "SAP şirketi hangi ülkede kurulmuştur?",
    "opts": ["İngiltere", "Fransa", "İspanya", "Almanya"],
    "ans": 3
  },
  {
    "q": "Aşağıdakilerden hangisi SAP modülü değildir?",
    "opts": ["ERP (kurumsal yazılım planlaması)", "FI (finansal muhasebe)", "HR (insan kaynakları)", "PP (üretim planlama)"],
    "ans": 0
  },
  {
    "q": "SAP kurumlarda hangi görevi üstlenir?",
    "opts": ["İş yükünü arttırmayı", "Bütün departmanların tek bir merkezden yönetilip otomatik hale getirilmesini", "Maliyeti arttırmayı", "İşçi sayısını arttırmayı"],
    "ans": 1
  },
  {
    "q": "Sosyal medyada beğeni aldığımızda beyinde hangi kimyasal salgılanır?",
    "opts": ["Kortizol", "Melatonin", "Dopamin", "Serotonin"],
    "ans": 2
  },
  {
    "q": "Gece yatmadan önce telefon kullanmak ne yapar?",
    "opts": ["Uykuya geçişi kolaylaştırır", "Melatonin salgısını artırır", "Melatonin salgısını baskılar, uykuyu zorlaştırır", "Hiçbir etkisi yoktur"],
    "ans": 2
  },
  {
    "q": "Hangisi sosyal medya bağımlılığının belirtisi DEĞİLDİR?",
    "opts": ["Telefonu bırakamama", "Kitap okurken rahatsızlık hissetmeme", "Bildirimleri sürekli kontrol etme", "Sosyal medyasız huzursuz olma"],
    "ans": 1
  },
  {
    "q": "Etiyopya'nın başkenti aşağıdakilerden hangisidir?",
    "opts": ["Nairobi", "Kahire", "Addis Ababa", "Dakar"],
    "ans": 2
  },
  {
    "q": "Aşağıdakilerden hangisi Etiyopya'nın kültürel özelliklerinden biridir?",
    "opts": ["Kendi alfabesine sahip olması", "Sadece İngilizce konuşulması", "Tek bir etnik yapıdan oluşması", "Deniz ticaretine bağımlı olması"],
    "ans": 0
  },
  {
    "q": "Aşağıdakilerden hangisi Adwa Savaşı ile ilgilidir?",
    "opts": ["Etiyopya'nın sömürgeleştirilmesi", "İtalya'nın Etiyopya'yı yenmesi", "Etiyopya'nın İtalya'ya karşı zafer kazanması", "Osmanlı İmparatorluğu ile yapılan savaş"],
    "ans": 2
  },
  {
    "q": "Malleus Maleficarum adlı eser hangi yılda yayımlanmıştır?",
    "opts": ["1486", "1519", "1489", "1591"],
    "ans": 0
  },
  {
    "q": "Cadı avlarında idam oranının en yüksek olduğu ülke hangisidir?",
    "opts": ["İrlanda", "İngiltere", "Almanya", "Amerika"],
    "ans": 2
  },
  {
    "q": "Cadı Davaları'nda ilk idam edilen kişi kimdir?",
    "opts": ["Elizabeth Parris", "Bridget Bishop", "Tituba", "Abigail Williams"],
    "ans": 1
  },
  {
    "q": "Sosyal mühendislik saldırılarının birincil hedefi aşağıdakilerden hangisidir?",
    "opts": ["Güvenlik duvarı (Firewall) yazılımları", "Bilgisayarların donanım bileşenleri", "Antivirüs programlarının veri tabanı", "İnsan psikolojisi ve kullanıcı zafiyetleri"],
    "ans": 3
  },
  {
    "q": "Yapay zeka (Deepfake) teknolojisinin sosyal mühendislik saldırılarına dahil olması, bu saldırıları 'geleneksel' oltalama e-postalarına göre neden çok daha tehlikeli bir hale getirmiştir?",
    "opts": ["Çünkü yapay zeka sadece büyük şirketleri hedef alır", "Çünkü yapay zeka kullanıldığında şifre korumaları kendiliğinden devre dışı kalır", "Ses ve görüntülerin gerçek zamanlı taklit edilmesi, insanın 'gördüğüne ve duyduğuna güvenme' zafiyetini en üst düzeyde sömürür", "Çünkü yapay zeka ile gönderilen e-postalar daha hızlı ulaşır"],
    "ans": 2
  },
  {
    "q": "Sosyal mühendislerin saldırılarında genellikle başarılı olmalarının en temel psikolojik sebebi nedir?",
    "opts": ["Korku, merak veya heyecan gibi duyguları tetikleyerek hızlı karar verdirmesi", "İnsanların teknolojik cihazları kullanmayı sevmemesi", "İnternet hızının saldırı anında çok yüksek olması", "Saldırganların tüm şifreleri önceden tahmin edebilmesi"],
    "ans": 0
  },
  {
    "q": "Kritik düşünmenin temel amacı aşağıdakilerden hangisidir?",
    "opts": ["Hızlı karar vermek", "Her bilgiyi doğru kabul etmek", "Bilgiyi sorgulayarak doğruya ulaşmak", "Başkalarının fikirlerini benimsemek"],
    "ans": 2
  },
  {
    "q": "Kendine rehberlik eden düşünce neyi ifade eder?",
    "opts": ["Başkalarının yönlendirmesiyle düşünmeyi", "Kendi düşüncelerini kontrol edip yönlendirmeyi", "Düşünmeden hızlı karar vermeyi", "Ezbere dayalı düşünmeyi"],
    "ans": 1
  },
  {
    "q": "Aşağıdaki davranışlardan hangisi duyguların düşünmeyi olumsuz etkilediğini gösterir?",
    "opts": ["Karar verirken veri toplamak", "Sadece hislerine göre karar vermek", "Alternatifleri değerlendirmek", "Farklı kaynakları incelemek"],
    "ans": 1
  },
  {
    "q": "Yakıt sisteminin temel görevlerinden biri aşağıdakilerden hangisidir?",
    "opts": ["Motorun soğutulmasını sağlamak", "Yakıtı motora iletmek", "Lastik basıncını ayarlamak", "Egzoz gazını temizlemek"],
    "ans": 1
  },
  {
    "q": "Aşağıdakilerden hangisi benzinli motorların bir özelliğidir?",
    "opts": ["Yakıt buji ile ateşlenir", "Yakıt sıkıştırılmış hava ile kendiliğinden yanar", "Yakıt su ile birlikte yanar", "Hiçbiri"],
    "ans": 0
  },
  {
    "q": "Bir araçta yakıt tüketimi artmış ve motor düzensiz çalışmaya başlamıştır. Bu durumun en olası nedeni aşağıdakilerden hangisidir?",
    "opts": ["Lastiklerin yeni olması", "Farların açık olması", "Klimanın kapalı olması", "Enjektörlerde sorun olması"],
    "ans": 3
  }
]
;
