# Multiple-NodeRed-Servers
Repository with Docker-Compose file to deploy multiple Node-Red servers at once. Each server is protected with its own password.

## How to use

### 1. Clone this Repository
```
git clone https://github.com/samy4sam/Multiple-NodeRed-Servers.git
```

### 2. Switch to the cloned repository
```
cd Multiple-NodeRed-Servers
```

### 3. Create an .env file
```
cp .env-example .env
```

### 4. Modify the .env file.
```
nano .env
```
Adjust all **NODE_RED_PW_n**. 

To hash the passwords this node-red command can be used:
```
node-red admin hash-pw
```
Link to Node-Red doc: [Link](https://nodered.org/docs/user-guide/runtime/securing-node-red).

The unencrypted passwords can be stored in the .env file as **NODE_RED_PW_n_Blank**. However, this is optional and is not used by the Docker container.

### 5. Create and start Node-Red-Containers
```
docker-compose up
```
