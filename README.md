# CurrencyPro

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-green?style=for-the-badge)](currency-pro-convert.vercel.app)

**CurrencyPro** is an AI-powered web application for effortless currency detection and conversion. Upload images of banknotes or currency text, and CurrencyPro will automatically detect the currency type, denomination, and provide real-time conversion to any supported currency.

---

## 🚀 Features

- **Image-Based Currency Detection:**  
  Upload a photo of a banknote or currency text. The app uses advanced OCR (Optical Character Recognition) to identify the currency and denomination.

- **Real-Time Currency Conversion:**  
  Instantly convert detected or manually selected currencies using up-to-date exchange rates from trusted financial sources.

- **Multi-Currency Support:**  
  Recognizes and converts over 150 global currencies, including USD, EUR, GBP, JPY, INR, and more.

- **User-Friendly Interface:**  
  Simple, modern design with clear instructions and instant feedback.

- **Batch Processing:**  
  Detect and convert multiple currencies from a single image.

- **Confidence Scores:**  
  See how confident the AI is in its detection results.

- **Mobile-Optimized:**  
  Works seamlessly on desktop and mobile devices.

---

## 🖼️ How It Works

1. **Upload** an image of a banknote or currency text.
2. **Analyze:** The app uses OCR and AI models to extract and detect currency information.
3. **Detect:** Detected currencies and denominations are displayed with confidence scores.
4. **Convert:** Instantly convert the detected amount to your desired currency.

---

## 💻 Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn-ui
- **OCR:** [OCR.Space API](https://ocr.space/ocrapi)
- **Currency Rates:** Real-time exchange rate API (e.g., exchangerate-api.com)
- **Routing:** React Router

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory for your API keys:

```env
VITE_EXCHANGE_RATE_API_KEY=your_exchange_rate_api_key
VITE_OCR_SPACE_API_KEY=your_ocr_space_api_key
```

---

## 📁 Project Structure

```
src/
  components/
  pages/
  App.tsx
  main.tsx
public/
  favicon.ico
  index.html
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

- Adithya K Jayan (https://github.com/adithyajayan1)

---

**CurrencyPro** – Effortless currency detection and conversion, powered by AI.
