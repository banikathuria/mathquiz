var player_1_name =""
var player_2_name =""
function nextpage(){
    player_1_name= document.getElementById("Name1").value
    player_2_name= document.getElementById("Name2").value
    localStorage.setItem("saveName1",player_1_name)
    localStorage.setItem("saveName2",player_2_name)
    window.location=("mathquiz.html")
}