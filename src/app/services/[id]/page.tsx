import { notFound } from 'next/navigation';

// Statik veri
const services = [
  {
    id: '1',
    title: 'Head Massage Faydaları: Rahatlama ve Sağlık İçin Etkili Bir Yöntem',
    description: `<p>Baş masajı, hem bedensel hem de zihinsel rahatlama sağlayan etkili bir tekniktir. Hem stres yönetimi hem de genel sağlık için önemli avantajlar sunar. İşte baş masajının sağladığı başlıca faydalar:</p>
      <h2>1. Stres ve Anksiyeteyi Azaltır</h2>
      <p>Baş masajı, stres ve anksiyeteyi hafifletmek için etkili bir yöntemdir. Kafa derisindeki gerilimlerin azaltılması, vücudu rahatlatır ve zihinsel huzuru artırır. Düzenli baş masajı, günlük stresle başa çıkmanıza yardımcı olabilir.</p>
      <h2>2. Kan Dolaşımını İyileştirir</h2>
      <p>Baş masajı, kafa derisindeki kan dolaşımını artırır. Bu artış, saç foliküllerine daha fazla oksijen ve besin taşınmasına olanak tanır. Sonuç olarak, saç sağlığını destekler ve saç büyümesini teşvik edebilir.</p>
      <h2>3. Baş Ağrılarını Hafifletir</h2>
      <p>Gerilim tipi baş ağrıları baş masajıyla hafifletilebilir. Kafa derisindeki kasların gevşetilmesi ve kan akışının artırılması, baş ağrılarının azalmasına yardımcı olabilir. Baş masajı, baş ağrılarının doğal ve etkili bir çözümüdür.</p>
      <h2>4. Rahatlamayı Teşvik Eder ve Uyku Kalitesini Artırır</h2>
      <p>Baş masajı, rahatlamayı teşvik eder ve uyku kalitesini artırabilir. Masaj sırasında oluşan rahatlama, uykusuzluk problemlerinin üstesinden gelmenize yardımcı olabilir. Yatmadan önce yapılan baş masajı, daha kaliteli bir uyku sağlar.</p>
      <h2>5. Zihinsel Netlik ve Konsantrasyonu Artırır</h2>
      <p>Baş masajı, zihinsel yorgunluğu azaltarak konsantrasyonu artırabilir. Rahat bir kafa derisi, düşünme ve karar verme yeteneğinizi iyileştirebilir. Düzenli baş masajı, zihinsel netliği destekler.</p>
      <h2>6. Cilt Sağlığını Destekler</h2>
      <p>Baş masajı, kafa derisindeki cilt hücrelerinin yenilenmesini teşvik eder. Masaj sırasında uygulanan hafif baskılar, cilt sağlığını destekler ve kafa derisinin sağlıklı kalmasına yardımcı olabilir.</p>
      <h2>Baş Masajının Uygulama Yöntemleri</h2>
      <p>Baş masajını evde uygulamak oldukça basittir. Parmak uçlarınızı kullanarak, kafa derinizde hafifçe dairesel hareketler yapabilirsiniz. Masajı birkaç dakika boyunca düzenli olarak yaparak faydalarını maksimize edebilirsiniz.</p>
      <p>Baş masajı, sağlığınızı ve genel iyilik halinizi artırmak için mükemmel bir araçtır. Hem fiziksel hem de zihinsel rahatlama sağlamak isteyenler için ideal bir çözümdür.</p>`,
    image: '/images/services/service1.png',
  },
  {
    id: '2',
    title: 'Bali Masajı: Egzotik Rahatlama ve Sağlık İçin En İyi Seçim',
    description: `<p>Bali masajı, Endonezya'nın egzotik adası Bali'den gelen geleneksel bir rahatlama yöntemidir. Bu masaj türü, hem bedensel hem de zihinsel rahatlama sağlamak için çeşitli teknikler kullanır. İşte Bali masajının sunduğu başlıca faydalar:</p>
      <h2>1. Derin Rahatlama ve Stres Azaltma</h2>
      <p>Bali masajı, tüm vücudu rahatlatan etkili bir tekniktir. Masaj sırasında uygulanan derin doku teknikleri, kas gerginliklerini ve stres seviyelerini azaltır. Bu, günlük hayatın getirdiği stresle başa çıkmanıza yardımcı olabilir ve genel bir huzur sağlar.</p>
      <h2>2. Kan Dolaşımını İyileştirir</h2>
      <p>Bali masajı, kan dolaşımını artırmak için çeşitli teknikler kullanır. Kan akışının artması, oksijen ve besin maddelerinin vücudun farklı bölgelerine daha etkili bir şekilde taşınmasını sağlar. Bu, genel sağlık ve enerji seviyelerini artırabilir.</p>
      <h2>3. Ağrıları Hafifletir ve Kasları Gevşetir</h2>
      <p>Bu masaj türü, kas ağrılarını ve gerginliklerini hafifletmek için ideal bir yöntemdir. Bali masajının uyguladığı baskılar ve hareketler, kasları gevşetir ve ağrıyı azaltabilir. Özellikle spor sonrası veya uzun süreli oturmanın ardından rahatlama sağlar.</p>
      <h2>4. Ruhsal ve Zihinsel Rahatlama Sağlar</h2>
      <p>Bali masajı sadece fiziksel değil, aynı zamanda ruhsal rahatlama da sağlar. Masaj sırasında kullanılan aromatik yağlar ve sakinleştirici teknikler, zihinsel ve duygusal olarak rahatlamanıza yardımcı olabilir. Bu, ruh halinizi iyileştirir ve zihinsel netliği artırır.</p>
      <h2>5. Cilt Sağlığını Destekler</h2>
      <p>Bali masajında kullanılan doğal yağlar ve losyonlar, cildin beslenmesini ve nemlenmesini destekler. Masaj sırasında uygulanan hareketler, ciltteki kan akışını artırır ve cildin daha sağlıklı görünmesine yardımcı olabilir.</p>
      <h2>6. Enerji Seviyelerini Artırır</h2>
      <p>Bali masajı, vücudun enerji seviyelerini artıran etkili bir tekniktir. Masaj sırasında uygulanan derin ve etkili teknikler, enerjinizi yenileyebilir ve gün boyunca daha enerjik hissetmenizi sağlayabilir.</p>
      <h2>Bali Masajı Uygulama Yöntemleri</h2>
      <p>Bali masajı, genellikle tüm vücutta uygulanan çeşitli teknikleri içerir. Masaj sırasında, terapist parmak uçları, avuç içleri ve dirsekleri kullanarak vücudu rahatlatır. Uygulanan baskılar ve hareketler, kasları gevşetir ve vücudu canlandırır.</p>
      <p>Bali masajı, hem bedensel hem de zihinsel rahatlama arayanlar için mükemmel bir tercihtir. Egzotik bir deneyim sunan bu masaj türü, sağlık ve huzur arayan herkes için ideal bir çözüm olabilir.</p>`,
    image: '/images/services/service2.png',
  },
  {
    id: '3',
    title: 'Thai Masajı: Geleneksel Bir Rahatlama Yöntemi',
    description: `<p>Thai masajı, kökeni yüzyıllar öncesine dayanan, geleneksel bir Asya rahatlama tekniğidir. Tayland'ın zengin kültürel mirasından doğan bu masaj türü, beden ve zihni dengelemeyi amaçlayan bir dizi esneme ve baskı hareketini içerir. Thai masajının en önemli özelliklerinden biri, masaj sırasında kişinin tamamen giysili kalmasıdır. Bu, masajın daha rahat ve derinlemesine yapılabilmesini sağlar.</p>
      <h2>Thai Masajının Faydaları:</h2>
      <ul>
        <li><strong>Kas Gerginliğini Azaltma:</strong> Thai masajı, kasları gevşetir ve gerginlikleri azaltır, böylece hareket kabiliyetinizi artırır.</li>
        <li><strong>Enerji Akışını Düzenleme:</strong> Geleneksel Thai masajı, bedenin enerji hatları üzerinde çalışarak, enerji akışını dengeler ve genel iyilik hali sağlar.</li>
        <li><strong>Stresi Azaltma:</strong> Masaj sırasında uygulanan derin baskılar ve esneme hareketleri, stresi azaltır ve rahatlamayı teşvik eder.</li>
        <li><strong>Esneklik Artışı:</strong> Thai masajı, düzenli uygulandığında, esnekliği artırır ve eklem hareketliliğini geliştirir.</li>
      </ul>
      <h2>Thai Masajı Nasıl Yapılır?</h2>
      <p>Thai masajı, genellikle bir mat veya yer yatağı üzerinde yapılır. Masaj terapisti, çeşitli esneme hareketleri ve basınç uygulamaları ile kasları çalıştırır. Masaj sırasında kişi giysilerini çıkarmadan, rahat bir pozisyonda kalır. Bu masaj türü, hem akupresur noktalarını hem de esneme hareketlerini birleştirir, bu da onu hem fiziksel hem de ruhsal rahatlama için etkili bir yöntem yapar.</p>
      <p>Thai masajı, geleneksel yöntemlerle modern yaşamın stresinden uzaklaşmanıza yardımcı olur. Düzenli uygulamalarla, daha dinç ve sağlıklı bir yaşam sürdürebilirsiniz. Thai masajı hakkında daha fazla bilgi almak ve randevu oluşturmak için bizimle iletişime geçebilirsiniz.</p>`,
    image: '/images/services/service3.png',
  },
  {
    id: "4",
    title: "Deep Masaj: Derinlemesine Rahatlama ve Kas Yenilenmesi",
    description: `<p>Deep masaj, derin dokulara yönelik uygulanan bir masaj türüdür ve kas gerginliklerini ve ağrılarını hafifletmek için etkili bir yöntem olarak bilinir. Bu masaj türü, vücuttaki derin kas tabakalarına odaklanarak, kas ve bağ dokularındaki gerilmeleri ve düğümleri çözmeyi amaçlar. Deep masaj, sporcular, uzun süreli oturumlar yapan kişiler ve derin kas ağrısı yaşayan herkes için ideal bir tercihtir.</p>
    <h2>Deep Masajının Faydaları:</h2>
    <ul>
      <li><strong>Kas Gerginliklerini Azaltma:</strong> Deep masaj, derin kas tabakalarındaki gerilmeleri ve düğümleri hedef alarak, kas gerginliklerini ve sertliği azaltır.</li>
      <li><strong>Ağrı Yönetimi:</strong> Kronik kas ağrıları ve sakatlanmaların tedavisinde etkili bir yöntemdir. Masaj, ağrı hissini hafifletir ve iyileşme sürecini hızlandırır.</li>
      <li><strong>Kan Dolaşımını Artırma:</strong> Deep masaj, kan dolaşımını artırarak, oksijen ve besin maddelerinin kaslara daha iyi ulaşmasını sağlar.</li>
      <li><strong>Stresi Azaltma:</strong> Derin doku masajı, zihinsel ve fiziksel rahatlama sağlar, stresi azaltır ve genel iyilik halini destekler.</li>
    </ul>
    <h2>Deep Masajı Nasıl Yapılır?</h2>
    <p>Deep masaj, genellikle yavaş ve derin baskılarla uygulanır. Terapist, parmakları, avuç içleri veya dirsekleri kullanarak derin dokuya etki eder. Masaj sırasında, kaslardaki gerilmeler ve düğümler üzerine odaklanılır, bu da kasların gevşemesine ve rahatlamasına yardımcı olur. Deep masaj, genellikle bir masaj yatağı üzerinde yapılır ve seanslar sırasında çeşitli teknikler kullanılır.</p>
    <h2>Deep Masajının Uygulama Alanları:</h2>
    <ul>
      <li><strong>Spor Yaralanmaları:</strong> Sporcular için, derin kaslar üzerindeki etki, yaralanma sonrası iyileşme sürecini destekler.</li>
      <li><strong>Kronik Kas Ağrıları:</strong> Uzun süreli ağrıları hafifletmek ve kasları gevşetmek için uygundur.</li>
      <li><strong>Stres ve Gerginlik:</strong> Günlük stres ve gerginliği azaltmak amacıyla da tercih edilir.</li>
    </ul>
    <p>Deep masajı hakkında daha fazla bilgi almak ve randevu oluşturmak için bizimle iletişime geçebilirsiniz. Profesyonel terapistlerimiz, ihtiyaçlarınıza uygun bir masaj deneyimi sunmak için hazırdır.</p>`,
    image: "/images/services/service4.png"
  },
  {
    id: "5",
    title: "Hot Oil Massage: Sıcak Yağ Masajıyla Derin Rahatlama",
    description: `<p>Hot oil massage, sıcak yağ kullanılarak yapılan bir masaj türüdür ve vücudu rahatlatmak, kas gerginliklerini hafifletmek ve cilt sağlığını desteklemek için etkili bir yöntemdir. Bu masaj türü, sıcak yağın kaslara ve cilde uygulandığı bir terapi olup, hem fiziksel hem de zihinsel rahatlama sağlar. Hot oil massage, genellikle stresli ve gergin kişiler, sporcular ve cilt bakımını önemseyen herkes için önerilir.</p>
    <h2>Hot Oil Massage’ın Faydaları:</h2>
    <ul>
      <li><strong>Kas Gevşemesi:</strong> Sıcak yağın cilde ve kaslara uygulanması, kasların gevşemesine ve gerginliklerin azalmasına yardımcı olur.</li>
      <li><strong>Kan Dolaşımını Artırma:</strong> Sıcak yağ uygulaması, kan dolaşımını artırarak, vücudun oksijen ve besin maddelerini daha iyi almasını sağlar.</li>
      <li><strong>Cilt Nemlendirme:</strong> Masaj sırasında kullanılan yağlar, cildi derinlemesine nemlendirir ve besler, cilt dokusunu iyileştirir.</li>
      <li><strong>Stresi Azaltma:</strong> Hot oil massage, rahatlatıcı etkisi sayesinde zihinsel ve duygusal stresi azaltır, genel iyilik halini artırır.</li>
    </ul>
    <h2>Hot Oil Massage Nasıl Yapılır?</h2>
    <p>Hot oil massage, özel olarak ısıtılmış yağların kullanıldığı bir masaj türüdür. Masaj öncesinde yağlar ısıtılır ve uygun sıcaklıkta cilde uygulanır. Masaj terapisti, yağları vücutta yumuşak ve dairesel hareketlerle yayar. Uygulanan sıcak yağ, kaslar üzerindeki gerilimleri hafifletir ve cilde derinlemesine etki eder. Masaj sırasında, çeşitli teknikler kullanılarak rahatlama ve yenilenme sağlanır.</p>
    <h2>Hot Oil Massage’ın Uygulama Alanları:</h2>
    <ul>
      <li><strong>Cilt Bakımı:</strong> Cildin nemlenmesini ve beslenmesini sağlamak için idealdir.</li>
      <li><strong>Kas Ağrıları ve Gerginlikler:</strong> Spor yaralanmaları ve kas ağrıları için etkili bir tedavi seçeneğidir.</li>
      <li><strong>Stres Yönetimi:</strong> Yoğun iş temposu veya stresli yaşam koşulları nedeniyle yaşanan gerilimleri azaltmak amacıyla tercih edilir.</li>
    </ul>
    <p>Hot oil massage hakkında daha fazla bilgi almak ve randevu oluşturmak için bizimle iletişime geçebilirsiniz. Profesyonel terapistlerimiz, size özel bir masaj deneyimi sunmak için hazırdır.</p>`,
    image: "/images/services/service5.png"
  },
  {
    id: "6",
    title: "Medical Massage: Sağlık İçin Profesyonel Masaj Terapi",
    description: `<p>Medical massage, sağlık ve iyileşme amaçlı uygulanan profesyonel bir masaj terapisidir. Bu masaj türü, fiziksel rahatsızlıkları azaltmak, kas ve eklem sorunlarını tedavi etmek ve genel sağlık durumunu iyileştirmek için tasarlanmıştır. Medical massage, genellikle bir sağlık sorunu yaşayan bireyler, sporcular ve fiziksel terapilere ihtiyaç duyan kişiler için önerilir.</p>
    <h2>Medical Massage’ın Faydaları:</h2>
    <ul>
      <li><strong>Ağrı Yönetimi:</strong> Kronik ağrılar, bel ağrıları ve diğer fiziksel rahatsızlıkların hafifletilmesine yardımcı olur.</li>
      <li><strong>Kas ve Eklemler:</strong> Kas gerginliklerini azaltır, eklem hareketliliğini artırır ve kas-iskelet sisteminin iyileşmesine destek sağlar.</li>
      <li><strong>Dolaşım Sistemi:</strong> Kan dolaşımını artırarak, dokuların iyileşmesini hızlandırır ve genel sağlık durumunu iyileştirir.</li>
      <li><strong>Zihinsel Rahatlama:</strong> Fiziksel rahatlama sağlarken, stres ve anksiyetenin azalmasına da yardımcı olur.</li>
    </ul>
    <h2>Medical Massage Nasıl Yapılır?</h2>
    <p>Medical massage, terapistin sorunlu bölgeleri hedef alarak uyguladığı bir masaj türüdür. Bu masaj, genellikle derin doku teknikleri ve spesifik uygulama yöntemleri içerir. Masaj sırasında, terapist kas gerginliklerini ve ağrıları azaltmak için farklı basınç seviyeleri ve teknikler kullanır. Bu yaklaşım, fiziksel sağlık sorunlarına yönelik bireysel çözümler sunar.</p>
    <h2>Medical Massage’ın Uygulama Alanları:</h2>
    <ul>
      <li><strong>Kas ve Eklemler:</strong> Kas spazmları, eklem sertliği ve diğer kas-iskelet sorunları için tedavi edici bir yaklaşımdır.</li>
      <li><strong>Rehabilitasyon:</strong> Yaralanmalar ve cerrahi işlemler sonrası iyileşme sürecini destekler.</li>
      <li><strong>Postür Düzeltme:</strong> Duruş bozuklukları ve uzun süreli oturumlar sonucu oluşan postür sorunlarına yardımcı olur.</li>
    </ul>
    <p>Medical massage hakkında daha fazla bilgi almak ve kişiye özel bir terapi planı oluşturmak için bizimle iletişime geçebilirsiniz. Uzman terapistlerimiz, sağlık hedeflerinize ulaşmanıza yardımcı olmak için burada.</p>`,
    image: "/images/services/service6.png"
  },
  {
    id: "7",
    title: "Sultan Masajı: Lüks ve Tam Vücut Rahatlaması",
    description: `<p>Sultan masajı, zarif bir rahatlama ve lüks deneyimi sunan özel bir masaj türüdür. Bu masaj, vücudu ve zihni derinlemesine gevşetmek için tasarlanmış, geleneksel ve modern tekniklerin harmanlandığı bir terapi yöntemidir. Sultan masajı, adını kraliyet konforundan ve ihtişamından alır ve tam vücut rahatlaması için mükemmel bir seçenektir.</p>
    <h2>Sultan Masajı’nın Faydaları:</h2>
    <ul>
      <li><strong>Derin Rahatlama:</strong> Vücudu ve zihni derinlemesine rahatlatır, stres ve gerilimi azaltır.</li>
      <li><strong>Kan Dolaşımını İyileştirir:</strong> Kan dolaşımını artırarak, dokuların beslenmesine ve iyileşmesine yardımcı olur.</li>
      <li><strong>Kas Gerginliklerini Azaltır:</strong> Kas spazmlarını ve gerginliklerini hafifletir, kasların gevşemesine yardımcı olur.</li>
      <li><strong>Zihinsel Ferahlık:</strong> Zihinsel yorgunluğu giderir ve genel olarak daha sakin bir ruh hali sağlar.</li>
    </ul>
    <h2>Sultan Masajı Nasıl Yapılır?</h2>
    <p>Sultan masajı, genellikle uzun süreli ve yavaş hareketlerle uygulanır. Masaj sırasında, terapist vücudun çeşitli bölgelerinde derin ve nazik teknikler kullanarak, tüm kas gruplarını hedef alır. Masajın amacı, vücudu tamamen gevşetmek ve içsel bir huzur sağlamaktır. Aromaterapi yağları ve rahatlatıcı müzikler genellikle bu masaj türüne eşlik eder.</p>
    <h2>Sultan Masajı’nın Uygulama Alanları:</h2>
    <ul>
      <li><strong>Tam Vücut Rahatlaması:</strong> Vücudun her bölgesini hedef alarak derin bir rahatlama sağlar.</li>
      <li><strong>Lüks Deneyim:</strong> Özel günlerde veya kendinize ödül vermek istediğinizde ideal bir tercihtir.</li>
      <li><strong>Stres ve Gerginlik:</strong> Günlük yaşamın getirdiği stres ve gerginlikten kurtulmak için etkili bir yöntemdir.</li>
    </ul>
    <p>Sultan masajı hakkında daha fazla bilgi almak ve kişisel bir deneyim yaşamak için bizimle iletişime geçebilirsiniz. Uzman terapistlerimiz, size lüks ve huzurlu bir masaj deneyimi sunmak için hazır.</p>`,
    image: "/images/services/service7.png"
  }
];

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id === params.id);

  if (!service) {
    notFound(); // Next.js'in notFound() fonksiyonunu kullanarak 404 hata sayfasına yönlendirme yapıyoruz
  }

  return (
    <div className="relative overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 object-cover w-full h-full z-[-1] opacity-60"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md z-[-1]"></div>
      <div className="container mx-auto p-6 max-w-4xl relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl mt-20 font-semibold text-white">{service.title}</h1>
          <div className="prose prose-lg text-white">
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// params: { id: string } - Dinamik rotanın URL parametresi
export async function generateStaticParams() {
  return services.map(service => ({
    id: service.id,
  }));
}
