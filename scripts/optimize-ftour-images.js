#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('🍽️ OPTIMISATION DES NOUVELLES IMAGES MENU - ESTRELLAGOLD');
console.log('='.repeat(65));

const inputDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'products-menu');

// Images à optimiser
const imagesToOptimize = [
  {
    input: 'ftour-continental.jpg',
    output: 'ftour-continental-medium.webp',
    description: 'Petit-déjeuner Continental'
  },
  {
    input: 'ftour-fassi.jpg',
    output: 'ftour-fassi-medium.webp',
    description: 'Petit-déjeuner Fassi'
  },
  {
    input: 'ftour-healthy.jpeg',
    output: 'ftour-healthy-medium.webp',
    description: 'Petit-déjeuner Healthy'
  },
  {
    input: 'ftour-merrakchi.jpg',
    output: 'ftour-merrakchi-medium.webp',
    description: 'Petit-déjeuner Marrakchi'
  },
  {
    input: 'pistachio-latte.jpg',
    output: 'latte-pistachio-medium.webp',
    description: 'Latte Pistache'
  }
];

async function optimizeImage(inputFile, outputFile, description) {
  const inputPath = path.join(inputDir, inputFile);
  const outputPath = path.join(inputDir, outputFile);

  if (!fs.existsSync(inputPath)) {
    console.log(`❌ ${inputFile} - Fichier non trouvé`);
    return false;
  }

  try {
    const stats = fs.statSync(inputPath);
    const inputSize = (stats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .resize(800, 600, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSize = (outputStats.size / 1024).toFixed(2);
    const reduction = (((stats.size - outputStats.size) / stats.size) * 100).toFixed(1);

    console.log(`✅ ${description}`);
    console.log(`   📁 ${inputFile} → ${outputFile}`);
    console.log(`   📊 ${inputSize} KB → ${outputSize} KB (${reduction}% de réduction)`);
    console.log('');

    return true;
  } catch (error) {
    console.log(`❌ Erreur lors de l'optimisation de ${inputFile}:`, error.message);
    return false;
  }
}

async function deleteOldImages() {
  console.log('🗑️ SUPPRESSION DES ANCIENNES IMAGES:');
  console.log('-'.repeat(40));

  const oldImages = [
    'ftour-continental.jpg',
    'ftour-fassi.jpg',
    'ftour-healthy.jpeg',
    'ftour-merrakchi.jpg',
    'pistachio-latte.jpg'
  ];

  for (const oldImage of oldImages) {
    const oldPath = path.join(inputDir, oldImage);
    if (fs.existsSync(oldPath)) {
      try {
        fs.unlinkSync(oldPath);
        console.log(`✅ Supprimé: ${oldImage}`);
      } catch (error) {
        console.log(`❌ Erreur suppression ${oldImage}:`, error.message);
      }
    } else {
      console.log(`ℹ️  ${oldImage} - Déjà supprimé`);
    }
  }
  console.log('');
}

async function main() {
  console.log('🚀 Démarrage de l\'optimisation...\n');

  let successCount = 0;
  let totalCount = imagesToOptimize.length;

  console.log('📸 OPTIMISATION DES IMAGES:');
  console.log('-'.repeat(40));

  for (const image of imagesToOptimize) {
    const success = await optimizeImage(image.input, image.output, image.description);
    if (success) successCount++;
  }

  // Supprimer les anciennes images après optimisation
  await deleteOldImages();

  console.log('📊 RÉSUMÉ:');
  console.log('-'.repeat(20));
  console.log(`✅ Images optimisées: ${successCount}/${totalCount}`);
  console.log(`🗑️ Anciennes images supprimées`);
  console.log(`📁 Nouvelles images WebP créées`);

  if (successCount === totalCount) {
    console.log('\n🎉 OPTIMISATION TERMINÉE AVEC SUCCÈS !');
    console.log('💡 Prochaine étape: Mettre à jour MenuSection_NEW.vue');
  } else {
    console.log('\n⚠️ Certaines images n\'ont pas pu être optimisées.');
    process.exit(1);
  }
}

main().catch(console.error);