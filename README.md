# Commit Management and Release Example

Husky and Commit Lint are used to validate commit message format. This project is configured to use [angular](https://github.com/marionebl/commitlint/blob/master/%40commitlint/config-angular/README.md) conventions.

#### Angular Commit Types

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

## Setup

Create .env file in the root. Populate the file with a github access token. This will be needed for semantic-release to prublish tags and commits.
```sh
GITHUB_TOKEN=yourTokenHere
```

To prevent semantic-release from attempting to publish to npm in the package.json set the repo to private.