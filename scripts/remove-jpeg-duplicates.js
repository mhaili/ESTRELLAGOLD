const fs = require('fs');
const path = require('path');

const IMAGES_DIR = './src/assets/images';

function cleanJpegDuplicates(dir) {
  const items = fs.readdirSync(dir);
  let deletedCount = 0;
  let keptCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const subResult = cleanJpegDuplicates(fullPath);
      deletedCount += subResult.deleted;
      keptCount += subResult.kept;
    } else if (stat.isFile()) {
      const baseName = path.parse(item).name;
      const ext = path.parse(item).ext.toLowerCase();
      
      // Si c'est un fichier JPEG et qu'il existe une version WebP
      if (ext === '.jpg' || ext === '.jpeg') {
        const webpVersion = path.join(dir, baseName + '.webp');
        
        // Exceptions : garder ces JPEGs spécifiques
        const keepJpeg = [
          'logo.jpg',
          'Milkshake.jpg',
          'Thé au gingembre & miel.jpg',
          'ftour-anglais.jpg',
          'ftour-continental.jpg', 
          'ftour-fassi.jpg',
          'ftour-merrakchi.jpg',
          'iced-latte.jpg',
          'latte-pistach.jpg'
        ];
        
        if (keepJpeg.includes(item)) {
          console.log(`✅ Gardé (exception): ${item}`);
          keptCount++;
        } else if (fs.existsSync(webpVersion)) {
          console.log(`🗑️  Supprimé (doublon WebP existe): ${item}`);
          fs.unlinkSync(fullPath);
          deletedCount++;
        } else {
          console.log(`✅ Gardé (pas de version WebP): ${item}`);
          keptCount++;
        }
      } else {
        // Garder tous les autres fichiers (WebP, SVG, etc.)
        console.log(`✅ Gardé: ${item}`);
        keptCount++;
      }
    }
  }
  
  return { deleted: deletedCount, kept: keptCount };
}

console.log('🧹 SUPPRESSION DES DOUBLONS JPEG (quand WebP existe)...\n');
console.log('🎯 Stratégie:');
console.log('   - Supprimer .jpg quand .webp existe');
console.log('   - Garder quelques .jpg spécifiques (logo, certains produits)');
console.log('   - Garder tous les .webp');
console.log('');

const result = cleanJpegDuplicates(IMAGES_DIR);

console.log(`\n📊 RÉSULTAT FINAL:`);
console.log(`✅ Fichiers gardés: ${result.kept}`);
console.log(`🗑️  Fichiers supprimés: ${result.deleted}`);

const reduction = ((result.deleted / (result.deleted + result.kept)) * 100).toFixed(1);
console.log(`💾 Réduction: ${reduction}% de fichiers supprimés`);