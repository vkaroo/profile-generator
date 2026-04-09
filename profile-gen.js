#!/usr/bin/env node
/**
 * Address Generator for Account Registration
 * Generates complete US addresses with valid ZIP codes
 */

const STATES = [
  { code: 'CA', name: 'California', zips: ['90210', '90001', '92014', '94102', '95814'] },
  { code: 'NY', name: 'New York', zips: ['10001', '10002', '10013', '11201', '14202'] },
  { code: 'TX', name: 'Texas', zips: ['75001', '75201', '77001', '78701', '73301'] },
  { code: 'FL', name: 'Florida', zips: ['33101', '33132', '32801', '33601', '32201'] },
  { code: 'WA', name: 'Washington', zips: ['98101', '98109', '98004', '99201', '98662'] },
  { code: 'NV', name: 'Nevada', zips: ['89101', '89109', '89501', '89701', '89014'] },
  { code: 'AZ', name: 'Arizona', zips: ['85001', '85251', '85701', '86301', '86401'] },
  { code: 'CO', name: 'Colorado', zips: ['80201', '80301', '80901', '80501', '81101'] },
];

const STREET_NAMES = [
  'Main St', 'Oak Ave', 'Pine Rd', 'Cedar Ln', 'Maple Dr',
  'Washington St', 'Lakeview Dr', 'Park Ave', 'River Rd', 'Broadway',
  'Market St', 'Sunset Blvd', 'Highland Ave', 'Forest Dr', 'Beach Rd',
  'Hillside Ave', 'Mountain View', 'Valley Rd', 'Spring St', 'Garden Ln'
];

const CITIES = {
  'CA': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'Oakland'],
  'NY': ['New York', 'Brooklyn', 'Buffalo', 'Albany', 'Rochester'],
  'TX': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
  'FL': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
  'WA': ['Seattle', 'Spokane', 'Tacoma', 'Bellevue', 'Vancouver'],
  'NV': ['Las Vegas', 'Reno', 'Henderson', 'Carson City', 'Sparks'],
  'AZ': ['Phoenix', 'Tucson', 'Scottsdale', 'Mesa', 'Tempe'],
  'CO': ['Denver', 'Colorado Springs', 'Aurora', 'Boulder', 'Fort Collins'],
};

const FIRST_NAMES = [
  'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
  'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa',
  'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley',
  'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle',
  'Kenneth', 'Dorothy', 'Kevin', 'Carol', 'Brian', 'Amanda', 'George', 'Melissa',
  'Edward', 'Deborah'
];

const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
  'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
  'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell'
];

// Indonesian Names
const ID_FIRST_NAMES = [
  'Ahmad', 'Budi', 'Citra', 'Dewi', 'Eko', 'Fitri', 'Gita', 'Hadi', 'Indah', 'Joko',
  'Kartika', 'Lestari', 'Mega', 'Nur', 'Oscar', 'Putri', 'Qomar', 'Rina', 'Sari', 'Tono',
  'Umi', 'Vina', 'Wati', 'Yanti', 'Zainal', 'Agus', 'Bayu', 'Cahyo', 'Dian', 'Eka'
];

const ID_LAST_NAMES = [
  'Santoso', 'Wijaya', 'Kusuma', 'Sari', 'Hartono', 'Susanto', 'Lestari', 'Pratama',
  'Nugroho', 'Suryani', 'Hidayat', 'Ramadhan', 'Permata', 'Setiawan', 'Mulyadi',
  'Anggraini', 'Putri', 'Wibowo', 'Saputra', 'Octavian', 'Utomo', 'Mahardika'
];

// Indonesian Address Data
const ID_CITIES = [
  { name: 'Jakarta', province: 'DKI Jakarta', zips: ['10110', '10220', '10330', '10440', '10550'] },
  { name: 'Surabaya', province: 'Jawa Timur', zips: ['60111', '60212', '60313', '60414', '60515'] },
  { name: 'Bandung', province: 'Jawa Barat', zips: ['40111', '40212', '40313', '40414', '40515'] },
  { name: 'Yogyakarta', province: 'DI Yogyakarta', zips: ['55111', '55212', '55313', '55414', '55515'] },
  { name: 'Semarang', province: 'Jawa Tengah', zips: ['50111', '50212', '50313', '50414', '50515'] },
  { name: 'Medan', province: 'Sumatera Utara', zips: ['20111', '20212', '20313', '20414', '20515'] },
  { name: 'Denpasar', province: 'Bali', zips: ['80111', '80212', '80313', '80414', '80515'] },
  { name: 'Makassar', province: 'Sulawesi Selatan', zips: ['90111', '90212', '90313', '90414', '90515'] },
];

