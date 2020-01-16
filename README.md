# System Admin
[![Build Status](https://ab-inbev.visualstudio.com/GHQ_B2B_Delta/_apis/build/status/admin-portal/admin-portal?branchName=trunk)](https://ab-inbev.visualstudio.com/GHQ_B2B_Delta/_build/latest?definitionId=409&branchName=trunk)

## Environment setup


### Recommended plugins for VSCode

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://marketplace.visualstudio.com/items?itemName=eg2.tslint
- https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode
- Configure the option `"editor.formatOnSave": true`

- Install Cucumber(Gherkin extension)

  - Add this on settings.json to configure the Cucumber extension

  ```json
  "cucumberautocomplete.steps": ["component-test/step_definitions/*.js"],
  "cucumberautocomplete.syncfeatures": "test/features/*feature",
  "cucumberautocomplete.strictGherkinCompletion": true
  ```

- Install git hooks  
  Run `make hooks` on the project root folder

### Config Sonarlint

1. File / Preferences / Settings
1. Search for: "Sonar"
1. Edit Sonarlint > Connected Mode: Servers
1. Edit in settings.json and add the config below

```json
{
  "sonarlint.connectedMode.project": {
    "serverId": "ANY_SERVER_ID",
    "projectKey": "admin-portal"
  },
  "sonarlint.connectedMode.servers": [
    {
      "serverId": "ANY_SERVER_ID",
      "serverUrl": "https://sonarcloud.io",
      "organizationKey": "ab-inbev",
      "token": "YOU_SHOULD_GENERATE"
    }
  ]
}
```# admin-portal
