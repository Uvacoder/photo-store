This repo is hosted on both GitLab and GitHub.  Issue tracking and CI/CD are managed on GitLab.
 - [gitlab.com/cameronfyfe/er-photosite](https://gitlab.com/cameronfyfe/er-photosite) 
 - [github.com/cameronfyfe/er-photosite](https://github.com/cameronfyfe/er-photosite) 

`master` branch pushes to [atelier-mistral.com](https://atelier-mistral.com)  
`development` branch pushes to [staging.atelier-mistral.com](https://staging.atelier-mistral.com)

# Getting Started
## Dev Tools
**React web app developed using Node.js v14.15.1.**  

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash` **or download and inspect script first*  
`nvm install 14.15.1`  
`nvm use 14.15.1`  

**Image resizing tool developed using Rust 1.48.0**  

`curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh` **or download and inspect script first*  
`rustup default 1.48.0`  

## Project
**Setup project:**  

`git clone https://gitlab.com/cameronfyfe/er-photosite.git er-photosite.git`  
`cd er-photosite.git`  
`make prebuild`  

**Run app locally:**  

`make start`  

**Production build:**  

`make build`  

