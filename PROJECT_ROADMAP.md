# 🎯 My AI Blog - Proje Yol Haritası

## Proje Amacı

Türkçe, SEO-dostu, hibrit blog:

- AI her gün trend konuyu bularak otomatik 400-500 kelimelik yazı üretir
- CMS üzerinden elle içerik ekleme/düzenleme imkanı
- Ücretsiz stack (≈ 0 ₺ maliyet)
- 50+ yazıya ulaşınca Google AdSense başvurusu → reklam geliri

---

## 📊 Şu Ana Kadar Yapılanlar

| Tarih      | Adım                                    | Araç                            | Çıktı                                      |
| ---------- | --------------------------------------- | ------------------------------- | ------------------------------------------ |
| 2024-06-XX | GitHub repo oluşturuldu                 | Git + VS Code                   | aktasilyas/my-ai-blog                      |
| 2024-06-XX | Starter şablon klon & çalıştır          | tailwind-nextjs-starter-blog    | localhost:3000 ✔                           |
| 2024-06-XX | Güvenlik açığı (CVE) giderildi          | npm i next@latest               | package.json güncel                        |
| 2024-06-XX | Yarn/NPM çakışması çözüldü              | del yarn.lock + cache reset     | Vercel build hatası yok                    |
| 2024-06-XX | Turbopack ↔ webpack çakışması giderildi | Basitleştirilmiş next.config.js | Vercel Ready ✔                             |
| 2024-06-XX | İlk push                                | GitHub                          | Canlı URL: https://my-ai-blog.vercel.app ✔ |
| 2026-01-04 | Site metadata Türkçe'ye çevrildi        | siteMetadata.js                 | Türkçe AI blog yapılandırması ✔            |
| 2026-01-04 | Netlify CMS kurulumu                    | public/admin/                   | CMS admin paneli hazır ✔                   |
| 2026-01-04 | Google Gemini AI entegrasyonu           | @google/generative-ai           | Otomatik içerik üretimi hazır ✔            |
| 2026-01-04 | GitHub Actions workflow eklendi         | .github/workflows/              | Günlük otomatik post sistemi ✔             |
| 2026-01-04 | SEO sayfaları oluşturuldu               | Privacy, Contact pages          | AdSense için zorunlu sayfalar ✔            |
| 2026-01-04 | Navigation menu Türkçeleştirildi        | headerNavLinks.ts               | Kullanıcı dostu menü ✔                     |

---

## 🚀 Yapılacaklar Listesi

### A) CMS Kurulumu ✅

- [x] public/admin/config.yml + index.html ekle (Netlify CMS)
- [ ] Vercel Dashboard → Enable Identity & Git-Gateway
- [ ] /admin sayfasından test yazısı ekle → repo'ya .md commit gelsin

### B) Otomatik İçerik Motoru ✅

- [x] Google Gemini API key al (ücretsiz 60 req/gün)
- [x] scripts/daily-post.js yaz:
  - [x] AI tabanlı trend konu seçimi
  - [x] Gemini → 400-500 kelime TR yazı üret
  - [x] Front-matter ekle → /content/blog klasörüne kaydet
- [x] .github/workflows/daily-post.yml (cron: 0 9 \* \* \*)
- [x] npm run generate-post komutu ekle
- [ ] GitHub Secrets → GOOGLE_GEMINI_API_KEY ekle
- [ ] 1 gün bekle → repo'ya auto-commit geldiğini kontrol et

### C) SEO & Analytics ✅

- [x] robots.ts ve sitemap.ts dosyaları mevcut
- [x] Sitemap'e yeni sayfalar eklendi (about, privacy, contact)
- [x] Google Analytics 4 yapılandırması hazır (.env ile)
- [x] RSS feed mevcut (/feed.xml)
- [ ] Google Search Console'a site ekle
- [ ] Google Analytics hesabı oluştur ve ID'yi .env'e ekle

### D) İçerik Sayısı Hedefi

- [ ] AI + elle toplam ≥ 50 özgün yazı (duplicate yok)
- [x] About, Privacy, Contact sayfaları ekle (AdSense zorunlu)

### E) Gelir Katmanı

- [ ] https://www.google.com/adsense başvur → site URL ver
- [ ] Onay gelince components/Adsense.js oluştur → Head + otomatik ads
- [ ] Newsletter (Buttondown) veya "☕ Buy me a coffee" ekle (opsiyon)

### F) Opsiyonel İyileştirmeler

- [ ] Çok-dil: next-i18next ekle (İngilizce versiyon)
- [ ] Sosyal otomasyon: IFTTT → her commit'ta Twitter/LinkedIn paylaşımı
- [ ] Lighthouse %95+ skor için image optimizasyonu (next/image)

---

## ✅ Bitiş Kriteri

- [ ] Site sürekli çalışıyor, günde 1 AI yazısı otomatik yayınlanıyor
- [ ] ≥ 50 içerik, tüm zorunlu sayfalar hazır
- [ ] Search Console & Analytics aktif
- [ ] AdSense onaylı reklam birimleri yerleşik
- [ ] Gelir raporu almaya başladın

---

## 📝 Notlar

Her geliştirme sonrası bu dosyayı güncelleyerek ilgili kutuyu işaretle:

```
- [ ] Yapılacak görev  →  - [x] Tamamlanmış görev
```

**Son Güncelleme:** 2026-01-04
