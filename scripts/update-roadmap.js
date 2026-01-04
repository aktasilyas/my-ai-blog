#!/usr/bin/env node

/**
 * PROJECT_ROADMAP.md Güncelleme Script'i
 *
 * Kullanım:
 * node scripts/update-roadmap.js "Görev açıklaması"
 *
 * Örnek:
 * node scripts/update-roadmap.js "public/admin/config.yml + index.html ekle"
 */

const fs = require('fs')
const path = require('path')

const ROADMAP_PATH = path.join(__dirname, '..', 'PROJECT_ROADMAP.md')

function updateRoadmap(taskDescription) {
  if (!taskDescription) {
    console.error('❌ Hata: Görev açıklaması gerekli!')
    console.log('Kullanım: node scripts/update-roadmap.js "Görev açıklaması"')
    process.exit(1)
  }

  try {
    // Roadmap dosyasını oku
    let content = fs.readFileSync(ROADMAP_PATH, 'utf8')

    // Görevi bul ve checkbox'ı işaretle
    const searchPattern = `- [ ] ${taskDescription}`
    const replacePattern = `- [x] ${taskDescription}`

    if (content.includes(searchPattern)) {
      content = content.replace(searchPattern, replacePattern)

      // Son güncelleme tarihini güncelle
      const today = new Date().toISOString().split('T')[0]
      content = content.replace(
        /\*\*Son Güncelleme:\*\* \d{4}-\d{2}-\d{2}/,
        `**Son Güncelleme:** ${today}`
      )

      // Dosyayı kaydet
      fs.writeFileSync(ROADMAP_PATH, content, 'utf8')
      console.log(`✅ "${taskDescription}" tamamlandı olarak işaretlendi!`)
    } else {
      console.warn(`⚠️  Görev bulunamadı: "${taskDescription}"`)
      console.log('💡 İpucu: Görev açıklamasını tam olarak yazın.')
    }
  } catch (error) {
    console.error('❌ Hata:', error.message)
    process.exit(1)
  }
}

// Komut satırı argümanını al
const taskDescription = process.argv.slice(2).join(' ')
updateRoadmap(taskDescription)
