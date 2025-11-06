// Convert the private key to base64 for Vercel
require('dotenv').config({ path: '.env.local' });

console.log('=== ENCODING PRIVATE KEY FOR VERCEL ===\n');

const privateKey = process.env.GOOGLE_PRIVATE_KEY;

if (!privateKey) {
  console.log('❌ GOOGLE_PRIVATE_KEY not found in .env.local');
  process.exit(1);
}

// Remove quotes if present
const cleanKey = privateKey.replace(/^["']|["']$/g, '');

// Convert to base64
const base64Key = Buffer.from(cleanKey).toString('base64');

console.log('✅ Private key has been encoded to base64\n');
console.log('📋 COPY THIS VALUE TO VERCEL:\n');
console.log('═'.repeat(80));
console.log(base64Key);
console.log('═'.repeat(80));

console.log('\n📝 INSTRUCTIONS:');
console.log('1. Go to your Vercel project dashboard');
console.log('2. Go to Settings > Environment Variables');
console.log('3. Find GOOGLE_PRIVATE_KEY and click Edit');
console.log('4. DELETE the old value completely');
console.log('5. Paste the base64 string above (the long random-looking string)');
console.log('6. DO NOT add quotes around it');
console.log('7. Save the variable');
console.log('8. Redeploy the project');
console.log('\nThe code will automatically detect it\'s base64 and decode it!');
