# NoteFi Website

A responsive one-page website for NoteFi, a Web3-native notepad with AI-powered reminders. Built with modern HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with smooth scaling on desktop
- **Modern UI**: Clean, professional design matching Web3 aesthetics
- **Wallet Integration**: Connect Wallet button with modal popup for major EVM and Solana wallets
- **Interactive Elements**: FAQ accordion, smooth scrolling, hover effects
- **Accessibility**: Keyboard navigation support and semantic HTML

## Project Structure

```
notefi-website/
├── index.html          # Main HTML file
├── style.css           # Complete CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── assets/             # Images and icons
│   ├── metamask-icon.png
│   ├── trust-wallet-icon.png
│   ├── coinbase-wallet-icon.png
│   ├── walletconnect-icon.png
│   ├── phantom-icon.png
│   └── solflare-icon.png
└── components/         # (Reserved for future modular components)
```

## Sections

1. **Navigation**: Fixed header with logo and menu
2. **Hero**: Main title, description, and CTA buttons
3. **Features**: "Why NoteFi?" with 4 key features
4. **How It Works**: 3-step process explanation
5. **Pricing**: Free and Premium plan comparison
6. **FAQ**: Expandable questions and answers
7. **Footer**: Links, branding, and Web3 hashtags

## Wallet Integration

The "Connect Wallet" button opens a modal with the following wallet options:
- MetaMask
- Trust Wallet
- Coinbase Wallet
- WalletConnect
- Phantom (Solana)
- Solflare (Solana)

**Note**: Wallet connections are currently static/simulated for demonstration purposes.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: ES6+, DOM manipulation, event handling
- **Fonts**: Inter from Google Fonts
- **Icons**: Custom generated wallet icons

## Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Or serve with a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## Customization

### Colors
CSS custom properties are defined in `:root` for easy theming:
- `--primary-color`: Main brand color
- `--text-primary`: Primary text color
- `--background`: Main background color

### Content
All content can be modified directly in `index.html`. The structure is semantic and well-commented.

### Wallet Options
To add/remove wallet options:
1. Update the HTML in the modal section
2. Add corresponding icons to the `assets/` folder
3. Update the JavaScript wallet handling if needed

## Performance

- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Compressed images for fast loading
- Smooth animations with CSS transforms

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files maintaining the folder structure.

## License

This project is created for demonstration purposes. Modify and use as needed for your projects.

