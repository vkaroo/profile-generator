# Profile Generator

Generate random profiles with name and address for account registration.

## Installation

```bash
# Clone repo
git clone https://github.com/vkaroo/profile-generator.git
cd profile-generator

# Run directly (no dependencies)
node profile-gen.js [count] [country]
```

## Usage

### Basic Commands

```bash
# 1 US profile (default)
node profile-gen.js

# 1 US profile explicit
node profile-gen.js 1 US

# 1 Indonesia profile
node profile-gen.js 1 ID

# Multiple profiles
node profile-gen.js 5 US    # 5 US profiles
node profile-gen.js 10 ID   # 10 Indonesia profiles
```

### Output Example

**US Profile:**
```
👤 Person #1:
   Name:   John Smith
   First:  John
   Last:   Smith

📍 Address:
   Street: 123 Main St
   City:   Los Angeles
   State:  CA (California)
   ZIP:    90210
   Full:   123 Main St, Los Angeles, CA 90210
```

**Indonesia Profile:**
```
👤 Person #1:
   Name:   Budi Santoso
   First:  Budi
   Last:   Santoso

📍 Address:
   Street: Jl. Sudirman No. 123
   City:   Jakarta
   Province: DKI Jakarta
   ZIP:    10110
   RT/RW:  5/10
   Full:   Jl. Sudirman No. 123, RT.5/RW.10, Jakarta, DKI Jakarta 10110
```

## Use Cases

- Account registration for testing
- Form automation
- Address validation testing
- KYC/AML testing (not for real use!)

## Countries Supported

| Country | Code | Format |
|---------|------|--------|
| United States | US | State + ZIP |
| Indonesia | ID | Province + Kodepos + RT/RW |

## Data Included

- ✅ First Name & Last Name
- ✅ Full Name (First + Last)
- ✅ Street Address
- ✅ City
- ✅ State/Province
- ✅ ZIP/Kodepos
- ✅ RT/RW (Indonesia only)

## Important Notes

⚠️ **FOR TESTING PURPOSES ONLY**
- Generated data is fictional
- Do NOT use for real KYC/identity verification
- ZIP codes are real but addresses are random
- Names are randomly generated

## Example: Fireworks.ai Registration

```bash
# Generate profile
node profile-gen.js 1 ID

# Use output:
# Name: Sari Octavian
# Address: Jl. Gatot Subroto No. 491, RT.5/RW.20, Semarang, Jawa Tengah 50313
```

## GitHub Repo

https://github.com/vkaroo/profile-generator

## License

MIT - Free to use for testing purposes
