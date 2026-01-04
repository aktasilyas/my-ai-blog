# 🚀 AI Günlük - Kurulum Rehberi

Bu rehber, AI destekli Türkçe blog projenizi kurmak için gereken tüm adımları içerir.

## 📋 Ön Gereksinimler

- Node.js 18+ ve npm
- GitHub hesabı
- Vercel hesabı (ücretsiz)
- Google Gemini API key (ücretsiz)

## 🔧 Kurulum Adımları

### 1. Projeyi Klonlama ve Bağımlılıkları Yükleme

```bash
git clone https://github.com/aktasilyas/my-ai-blog.git
cd my-ai-blog
npm install
```

### 2. Environment Variables Ayarlama

`.env.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.example .env.local
```

Ardından `.env.local` dosyasını düzenleyin:

```env
# Google Gemini API Key (ZORUNLU - Otomatik içerik üretimi için)
GOOGLE_GEMINI_API_KEY=your_actual_gemini_api_key

# Google Analytics (Opsiyonel)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

#### Google Gemini API Key Alma:

1. [Google AI Studio](https://makersuite.google.com/app/apikey) adresine gidin
2. "Create API Key" butonuna tıklayın
3. Oluşan API key'i kopyalayın
4. `.env.local` dosyasındaki `GOOGLE_GEMINI_API_KEY` değerine yapıştırın

### 3. Lokal Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### 4. GitHub'a Push

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

### 5. Vercel'e Deploy

1. [Vercel Dashboard](https://vercel.com/new)'a gidin
2. "Import Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Environment Variables kısmına `.env.local` içindeki değişkenleri ekleyin:
   - `GOOGLE_GEMINI_API_KEY`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` (opsiyonel)
5. "Deploy" butonuna tıklayın

### 6. GitHub Secrets Ekleme (Otomatik İçerik Üretimi için)

GitHub repository'nize giderek GitHub Actions için secret ekleyin:

1. Repository → Settings → Secrets and variables → Actions
2. "New repository secret" butonuna tıklayın
3. Name: `GOOGLE_GEMINI_API_KEY`
4. Value: Google Gemini API key'inizi yapıştırın
5. "Add secret" butonuna tıklayın

### 7. Netlify CMS Yapılandırması (Opsiyonel)

Netlify CMS kullanmak için:

1. Vercel Dashboard → Your Project → Settings → Identity
2. Enable Identity seçeneğini aktif edin
3. Git Gateway'i etkinleştirin
4. `https://your-site.vercel.app/admin` adresinden CMS'e erişin

## 🤖 Otomatik İçerik Üretimi

### Manuel Test

Lokal ortamda test etmek için:

```bash
npm run generate-post
```

Bu komut, `content/blog/` klasörüne yeni bir AI-generated blog yazısı ekler.

### Otomatik Günlük Çalıştırma

GitHub Actions, her gün saat 09:00 UTC'de otomatik olarak yeni bir blog yazısı oluşturur ve repository'ye commit eder.

Workflow dosyası: `.github/workflows/daily-post.yml`

Manuel tetikleme için:

1. GitHub repository → Actions → Daily AI Blog Post Generator
2. "Run workflow" butonuna tıklayın

## 📊 Google Analytics Kurulumu

1. [Google Analytics](https://analytics.google.com) hesabı oluşturun
2. Yeni bir GA4 property oluşturun
3. Measurement ID'yi (G-XXXXXXXXXX) alın
4. `.env.local` ve Vercel Environment Variables'a ekleyin:
   ```env
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

## 🔍 Google Search Console

1. [Google Search Console](https://search.google.com/search-console)'a gidin
2. Property ekleyin (URL prefix yöntemi)
3. Site ownership'i doğrulayın
4. Sitemap gönderin: `https://your-site.vercel.app/sitemap.xml`

## 💰 Google AdSense Başvurusu

AdSense başvurusu için gereken minimum şartlar:

- ✅ En az 50 özgün içerik
- ✅ About sayfası (Hakkımızda)
- ✅ Privacy Policy sayfası (Gizlilik Politikası)
- ✅ Contact sayfası (İletişim)
- ✅ 6+ ay aktif domain (ideal)

Başvuru adımları:

1. [Google AdSense](https://www.google.com/adsense) hesabı oluşturun
2. Site URL'inizi ekleyin
3. AdSense kod snippet'ini sitenize ekleyin
4. Onay bekleyin (genellikle 1-2 hafta)

## 🎨 Özelleştirme

### Site Bilgilerini Düzenleme

`data/siteMetadata.js` dosyasını düzenleyin:

```javascript
const siteMetadata = {
  title: 'Sitenizin Başlığı',
  author: 'Yazar Adı',
  description: 'Site açıklaması',
  language: 'tr-TR',
  siteUrl: 'https://your-site.vercel.app',
  // ... diğer ayarlar
}
```

### Navigasyon Menüsü

`data/headerNavLinks.ts` dosyasını düzenleyin.

### AI Trend Konuları

`scripts/daily-post.js` dosyasındaki `trendTopics` array'ini düzenleyerek AI'ın yazacağı konuları özelleştirebilirsiniz.

## 📝 Manuel İçerik Ekleme

İki yöntemle manuel içerik ekleyebilirsiniz:

### Yöntem 1: Netlify CMS (Kolay)

1. `https://your-site.vercel.app/admin` adresine gidin
2. Giriş yapın
3. "New Blog Yazıları" butonuna tıklayın
4. İçeriğinizi yazın ve publish edin

### Yöntem 2: MDX Dosyası (Gelişmiş)

`content/blog/` klasörüne yeni `.mdx` dosyası ekleyin:

```mdx
---
title: 'Blog Yazısı Başlığı'
date: '2026-01-04'
tags: ['yapay-zeka', 'teknoloji']
draft: false
summary: 'Kısa özet'
authors: ['default']
---

İçeriğiniz buraya...
```

## 🔄 Güncelleme ve Bakım

### Bağımlılıkları Güncelleme

```bash
npm update
```

### Build Kontrolü

```bash
npm run build
npm run start
```

## 🐛 Sorun Giderme

### Build Hatası

Eğer build sırasında hata alırsanız:

1. `node_modules` ve `.next` klasörlerini silin
2. Yeniden yükleyin:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run build
   ```

### Google Gemini API Hatası

- API key'in doğru olduğundan emin olun
- API limitlerini kontrol edin (ücretsiz: 60 request/day)
- [API Console](https://console.cloud.google.com)'dan API'nin aktif olduğunu doğrulayın

## 📚 Kaynaklar

- [Next.js Dokümantasyonu](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify CMS](https://www.netlifycms.org/docs/)

## 🤝 Destek

Sorularınız için:

- GitHub Issues: [my-ai-blog/issues](https://github.com/aktasilyas/my-ai-blog/issues)
- Email: info@ai-gunluk.com

---

**Son Güncelleme:** 2026-01-04
