# AI.md - Yapay Zeka Promtları

Bu dosya, **«Teach Me! Mr. Punching Bag»** oyun projesinin geliştirilmesi sırasında [Claude](https://claude.ai) yapay zekasına sorulan soruları ve alınan cevapları içermektedir.

## Promtlar ve Cevaplar

### 1. Ekran Titreşim Efekti

**Prompt:** "Kombo sırasında ekran titreme efektini nasıl uygularım?"

**Cevap:** Kodda ekran titreşim efekti şu şekilde uygulanmış:

```javascript
let screenShake = {
   active: false,    
   intensity: 0,    
   duration: 0,     
   timer: 0,         
   offsetX: 0,     
   offsetY: 0        
};

function startScreenShake(intensity, duration) {
   screenShake.active = true;
   screenShake.intensity = intensity;
   screenShake.duration = duration;
   screenShake.timer = duration;
}

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
    const intensity = Math.min(5 + (combo * 1), 10);     
    const duration = Math.min(150 + (combo * 25), 300);  
    startScreenShake(intensity, duration);
}
```

Çizim fonksiyonunda uygulama:
```javascript
ctx.translate(
    offsetX + screenShake.offsetX * scale,  
    offsetY + screenShake.offsetY * scale   
);
```

### 2. FPS Kontrolü ve Zamanlayıcı Yönetimi

**Prompt:** "Oyun döngüsünde FPS'i nasıl sabit tutuyorum ve zamanlayıcıları doğru şekilde nasıl güncelliyorum?"

**Cevap:** Kodda FPS kontrolü ve zamanlayıcı güncellemeleri şu şekilde yapılıyor:

```javascript
function update() {
   if (gameState !== 'playing') return;
   
   const currentTime = Date.now();
   
   updateScreenShake();
   
   if (punchingBag.effectTimer > 0) {
       punchingBag.effectTimer -= 16;
       if (punchingBag.effectTimer <= 0) {
           punchingBag.isBlocking = false;
           punchingBag.isCatching = false;
       }
   }
   
   if (boxer.animationTimer > 0) {
       boxer.animationTimer -= 16;
   }
   
   if (punchingBag.position !== 'center') {
       punchingBag.returnTimer += 16;
       if (punchingBag.returnTimer >= punchingBag.returnDelay) {
           punchingBag.position = 'center';
           punchingBag.returnTimer = 0;
       }
   }
}

function gameLoop() {
   update();
   draw();
   requestAnimationFrame(gameLoop);
}
```
_Ana prensipler:_
- requestAnimationFrame() 60 FPS sağlar
- Tüm zamanlayıcılar 16ms (1 frame) artırılır/azaltılır
- Date.now() gerçek zaman kontrolü için kullanılır
- Her timer için ayrı kontrol yapılır


### 3. Arka Plan Görseli Prompt'ı

**Prompt:** "Boks oyunum için arka plan görseli oluşturacak İngilizce prompt'a ihtiyacım var. Oyuncu boks torbasına vuruyor ve torbanın arkasında ev spor salonu görünmeli. Arka plan tasarımı nasıl olmalı?"

**Cevap:** Arka plan görseli için şu İngilizce prompt'ı kullanabilirsin:
```A home gym interior background for a boxing game, viewed from front perspective. The scene should show a spacious garage or basement converted into a personal gym. Include concrete or wooden floors, exposed brick or cement walls, hanging heavy bags in the background, weight racks, exercise equipment, dim atmospheric lighting with strong shadows, industrial ceiling with exposed beams or pipes, some motivational posters on walls, and a gritty, realistic gym atmosphere. The lighting should be moody with warm tungsten bulbs creating dramatic shadows. Style: realistic, detailed, game background art, 16:10 aspect ratio, no people visible```
