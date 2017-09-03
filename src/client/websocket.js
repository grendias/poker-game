import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

class WebSocket {

    constructor(sockAddress) {
        this.sockAddress = sockAddress;
        this.stompClient =  null;
        this.isConnected = true;
    }

    setConnected(isConnected) {
        this.isConnected = isConnected;
    }

    getIsConnected() {
        return this.isConnected;
    }

    connect() {
        return new Promise((resolve, reject) => {
            const socket = new SockJS(this.sockAddress);
            this.stompClient = Stomp.over(socket);
            this.stompClient.heartbeat.outgoing = 20000; // client will send heartbeats every 20000ms
            this.stompClient.heartbeat.incoming = 20000;
            this.stompClient.connect({}, (frame) => {
                console.log('Connected: ' + frame);
                this.setConnected(true);
                resolve();
            });
        });

    }

    subscribe(subscriptionAdd) {
        this.stompClient.subscribe(subscriptionAdd,(messageOutput) => {
            this.showMessageOutput(JSON.parse(messageOutput.body));
        });
    }

    disconnect() {
        if(this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
        console.log("Disconnected");
    }

    sendMessage(endpoint, message) {
        this.stompClient.send(endpoint, {},
            JSON.stringify(message));
    }

    showMessageOutput(messageOutput) {
        alert(messageOutput);
    }
}

export default WebSocket;