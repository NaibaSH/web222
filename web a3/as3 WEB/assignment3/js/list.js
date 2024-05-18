// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    var list1Element = document.querySelector("#list1");
    var list1 = "<ol>";

    for(var i=0; i < fruits.length; i++){
        list1 += "<li>" + fruits[i] + "</li>";
    }

    list1 += "</ol>";

    list1Element.innerHTML = list1;

    var list2Element = document.querySelector("#list2");
    var list2 = "<ul>";

    for(var i=0; i < directory.length; i++){
        list2 += "<li>";
        if(directory[i].type == "file") {
            list2 += directory[i].name;
        } else if(directory[i].type == "directory") {
            list2 += directory[i].name + "<ul>";
            for(var j = 0; j < directory[i].files.length; j++) {
                list2 += "<li>" + directory[i].files[j].name + "</li>";
            }
            list2 += "</ul>";
        }
        list2 += "</li>"
    }
    list2 += "</ul>";

    list2Element.innerHTML = list2;
};