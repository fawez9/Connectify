# Connectify-App

This project is a Discord clone app, a popular communication platform designed for communities to connect via voice, video, and text. This app aims to provide a learning experience in full-stack development and real-time communication systems.

**Technologies and services used:**
- **Next.js** - React framework for server-rendered applications.
- **React** - JavaScript library for building user interfaces.
- **Socket.io** - Real-time bidirectional event-based communication.
- **Prisma** - Modern database toolkit for Node.js and TypeScript.
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development.
- **MySQL** - Relational database management system.
- **Livekit** - Infrastructure for real-time video and audio communication.
- **UploadThingy** - File uploading service.
- **Clerk** - Authentication and user management solution.
- **Xata** - Real-time data collaboration platform.

This project aims to replicate the core functionality of Discord while showcasing integration with modern development tools and services.

## Features

- **Real-time Messaging:** Users can send and receive messages instantly, supporting text-based communication.
- **User Roles:** Assign roles to users with different permissions (admin, moderator, member,..e.g).
- **Direct Messaging:** Enable private one-on-one messaging between users.
- **Server Channels:** Organize communication into channels within servers (e.g., text channels, voice channels,video channels).
- **User Authentication:** Secure user authentication and authorization using services like **Clerk**.
- **File Sharing:** Allow users to share files within channels or via direct messages, integrated with UploadThingy.
- **Custom Emojis:** Support for custom emojis and reactions in messages.
    
- **Search Functionality:** Search channels ,members for quick access to information.






## Installation

To get started you need Clone App locally, follow these steps:

- Make sure you have installed **Node.js**
### Step 1: Clone The Project

```bash
  git clone https://github.com/fawez9/Connectify-app.git
  cd Connectify-app
```

### Step 2: Installing Dependencies

```bash
  npm i
```

### Step 3: Env File

#### You need to create a ".env" file on the folder you're at:
- Go to **Clerk , Uploadthing , Xata , Livekit** and connect into each website create your app there and copy paste the Api Keys if there's any problem you can always check Docs for more understanding.

### Step 3: Prisma 
- You should set up Prisma by using these commands :

```bash
  npx prisma generate
  npx prisma db push
```

## Step 4: Running
- To Run Project just enter:

```bash
  npm run dev
```
You'll find your application running on PORT:"**3000**" by default



    
## Contributing

- Feel free to contribute to this project. Fork it, submit pull requests, and report issues.


- Adjust the instructions based on any specific configurations, additional steps, or dependencies relevant to your project setup. This outline provides a structured approach to guide users through installing and running your Discord clone app locally.

