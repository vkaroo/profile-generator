# Profile Generator

Generate realistic fake profiles with name and address for account registration testing.

## What It Does

This tool generates random but realistic-looking profiles including:
- **Full Name** (First + Last)
- **Complete Address** (Street, City, State/Province, ZIP)
- **Format-specific details** (RT/RW for Indonesia, State code for US)

Perfect for:
- 🧪 Testing account registration flows
- 🔧 Form automation & validation
- 📊 Load testing with dummy data
- 🎭 Demo/testing environments

⚠️ **NOT for real KYC/identity verification** - Data is randomly generated!

---

## Quick Examples

### Generate 1 US Profile
```
$ node profile-gen.js 1 US

👤 Person #1:
   Name:   John Smith
   First:  John
   Last:   Smith

📍 Location:
   Street: 123 Main St
   City:   Los Angeles
   State:  CA (California)
   ZIP:    90210
   Full:   123 Main St, Los Angeles, CA 90210
```

### Generate 1 Indonesia Profile
```
$ node profile-gen.js 1 ID

👤 Person #1:
   Name:   Budi Santoso
   First:  Budi
   Last:   Santoso

📍 Location:
   Street: Jl. Sudirman No. 123
   City:   Jakarta
   Province: DKI Jakarta
   ZIP:    10110
   RT/RW:  5/10
   Full:   Jl. Sudirman No. 123, RT.5/RW.10, Jakarta, DKI Jakarta 10110
```

### Generate Multiple
```bash
# 5 US profiles
node profile-gen.js 5 US

# 10 Indonesia profiles  
node profile-gen.js 10 ID
```

---

## Usage

```bash
node profile-gen.js [count] [country]
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `count` | Number of profiles to generate | 5 |
| `country` | Country format: `US` or `ID` | US |

### Supported Countries

| Code | Country | Format |
|------|---------|--------|
| US | United States | State abbreviation + ZIP (5 digits) |
| ID | Indonesia | Province + Kodepos + RT/RW |

---

## Installation

### Option 1: Clone & Run
```bash
git clone https://github.com/vkaroo/profile-generator.git
cd profile-generator

# Run directly (no dependencies needed)
node profile-gen.js 1 US
```

### Option 2: Copy Single File
```bash
# Just copy profile-gen.js to your project
curl -O https://raw.githubusercontent.com/vkaroo/profile-generator/master/profile-gen.js
node profile-gen.js 1 ID
```

### Requirements
- Node.js (any version)
- No npm install needed!

---

## Data Details

### US Profiles Include:
- Realistic English names
- Valid ZIP codes
- Real city/state combinations
- Standard US address format

### Indonesia Profiles Include:
- Realistic Indonesian names
- Format: Jl. [Street] No. [Number]
- RT/RW (Rukun Tetangga / Rukun Warga)
- Real province names
- Valid Indonesian postal codes

---

## Real World Example

**Scenario:** Testing account creation for a new app

```bash
# Generate test profile
$ node profile-gen.js 1 ID

👤 Person #1:
   Name:   Sari Octavian
   First:  Sari
   Last:   Octavian

📍 Location:
   Street: Jl. Gatot Subroto No. 491
   City:   Semarang
   Province: Jawa Tengah
   ZIP:    50313
   RT/RW:  5/20
   Full:   Jl. Gatot Subroto No. 491, RT.5/RW.20, Semarang, Jawa Tengah 50313
```

**Use in form:**
- Name: `Sari Octavian`
- Address: `Jl. Gatot Subroto No. 491`
- City: `Semarang`
- Province: `Jawa Tengah`
- ZIP: `50313`

---

## Important Notes

⚠️ **DISCLAIMER**
- All data is **randomly generated** and **fictional**
- Names are fake combinations
- Addresses use real city/ZIP but random street numbers
- **NOT for real identity verification**
- **NOT for fraud or illegal purposes**
- Only for testing and development

---

## GitHub

https://github.com/vkaroo/profile-generator

## License

MIT - Use responsibly for testing purposes only
