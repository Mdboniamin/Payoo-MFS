# Payoo MFS 💳

A modern **Mobile Financial Service (MFS)** web application built with HTML, CSS, and JavaScript. Payoo lets users manage their digital wallet — add money, cash out, transfer funds, pay bills, and track transactions — all from a clean, mobile-first interface.

🔗 **Live Demo:** [https://mdboniamin.github.io/Payoo-MFS/](https://mdboniamin.github.io/Payoo-MFS/)
📁 **Repository:** [https://github.com/Mdboniamin/Payoo-MFS](https://github.com/Mdboniamin/Payoo-MFS)

---

## 📱 Screenshots

| Login | Dashboard | Add Money |
|-------|-----------|-----------|
| Mobile number & PIN login | Balance overview & quick actions | Bank selection & deposit |

| Cash Out | Transfer Money | Pay Bill |
|----------|---------------|----------|
| Agent-based withdrawal | Peer-to-peer transfer | Utility bill payments |

---

## ✨ Features

- 🔐 **Login** — Secure authentication via mobile number and 4-digit PIN
- 💰 **Add Money** — Deposit funds by selecting a bank, entering account number, amount, and PIN
- 💸 **Cash Out** — Withdraw money through an agent using agent number, amount, and PIN
- 📤 **Transfer Money** — Send money to any user by account number, amount, and PIN
- 🎁 **Get Bonus** — Redeem bonus coupons to add balance
- 🧾 **Pay Bill** — Pay utility and service bills (electricity, gas, mobile recharge, etc.)
- 📋 **Transaction History** — View latest payments with details (Electricity Bill, Bank Deposit, Mobile Recharge, Gas Bill, and more)
- 👁️ **View All** — Expandable transaction list for full payment history
- 🚪 **Log Out** — Secure session logout

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | Tailwind CSS |
| UI Components | DaisyUI |
| Logic | JavaScript (Vanilla) |
| Deployment | GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required — Tailwind CSS and DaisyUI are loaded via CDN.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Mdboniamin/Payoo-MFS.git

# Navigate into the project folder
cd Payoo-MFS

# Open in your browser
open index.html
# or just double-click index.html in your file explorer
```

---

## 📂 Project Structure

```
Payoo-MFS/
├── index.html              # Login page
├── home.html               # Main dashboard & feature screens
├── payoo.png               # App logo
├── assets/                 # Icons and images
│   ├── bg.png
│   ├── bonus1.png
│   ├── Group.png
│   ├── money1.png
│   ├── purse1.png
│   ├── send1.png
│   ├── transaction1.png
│   └── wallet1.png
├── js/
│   ├── home.js             # Dashboard logic
│   └── script.js           # Shared / login logic
└── styles/
    └── style.css           # Custom styles (alongside Tailwind & DaisyUI)
```

---

## 🗺️ App Flow

```
Login (Mobile + PIN)
        │
        ▼
    Dashboard
  ┌────────────────────────────────────────┐
  │  Add Money │ Cash Out │ Transfer Money │
  │  Get Bonus │ Pay Bill │ Transactions   │
  └────────────────────────────────────────┘
        │
        ▼
  Latest Payments (Transaction History)
```

---

## 🔮 Upcoming Features

- [ ] Real backend / API integration
- [ ] User registration flow
- [ ] Transaction receipts & PDF export
- [ ] Push notifications
- [ ] Dark mode
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Md Boniamin**
- GitHub: [@Mdboniamin](https://github.com/Mdboniamin)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⚠️ **Disclaimer:** Payoo MFS is a demo/educational project. It does not process real financial transactions.
