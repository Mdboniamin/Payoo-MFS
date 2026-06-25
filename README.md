# Payoo MFS 💳

A **Mobile Financial Service (MFS)** demo web app built with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript. Payoo simulates a digital wallet — add money, cash out, transfer funds, redeem bonus coupons, pay bills, and view transaction history — all in a clean, mobile-first interface.

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

- 🔐 **Login** — Mock authentication using a hardcoded mobile number and 4-digit PIN (for demo purposes only — no real backend or session handling)
- 💰 **Add Money** — Deposit funds by selecting a bank and entering account number, amount, and PIN
- 💸 **Cash Out** — Withdraw money via agent number, amount, and PIN, with an insufficient-balance check
- 📤 **Transfer Money** — Send money to another account number, amount, and PIN
- 🎁 **Get Bonus** — Redeem a bonus coupon code (`newyear`) to add a fixed bonus to your balance
- 🧾 **Pay Bill** — Pay a bill by selecting a billing bank/biller, account number, amount, and PIN
- 📋 **Transaction History** — Logs each action (Add Money, Withdraw Money, Transfer Money, Pay Bill, Get Bonus) with a timestamp, shown most-recent-first
- 🚪 **Log Out** — Log out button is present in the UI (not yet wired to functionality)

> All balances and transactions live only in memory for the current browser session — refreshing or closing the tab resets everything, since there's no backend or persistent storage.

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

### Demo Credentials

To log in or authorize any transaction, use:

- **Mobile Number:** `12345678910`
- **PIN:** `1234`

To redeem a bonus, use coupon code: `newyear`

---

## 📂 Project Structure

```
Payoo-MFS/
├── index.html              # Login page
├── home.html                # Main dashboard & feature screens
├── payoo.png                 # App logo
├── assets/                  # Icons and images
│   ├── bg.png
│   ├── bonus1.png
│   ├── Group.png
│   ├── money1.png
│   ├── purse1.png
│   ├── send1.png
│   ├── transaction1.png
│   └── wallet1.png
├── js/
│   ├── home.js              # Dashboard logic (add money, cash out, transfer, bonus, pay bill, transaction history)
│   └── script.js            # Login logic
└── styles/
    └── style.css            # Custom styles (alongside Tailwind & DaisyUI)
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
  Transaction History (session-only)
```

---

## 🔮 Upcoming Features

- [ ] Real backend / API integration
- [ ] User registration flow
- [ ] Persistent transaction storage (currently resets on page reload)
- [ ] Working "Log Out" and "View All" actions
- [ ] Input validation for non-numeric / empty fields
- [ ] Transaction receipts & PDF export
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

> ⚠️ **Disclaimer:** Payoo MFS is a demo/educational project built for practicing frontend fundamentals. It does not process real financial transactions, has no backend, and stores no data persistently.