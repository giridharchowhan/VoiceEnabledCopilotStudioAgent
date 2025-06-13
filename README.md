# 🔊 Voice-Enabled Copilot Studio Agent

This project showcases a secure, browser-based voice assistant built with:

- 🎙️ **Azure Speech Services**
- 🤖 **Microsoft Copilot Studio**
- 🌐 **Azure Static Web Apps**
- 🔐 **Azure Key Vault**

---

## 🚀 Try it yourself

Click the button below to deploy this solution to your own Azure environment:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fgiridharchowhan%2FVoiceEnabledCopilotStudioAgent%2Fmain%2Fazuredeploy.json)

---

## 🔧 Post-Deployment Setup

1. In the **Azure Portal**, go to your Static Web App
2. Enable **System Assigned Managed Identity**
3. Go to **Key Vault > Access policies**
4. Grant the Static Web App identity `Get` access to secrets:
   - `speechKey`
   - `speechRegion`
   - `directLineSecret`
   - `copilotIframeSrc`

---

## 🗂️ Project Structure
VoiceEnabledCopilotStudioAgent/
├── index.html # Frontend app with WebChat and voice features
└── api/
├── get-config.js # Azure Function to securely fetch secrets
└── get-config.json # Azure Function binding config

---

## 🔐 Secrets Stored in Key Vault

| Secret Name         | Purpose                                   |
|---------------------|--------------------------------------------|
| `speechKey`         | Azure Speech Services subscription key     |
| `speechRegion`      | Azure region for speech (e.g., `eastus`)   |
| `directLineSecret`  | Copilot Studio Direct Line channel secret |
| `copilotIframeSrc`  | Full iframe URL for embedding Copilot chat |

---

## ✍️ Customization

To point to a different agent or bot:
- Update the `copilotIframeSrc` in Key Vault

To update the voice configuration:
- Modify the `initializeBotWithVoice()` function in `index.html`

---
## Note 
All code snippets, examples, and solutions shared are provided “as is” without any warranties. Readers are advised to use them with caution and perform thorough testing before deploying in any production environment.
