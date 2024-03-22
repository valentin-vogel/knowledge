---
sidebar_position: 2
---

# Workstation Setup

## Tools

Browser:

- [Google Chrome](https://www.google.com/intl/de_de/chrome/)
- [Mozilla Firefox](https://www.mozilla.org/de/firefox/)

Multimedia:

- [DaVinci Resolve](https://www.blackmagicdesign.com/de/products/davinciresolve)
- [VLC Media Player](https://www.videolan.org/vlc/)
- [Spotify](https://www.spotify.com/)
- [Affinity Designer](https://affinity.serif.com/de/designer/)
- [Affinity Photo](https://affinity.serif.com/de/photo/)
- [XMediaRecode](https://www.xmedia-recode.de/)
- [ImageCompositeEditor](https://www.microsoft.com/en-us/research/project/image-composite-editor/)
- [OBS Studio](https://obsproject.com/)

Password Managers:

- [Bitwarden](https://bitwarden.com/)
- [KeeWeb](https://keeweb.info/)

Development:

- [Visual Studio Code](https://code.visualstudio.com/)
- [DBeaver](https://dbeaver.io/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [NodeJS](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git & Git Bash](https://git-scm.com/)
- [Terraform](https://www.terraform.io/)
- [kubectl](https://kubernetes.io/de/docs/tasks/tools/install-kubectl/)
- [FileZilla](https://filezilla-project.org/)
- [Windows Terminal](https://github.com/microsoft/terminal)
- [Iterm2](https://iterm2.com/)
- [AWS CLI](https://aws.amazon.com/de/cli/)
- [Postman](https://www.postman.com/)
- [Lens IDE](https://k8slens.dev/)

Miscellaneous:

- [7-Zip](https://www.7-zip.org/)
- [Advanced Renamer](https://www.advancedrenamer.com/)
- [Balena Etcher](https://www.balena.io/etcher)
- [WireGuard](https://www.wireguard.com/)
- [TeamViewer](https://www.teamviewer.com/de/)
- [Skype](https://www.skype.com/de/)
- [Mozilla Thunderbird](https://www.thunderbird.net/de/)
- [Personal Backup](https://personal-backup.rathlev-home.de/)
- [Adobe Acrobat](https://www.adobe.com/de/acrobat.html)
- [PDF24 Creator](https://www.pdf24.org/)

## Mac

For MacOS i recommend [Homebrew](https://brew.sh/) as package manager.

```bash title="Install Homebrew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash title="Basic usage"
brew install tree
brew remove tree
brew update
brew upgrade --cask
```

## Windows

For Windows i recommend the [Windows Package Manager (winget)](https://learn.microsoft.com/de-de/windows/package-manager/winget/). On Windows 10/11 it's installed by default.

[winstall.app](https://winstall.app/) is a awesome list of available packages.

```bash title="Basic usage"
winget install --id=Google.Chrome -e
winget uninstall --id=Google.Chrome
winget upgrade
winget upgrade --all
winget list
```
