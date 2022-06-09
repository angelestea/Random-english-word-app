const url_api = 'https://random-words-api.vercel.app/word';

async function fetchWord(){
    try{
    const response = await fetch(url_api);

    if(!response.ok){
        throw new Error(`Failed to fetch word: ${response.status}`)
    }

    return await response.json();
    } catch (error){
        console.log(error)
    }
}

function showWord(wordContainerElementId){
    const wordContainerElement = document.getElementById(wordContainerElementId);

    if(!wordContainerElement){
        return;
    }

    fetchWord().then((word) => {
        if(!word){
            wordContainerElement.innerHTML = 'No word fetched.'
            return;
        }
        wordContainerElement.appendChild(postElement(word));
    }).catch(error => {
        console.log(error);
    })

}

function postElement(word){
    const anchorElement = document.createElement('i');
    anchorElement.innerText = word[0].word
    console.log(word)

    const postTitleElement = document.createElement('h3');

    postTitleElement.appendChild(anchorElement);

    return postTitleElement;

}

//----------Definition

function showDefinition(wordContainerElementId){
    const wordContainerElement = document.getElementById(wordContainerElementId);

    if(!wordContainerElement){
        return;
    }

    fetchWord().then((word) => {
        if(!word){
            wordContainerElement.innerHTML = 'No word fetched.'
            return;
        }
        wordContainerElement.appendChild(postDefinition(word));
    }).catch(error => {
        console.log(error);
    })

}

function postDefinition(word){
    const anchorElement = document.createElement('i');
    anchorElement.innerText = word[0].definition
    console.log(word)

    const postTitleElement = document.createElement('h3');

    postTitleElement.appendChild(anchorElement);

    return postTitleElement;

}

