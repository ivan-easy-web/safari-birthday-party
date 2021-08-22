

function scrollto(index) {
    let target = $('#page' + index);
    target[0].scrollIntoView({ 
        behavior: 'smooth' 
    });
}