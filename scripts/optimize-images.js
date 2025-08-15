const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp for image optimization...');
  execSync('npm install sharp --save-dev');
}

const sharp = require('sharp');

// Directories to scan for images
const directories = [
  path.join(__dirname, '../public'),
];

// Image extensions to process
const extensions = ['.jpg', '.jpeg', '.png'];

// Output quality (0-100)
const quality = 80;

// Maximum dimensions
const maxWidth = 1920;

// Process images
async function optimizeImages() {
  let totalSaved = 0;
  let totalProcessed = 0;

  for (const dir of directories) {
    await processDirectory(dir);
  }

  console.log(`\nOptimization complete!`);
  console.log(`Total images processed: ${totalProcessed}`);
  console.log(`Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);

  // Helper function to process a directory recursively
  async function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (extensions.includes(ext)) {
          // Process image file
          const originalSize = stat.size;
          await optimizeImage(filePath, ext);
          const newSize = fs.statSync(filePath).size;
          const saved = originalSize - newSize;
          totalSaved += saved;
          totalProcessed++;

          console.log(`Optimized: ${filePath}`);
          console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
          console.log(`  New: ${(newSize / 1024).toFixed(2)} KB`);
          console.log(`  Saved: ${(saved / 1024).toFixed(2)} KB (${Math.round((saved / originalSize) * 100)}%)`);
        }
      }
    }
  }

  // Helper function to optimize a single image
  async function optimizeImage(filePath, ext) {
    try {
      // Create a temporary file path
      const tempPath = `${filePath}.temp${ext}`;

      // Process the image with sharp
      let sharpInstance = sharp(filePath);

      // Resize if needed (preserving aspect ratio)
      const metadata = await sharpInstance.metadata();
      if (metadata.width > maxWidth) {
        sharpInstance = sharpInstance.resize({
          width: maxWidth,
          withoutEnlargement: true,
        });
      }

      // Apply appropriate compression based on file type
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharpInstance.jpeg({ quality }).toFile(tempPath);
      } else if (ext === '.png') {
        await sharpInstance.png({ quality }).toFile(tempPath);
      }

      // Replace the original file with the optimized one
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
    } catch (error) {
      console.error(`Error optimizing ${filePath}:`, error.message);
    }
  }
}

// Run the optimization
optimizeImages().catch(console.error);