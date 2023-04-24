import {initBuild, initSelList, allWeapons, allArmor} from '../components/GameFunctions'
import data from "./data"

test('initialize build with all items', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const ret = initBuild('solar', 'warlock', weaps, arms)
    expect(ret).toHaveProperty('subclass')
    expect(ret).toHaveProperty('class')
    expect(ret).toHaveProperty('super')
    expect(ret).toHaveProperty('melee')
    expect(ret).toHaveProperty('grenade')
    expect(ret).toHaveProperty('classabil')
    expect(ret).toHaveProperty('aspects')
    expect(ret).toHaveProperty('fragments')
    expect(ret).toHaveProperty('weapon')
    expect(ret).toHaveProperty('armor')
})

test('initialize selection list', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const build = initBuild('solar', 'warlock', weaps, arms)
    const ret = initSelList(build)
    const fragCount = build.aspects[0].fragslots + build.aspects[1].fragslots
    const fragArr = []
    for(var i = 0; i < fragCount; i++) {
        fragArr.push(false)
    }
    expect(ret).toHaveProperty('subclass')
    expect(ret).toHaveProperty('class')
    expect(ret).toHaveProperty('super')
    expect(ret).toHaveProperty('melee')
    expect(ret).toHaveProperty('grenade')
    expect(ret).toHaveProperty('classabil')
    expect(ret).toHaveProperty('aspects')
    expect(ret).toHaveProperty('fragments')
    expect(ret).toHaveProperty('weapon')
    expect(ret).toHaveProperty('armor')

    expect(ret.subclass).toBeFalsy()
    expect(ret.class).toBeFalsy()
    expect(ret.super).toBeFalsy()
    expect(ret.melee).toBeFalsy()
    expect(ret.grenade).toBeFalsy()
    expect(ret.classabil).toBeFalsy()
    expect(ret.aspects).toStrictEqual([false, false])
    expect(ret.fragments).toStrictEqual(fragArr)
    expect(ret.weapon).toBeFalsy()
    expect(ret.armor).toBeFalsy()
})

test('weapon only pulls from list given', () => {
    var weaps = ['ace_of_spades', 'divinity', 'truth']
    var arms = allArmor()
    const ret = initBuild('solar', 'warlock', weaps, arms)
    //run 3 times to hopefully nullify randomization
    expect(weaps).toContain(ret.weapon.name)
    expect(weaps).toContain(ret.weapon.name)
    expect(weaps).toContain(ret.weapon.name)
})

test('armor only pulls from list given (defined class/sub)', () => {
    var weaps = allWeapons()
    var arms = ['aeon_soul', 'starfire_protocol', 'sunbracers']
    const ret = initBuild('solar', 'warlock', weaps, arms)
    //run 3 times to hopefully nullify randomization
    expect(arms).toContain(ret.armor.name)
    expect(arms).toContain(ret.armor.name)
    expect(arms).toContain(ret.armor.name)
})

test('armor matches class and subclass when pulled (void titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (solar titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (arc titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (stasis titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (strand titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (void warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (solar warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (arc warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (stasis warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (strand warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (void hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (solar hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (arc hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (stasis hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})

test('armor matches class and subclass when pulled (strand hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.armor.class).toBe(dclass)
    expect(ret.armor.subclass).toContain(dsubclass)
})


test('super matches class and subclass when pulled (void titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (solar titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (arc titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (stasis titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (strand titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (void warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (solar warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (arc warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (stasis warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (strand warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (void hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (solar hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (arc hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (stasis hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})

test('super matches class and subclass when pulled (strand hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.super.class).toBe(dclass)
    expect(ret.super.subclass).toBe(dsubclass)
})
    
test('class ability matches class and subclass when pulled (void titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (solar titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (arc titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (stasis titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (strand titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (void warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (solar warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (arc warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (stasis warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (strand warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (void hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (solar hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (arc hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (stasis hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('class ability matches class and subclass when pulled (strand hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.classabil.class).toBe(dclass)
    expect(ret.classabil.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (void titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (solar titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (arc titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (stasis titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (strand titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (void warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (solar warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (arc warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (stasis warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (strand warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (void hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (solar hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (arc hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (stasis hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('melee matches class and subclass when pulled (strand hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.melee.class).toBe(dclass)
    expect(ret.melee.subclass).toBe(dsubclass)
})

test('grenade matches subclass when pulled (void)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, "warlock", weaps, arms)
    expect(ret.grenade.subclass).toBe(dsubclass)
})

test('grenade matches subclass when pulled (solar)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, "warlock", weaps, arms)
    expect(ret.grenade.subclass).toBe(dsubclass)
})

test('grenade matches subclass when pulled (arc)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, "warlock", weaps, arms)
    expect(ret.grenade.subclass).toBe(dsubclass)
})

test('grenade matches subclass when pulled (stasis)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, "warlock", weaps, arms)
    expect(ret.grenade.subclass).toBe(dsubclass)
})

test('grenade matches subclass when pulled (strand)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, "warlock", weaps, arms)
    expect(ret.grenade.subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (void titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (solar titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (arc titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (stasis titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (strand titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (void warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (solar warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (arc warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (stasis warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (strand warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (void hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (solar hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (arc hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (stasis hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('aspects both match class and subclass when pulled (strand hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    expect(ret.aspects[0].class).toBe(dclass)
    expect(ret.aspects[0].subclass).toBe(dsubclass)
    expect(ret.aspects[1].class).toBe(dclass)
    expect(ret.aspects[1].subclass).toBe(dsubclass)
})

test('fragments are assigned based on number of slots', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    expect(ret.fragments.length).toBe(fragNum)
})

test('all fragments match subclass when pulled (void titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (solar titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (arc titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (stasis titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (strand titan)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'titan'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (void warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (solar warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (arc warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (stasis warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (strand warlock)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'warlock'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (void hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'void'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (solar hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'solar'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (arc hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'arc'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (stasis hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'stasis'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})

test('all fragments match subclass when pulled (strand hunter)', () => {
    var weaps = allWeapons()
    var arms = allArmor()
    const dclass = 'hunter'
    const dsubclass = 'strand'
    const ret = initBuild(dsubclass, dclass, weaps, arms)
    const fragNum = ret.aspects[0].fragslots + ret.aspects[1].fragslots
    for(var i = 0; i < fragNum; i++) {
        expect(ret.fragments[i].subclass).toBe(dsubclass)
    }
})