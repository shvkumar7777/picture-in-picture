const videoelement = document.getElementById('video');
const buttonelement = document.getElementById('button');

//prompmt the user to seect a media stream, pass to video element , then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoelement.srcObject = mediaStream;
        videoelement.onloadedmetadata = () => { 
            videoelement.onplay();
        }
        
    } catch (error) {
        //catch the error here
        console.log('whoops. error here',error);
    }
}

buttonelement.addEventListener('click', async () => {
    //disable the button
    buttonelement.disabled = true;
    await videoelement.requestPictureInPicture();
    //reset the button
    buttonelement.disabled = false
});

//on load 
selectMediaStream();