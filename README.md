# discord-bot-boilerplate
Contains everything you need to develop a super basic Discord Bot using Visual Studio Code's Remote Development with Docker.

## Installation and Setup

### Debian-based Linux (Tested on Ubuntu 18.04)

To setup on Linux is a bit more unintiutive than Windows, because your GIT credentials will not be given to the container unless you do these extra steps.
First, you need to [install Docker CE/EE 18.06+ and Docker Compose 1.21+](https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script). You can check [here](https://code.visualstudio.com/docs/remote/containers#_system-requirements) if the requirements have changed. Note: The SNAP package **WILL NOT** work.

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
