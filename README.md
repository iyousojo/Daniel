# Academic Digital Resources 📚

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html5.org)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://css3.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

## 📖 Description
A responsive static frontend for a university digital library/bookshop. Students (100L-400L) can browse academic books by level, view details, and purchase for download. Admins manage inventory via secure portal. Consumes external REST API for dynamic book data.

**Live Demo**: Open `index.html` in any browser.

## ✨ Features
- **Student Portal**:
  - Level-based book catalog (100L-400L)
  - Real-time search & infinite scroll
  - Book details & purchase flow
  - Payment success/failure handling
  - Auth persistence (localStorage)
- **Admin Portal** (`/admin/`):
  - Secure login (role-based)
  - Dashboard, manage books, add new books (forms)
- **Responsive**: Mobile-first, Bootstrap 5
- **Dynamic**: Fetches books from API
- **Offline-capable**: Static files, cached auth

## 🛠️ Tech Stack
| Category | Details |
|----------|---------|
| **Frontend** | HTML5, CSS3, Vanilla JS |
| **Framework** | Bootstrap 5.3 (CDN) |
| **Data** | External API: `https://bookshop-api-jbl4.onrender.com` |
| **Storage** | localStorage (auth/token) |
| **Images** | Local book covers (*.jpg/png) |
| **Deployment** | Static hosting (no server needed) |

## 🚀 Quick Start
1. **No setup required** – Pure static site.
2. Open `index.html` in browser (Chrome/Firefox recommended).
3. **API Dependency**: Books load from `https://bookshop-api-jbl4.onrender.com/api/books` (ensure accessible).

```bash
# Or serve locally for best experience
npx serve .  # or python -m http.server 8000
# Visit http://localhost:3000 (or 8000)
```

## 📱 Pages & Flows
```
├── index.html          # Homepage (hero, featured/latest books, services, contact)
├── about.html          # About us
├── service.html        # Services
├── contact-us.html     # Contact
├── login&signup.html   # User auth
├── book.html           # Books by level + search
├── books.html          # Full library (infinite scroll)
├── book-details.html   # Single book view/purchase (?id=...)
├── payment_successful.html  # Post-payment success
├── payment_failure.html     # Failure
└── payment_failure.css     # Styles
└── admin/
    ├── index.html      # Admin login
    ├── dashboard.html  # Admin overview
    ├── manage_books.html # Book list/edit
    └── form_book.html    # Add book form
```

**User Flow**: Home → Books → Details → Payment → Success  
**Admin Flow**: admin/ → Login (StudentID/pass) → Dashboard → Manage

## 🔌 API Integration
Connects to `https://bookshop-api-jbl4.onrender.com/api`:
- `GET /api/books/all` – List books (supports ?page=&limit=&search=)
- `POST /api/auth/login` – Auth (returns token/user w/ role)
- Admin endpoints (add/manage books via forms in dashboard)

**Note**: Update `API_URL` in JS files if API changes.

## 🗂️ File Structure
```
c:/Daniel/
├── index.html           # Landing page
├── book.html            # Level catalog
├── books.html           # Full browser
├── admin/               # Admin panel
├── *.css                # Styles
├── *.js                 # Scripts (scroll.js)
├── *.html               # Pages
├── images/              # Book covers (100l.jpg, etc.)
└── README.md            # This file
```

## 👨‍💼 Admin Access
- **Login**: `/admin/index.html`
- Use **StudentID** (email-like) & password from your backend.
- Stores `token` & `user` (w/ `role: 'admin'`) in localStorage.

## 🚀 Deployment
- **GitHub Pages/Netlify/Vercel**: Upload all files.
- **No backend**: Pure static.
- **CORS**: API must allow frontend origin.

## 🐛 Troubleshooting
- **No books?** Check API status, console errors.
- **Admin login fails?** Verify creds/role in backend.
- **Images broken?** Local paths correct.

## 🤝 Contributing
- Edit HTML/CSS/JS directly.
- Add pages/styles as needed.
- Update API_URL for custom backend.

## 📄 License
MIT – Free to use/modify.

---

**Academic Digital Resources** – Empowering students with accessible knowledge! 🎓
