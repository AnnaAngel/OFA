
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

        var words = userMes.split(" "); //divide the phrase in words

        for (var i = 0; i < words.length; i++) {
            console.log(words[i]);
        }


        const services = ["business analysis and intelligence", "big data","data lake", "compute", 
        "containers","functions","cost management", "governance", "database services", "database", "database tools", 
        "developer services", "distributed cloud", "integration", "machine Learning", "ai", "artificial intelligence", 
        "multicloud", "networking", "observability", "management", "security", "storage", "hi", "hello", "vmware"];

        const URLAnalysisInt = "https://www.oracle.com/mx/business-analytics/analytics-services/";

        const defaultMessage = "Here is some information that may interest you about ";
        const defaultRedirect = "You can consult more information at this link";

        let messageService = "";
        let URL_SERVICE = "";

        if (services.includes(userMes)) {
            console.log(`El elemento ${userMes} está en el array.`);
            document.getElementById("user-input").innerHTML = userMes;
            //return defaultMessage + userMes;        

            switch (userMes) {
                case "compute":
                    messageService = "OCI provides fast, flexible, and affordable compute capacity for any workload need, from high-performance bare metal instances and flexible virtual machines to lightweight containers and serverless compute resources.";
                    URL_SERVICE = "https://www.oracle.com/mx/business-analytics/analytics-services/";

                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "business analysis":
                    messageService = "Oracle Analytics supports the entire analytics workflow. Enables business users to have self-service access to relevant data, regardless of where it resides in the cloud infrastructure.";
                    URL_SERVICE = "https://www.oracle.com/mx/big-data/";

                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "big data":
                    messageService = "Oracle offers object storage and data lakes based on Hadoop for persistence, Spark for processing and analysis through Oracle Cloud SQL or the customer's chosen analytics tool.";
                    URL_SERVICE = "https://www.oracle.com/mx/big-data/";
                    
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;       
                case "containers":
                    messageService = "OCI Container Instances is a serverless computing service that allows you to run containers instantly without managing any servers.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/cloud-native/container-instances/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "functions":
                    messageService = "Oracle Functions is a managed service, so you don't have to worry about availability. You don't have to provision or manage servers. The platform automatically adapts the scale of the functions.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/cloud-native/functions/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "cost management":
                    messageService = "OCI cost management and governance services help monitor cloud spending, increase accountability, and optimize cloud efficiency. These services allow financial leaders to set boundaries, ensuring cost control and governance without impeding growth. Get started with the cost management and governance suite of products to monitor, scale, and report on cloud usage.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/cost-management-and-governance/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "governance":
                    messageService = "OCI cost management and governance services help monitor cloud spending, increase accountability, and optimize cloud efficiency. These services allow financial leaders to set boundaries, ensuring cost control and governance without impeding growth. Get started with the cost management and governance suite of products to monitor, scale, and report on cloud usage.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/cost-management-and-governance/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "database services":
                    messageService = "Oracle database products and services offer customers cost-optimized, high-performance versions of Oracle Database, the world's leading converged, multi-model database management system, as well as in-memory databases, NoSQL and MySQL. Oracle Autonomous Database , available on-premises through Oracle Cloud@Customer or on Oracle Cloud Infrastructure, enables customers to simplify relational database environments and reduce management workloads.";
                    URL_SERVICE = "https://www.oracle.com/mx/database/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "database":
                    messageService = "Oracle database products and services offer customers cost-optimized, high-performance versions of Oracle Database, the world's leading converged, multi-model database management system, as well as in-memory databases, NoSQL and MySQL. Oracle Autonomous Database , available on-premises through Oracle Cloud@Customer or on Oracle Cloud Infrastructure, enables customers to simplify relational database environments and reduce management workloads.";
                    URL_SERVICE = "https://www.oracle.com/mx/database/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "database tools":
                    messageService = "With Database Management Cloud Service, database administrators have a unified console for on-premises and cloud databases with full lifecycle database management capabilities that cover monitoring, management of performance, fit and administration. Use advanced database fleet diagnostics and tuning to troubleshoot and optimize performance.";
                    URL_SERVICE = "https://www.oracle.com/mx/manageability/database-management/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "developer services":
                    messageService = "In OCI, developers find a comprehensive portfolio of developer tools and services that enable them to create new cloud-native applications, modernize, and extend enterprise applications.";
                    URL_SERVICE = "https://www.oracle.com/mx/application-development/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "distributed cloud":
                    messageService = "OCI's distributed cloud gives customers the flexibility to choose where and how cloud services are delivered to meet their regulatory, performance and other needs. Our distributed cloud offerings bring the full functionality and superior economics of the Oracle public cloud to customers' data centers and edge locations, with a variety of deployment models and operational controls.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/distributed-cloud/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;           
                case "integration":
                    messageService = "Oracle Cloud Infrastructure integration services connect any application and data source, including Salesforce, SAP, Shopify, Snowflake, and Workday, to automate end-to-end processes and centralize management. The wide range of integrations, with built-in adapters and low-code customization, simplify cloud migration while optimizing hybrid and multi-cloud operations.";
                    URL_SERVICE = "https://www.oracle.com/mx/integration/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "machine Learning":
                    messageService = "Oracle Machine Learning Services make it easy to create, train, deploy, and manage custom learning models. These services provide data science capabilities with support from favorite open source tools and libraries, or through in-database machine learning and direct access to cleansed data. Machine learning services provide optimized data labeling or improved access to virtual machines.";
                    URL_SERVICE = "https://www.oracle.com/mx/artificial-intelligence/machine-learning/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "Artificial intelligence":
                    messageService = "Oracle delivers a comprehensive AI portfolio integrated into its cloud applications on best-in-class AI infrastructure and next-generation AI-enabled innovations.";
                    URL_SERVICE = "https://www.oracle.com/mx/artificial-intelligence/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "ai":
                    messageService = "Oracle delivers a comprehensive AI portfolio integrated into its cloud applications on best-in-class AI infrastructure and next-generation AI-enabled innovations.";
                    URL_SERVICE = "https://www.oracle.com/mx/artificial-intelligence/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "multicloud":
                    messageService = "Oracle Cloud Infrastructure (OCI) lets you combine services from multiple clouds to optimize cost, functionality, and performance. OCI multicloud services help you modernize your databases and applications with unique capabilities, such as Real Application Clusters (RAC) and Oracle Autonomous Database, along with leading services from Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). ";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/multicloud/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "networking":
                    messageService = "OCI networking and connectivity products and services enable customers to manage and expand their networks. Customers can securely connect to a customizable, isolated virtual cloud network (VCN) and take advantage of affordable data egress rates. Granular access control of network technologies provides connectivity solutions in both physical and virtual networks.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/networking/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "observability":
                    messageService = "Monitor, analyze, and manage applications and multi-cloud infrastructure environments with full-stack visibility, predefined analytics, and automation using Oracle Cloud Observability and Management Platform.";
                    URL_SERVICE = "https://www.oracle.com/mx/manageability/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "management":
                    messageService = "Monitor, analyze, and manage applications and multi-cloud infrastructure environments with full-stack visibility, predefined analytics, and automation using Oracle Cloud Observability and Management Platform.";
                    URL_SERVICE = "https://www.oracle.com/mx/manageability/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "security":
                    messageService = "OCI security enables organizations to reduce the risk of security threats to their cloud workloads. With simple, prescriptive security capabilities built into the OCI platform, Oracle helps customers easily adopt and protect their cloud infrastructure, data, and applications.";
                    URL_SERVICE = "https://www.oracle.com/mx/security/cloud-security/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "storage":
                    messageService = "Through on-demand, local, object, file, block, and archive storage, Oracle Cloud addresses key storage workload use cases and requirements. Customers can use Storage Gateway and Data Transfer Service to securely move their data to the cloud.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/storage/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "vmware":
                    messageService = "Security, predictability, and control make Oracle Cloud Infrastructure (OCI) the ideal platform for VMware. You can quickly move VMware states to the cloud without making changes to best practices or tools. VMware environments operate in a secure, isolated customer tenancy with predictable costs and performance. Customers manage cloud infrastructure and VMware consoles for complete administrative control.";
                    URL_SERVICE = "https://www.oracle.com/mx/cloud/compute/vmware/";
                    return defaultMessage + userMes + " : " + messageService + " : " + defaultRedirect +  " --> " + URL_SERVICE;
                case "hi":
                    return "Hello! tell me how I can help you...";
                case "hello":
                    return "Hello! tell me how I can help you...";

                default:
                    console.log("I'm sorry, I couldn't understand well. Let's adjust our approach.");
                    return "I'm sorry, I couldn't understand well. Let's adjust our approach.";
            }

        } else {
            console.log(`I'm sorry, I couldn't understand well. Let's adjust our approach.`);
            return "I'm sorry, I couldn't understand well. Let's adjust our approach.";
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
