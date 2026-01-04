import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Gizlilik Politikası' })

export default function Privacy() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Gizlilik Politikası
          </h1>
        </div>
        <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
          <p className="text-lg">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

          <h2>1. Genel Bilgiler</h2>
          <p>
            AI Günlük olarak, ziyaretçilerimizin gizliliğine saygı duyuyoruz. Bu gizlilik
            politikası, web sitemizi ziyaret ettiğinizde toplanan bilgiler ve bu bilgilerin nasıl
            kullanıldığı hakkında sizi bilgilendirmek için hazırlanmıştır.
          </p>

          <h2>2. Toplanan Bilgiler</h2>
          <p>Sitemizi ziyaret ettiğinizde aşağıdaki bilgiler toplanabilir:</p>
          <ul>
            <li>IP adresi</li>
            <li>Tarayıcı türü ve sürümü</li>
            <li>Ziyaret edilen sayfalar</li>
            <li>Ziyaret tarihi ve saati</li>
            <li>Yönlendirme kaynağı</li>
          </ul>

          <h2>3. Çerezler (Cookies)</h2>
          <p>
            Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezler,
            tarayıcınız tarafından bilgisayarınızda saklanan küçük metin dosyalarıdır. Çerez
            kullanımını tarayıcı ayarlarınızdan kontrol edebilirsiniz.
          </p>

          <h2>4. Google Analytics</h2>
          <p>
            Sitemiz, ziyaretçi istatistiklerini toplamak için Google Analytics kullanmaktadır.
            Google Analytics, anonim kullanım verilerini toplar ve site trafiğini analiz etmemize
            yardımcı olur.
          </p>

          <h2>5. Google AdSense</h2>
          <p>
            Bu sitede reklam göstermek için Google AdSense kullanılmaktadır. Google, reklamları
            kişiselleştirmek için çerezler kullanabilir. Reklam tercihlerinizi Google Reklam
            Ayarları üzerinden yönetebilirsiniz.
          </p>

          <h2>6. Üçüncü Taraf Bağlantılar</h2>
          <p>
            Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik
            politikalarından sorumlu değiliz. Bağlantılı siteleri ziyaret ettiğinizde ilgili sitenin
            gizlilik politikasını incelemenizi öneririz.
          </p>

          <h2>7. Veri Güvenliği</h2>
          <p>
            Toplanan verilerin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemler
            alınmaktadır.
          </p>

          <h2>8. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
            info@ai-gunluk.com
          </p>

          <h2>9. Politika Güncellemeleri</h2>
          <p>
            Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler olması
            durumunda sizi bilgilendireceğiz.
          </p>
        </div>
      </div>
    </>
  )
}
