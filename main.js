function pressMessage(event) {
    if (event.keyCode === 13) {
        sendMessage()
    }
}

function sendMessage(){
    var message = document.getElementById('message-input')
    var apiKey = document.getElementById('api-key')

    var storage_key = "chatgpttoken";
    localStorage[storage_key] = apiKey.value;

    if(!message.value)
    {
        message.style.border = '1px solid red'
        return;
    }
    message.style.border = 'none'

    var status = document.getElementById('status')

    status.style.display = 'block'
    status.innerHTML = 'Anfrage...'

    fetch("https://api.openai.com/v1/completions",{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey.value}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "10 alternative Bücher von " + message.value + " in deutsch als Liste mit Titel",
            max_tokens: 2048,
            temperature: 0.5
        })
    })
    .then((response) => response.json())
    .then((response) => {
        let r = response.choices[0]['text']
        status.style.display = 'none'
        showHistory(message.value,r)
    })
    .catch((e) => {
        console.log(`Error -> ${e}`)
        status.innerHTML = 'Fehler, irgendwas lief schief...'
    })
    .finally(() => {
        message.disabled = false
        message.value = ''
    })
}

function showHistory(message,response){
    var historyBox = document.getElementById('history')

    var boxMyMessage = document.createElement('div')
    boxMyMessage.className = 'box-my-message'

    var myMessage = document.createElement('p')
    myMessage.className = 'my-message'
    myMessage.innerHTML = message

    boxMyMessage.appendChild(myMessage)

    historyBox.appendChild(boxMyMessage)

    var boxResponseMessage = document.createElement('div')
    boxResponseMessage.className = 'box-response-message'

    var chatResponse = document.createElement('p')
    chatResponse.className = 'response-message'

    myArray = response.split(/[0-9]. /);

    var myLinks = ""
    for (i = 1; i <= 10; i++) {
      myLinks = myLinks + "<a href=\"https://www.lovelybooks.de/suche/" + myArray[i] + "\">" + myArray[i] + "</a><br />";
    }
    chatResponse.innerHTML = myLinks

    boxResponseMessage.appendChild(chatResponse)

    historyBox.appendChild(boxResponseMessage)

    historyBox.scrollTop = historyBox.scrollHeight
}
