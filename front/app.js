document.getElementById('SpeakButton').addEventListener('click', async () => {
    const text = document.getElementById('textInput').value;
    if (!text.trim()) {
        alert('Please enter some text to convert to speech.');
        return;
    }

    try{
        const response = await fetch('http://localhost:1234/synthesize',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert('Error:' + errorData.error);
            return;
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = audioUrl;
        audioPlayer.play();
    } catch (err) {
        alert('An error occurred while processing your request: ' + err.message);
    }
});