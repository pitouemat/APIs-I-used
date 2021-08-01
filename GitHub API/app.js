var search = document.querySelector('#inp');
var ul_area = document.querySelector('.ul_area')
var label = document.querySelector('#label');

label.addEventListener("click", () =>{
    var name = search.value
    var ul = document.createElement("ul")

    var h2 = document.createElement("h2")
    h2.appendChild(document.createTextNode(name +":"))
    
    ul.appendChild(h2)
    
    

    //use axios to get all the information that i need
    axios.get(`https://api.github.com/users/${name}/repos`).then((message) =>{
        

        //get the JSON data
        var num = message.data.length
        var data = message.data
        
        
        //put inside of the HTML
        for(let i = 0; i < num; i++){
            var link = message.data[i].html_url

            var a = document.createElement("a")
            a.setAttribute("href", link)
            a.appendChild(document.createTextNode(data[i].name))

            var li = document.createElement("li")
            li.appendChild(a)
    
            ul.appendChild(li)
    
            ul_area.appendChild(ul)
        }
        
    }).catch((error) =>{
        console.warn("ERRO" + error)
    })

})