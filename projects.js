function infos(id) {
    acceuil = document.getElementsByClassName('fstpage')
    present = document.getElementsByClassName('presentation')
    projets = document.getElementsByClassName('projects')
    fiche = document.getElementById(id)
    un = document.getElementById('un')
    deux = document.getElementById('deux')
    trois = document.getElementById('trois')


    if (fiche.style.display === 'none') {
        un.style.display = "none"
        deux.style.display = "none"
        trois.style.display = "none"
        acceuil[0].style.opacity = 0.3
        present[0].style.opacity = 0.3
        projets[0].style.opacity = 0.3
        fiche.style.display = 'block'
    } else {
        acceuil[0].style.opacity = 1
        present[0].style.opacity = 1
        projets[0].style.opacity = 1
        fiche.style.display = 'none'
    }
    
    console.log('bonjour',infos)
}