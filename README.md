# discord-bot-boilerplate
Contains everything you need to develop a super basic Discord Bot using Visual Studio Code's Remote Development with Docker.

## Installation and Setup

### Debian-based Linux (Tested on Ubuntu 18.04, Does not work on WSL)

To setup on Linux is a bit more unintiutive than Windows, because your GIT credentials will not be given to the container unless you do these extra steps.
First, you need to [install Docker CE/EE 18.06+ and Docker Compose 1.21+](https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script). You can check [here](https://code.visualstudio.com/docs/remote/containers#_system-requirements) if the requirements have changed. 
Note: The SNAP package **WILL NOT** work.

These instructions will remove any old instances of Docker and install it using their script.```
sudo apt-get remove docker docker-engine docker.io containerd runc
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
rm get-docker.sh
```
Next, you need to install [Visual Studio Code](https://code.visualstudio.com/download). You can do this through the Ubuntu Software Center or similar Software Centers.

You'll then need to install the [Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). Once you open up Visual Studio Code, go to the extensions tab and search for ``ms-vscode-remote.remote-containers`` and Install it.