
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

module.exports = async function (context, req) {
  const keyVaultName = "voiceAssistantKeyVault";
  const url = `https://${keyVaultName}.vault.azure.net`;

  const credential = new DefaultAzureCredential();
  const client = new SecretClient(url, credential);

  const secrets = {};
  for (const name of ["speechKey", "speechRegion", "directLineSecret", "copilotIframeSrc"]) {
    const secret = await client.getSecret(name);
    secrets[name] = secret.value;
  }

  context.res = {
    headers: { "Content-Type": "application/json" },
    body: secrets
  };
};
