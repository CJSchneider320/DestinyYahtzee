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