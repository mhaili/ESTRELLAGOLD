#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 CORRECTION AUTOMATIQUE DES CHEMINS D\'IMAGES - MenuSection_NEW.vue');
console.log('='.repeat(70));

const filePath = path.join(__dirname, '..', 'src', 'components', 'MenuSection_NEW.vue');

if (!fs.existsSync(filePath)) {
  console.log('❌ Fichier MenuSection_NEW.vue non trouvé !');
  process.exit(1);
}

// Lire le fichier
const content = fs.readFileSync(filePath, 'utf8');

// Remplacer tous les chemins d'images incorrects
const correctedContent = content.replace(
  /new URL\('\.\.\/\.\.\/assets\/images\//g, 
  "new URL('../assets/images/"
);

// Compter les remplacements
const originalMatches = (content.match(/new URL\('\.\.\/\.\.\/assets\/images\//g) || []).length;
const correctedMatches = (correctedContent.match(/new URL\('\.\.\/assets\/images\//g) || []).length;

console.log(`📊 Résultats:`);
console.log(`   - Chemins incorrects trouvés: ${originalMatches}`);
console.log(`   - Chemins corrigés: ${correctedMatches}`);

if (originalMatches > 0) {
  // Écrire le fichier corrigé
  fs.writeFileSync(filePath, correctedContent, 'utf8');
  console.log('✅ Fichier MenuSection_NEW.vue corrigé avec succès !');
} else {
  console.log('ℹ️  Aucune correction nécessaire dans MenuSection_NEW.vue');
}

console.log('\n🎉 Correction terminée !');