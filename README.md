# Information Page for this Discord Bot Boilerplate
Contains everything you need to develop a super basic Discord Bot using Visual Studio Code's Remote Development with Docker.

## Installation and Setup

### Windows 10 Pro+ (Tested on Windows 10 Pro Build 19041.508) [Click Here to go to Windows 10 Home](#windows-10-home-not-tested)

Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

Install [Visual Studio Code](https://code.visualstudio.com/).

[Follow the Universal Instructions](#universal-Instructions-follow-the-instructions-for-your-os-then-come-here)

### Windows 10 Home (Not Tested)

Follow these instructions to install Docker with WSL 2 since Windows 10 Home does not have the dependencies needed.
https://docs.docker.com/docker-for-windows/wsl/

Install [Visual Studio Code](https://code.visualstudio.com/).

[Follow the Universal Instructions](#universal-Instructions-follow-the-instructions-for-your-os-then-come-here)

# MacOS (Not Tested)
Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

Install [Visual Studio Code](https://code.visualstudio.com/).

[Follow the Universal Instructions](#universal-Instructions-follow-the-instructions-for-your-os-then-come-here)

### Debian-based Linux (Tested on Ubuntu 18.04, Does not work on WSL)

**To setup on Linux is a bit more difficult than Windows, because your Github credentials will not be given to the container unless you do these extra steps.**

First, you need to [install Docker CE/EE 18.06+ and Docker Compose 1.21+](https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script). You can check [here](https://code.visualstudio.com/docs/remote/containers#_system-requirements) if the requirements have changed. 
Note: The SNAP package **WILL NOT** work.

These instructions will remove any old instances of Docker and install it using their script.
```
sudo apt-get remove docker docker-engine docker.io containerd runc
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
rm get-docker.sh
```
Next, you need to install [Visual Studio Code](https://code.visualstudio.com/download). You can do this through the Ubuntu Software Center or similar Software Centers.

**Now this is a very important step, missing this will prevent your containers from using your GitHub account.**
You need to run these commands to configure your Linux machine to share your Github credentials with your Docker containers. On Ubuntu 18.04, this saves your Github to your "Keychain", however this should work on all Debian-based Linux distros especially those based on 18.04 or later.

NOTE: Even if you've configured an SSH key, your Docker container is not configured to receive that key, thus this step is still needed.

Run these commands to configure your Linux machine to your Github account, install libsecret, and tell Github to share your credentials with libsecret that:
```
sudo apt-get update 
sudo apt install git -y 
git config --global user.name "<INSERT YOUR GITHUB USERNAME HERE>" 
git config --global user.email <INSERT YOUR GITHUB USERNAME HERE>@users.noreply.github.com 
sudo apt-get install libsecret-1-0 libsecret-1-dev -y 
cd /usr/share/doc/git/contrib/credential/libsecret 
sudo make 
git config --global credential.helper /usr/share/doc/git/contrib/credential/libsecret/git-credential-libsecret 
mkdir ~/temp_docker/ && cd ~/temp_docker/
git clone https://github.com/k9lego/discord-bot-boilerplate && rm -rf ~/temp_docker/
```
Note that you won't need the repository cloned to ``~/temp_docker/`` as cloning it is only being used to have you authenticate your GitHub credentials. If this does not work, try cloning your own private GitHub repository. Once you've authenticated with GitHub, it'll save your credentials in your Keychain and you should not need to do this again.


## Universal Instructions (Follow the Instructions for your OS then come here)
You'll then need to install the [Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). Once you open up Visual Studio Code, go to the extensions tab and search for ``ms-vscode-remote.remote-containers`` and Install it.

Now open the Command Palette. To open it, hit F1, otherwise right click the green icon in the lower right corner will get you to where you need as well.

Now click ``Remote-Containers: Clone Repository in Container Volume...``

Finally, select ``Create a Unique Volume`` and your workspace should be setup!