const ID_STREETS = [
  'Jl. Sudirman', 'Jl. Thamrin', 'Jl. Gatot Subroto', 'Jl. HR Rasuna Said',
  'Jl. MH Thamrin', 'Jl. Asia Afrika', 'Jl. Braga', 'Jl. Malioboro',
  'Jl. Pemuda', 'Jl. Veteran', 'Jl. Imam Bonjol', 'Jl. Diponegoro',
  'Jl. Ahmad Yani', 'Jl. Gajah Mada', 'Jl. Hayam Wuruk', 'Jl. S Parman'
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName(country = 'US') {
  if (country === 'ID') {
    const firstName = pickRandom(ID_FIRST_NAMES);
    const lastName = pickRandom(ID_LAST_NAMES);
    return {
      first: firstName,
      last: lastName,
      full: `${firstName} ${lastName}`
    };
  }
  const firstName = pickRandom(FIRST_NAMES);
  const lastName = pickRandom(LAST_NAMES);
  return {
    first: firstName,
    last: lastName,
    full: `${firstName} ${lastName}`
  };
}

function generateAddressID() {
  const city = pickRandom(ID_CITIES);
  const street = pickRandom(ID_STREETS);
  const houseNumber = randomInt(1, 999);
  const rt = randomInt(1, 20);
  const rw = randomInt(1, 20);
  const zip = pickRandom(city.zips);
  const name = generateName('ID');
  
  return {
    name: name,
    street: `${street} No. ${houseNumber}`,
    city: city.name,
    province: city.province,
    zip: zip,
    rt: rt,
    rw: rw,
    full: `${street} No. ${houseNumber}, RT.${rt}/RW.${rw}, ${city.name}, ${city.province} ${zip}`
  };
}

function generateAddress(country = 'US') {
  if (country === 'ID') {
    return generateAddressID();
  }
  const state = pickRandom(STATES);
  const houseNumber = randomInt(100, 9999);
  const street = pickRandom(STREET_NAMES);
  const city = pickRandom(CITIES[state.code]);
  const zip = pickRandom(state.zips);
  const name = generateName('US');
  
  return {
    name: name,
    street: `${houseNumber} ${street}`,
    city: city,
    state: state.code,
    stateFull: state.name,
    zip: zip,
    full: `${houseNumber} ${street}, ${city}, ${state.code} ${zip}`,
    country: 'US'
  };
}

// Generate multiple addresses
function generateAddresses(count = 10, country = 'US') {
  const addresses = [];
  for (let i = 0; i < count; i++) {
    addresses.push(generateAddress(country));
  }
  return addresses;
}

// CLI output
if (require.main === module) {
  const args = process.argv.slice(2);
  const count = args[0] ? parseInt(args[0]) : 5;
  const country = args[1] === 'ID' || args[1] === 'id' ? 'ID' : 'US';
  const countryLabel = country === 'ID' ? 'Indonesia' : 'US';
  
  console.log(`🔥 Profile Generator (${countryLabel})\n`);
  console.log('='.repeat(50));
  console.log(`Usage: node profile-gen.js [count] [US|ID]\n`);
  
  const addresses = generateAddresses(count, country);
  
  addresses.forEach((addr, i) => {
    console.log(`\n👤 Person #${i + 1}:`);
    console.log(`   Name:   ${addr.name.full}`);
    console.log(`   First:  ${addr.name.first}`);
    console.log(`   Last:   ${addr.name.last}`);
    console.log(`\n📍 Address:`);
    console.log(`   Street: ${addr.street}`);
    if (country === 'ID') {
      console.log(`   City:   ${addr.city}`);
      console.log(`   Province: ${addr.province}`);
      console.log(`   ZIP:    ${addr.zip}`);
      console.log(`   RT/RW:  ${addr.rt}/${addr.rw}`);
    } else {
      console.log(`   City:   ${addr.city}`);
      console.log(`   State:  ${addr.state} (${addr.stateFull})`);
      console.log(`   ZIP:    ${addr.zip}`);
    }
    console.log(`   Full:   ${addr.full}`);
  });
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Generated ${count} ${countryLabel} profiles`);
}

module.exports = { generateAddress, generateAddresses, generateName, generateAddressID };
