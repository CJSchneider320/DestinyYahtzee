import images from '../assets';
import data from "./data"

function initBuild(subclassChoice, classChoice, weapList, armorList) {

    if (subclassChoice === "random") {
        var rand = Math.floor(Math.random() * 5)
        {
            data.subclasses.map((item, index) => {
                if (rand === item.id) {
                    subclassChoice = item
                }
            })
        }
    }
    else {
        data.subclasses.map((item, index) => {
            if (subclassChoice === item.name) {
                subclassChoice = item
            }
        })
    }

    if (classChoice === "random") {
        var rand = Math.floor(Math.random() * 3)
        {
            data.classes.map((item, index) => {
                if (rand === item.id) {
                    classChoice = item
                }
            })
        }
    }
    else {
        data.classes.map((item, index) => {
            if (classChoice === item.name) {
                classChoice = item
            }
        })
    }

    let ret = {}

    ret.subclass = subclassChoice
    ret.class = classChoice

    //choose super
    ret.super = initItem(classChoice.name, subclassChoice.name, data.supers)

    //choose melee
    ret.melee = initItem(classChoice.name, subclassChoice.name, data.melees)

    //choose grenade
    ret.grenade = initGrenade(subclassChoice.name)

    //chooice class ability
    ret.classabil = initItem(classChoice.name, subclassChoice.name, data.classabil)

    //choose aspects
    ret.aspects = initAspects(classChoice.name, subclassChoice.name)

    //choose fragments
    let numFrag = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    ret.fragments = initFragments(subclassChoice.name, numFrag)

    //choose weapon
    ret.weapon = initWeapon(weapList)

    //choose armor
    ret.armor = initArmor(classChoice.name, subclassChoice.name, armorList)

    return ret
}

function initSelList(currBuild) {

    var temp = []
    var fragslotsTotal = currBuild.aspects[0].fragslots + currBuild.aspects[1].fragslots
    for (let i = 0; i < fragslotsTotal; i++) {
        temp.push(false)
    }

    return {
        class: false,
        subclass: false,
        super: false,
        melee: false,
        grenade: false,
        classabil: false,
        aspects: [false, false],
        fragments: temp,
        weapon: false,
        armor: false
    }

}

function initItem(classChoice, subclassChoice, dataSec) {
    let possItems = []
    dataSec.map((item, index) => {
        if (item.class === classChoice && item.subclass === subclassChoice) {
            possItems.push(item)
        }
    })
    var rand = Math.floor(Math.random() * possItems.length)
    return possItems[rand]
}

function initWeapon(weapList) {
    let possItems = []
    data.weapons.map((item, index) => {
        if (weapList.includes(item.name))
            possItems.push(item)
    })

    var rand = Math.floor(Math.random() * possItems.length)
    return possItems[rand]
}

function initArmor(classChoice, subclassChoice, armorList) {
    let possItems = []
    data.armors.map((item, index) => {
        if (item.class == classChoice && item.subclass.includes(subclassChoice) && armorList.includes(item.name)) {
            possItems.push(item)
        }
    })

    var rand = Math.floor(Math.random() * possItems.length)
    if (possItems.length == 0) {
        return "hello"
    }
    return possItems[rand]
}

function initGrenade(subclassChoice) {
    let possItems = []
    data.grenades.map((item, index) => {
        if (item.subclass === subclassChoice) {
            possItems.push(item)
        }
    })
    var rand = Math.floor(Math.random() * possItems.length)
    return possItems[rand]
}

function initAspects(classChoice, subclassChoice) {
    let possItems = []
    data.aspects.map((item, index) => {
        if (item.class === classChoice && item.subclass === subclassChoice) {
            possItems.push(item)
        }
    })

    var rand1 = Math.floor(Math.random() * possItems.length)
    do {
        var rand2 = Math.floor(Math.random() * possItems.length)
    } while (rand1 === rand2)
    return [possItems[rand1], possItems[rand2]]
}

function initFragments(subclassChoice, numFrag) {
    let possItems = []
    data.fragments.map((item, index) => {
        if (subclassChoice === item.subclass) {
            possItems.push(item)
        }
    })

    let randomNumbers = []
    for (var i = 0; i < numFrag; i++) {
        var rand = Math.floor(Math.random() * possItems.length)
        if (!randomNumbers.includes(rand)) {
            randomNumbers.push(rand)
        }
        else {
            i--
        }
    }

    let initFrags = []
    for (let i = 0; i < randomNumbers.length; i++) {
        initFrags.push(possItems[randomNumbers[i]])
    }

    return initFrags

}

function allWeapons() {
    var allWeaps = []
    data.weapons.map((item, index) => {
      allWeaps.push(item.name)
    })
  
    return allWeaps
  }
  
  function allArmor() {
    var allArm = []
    data.armors.map((item, index) => {
      allArm.push(item.name)
    })
  
    return allArm
  }

export {
    initBuild,
    initSelList,
    initItem,
    initWeapon,
    initArmor,
    initGrenade,
    initAspects,
    initFragments,
    allWeapons,
    allArmor
}