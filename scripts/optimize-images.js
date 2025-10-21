const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = './assets/images';
const OUTPUT_DIR = './src/assets/images';

// Note: Le dossier ./assets/images/ a été supprimé après optimisation
// Ce script ne s'exécutera que si de nouvelles images sont ajoutées

// Configurations d'optimisation
const QUALITY = {
  jpeg: 80,
  webp: 85,
  png: 90
};

const SIZES = {
  thumbnail: 300,
  small: 600,
  medium: 1200,
  large: 1920
};

// Créer le dossier de sortie
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputDir, filename) {
  const name = path.parse(filename).name;
  const ext = path.parse(filename).ext.toLowerCase();
  
  console.log(`📸 Optimisation: ${filename}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Images responsives pour les grandes images (> 500KB)
    const stats = fs.statSync(inputPath);
    const isLarge = stats.size > 500000; // 500KB
    
    if (isLarge) {
      // Créer plusieurs tailles
      for (const [sizeName, width] of Object.entries(SIZES)) {
        if (width <= metadata.width) {
          // Version JPEG optimisée
          const jpegPath = path.join(outputDir, `${name}-${sizeName}.jpg`);
          await image
            .resize(width)
            .jpeg({ quality: QUALITY.jpeg, progressive: true })
            .toFile(jpegPath);
          
          // Version WebP moderne
          const webpPath = path.join(outputDir, `${name}-${sizeName}.webp`);
          await image
            .resize(width)
            .webp({ quality: QUALITY.webp })
            .toFile(webpPath);
        }
      }
    } else {
      // Optimisation simple pour petites images
      if (ext === '.jpg' || ext === '.jpeg') {
        const jpegPath = path.join(outputDir, `${name}.jpg`);
        await image
          .jpeg({ quality: QUALITY.jpeg, progressive: true })
          .toFile(jpegPath);
        
        const webpPath = path.join(outputDir, `${name}.webp`);
        await image
          .webp({ quality: QUALITY.webp })
          .toFile(webpPath);
      } else if (ext === '.png') {
        const pngPath = path.join(outputDir, `${name}.png`);
        await image
          .png({ quality: QUALITY.png })
          .toFile(pngPath);
        
        const webpPath = path.join(outputDir, `${name}.webp`);
        await image
          .webp({ quality: QUALITY.webp })
          .toFile(webpPath);
      }
    }
    
    console.log(`✅ ${filename} optimisé`);
  } catch (error) {
    console.error(`❌ Erreur avec ${filename}:`, error.message);
  }
}

async function processDirectory(dir, outputDir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const subOutputDir = path.join(outputDir, item);
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true });
      }
      await processDirectory(fullPath, subOutputDir);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await optimizeImage(fullPath, outputDir, item);
      }
    }
  }
}

async function main() {
  console.log('🚀 Démarrage de l\'optimisation des images...\n');
  
  // Vérifier si le dossier source existe
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('📁 Aucun dossier d\'images source trouvé.');
    console.log('💡 Ajoutez vos nouvelles images dans ./assets/images/ pour les optimiser.');
    console.log('✅ Images déjà optimisées disponibles dans ./src/assets/images/');
    return;
  }
  
  const startTime = Date.now();
  await processDirectory(IMAGES_DIR, OUTPUT_DIR);
  const endTime = Date.now();
  
  console.log(`\n✨ Optimisation terminée en ${(endTime - startTime) / 1000}s`);
  console.log(`📁 Images optimisées dans: ${OUTPUT_DIR}`);
  
  // Calculer l'économie d'espace
  const originalSize = getDirectorySize(IMAGES_DIR);
  const optimizedSize = getDirectorySize(OUTPUT_DIR);
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
  
  console.log(`💾 Économie d'espace: ${savings}%`);
  console.log(`📉 ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)}`);
}

function getDirectorySize(dir) {
  let totalSize = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      totalSize += getDirectorySize(fullPath);
    } else {
      totalSize += fs.statSync(fullPath).size;
    }
  }
  
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

main().catch(console.error);