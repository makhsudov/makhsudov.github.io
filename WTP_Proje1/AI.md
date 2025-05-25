# AI.md - Yapay Zeka Promtları

Bu dosya, **«Teach Me! Mr. Punching Bag»** oyun projesinin geliştirilmesi sırasında [Claude](claude.ai) yapay zekasına sorulan soruları ve alınan cevapları içermektedir.

## Promtlar ve Cevaplar

### 1. Ekran Titreşim Efekti

**Prompt:** "Kombo sırasında ekran titreme efektini nasıl uygularım?"

**Cevap:** Kodda ekran titreşim efekti şu şekilde uygulanmış:

```javascript
// EKRAN TİTREŞİM SİSTEMİ - Oyunda darbe efektleri için
let screenShake = {
   active: false,    // Titreşim aktif mi?
   intensity: 0,     // Titreşim şiddeti
   duration: 0,      // Toplam süre (milisaniye)
   timer: 0,         // Kalan süre sayacı
   offsetX: 0,       // X ekseninde kayma miktarı
   offsetY: 0        // Y ekseninde kayma miktarı
};

// Titreşim efektini başlatan fonksiyon
function startScreenShake(intensity, duration) {
   screenShake.active = true;
   screenShake.intensity = intensity;
   screenShake.duration = duration;
   screenShake.timer = duration;
}

// Her frame'de titreşimi güncelleyen fonksiyon
function updateScreenShake() {
   if (!screenShake.active) {
       screenShake.offsetX = 0;
       screenShake.offsetY = 0;
       return;
   }
   
   screenShake.timer -= 16; // 60 FPS için ~16ms
   
   if (screenShake.timer <= 0) {
       screenShake.active = false;
       screenShake.offsetX = 0;
       screenShake.offsetY = 0;
       return;
   }
   
   // Kalan zamana göre titreşim şiddetini hesapla (azalan efekt)
   const progress = screenShake.timer / screenShake.duration;
   const currentIntensity = screenShake.intensity * progress;
   
   // Rastgele yönlerde titreşim kayması oluştur
   screenShake.offsetX = (Math.random() - 0.5) * currentIntensity * 2;
   screenShake.offsetY = (Math.random() - 0.5) * currentIntensity * 2;
}
```

Kombo sırasında titreşim tetikleme:
```javascript
// Titreşim efekti - sadece kombolarda
if (combo >= 1) {
    const intensity = Math.min(5 + (combo * 1), 10);     // Maksimum 10 şiddet
    const duration = Math.min(150 + (combo * 25), 300);  // Maksimum 300ms süre
    startScreenShake(intensity, duration);
}
```
```javascript
Çizim fonksiyonunda uygulama:
javascript// Oyunu merkeze alma + titreşim efekti
ctx.translate(
    offsetX + screenShake.offsetX * scale,  // X kaydırma + titreşim
    offsetY + screenShake.offsetY * scale   // Y kaydırma + titreşim
);
```
