---
description: Update package version and publish to NPM
---

1. Check git status (must be clean for npm version)
```bash
git status --porcelain
```

2. Check if logged in to NPM
```bash
npm whoami
```

3. Run tests
```bash
npm test
```

4. Update version (patch)
```bash
npm version patch
```

5. Build the package
```bash
npm run build
```

6. Publish to NPM
```bash
npm publish
```
