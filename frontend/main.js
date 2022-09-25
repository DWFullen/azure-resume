window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount()
})

const functionApiUrl = 'https://dfcapgetresumecounter.azurewebsites.net/api/GetResumeCounter?code=4quiNT9cW773nc-xYgTapNozkDSFmwBd03R-Jz0VT4whAzFuoD44Gw==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}