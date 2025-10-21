#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 DIAGNOSTIC COMPLET DES IMAGES - ESTRELLAGOLD');
console.log('='.repeat(60));

// Chemins
const srcPath = path.join(__dirname, '..', 'src');
const imagesPath = path.join(srcPath, 'assets', 'images');
const componentsPath = path.join(srcPath, 'components');
const viewsPath = path.join(srcPath, 'views');

// Vérification des dossiers d'images
console.log('\n📁 STRUCTURE DES IMAGES:');
console.log('-'.repeat(30));

function checkImagesStructure() {
  if (!fs.existsSync(imagesPath)) {
    console.log('❌ Le dossier /src/assets/images n\'existe pas !');
    return false;
  }

  const mainImages = fs.readdirSync(imagesPath).filter(file => 
    !fs.statSync(path.join(imagesPath, file)).isDirectory()
  );
  
  console.log(`✅ Images principales (${mainImages.length}):`);
  mainImages.forEach(img => console.log(`   - ${img}`));

  const menuPath = path.join(imagesPath, 'products-menu');
  if (fs.existsSync(menuPath)) {
    const menuImages = fs.readdirSync(menuPath);
    console.log(`✅ Images menu (${menuImages.length}):`);
    menuImages.forEach(img => console.log(`   - products-menu/${img}`));
  } else {
    console.log('❌ Dossier products-menu manquant !');
  }

  return true;
}

// Extraction des références d'images des fichiers Vue
function extractImageReferences(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const references = [];
  
  // Patterns pour trouver les images
  const patterns = [
    /new URL\('([^']+\.(?:jpg|jpeg|png|webp|svg))'[^)]+\)/gi,
    /url\(['"]([^'"]+\.(?:jpg|jpeg|png|webp|svg))['"][^)]*\)/gi,
    /src=['"]([^'"]+\.(?:jpg|jpeg|png|webp|svg))['"][^>]*/gi,
    /:src=['"]([^'"]+\.(?:jpg|jpeg|png|webp|svg))['"][^>]*/gi
  ];

  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      references.push({
        path: match[1],
        line: content.substring(0, match.index).split('\n').length,
        type: pattern.toString().includes('new URL') ? 'new URL()' :
              pattern.toString().includes('url(') ? 'CSS url()' :
              pattern.toString().includes(':src') ? 'Vue :src' : 'HTML src'
      });
    }
  });

  return references;
}

// Vérification des références dans les composants
console.log('\n🔍 ANALYSE DES COMPOSANTS:');
console.log('-'.repeat(30));

function checkComponents() {
  const issues = [];
  
  // Vérifier les composants
  if (fs.existsSync(componentsPath)) {
    const components = fs.readdirSync(componentsPath).filter(file => file.endsWith('.vue'));
    
    components.forEach(component => {
      const filePath = path.join(componentsPath, component);
      const references = extractImageReferences(filePath);
      
      console.log(`\n📄 ${component}:`);
      
      if (references.length === 0) {
        console.log('   ℹ️  Aucune image trouvée');
      } else {
        references.forEach(ref => {
          console.log(`   📸 Ligne ${ref.line}: ${ref.path} (${ref.type})`);
          
          // Vérifier si l'image existe
          let imagePath = ref.path;
          
          // Nettoyer le chemin
          if (imagePath.startsWith('../../assets/images/')) {
            imagePath = imagePath.replace('../../assets/images/', '');
          } else if (imagePath.startsWith('../assets/images/')) {
            imagePath = imagePath.replace('../assets/images/', '');
          }
          
          // Chemin complet vers l'image
          let fullImagePath;
          if (imagePath.startsWith('products-menu/')) {
            fullImagePath = path.join(imagesPath, imagePath);
          } else {
            fullImagePath = path.join(imagesPath, imagePath);
          }
          
          if (!fs.existsSync(fullImagePath)) {
            console.log(`   ❌ IMAGE MANQUANTE: ${imagePath}`);
            issues.push({
              file: component,
              line: ref.line,
              missing: imagePath,
              fullPath: fullImagePath
            });
          } else {
            console.log(`   ✅ Image OK: ${imagePath}`);
          }
        });
      }
    });
  }

  // Vérifier les vues aussi
  if (fs.existsSync(viewsPath)) {
    const views = fs.readdirSync(viewsPath).filter(file => file.endsWith('.vue'));
    
    views.forEach(view => {
      const filePath = path.join(viewsPath, view);
      const references = extractImageReferences(filePath);
      
      if (references.length > 0) {
        console.log(`\n📄 ${view} (Vue):`);
        references.forEach(ref => {
          console.log(`   📸 Ligne ${ref.line}: ${ref.path} (${ref.type})`);
          
          // Même vérification que pour les composants
          let imagePath = ref.path;
          if (imagePath.startsWith('../../assets/images/')) {
            imagePath = imagePath.replace('../../assets/images/', '');
          } else if (imagePath.startsWith('../assets/images/')) {
            imagePath = imagePath.replace('../assets/images/', '');
          }
          
          let fullImagePath = path.join(imagesPath, imagePath);
          
          if (!fs.existsSync(fullImagePath)) {
            console.log(`   ❌ IMAGE MANQUANTE: ${imagePath}`);
            issues.push({
              file: view,
              line: ref.line,
              missing: imagePath,
              fullPath: fullImagePath
            });
          } else {
            console.log(`   ✅ Image OK: ${imagePath}`);
          }
        });
      }
    });
  }

  return issues;
}

// Rapport de problèmes
function showIssuesReport(issues) {
  console.log('\n🚨 RAPPORT DES PROBLÈMES:');
  console.log('='.repeat(30));
  
  if (issues.length === 0) {
    console.log('🎉 Aucun problème d\'image détecté !');
    return;
  }
  
  console.log(`❌ ${issues.length} problème(s) détecté(s):\n`);
  
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.file} (ligne ${issue.line})`);
    console.log(`   Image manquante: ${issue.missing}`);
    console.log(`   Chemin recherché: ${issue.fullPath}`);
    console.log('');
  });
  
  // Suggestions de correction
  console.log('💡 SUGGESTIONS DE CORRECTION:');
  console.log('-'.repeat(30));
  
  const missingImages = [...new Set(issues.map(i => i.missing))];
  missingImages.forEach(img => {
    console.log(`🔧 Pour ${img}:`);
    console.log(`   - Vérifiez que l'image existe dans src/assets/images/`);
    console.log(`   - Vérifiez l'orthographe du nom de fichier`);
    console.log(`   - Vérifiez les chemins relatifs (../../assets/images/ depuis components/)`);
    console.log('');
  });
}

// Exécution du diagnostic
async function runDiagnostic() {
  console.log('🚀 Démarrage du diagnostic...\n');
  
  // Vérification de la structure
  const structureOK = checkImagesStructure();
  if (!structureOK) {
    console.log('❌ Impossible de continuer sans la structure d\'images de base.');
    return;
  }
  
  // Vérification des composants
  const issues = checkComponents();
  
  // Rapport final
  showIssuesReport(issues);
  
  console.log('\n✅ Diagnostic terminé !');
  console.log(`📊 Résumé: ${issues.length} problème(s) détecté(s)`);
  
  if (issues.length > 0) {
    process.exit(1);
  }
}

// Lancement
runDiagnostic().catch(console.error);