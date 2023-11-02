
    // Elementos del DOM
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Función para mostrar la ventana modal
    document.getElementById('boton-chat').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'block';
    });

    // Función para cerrar la ventana modal
    document.getElementById('cerrar-modal').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    // Respuesta del chatbot
    function chatbotResponse(userMessage) {
        let userMes = userMessage.toLowerCase();
        const services = ["business analysis and intelligence", "big data and data lake", "compute", 
        "containers","functions", "cost management and governance", "database services", "database tools", 
        "developer services", "distributed cloud", "integration", "machine Learning", "AI", "Artificial intelligence", 
        "Multicloud", "Networking", "observability", "management", "Security", "Storage"];

        const defaultMessage = "Here is some information that may interest you about compute";
       /* if (userMessage.toLowerCase().includes("buenos días")) {
            return "Buenos días. ¿En qué puedo ayudarte?";
        } else {
            return "No entiendo tu mensaje. Intenta con 'Buenos días'.";
        }  */

        /*
        if (userMessage.toLowerCase().includes("business analysis and intelligence")) {
            return defaultMessage + "";
        } else {
            return "I'm sorry, I don't understand your message, please write your request again.";
        } 

        if (userMessage.toLowerCase().includes("big data and data lake")) {
            return defaultMessage + "";
        } else {
            return "I'm sorry, I don't understand your message, please write your request again.";
        } 
     
        if (userMessage.toLowerCase().includes("big data and data lake")) {
            return defaultMessage + "";
        } else {
            return "I'm sorry, I don't understand your message, please write your request again.";
        } 
        if (userMessage.toLowerCase().includes("big data and data lake")) {
            return defaultMessage + "";
        } else {
            return "I'm sorry, I don't understand your message, please write your request again.";
        } 
        
        */

        if(userMes.includes(services)){        
            //return defaultMessage + "";
            document.write("entra al if");
            

            switch(userMes){
                case "business analysis":
                    alert("business analysis")
                    
                    break;
                case "compute":
                    alert("compute")
                    break;
                case "big data":
                    alert("big data")
                    break;
                case "data lake":
                    alert("data lake")
                    break;
                case "containers":
                    alert("containers")
                    break;
                case "functions":
                    alert("functions")
                    break;
                case "governance":
                    alert("governance")
                    break;
                case "cost management":
                    alert("cost management")
                    break;
                default:
                    throw new Exception();
            }
        }
        else{
            return "I'm sorry, I don't understand your message, please write your request again.";
        }
    }

    // Función para mostrar mensajes en el chat
    function showMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'chatbot-message';
        messageDiv.textContent = message;
        chatOutput.appendChild(messageDiv);
    }

    // Función para manejar la interacción del usuario
    function handleUserInput(){
        const userMessage = userInput.value;
        showMessage("You: " + userMessage, true);
        
        const response = chatbotResponse(userMessage);
        showMessage("Chatbot: " + response, false);
        
        userInput.value = '';
    }

    // Escuchar el clic en el botón de enviar
    sendButton.addEventListener('click', handleUserInput);

    // Escuchar la tecla "Enter" para enviar un mensaje
    userInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });
