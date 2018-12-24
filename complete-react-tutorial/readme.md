https://linuxconfig.org/how-to-install-node-js-on-ubuntu-16-04-xenial-xerus-linux-server

sudo apt-get install build-essential libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
. ~/.profile
nvm ls-remote | grep -i lts
nvm install <version>


# requirements:
    - npm 5.2+

npx create-react-app app-name
