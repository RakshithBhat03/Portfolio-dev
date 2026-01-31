# Developer Portfolio

A clean, beautiful and responsive portfolio template for developers built with React.

## Getting Started

### Prerequisites

- Node.js v10.16.0 or higher
- npm v6.9.0 or higher

### Installation

```bash
# Clone this repository
git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
cd developerFolio

# Setup environment variables
cp env.example .env

# Install dependencies
npm install

# Start the dev server
npm start
```

## Configuration

All portfolio content is configured in `src/portfolio.js`. Customize theme colors in `src/_globalColor.scss`.

### Environment Variables

Create a `.env` file with:

```env
REACT_APP_GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
USE_GITHUB_DATA=true
MEDIUM_USERNAME=your_medium_username  # Optional
```

Generate a GitHub personal access token (no scopes needed) from [GitHub Settings](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic).

### Resume

Upload your resume as `resume.pdf` to `src/containers/greeting/resume/`.

## Deployment

### GitHub Pages

1. Update `homepage` in `package.json` to your GitHub Pages URL
2. Run `npm run deploy`

See [Create React App GitHub Pages docs](https://create-react-app.dev/docs/deployment/#github-pages) for details.

### Docker

```bash
docker build -t developerfolio:latest .
docker run -t -p 3000:3000 developerfolio:latest
```

## License

This project is licensed under the MIT License.
