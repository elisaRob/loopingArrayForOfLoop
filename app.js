const restaurant={
    startMenu:["salade","taboulet","tomate"],
    mainMenu:["Pizza","Hamberger","Spaghettis","frites","panini"]
}

const menu=[...restaurant.startMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item);

for(const item2 of menu.entries() ){
    console.log(item2)
}

console.log([...menu.entries()])

//pour afficher les éléments du menu
for(const items3 of menu.entries()){
    console.log(`${items3[0] + 1} :${items3[1]}`)
}

//on peut faire autrement avec la destructuration des tableaux
for(const [item,el] of menu.entries()){
    console.log(`${item + 1}: ${el}`)
}