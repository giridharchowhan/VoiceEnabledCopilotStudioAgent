# 🎙️ Voice-Enabled Copilot Studio Agent

This project lets you deploy a fully serverless, voice-enabled web assistant powered by:
- **Azure Speech Services**
- **Copilot Studio (Direct Line)**
- **Azure Static Web Apps**
- **Azure Key Vault (for secure secrets)**

---

## 🚀 One-Click Deployment (No GitHub Needed!)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fgiridharchowhan%2FVoiceEnabledCopilotStudioAgent%2Fmain%2Fazuredeploy_voicecopilot_full.json)

This button will:
- ✅ Create a Static Web App
- ✅ Upload the embedded HTML/JS voice assistant
- ✅ Store secrets in your Key Vault
- ✅ Provide a live URL you can share or customize
### ✅ What You'll Need
- Your Azure Speech Key + Region
- Your Direct Line Channel Secret (from Copilot Studio)
- Your Copilot embed iframe URL
- A Key Vault already created (or reuse existing)
- A Static Web App **deployment token**

### 💡 How to Get the Deployment Token
1. Create a new Static Web App in Azure manually with your preferred name.
2. Go to your Static Web App → **Settings → Deployment Token**
3. Copy the value.

### 🔐 Add the Token to GitHub
1. Go to this GitHub repo (your fork is optional)
2. Navigate to: `Settings → Secrets → Actions`
3. Add a secret:
   - **Name:** `STATIC_WEB_APP_TOKEN`
   - **Value:** (Paste the token from Azure)

Once the deployment finishes, your site will be live at:


