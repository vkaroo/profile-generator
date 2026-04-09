# Profile Generator Skill

Generate random profiles with name and address for account registration.

## Usage

```bash
# Generate US profile
node profile-gen.js 1 US

# Generate Indonesia profile  
node profile-gen.js 1 ID

# Generate multiple profiles
node profile-gen.js 5 US
node profile-gen.js 10 ID
```

## Output Format

**US Profile:**
```
Name: John Smith
Address: 123 Main St, Los Angeles, CA 90210
```

**Indonesia Profile:**
```
Name: Budi Santoso
Address: Jl. Sudirman No. 123, RT.5/RW.10, Jakarta, DKI Jakarta 10110
```

## Data Included

- First Name & Last Name
- Full Name
- Street Address
- City
- State/Province
- ZIP Code
- RT/RW (for Indonesia)

## Countries Supported

- US (United States) - default
- ID (Indonesia)

## File Location

`/root/.openclaw/workspace/skills/profile-generator/profile-gen.js`
