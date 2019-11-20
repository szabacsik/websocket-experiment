var conn = new WebSocket('ws://192.168.88.16:8080');
conn.onopen = function(e) {
    console.log("Connection Established");
};

conn.onmessage = function(e) {
    //console.log(e.data);
    changeColor(e.data);
};

let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function (event) {
        let data = '{"'+this.id+'":'+this.value+'}';
        //console.log(data);
        conn.send(data);
        changeColor(data);
    });
}

function changeColor(dataJSONString)
{
    let data = JSON.parse(dataJSONString);
    if (typeof data.redRange !== 'undefined')
    {
        if ( document.getElementById("redRange").value != data.redRange )
            document.getElementById("redRange").value = data.redRange;
    }
    if (typeof data.greenRange !== 'undefined')
    {
        if ( document.getElementById("greenRange").value != data.greenRange )
            document.getElementById("greenRange").value = data.greenRange;
    }
    if (typeof data.blueRange !== 'undefined')
    {
        if ( document.getElementById("blueRange").value != data.blueRange )
            document.getElementById("blueRange").value = data.blueRange;
    }

    let r = document.getElementById("redRange").value;
    let g = document.getElementById("greenRange").value;
    let b = document.getElementById("blueRange").value;

    document.body.style.backgroundColor = 'rgb(' + [r,g,b].join(',') + ')';

}

$(function() {
    console.log('Document Ready');
});