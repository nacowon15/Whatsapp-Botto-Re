exports.info = async function() {
   
    while(true) {

        await client.setMyStatus('Alguien, sea cual sea la cultura');
        await Sleep(60000)
        await client.setMyStatus('No es como si estuviera cachonda ✨️');
        await Sleep(60000)
        await client.setMyStatus('Las leyendas realmente mueren lol 🔱️');
        await Sleep(60000)
    }

}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
