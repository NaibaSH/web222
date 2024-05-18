// All you JavaScript code for assignment 4 should be in this file
window.onload = function () {
    var node = document.createElement("h2");
    var textnode = document.createTextNode("Courtry List");
    node.appendChild(textnode);
    document.querySelector("#heading2").appendChild(node);


    var tbl = document.createElement("table");
    var tblth = document.createElement("th");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var text1 = document.createTextNode("Country");
    var text2 = document.createTextNode("Capital");
    td1.appendChild(text1);
    td2.appendChild(text2);

    tblth.appendChild(td1);
    tblth.appendChild(td2);

    tbl.appendChild(tblth);
 
    for (var i = 0; i <countries.length; i++)
    {
   
        var tbltr = document.createElement("tr");
        var tdr1 = document.createElement("td");
        var tdr2 = document.createElement("td");
        var textr1=document.createTextNode(countries[i].Name);
        var textr2=document.createTextNode(countries[i].Capital);
        tdr1.appendChild(textr1);
        tdr2.appendChild(textr2);

        tbltr.appendChild(tdr1);
        tbltr.appendChild(tdr2);

        tbl.appendChild(tbltr);
    }

    document.querySelector("#table").appendChild(tbl);
    document.querySelector("#table").style.border = "1px solid black";


    document.querySelector("#flag-images").onclick = function ()
    {
        for (var j = 0; j < countries.length; j++)
        {
            var img1 = document.createElement("img");
            var str = './flags/' + countries[j].Name + '-flag.png';
            img1.setAttribute('src', str);
            img1.setAttribute('alt', 'test');
            img1.setAttribute('width', 200);
            img1.setAttribute('height', 200);

            document.querySelector("#flags").appendChild(img1);
        }
        var d = document.querySelector("#links");
        var d_nested = document.querySelector("#flag-images");
        var throwawayNode = d.removeChild(d_nested);
    }

}


