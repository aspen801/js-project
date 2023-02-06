function addAlert(){
    const alerts = document.querySelector('.alerts');
    var newAlert = document.createElement("div");
    newAlert.classList = "alert alert-primary";
    console.log(alerts.hasChildNodes());
    if(alerts.hasChildNodes()){
        const firstChildText = alerts.firstChild.innerHTML;
        const newNumber = firstChildText.split(' ')[1];
        newAlert.innerHTML = `Alert ${+newNumber + 1}`;
    } else newAlert.innerHTML = `Alert 0`;
    alerts.prepend(newAlert);
}