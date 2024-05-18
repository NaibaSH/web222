// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];
window.onload=function(){
    var myContainer01=document.querySelector("#ol01");
    myContainer01.innerHTML="";
    for(var i=0; i < fruits.length; i++){
        myContainer01.innerHTML+=`<li> ${fruits[i]}</li>`;
    
    };
    
    
    var cont002=document.querySelector("#ul01");
    var statement="";
    for (var i=0; i < directory.length; i++){
        if (directory[i].type =="file")
        statement+=`<li> ${directory[i].name}</li>`; 
        else{
            statement+=`<li> ${directory[i].name}<ul>`;
                for(var j=0; j<directory[i].files.length; j++){
    
                    statement+=`<li> ${directory[i].files[j].name}</li>`;}
    
                    statement+="</ul></li>";
        }	
       
    }
    cont002.innerHTML=statement;
    console.log(cont002.innerHTML);
    
    };