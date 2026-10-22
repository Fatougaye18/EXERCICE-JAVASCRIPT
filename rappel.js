
// creer un tableau d'objet de 5 utilisateurs
const utilisateurs = [
    {prenom: "Fatimah", nom:"Sall",age:19, statut:"1",role:"admin"},
    {prenom: "Mohamed", nom:"Diop",age:20, statut:"0",role:"user"},
    {prenom: "Moussa", nom:"Sarr",age:25, statut:"1",role:"admin"},
    {prenom: "Adama", nom:"Sarr",age:40, statut:"0",role:"user"},
    {prenom: "Jean", nom:"Mendy",age:21, statut:"0",role:"admin"},
    
];

// creer une fonction flechée qui retourne la liste des utilisateurs ayant le role admis et qui sont actifs
const getadmin = () => {
    let tab = [];
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].role === "admin" && utilisateurs[i].statut === "1") {
            tab.push(utilisateurs[i]);
        }
    }
    return tab;
};
//autre methode
const getadmin2 = () => {
   return utilisateurs.filter((u) => u.role === "admin" && u.statut === "1"); 
   
};
console.log(getadmin2());
// creer une fonction qui recoit en parametre un utilisateur et affiche ses informations: son prenom, son role et son age 
const getinfo = (utilisateur) => {
    let {prenom, role, age} = utilisateur;
    console.log(` ${prenom}, ${role},  ${age}`);
}
getinfo(utilisateurs[4]);
// creer un nouveau tableau contenant uniquement des objets simplifier comme suit: prenom, nom et role (map et destructuration)
const simpl = utilisateurs.map(({prenom, nom, role}) => ({prenom, nom, role}));
console.log(simpl);
// Transformerle tableau pour obtenir un seul objet dont les clés correspondent aux roles et les valeurs sont des tableaux contenant des utilisateurs 
const parRoles = {};
for (let i = 0; i < utilisateurs.length; i++) {
    const role = utilisateurs[i].role;
    if (!parRoles[role]) {
        parRoles[role] = [];
    }
    parRoles[role].push(utilisateurs[i]);
}
console.log(parRoles);
// Créer une fonction qui affiche le premier utilisateur agees de 25 ans en utilisant FIND 
const getuser25 = () => {
    const user = utilisateurs.find((u) => u.age === 25);
    if (user) {
        console.log(user);
    } else {
        console.log("Aucun utilisateur trouvé");
    }
};
getuser25();
// ajouter un nouveau utilisateur dans un nouveau tableau applé equipe qui contient tous les utilisateurs du premier tableau en utilisant les  spread operator
const equipe = [...utilisateurs];
console.log(equipe);    

