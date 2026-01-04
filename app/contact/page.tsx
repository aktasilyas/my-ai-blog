import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'İletişim' })

export default function Contact() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            İletişim
          </h1>
        </div>
        <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
          <p className="text-lg">
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
          </p>

          <h2>E-posta</h2>
          <p>
            Genel sorularınız ve önerileriniz için:{' '}
            <a href="mailto:info@ai-gunluk.com" className="text-primary-500 hover:text-primary-600">
              info@ai-gunluk.com
            </a>
          </p>

          <h2>Sosyal Medya</h2>
          <p>Sosyal medya hesaplarımız üzerinden de bize ulaşabilirsiniz:</p>
          <ul>
            <li>
              GitHub:{' '}
              <Link
                href="https://github.com/aktasilyas"
                className="text-primary-500 hover:text-primary-600"
              >
                @aktasilyas
              </Link>
            </li>
          </ul>

          <h2>İçerik Önerileri</h2>
          <p>
            Bloğumuzda görmek istediğiniz konular hakkında önerilerinizi bize iletebilirsiniz. Yapay
            zeka, makine öğrenimi ve teknoloji alanında hangi konuların işlenmesini istediğinizi
            bizimle paylaşın.
          </p>

          <h2>İşbirliği</h2>
          <p>
            İşbirliği teklifleri ve sponsorluk konularında bizimle iletişime geçmek için yukarıdaki
            e-posta adresini kullanabilirsiniz.
          </p>

          <h2>Geri Bildirim</h2>
          <p>
            Sitemiz hakkındaki görüş ve önerileriniz bizim için çok değerlidir. Lütfen geri
            bildirimlerinizi bizimle paylaşın.
          </p>

          <div className="not-prose mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold">Hızlı İletişim</h3>
            <p className="mb-2">
              <strong>E-posta:</strong> info@ai-gunluk.com
            </p>
            <p className="mb-2">
              <strong>GitHub:</strong>{' '}
              <Link
                href="https://github.com/aktasilyas/my-ai-blog"
                className="text-primary-500 hover:text-primary-600"
              >
                github.com/aktasilyas/my-ai-blog
              </Link>
            </p>
            <p>
              <strong>Yanıt Süresi:</strong> Genellikle 24-48 saat içinde
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
