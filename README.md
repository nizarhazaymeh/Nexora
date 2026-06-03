# Nexora Solutions Portfolio Website

A futuristic one-page portfolio website for Nexora Solutions showcasing:
- IT Services
- AI Solutions
- Cyber Security Services
- Audit Services
- Marketing
- Consulting

## Project Files
- `index.html` - Main page content
- `services.html` - Service directory page
- `it-services.html` - Detailed IT services page
- `ai-solutions.html` - Detailed AI solutions page
- `cyber-security-services.html` - Detailed cyber security services page
- `audit-services.html` - Detailed audit services page
- `marketing-services.html` - Detailed marketing services page
- `consulting-services.html` - Detailed consulting services page
- `managed-advisory.html` - Detailed managed advisory page
- `styles.css` - UI styling and responsive layout
- `script.js` - Footer year and contact form client-side behavior

## Run Locally
From this folder:

```bash
/Users/nizarhazaymeh/Desktop/Nexora/.venv/bin/python -m http.server 8080
```

Open:
- http://localhost:8080

## Public Share (Optional)
To expose your local site publicly:

```bash
npx --yes localtunnel --port 8080 --subdomain nexora-solutions-8080
```

Public URL (when running):
- https://nexora-solutions-8080.loca.lt

## Stop Running Services
Press `Ctrl + C` in the terminal where each process is running, or kill the process from your terminal.

## Notes
- The contact form now sends submissions to `nizar.hazaymeh@gmail.com` through FormSubmit.
- Important: FormSubmit may send a one-time activation/verification email the first time the form is used. Confirm that email once to start receiving all submissions.
