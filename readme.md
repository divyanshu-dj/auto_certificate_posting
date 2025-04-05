# 🏅 PR-Certificate Generator

A serverless Node.js app that automatically generates and tweets personalized certificates when a contributor's Pull Request (PR) is merged. It uses **GitHub Actions**, **Canvas for Node**, and **Twitter API v2** for full automation and social engagement.

## 🚀 Features

- 📜 Automatically generates certificates with contributor name and PR title
- 🐦 Auto-posts the certificate to Twitter for public recognition
- ⚙️ GitHub Actions triggers the whole pipeline on PR merge
- 🧵 Custom text wrapping logic for dynamic content rendering
- 🔒 Uses environment variables to keep secrets secure

---

## 🛠 Tech Stack

- **Node.js** – Core logic and file handling
- **Canvas** – Image generation
- **Twitter API v2** – Tweeting certificates
- **GitHub Actions** – CI/CD trigger on PR merge
- **dotenv** – Secure environment variable handling

---

## 🖼 Example Output

> 🎉 A certificate image like this is generated and tweeted when a PR is merged:

```
Congratulations John Doe!
For merging the PR: Add login functionality
```

![Example](./image/sample-certificate.png)

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/pr-certificate-generator.git
cd pr-certificate-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file at the root with the following values:

```env
# PR metadata
PR_USER=YourGitHubUsername
PR_TITLE=Your PR Title

# Twitter API credentials
TWITTER_CONSUMER_KEY=xxx
TWITTER_CONSUMER_SECRET=xxx
TWITTER_ACCESS_TOKEN=xxx
TWITTER_ACCESS_TOKEN_SECRET=xxx
TWITTER_BEARER_TOKEN=xxx
```

### 4. Add certificate template

Place your certificate background image as `image/template.png`.

---

## 🧠 How It Works

When a PR is merged:

1. GitHub Action triggers the `index.js` script.
2. `generateCertificate.js` loads the template, draws the text, and saves a PNG.
3. `postToTwitter.js` tweets the image using Twitter API v2.
4. Boom 💥 — public recognition delivered!

---

## 🔄 GitHub Actions (Workflow)

Create a file at `.github/workflows/certificate.yml`:

```yaml
name: Generate and Tweet Certificate

on:
  pull_request:
    types: [closed]

jobs:
  generate-and-post:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run script
        run: node index.js
        env:
          PR_USER: ${{ github.event.pull_request.user.login }}
          PR_TITLE: ${{ github.event.pull_request.title }}
          TWITTER_CONSUMER_KEY: ${{ secrets.TWITTER_CONSUMER_KEY }}
          TWITTER_CONSUMER_SECRET: ${{ secrets.TWITTER_CONSUMER_SECRET }}
          TWITTER_ACCESS_TOKEN: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          TWITTER_ACCESS_TOKEN_SECRET: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
          TWITTER_BEARER_TOKEN: ${{ secrets.TWITTER_BEARER_TOKEN }}
```

---

## 📦 Dependencies

```json
{
  "type": "module",
  "dependencies": {
    "canvas": "^2.11.2",
    "dotenv": "^16.4.5",
    "twitter-api-v2": "^1.17.0"
  }
}
```

---

## 🤝 Contributing

Have ideas to improve this tool? Open an issue or a pull request! All contributions are welcome 🙌

---

## 📄 License

MIT License — See `LICENSE` file for details.

---

## 🙌 Acknowledgements

Built with ❤️ for the open-source community.  
Give credit, where credit is due — and now it's automated.
