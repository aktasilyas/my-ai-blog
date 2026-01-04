const { GoogleGenerativeAI } = require('@google/generative-ai')
const fs = require('fs')
const path = require('path')

// Google Gemini API initialization
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY)

// Türkçe trend konular için örnek liste
const trendTopics = [
  'Yapay Zeka ve İş Hayatı',
  'ChatGPT ve Büyük Dil Modelleri',
  'Machine Learning Güncel Gelişmeleri',
  'Prompt Engineering Teknikleri',
  'AI Araçları ile Verimlilik',
  'Yapay Zeka Etiği',
  'Derin Öğrenme Yenilikleri',
  'AI Destekli Kod Yazımı',
  'Computer Vision Uygulamaları',
  'Doğal Dil İşleme (NLP) Trendleri',
  'AI ve Sanat',
  'Otonom Sistemler',
  'AI ve Sağlık Teknolojileri',
  'Generative AI Uygulamaları',
  'AI Güvenliği ve Veri Gizliliği',
]

function getRandomTopic() {
  return trendTopics[Math.floor(Math.random() * trendTopics.length)]
}

function generateSlug(title) {
  const turkishMap = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    İ: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'c',
    Ğ: 'g',
    Ö: 'o',
    Ş: 's',
    Ü: 'u',
  }

  return title
    .toLowerCase()
    .split('')
    .map((char) => turkishMap[char] || char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function generateBlogPost() {
  try {
    const topic = getRandomTopic()
    console.log(`📝 Seçilen konu: ${topic}`)

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt = `
Türkçe olarak "${topic}" konusunda profesyonel bir blog yazısı yaz.

Gereksinimler:
- Başlık çekici ve SEO uyumlu olsun
- 400-500 kelime arası olsun
- Giriş, gelişme ve sonuç bölümleri olsun
- Güncel ve bilgilendirici olsun
- Türkçe dilbilgisi kurallarına uygun olsun
- Teknik terimleri açıklayıcı şekilde kullan
- Okuyucuya değer katacak pratik bilgiler içersin

Format:
BAŞLIK: [Başlığı buraya yaz]
ÖZET: [1-2 cümlelik kısa özet]
ETIKETLER: [virgülle ayrılmış 3-5 etiket]
İÇERIK:
[Yazının tam içeriği]
`

    console.log('🤖 AI içerik üretiliyor...')
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    // Parse the response
    const titleMatch = text.match(/BAŞLIK:\s*(.+?)(?:\n|$)/i)
    const summaryMatch = text.match(/ÖZET:\s*(.+?)(?:\n|$)/i)
    const tagsMatch = text.match(/ETIKETLER:\s*(.+?)(?:\n|$)/i)
    const contentMatch = text.match(/İÇERIK:\s*([\s\S]+)/i)

    if (!titleMatch || !contentMatch) {
      throw new Error('AI response format hatası')
    }

    const title = titleMatch[1].trim()
    const summary = summaryMatch ? summaryMatch[1].trim() : ''
    const tags = tagsMatch
      ? tagsMatch[1]
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)
      : [topic]
    const content = contentMatch[1].trim()

    // Generate frontmatter
    const today = new Date()
    const dateStr = today.toISOString()
    const slug = generateSlug(title)
    const fileName = `${today.toISOString().split('T')[0]}-${slug}.mdx`

    const frontmatter = `---
title: '${title}'
date: '${dateStr}'
tags: [${tags.map((t) => `'${t}'`).join(', ')}]
draft: false
summary: '${summary}'
authors: ['default']
---

${content}
`

    // Save to content/blog
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true })
    }

    const filePath = path.join(blogDir, fileName)
    fs.writeFileSync(filePath, frontmatter, 'utf-8')

    console.log(`✅ Blog yazısı oluşturuldu: ${fileName}`)
    console.log(`📊 Başlık: ${title}`)
    console.log(`🏷️  Etiketler: ${tags.join(', ')}`)
    console.log(`📍 Dosya: ${filePath}`)

    return filePath
  } catch (error) {
    console.error('❌ Hata:', error.message)
    throw error
  }
}

// Run if called directly
if (require.main === module) {
  generateBlogPost()
    .then(() => {
      console.log('\n🎉 İşlem tamamlandı!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('\n💥 Fatal error:', error)
      process.exit(1)
    })
}

module.exports = { generateBlogPost }
