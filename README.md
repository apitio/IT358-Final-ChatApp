# IT358-Final-ChatApp

## Final Project – Installation Instructions

1. Clone the repository

    * git clone https://github.com/apitio/IT358-Final-ChatApp
2. Open VS code – run ‘code .’ in the command line or open it manually

3.	Install Live Server VS code extension

    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/liveserver.png?raw=true)

 
4.	Open the index.html file and click on Go Live Button(after installation of Live Server extension)

5.	The Go Live button creates a local server and hosts the frontend/client code locally

    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/golive.png?raw=true)

    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/Port.png?raw=true)
 
    * Front end running on local host port 5501 as displayed above. Could be different for your machine.

6.	Once the front end is visible(port 5501 in the example mentioned), you need to run the backend requirements. Now the front end is running on port 5501.

7.	 Go to the root directory of the cloned repository


8.	Run the following command to install all the dependencies/requirements
    
    * npm install
    
    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/npminstall.png?raw=true)

 

9.	Enter the Backend directory and start the node server

    * node server.js
    
    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/nodeserver.png?raw=true)

 

10.	Complete. You should be able to access the front end via Live serve extension and the backend node server is running through node server.js command

11.	Access the front end(local host – port opened by live server) page and if it displays – “What is your name?”, it means it is working correctly
 
    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/frontend.png?raw=true)

12.	Open localhost URL on multiple pages to simulate multiple chat users

    ![alt text](https://github.com/apitio/IT358-Final-ChatApp/blob/main/Images/chats.png?raw=true)


 
