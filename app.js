
total = 0


function main() {
    name()
    do{
        user_s = 0
        comp_s = 0
        if (computer() > 20){
            compare()
        }else if(user() > 20) {
            compare()
        }else{
            compare()
        }
        var again = prompt("do you want to play again? (y) for yes (n) for no")
    }while(again == "y")
}




function name() {
    var name = prompt("what is your name?")
    alert(`hello ${name}`)
    return name
 
 }

 function random() {
    var ran = Math. floor(Math.random() * 10) +1
    return ran
 }

 function user() {
     alert("now its your turn")
     do{
        user_s = user_s + random()
        var question = prompt(`your score is ${user_s}. do you want to roll again? (y) for yes (n) for no`)
     }while(question == "y")
     return user_s
 }



function computer() {
    alert("first the computers score")
    do{
       comp_s = comp_s + random()
       if (comp_s < 16) {
           alert(`the compuers score is ${comp_s}. it will role again`)
       }else {
        alert(`the computers score is ${comp_s}. it will stop`)
       }
    }while(comp_s < 16)
    return comp_s
}



function compare() {
    if (comp_s > 20) {
        alert(`the computers score is ${comp_s}. you win!!`)
        total++
    } else if (user_s > 20 ){
        alert(`your score was ${user_s}. you went over 20, you lose!!`)
    }else if ((user_s > comp_s) && (user_s < 20)){
        alert(`your score was ${user_s}, the computers score is ${comp_s}. you win!! `)
        total++
    }else if ((user_s < comp_s) && (comp_s < 20)){
        alert(`your score was ${user_s}, the computers score is ${comp_s}. you lose!! `)
    }
    
}




main()



alert(`your total wins are ${total}`)
