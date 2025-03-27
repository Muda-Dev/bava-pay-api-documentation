---
id: environmental-setup
title: Environmental Setup
---

## Environmental Setup & Installation 

### Downloading and Running the Server

The Rail Bridge Server is available as a Docker image for easy deployment.

### Pulling the Docker Image
```json
  docker pull embonye/muda:latest
```

### Running the Server
To run the server as a provider, use the following command:
```json
  docker run -d -p 8030:8000 --env-file /home/ec2-user/apps/config/rail.env --name muda-container embonye/muda:latest
```

### Running Database Migrations
Before starting the server, migrate the database using:
```json
  docker run --env-file /home/ec2-user/apps/config/rail.env embonye/muda:latest --migrate-db
```
### Running the Server as a Service Provider
```json
  docker run -d -p 8030:8000 --env-file /home/ec2-user/apps/config/rail.env --name muda-container embonye/muda:latest provider service
```
The server will start a blockchain listening service, which listens for events emitted by the contract. Once a new payment is received, a callback will be sent to the callback_url.


