# 🎙️ Text-to-Speech Web App

Convierta texto en voz de forma sencilla mediante una aplicación web fullstack, con frontend en HTML/CSS/JS y backend en Python (Flask), desplegable en Docker.

---

## ✨ Características

- Interfaz web minimalista y responsiva.
- Conversión de texto a voz usando Google Text-to-Speech (gTTS).
- Reproducción de audio directamente en el navegador.
- Contenedorización completa con Docker y Docker Compose.
- Imágenes publicadas en Docker Hub para despliegue inmediato.

---

## 🗂️ Estructura del proyecto

text-to-speech/
├── back/
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
├── front/
│ ├── index.html
│ ├── styles.css
│ ├── app.js
│ └── Dockerfile
└── docker-compose.yml

---

## ⚙️ Tecnologías usadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (Flask), gTTS
- **Servidor Front:** Nginx
- **Contenedores:** Docker, Docker Compose

---

## 🚀 Instrucciones de despliegue local

### 1️⃣ Clonar el repositorio

```bash
git clone <REPO_URL>
cd text-to-speech

### 2️⃣ Construir y ejecutar con Docker Compose

```bash
docker compose up --build

Frontend disponible en: http://localhost:8080
Backend en: http://localhost:1234

### 3️⃣ Usar imágenes desde Docker Hub (sin build local)
Si quieres evitar construir localmente, usa las imágenes ya publicadas:

docker-compose.yml mínimo:
yaml
Copiar
Editar
version: '3.8'

services:
  backend:
    image: mplanav/voice-backend
    ports:
      - "1234:1234"
    restart: unless-stopped
  frontend:
    image: mplanav/voice-frontend
    ports:
      - "8080:80"
    restart: unless-stopped
Comando:
bash
Copiar
Editar
docker compose up
Docker descargará automáticamente las imágenes de Docker Hub.

# 🐳 Imágenes en Docker Hub
mplanav/voice-backend
mplanav/voice-frontend

# 🔧 Variables de entorno
No se requiere configuración de variables de entorno para este proyecto.

# ⚠️ Notas de producción
El backend Flask usa el servidor de desarrollo de Flask. Para entornos de producción se recomienda usar un WSGI server como Gunicorn detrás de Nginx.
La generación de audio depende del servicio gTTS (requiere conexión a Internet).


# ✍️ Autor
mplanav