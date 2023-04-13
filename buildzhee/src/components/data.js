import images from '../assets';

const data = {
    classes: [
      {id: 0, name: "titan",   display: "Titan",   img: images.titan},
      {id: 1, name: "warlock", display: "Warlock", img: images.warlock},
      {id: 2, name: "hunter",  display: "Hunter",  img: images.hunter}
    ],
    subclasses: [
      {id: 0, name: "void",   display: "Void",   img: images.grape},
      {id: 1, name: "solar",  display: "Solar",  img: images.solar},
      {id: 2, name: "arc",    display: "Arc",    img: images.arc},
      {id: 3, name: "stasis", display: "Stasis", img: images.stasis},
      {id: 4, name: "strand", display: "Strand", img: images.strand},
    ],
    // ID is: number within class/subclass, subclass, class
    // sentinel shield is the first void titan super. void is 0, titan is 0. ID will be 100
    supers: [
      //titan
      {id: 100, name: "sentinel_shield",          display: "Sentinel Shield",           class: "titan",   subclass: "void",   img: images.sentinel_shield},
      {id: 200, name: "ward_of_dawn",             display: "Ward of Dawn",              class: "titan",   subclass: "void",   img: images.ward_of_dawn},
      {id: 110, name: "burining_maul",            display: "Burning Maul",              class: "titan",   subclass: "solar",  img: images.burning_maul},
      {id: 210, name: "hammer_of_sol",            display: "Hammer of Sol",             class: "titan",   subclass: "solar",  img: images.hammer_of_sol},
      {id: 120, name: "fists_of_havoc",           display: "Fists of Havoc",            class: "titan",   subclass: "arc",    img: images.fists_of_havoc},
      {id: 220, name: "thundercrash",             display: "Thundercrash",              class: "titan",   subclass: "arc",    img: images.thundercrash},
      {id: 130, name: "glacial_quake",            display: "Glacial Quake",             class: "titan",   subclass: "stasis", img: images.glacial_quake},
      {id: 140, name: "bladefury",                display: "Bladefury",                 class: "titan",   subclass: "strand", img: images.bladefury},

      //warlock
      {id: 101, name: "nova_bomb_cataclysm",      display: "Nova Bomb: Cataclysm",      class: "warlock", subclass: "void",   img: images.nova_bomb_cataclysm},
      {id: 201, name: "nova_bomb_vortex",         display: "Nova Bomb: Vortex",         class: "warlock", subclass: "void",   img: images.nova_bomb_vortex},
      {id: 301, name: "nova_warp",                display: "Nova Warp",                 class: "warlock", subclass: "void",   img: images.nova_warp},
      {id: 111, name: "daybreak",                 display: "Daybreak",                  class: "warlock", subclass: "solar",  img: images.daybreak},
      {id: 211, name: "well_of_radiance",         display: "Well of Radiance",          class: "warlock", subclass: "solar",  img: images.well_of_radiance},
      {id: 121, name: "chaos_reach",              display: "Chaos Reach",               class: "warlock", subclass: "arc",    img: images.chaos_reach},
      {id: 221, name: "stormtrance",              display: "Stormtrance",               class: "warlock", subclass: "arc",    img: images.stormtrance},
      {id: 131, name: "winters_wrath",            display: "Winter's Wrath",            class: "warlock", subclass: "stasis", img: images.winters_wrath},
      {id: 141, name: "needlestorm",              display: "Needlestorm",               class: "warlock", subclass: "strand", img: images.needlestorm},

      //hunter
      {id: 102, name: "shadowshot_deadfall",      display: "Shadowshot: Deadfall",      class: "hunter",  subclass: "void",   img: images.shadowshot_deadfall},
      {id: 202, name: "shadowshot_mobius_quiver", display: "Shadowshot: Mobius Quiver", class: "hunter",  subclass: "void",   img: images.shadowshot_mobius_quiver},
      {id: 302, name: "spectral_blades",          display: "Spectral Blades",           class: "hunter",  subclass: "void",   img: images.spectral_blades},
      {id: 112, name: "blade_barrage",            display: "Blade Barrage",             class: "hunter",  subclass: "solar",  img: images.blade_barrage},
      {id: 212, name: "golden_gun_deadshot",      display: "Golden Gun: Deadshot",      class: "hunter",  subclass: "solar",  img: images.golden_gun_deadshot},
      {id: 312, name: "golden_gun_marksman",      display: "Golden Gun: Marksman",      class: "hunter",  subclass: "solar",  img: images.golden_gun_marksman},
      {id: 122, name: "arc_staff",                display: "Arc Staff",                 class: "hunter",  subclass: "arc",    img: images.arc_staff},
      {id: 222, name: "gathering_storm",          display: "Gathering Storm",           class: "hunter",  subclass: "arc",    img: images.gathering_storm},
      {id: 132, name: "silence_and_squall",       display: "Silence And Squall",        class: "hunter",  subclass: "stasis", img: images.silence_and_squall},
      {id: 142, name: "silkstrike",               display: "Silkstrike",                class: "hunter",  subclass: "strand", img: images.silkstrike},
    ],

    meeles: [
        //titan
        {id: 100, name: "shield_bash",               display: "Shield Bash",               class: "titan",   subclass: "void",   img: images.shield_bash},
        {id: 200, name: "shield_throw",              display: "Shield Throw",              class: "titan",   subclass: "void",   img: images.shield_throw},
        {id: 110, name: "hammer_strike",             display: "Hammer Strike",             class: "titan",   subclass: "solar",  img: images.hammer_strike},
        {id: 210, name: "throwing_hammer",           display: "Throwing Hammer",           class: "titan",   subclass: "solar",  img: images.throwing_hammer},
        {id: 120, name: "ballistic_slam",            display: "Ballistic Slam",            class: "titan",   subclass: "arc",    img: images.ballistic_slam},
        {id: 220, name: "seismic_strike",            display: "Seismic Strike",            class: "titan",   subclass: "arc",    img: images.seismic_strike},
        {id: 320, name: "thunderclap",               display: "Thunderclap",               class: "titan",   subclass: "arc",    img: images.thunderclap},
        {id: 130, name: "shiver_strike",             display: "Shiver Strike",             class: "titan",   subclass: "stasis", img: images.shiver_strike},
        {id: 140, name: "frenzied_blade",            display: "Frenzied Blade",            class: "titan",   subclass: "strand", img: images.frenzied_blade},

        //warlock
        {id: 101, name: "pocket_singularity",        display: "Pocket Singularity",        class: "warlock", subclass: "void",   img: images.pocket_singularity},
        {id: 111, name: "celestial_fire",            display: "Celestial Fire",            class: "warlock", subclass: "solar",  img: images.celestial_fire},
        {id: 211, name: "incinerator_snap",          display: "Incinerator Snap",          class: "warlock", subclass: "solar",  img: images.incinerator_snap},
        {id: 121, name: "ball_lightning",            display: "Ball Lightning",            class: "warlock", subclass: "arc",    img: images.ball_lightning},
        {id: 221, name: "chain_lightning",           display: "Chain Lightning",           class: "warlock", subclass: "arc",    img: images.chain_lightning},
        {id: 131, name: "penumbral_blast",           display: "Penumbral Blast",           class: "warlock", subclass: "stasis", img: images.penumbral_blast},
        {id: 141, name: "arcane_needle",             display: "Arcane Needle",             class: "warlock", subclass: "strand", img: images.arcane_needle},

        //hunter
        {id: 102, name: "snare_bomb",                display: "Snare Bomb",                class: "hunter",  subclass: "void",   img: images.snare_bomb},
        {id: 112, name: "knife_trick",               display: "Knife Trick",               class: "hunter",  subclass: "solar",  img: images.knife_trick},
        {id: 212, name: "lightweight_knife",         display: "Lightweight Knife",         class: "hunter",  subclass: "solar",  img: images.lightweight_knife},
        {id: 312, name: "proximity_explosive_knife", display: "Proximity Explosive Knife", class: "hunter",  subclass: "solar",  img: images.proximity_explosive_knife},
        {id: 412, name: "weighted_throwing_knife",   display: "Weighted Throwing Knife",   class: "hunter",  subclass: "solar",  img: images.weighted_throwing_knife},
        {id: 122, name: "combination_blow",          display: "Combination Blow",          class: "hunter",  subclass: "arc",    img: images.combination_blows},
        {id: 222, name: "disorienting_blow",         display: "Disorienting Blow",         class: "hunter",  subclass: "arc",    img: images.disorienting_blows},
        {id: 132, name: "withering_blade",           display: "Withering Blade",           class: "hunter",  subclass: "stasis", img: images.withering_blade},
        {id: 142, name: "threaded_spike",            display: "Threaded Spike",            class: "hunter",  subclass: "strand", img: images.threaded_spike},

    ],
    
    //ID is decided by number, subclass number
    grenades: [
        //void
        {id: 10, name: "axion_bolt_grenade", display: "Axion Bolt",         subclass: "void", img: images.axion_bolt_grenade},
        {id: 20, name: "magnetic_grenade",   display: "Magnetic Grenade",   subclass: "void", img: images.magnetic_grenade},
        {id: 30, name: "scatter_grenade",    display: "Scatter Grenade",    subclass: "void", img: images.scatter_grenade},
        {id: 40, name: "supressor_grenade",  display: "Supressor Grenade",  subclass: "void", img: images.suppressor_grenade},
        {id: 50, name: "void_spike_grenade", display: "Void Spike",         subclass: "void", img: images.void_spike_grenade},
        {id: 60, name: "void_wall_grenade",  display: "Void Wall",          subclass: "void", img: images.void_wall_grenade},
        {id: 70, name: "vortex_grenade",     display: "Vortex Grenade",     subclass: "void", img: images.vortex_grenade},

        //solar
        {id: 11, name: "firebolt_grenade",   display: "Firebolt Grenade",   subclass: "solar", img: images.firebolt_grenade},
        {id: 21, name: "fusion_grenade",     display: "Fusion Grenade",     subclass: "solar", img: images.fusion_grenade},
        {id: 31, name: "healing_grenade",    display: "Healing Grenade",    subclass: "solar", img: images.healing_grenade},
        {id: 41, name: "incindiary_grenade", display: "Incindiary Grenade", subclass: "solar", img: images.incindiary_grenade},
        {id: 51, name: "solar_grenade",      display: "Solar Grenade",      subclass: "solar", img: images.solar_grenade},
        {id: 61, name: "swarm_grenade",      display: "Swarm Grenade",      subclass: "solar", img: images.swarm_grenade},
        {id: 71, name: "thermite_grenade",   display: "Thermite Grenade",   subclass: "solar", img: images.thermite_grenade},
        {id: 81, name: "tripmine_grenade",   display: "Tripmine Grenade",   subclass: "solar", img: images.tripmine_grenade},

        //arc
        {id: 12, name: "arcbolt_grenade",    display: "Arcbolt Grenade",    subclass: "arc", img: images.arcbolt_grenade},
        {id: 22, name: "flashbang_grenade",  display: "Flashbang Grenade",  subclass: "arc", img: images.flashbang_grenade},
        {id: 32, name: "flux_grenade",       display: "Flux Grenade",       subclass: "arc", img: images.flux_grenade},
        {id: 42, name: "lightning_grenade",  display: "Lightning Grenade",  subclass: "arc", img: images.lightning_grenade},
        {id: 52, name: "pulse_grenade",      display: "Pulse Grenade",      subclass: "arc", img: images.pulse_grenade},
        {id: 62, name: "skip_grenade",       display: "Skip Grenade",       subclass: "arc", img: images.skip_grenade},
        {id: 72, name: "storm_grenade",      display: "Storm Grenade",      subclass: "arc", img: images.storm_grenade},

        //stasis
        {id: 13, name: "coldsnap_grenade",   display: "Coldsnap Grenade",   subclass: "stasis", img: images.coldsnap_grenade},
        {id: 23, name: "duskfield_grenade",  display: "Duskfield Grenade",  subclass: "stasis", img: images.duskfield_grenade},
        {id: 33, name: "glacier_grenade",    display: "Glacier Grenade",    subclass: "stasis", img: images.glacier_grenade},

        //strand
        {id: 14, name: "grapple_grenade",    display: "Grapple Grenade",    subclass: "strand", img: images.grapple_grenade},
        {id: 24, name: "shackle_grenade",    display: "Shackle Grenade",    subclass: "strand", img: images.shackle_grenade},
        {id: 34, name: "threadling_grenade", display: "Threadling Grenade", subclass: "strand", img: images.threadling_grenade},
    ],

    // ID is: number within class/subclass, subclass, class
    classabil: [
        //titan
        {id: 100, name: "rally_barricade_voi",    display: "Rally Barricade",    class: "titan",   subclass: "void",   img: images.rally_barricade_voi},
        {id: 200, name: "towering_barricade_voi", display: "Towering Barricade", class: "titan",   subclass: "void",   img: images.towering_barricade_voi},
        {id: 110, name: "rally_barricade_sol",    display: "Rally Barricade",    class: "titan",   subclass: "solar",  img: images.rally_barricade_sol},
        {id: 210, name: "towering_barricade_sol", display: "Towering Barricade", class: "titan",   subclass: "solar",  img: images.towering_barricade_sol},
        {id: 120, name: "rally_barricade_arc",    display: "Rally Barricade",    class: "titan",   subclass: "arc",    img: images.rally_barricade_arc},
        {id: 220, name: "towering_barricade_arc", display: "Towering Barricade", class: "titan",   subclass: "arc",    img: images.towering_barricade_arc},
        {id: 320, name: "thruster",               display: "Thruster",           class: "titan",   subclass: "arc",    img: images.thruster},
        {id: 130, name: "rally_barricade_sta",    display: "Rally Barricade",    class: "titan",   subclass: "stasis", img: images.rally_barricade_sta},
        {id: 230, name: "towering_barricade_sta", display: "Towering Barricade", class: "titan",   subclass: "stasis", img: images.towering_barricade_sta},
        {id: 140, name: "rally_barricade_str",    display: "Rally Barricade",    class: "titan",   subclass: "strand", img: images.rally_barricade_str},
        {id: 240, name: "towering_barricade_str", display: "Towering Barricade", class: "titan",   subclass: "strand", img: images.towering_barricade_str},

        //warlock
        {id: 101, name: "empowering_rift_voi",    display: "Empowering Rift",    class: "warlock", subclass: "void",   img: images.empowering_rift_voi},
        {id: 201, name: "healing_rift_voi",       display: "Healing Rift",       class: "warlock", subclass: "void",   img: images.healing_rift_voi},
        {id: 111, name: "empowering_rift_sol",    display: "Empowering Rift",    class: "warlock", subclass: "solar",  img: images.empowering_rift_sol},
        {id: 211, name: "healing_rift_sol",       display: "Healing Rift",       class: "warlock", subclass: "solar",  img: images.healing_rift_sol},
        {id: 311, name: "phoenix_dive",           display: "Phoenix Dive",       class: "warlock", subclass: "solar",  img: images.phoenix_dive},
        {id: 121, name: "empowering_rift_arc",    display: "Empowering Rift",    class: "warlock", subclass: "arc",    img: images.empowering_rift_arc},
        {id: 221, name: "healing_rift_arc",       display: "Healing Rift",       class: "warlock", subclass: "arc",    img: images.healing_rift_arc},
        {id: 131, name: "empowering_rift_sta",    display: "Empowering Rift",    class: "warlock", subclass: "stasis", img: images.empowering_rift_sta},
        {id: 231, name: "healing_rift_sta",       display: "Healing Rift",       class: "warlock", subclass: "stasis", img: images.healing_rift_sta},
        {id: 141, name: "empowering_rift_str",    display: "Empowering Rift",    class: "warlock", subclass: "strand", img: images.empowering_rift_str},
        {id: 241, name: "healing_rift_str",       display: "Healing Rift",       class: "warlock", subclass: "strand", img: images.healing_rift_str},

        //hunter
        {id: 102, name: "gamblers_dodge_voi",     display: "Gambler's Dodge",    class: "hunter",  subclass: "void",   img: images.gamblers_dodge_voi},
        {id: 202, name: "marksman_dodge_voi",     display: "Marksman Dodge",     class: "hunter",  subclass: "void",   img: images.marksman_dodge_voi},
        {id: 112, name: "gamblers_dodge_sol",     display: "Gambler's Dodge",    class: "hunter",  subclass: "solar",  img: images.gamblers_dodge_sol},
        {id: 212, name: "marksman_dodge_sol",     display: "Marksman Dodge",     class: "hunter",  subclass: "solar",  img: images.marksman_dodge_sol},
        {id: 312, name: "acrobat_dodge",          display: "Acrobat Dodge",      class: "hunter",  subclass: "solar",  img: images.acrobat_dodge},
        {id: 122, name: "gamblers_dodge_arc",     display: "Gambler's Dodge",    class: "hunter",  subclass: "arc",    img: images.gamblers_dodge_arc},
        {id: 222, name: "marksman_dodge_arc",     display: "Marksman Dodge",     class: "hunter",  subclass: "arc",    img: images.marksman_dodge_arc},
        {id: 132, name: "gamblers_dodge_sta",     display: "Gambler's Dodge",    class: "hunter",  subclass: "stasis", img: images.gamblers_dodge_sta},
        {id: 232, name: "marksman_dodge_sta",     display: "Marksman Dodge",     class: "hunter",  subclass: "stasis", img: images.marksman_dodge_sta},
        {id: 142, name: "gamblers_dodge_str",     display: "Gambler's Dodge",    class: "hunter",  subclass: "strand", img: images.gamblers_dodge_str},
        {id: 242, name: "marksman_dodge_str",     display: "Marksman Dodge",     class: "hunter",  subclass: "strand", img: images.marksman_dodge_str},
    ],

    // ID is: number within class/subclass, subclass, class
    aspects: [
        //titan
        {id: 100, name: "bastion",               display: "Bastion",               class: "titan", subclass: "void",   fragslots: 1, img: images.bastion},
        {id: 200, name: "controlled_demolition", display: "Controlled Demolition", class: "titan", subclass: "void",   fragslots: 2, img: images.controlled_demolition},
        {id: 300, name: "offensive_bulwark",     display: "Offensive Bulwark",     class: "titan", subclass: "void",   fragslots: 2, img: images.offensive_bulwark},
        {id: 110, name: "consecration",          display: "Consecration",          class: "titan", subclass: "solar",  fragslots: 2, img: images.consecration},
        {id: 210, name: "roaring_flames",        display: "Roaring Flames",        class: "titan", subclass: "solar",  fragslots: 2, img: images.roaring_flames},
        {id: 310, name: "sol_invictus",          display: "Sol Invictus",          class: "titan", subclass: "solar",  fragslots: 2, img: images.sol_invictus},
        {id: 120, name: "juggernaut",            display: "Juggernaut",            class: "titan", subclass: "arc",    fragslots: 1, img: images.juggernaut},
        {id: 220, name: "knockout",              display: "Knockout",              class: "titan", subclass: "arc",    fragslots: 2, img: images.knockout},
        {id: 320, name: "touch_of_thunder",      display: "Touch of Thunder",      class: "titan", subclass: "arc",    fragslots: 2, img: images.touch_of_thunder},
        {id: 130, name: "cryoclasm",             display: "Cryoclasm",             class: "titan", subclass: "stasis", fragslots: 2, img: images.cryoclasm},
        {id: 230, name: "diamond_lance",         display: "Diamond Lance",         class: "titan", subclass: "stasis", fragslots: 3, img: images.diamond_lance},
        {id: 330, name: "howl_of_the_storm",     display: "Howl of the Storm",     class: "titan", subclass: "stasis", fragslots: 2, img: images.howl_of_the_storm},
        {id: 430, name: "tectonic_harvest",      display: "Tectonic Harvest",      class: "titan", subclass: "stasis", fragslots: 2, img: images.tectonic_harvest},
        {id: 140, name: "drengrs_lash",          display: "Drengr's Lash",         class: "titan", subclass: "strand", fragslots: 2, img: images.drengrs_lash},
        {id: 240, name: "into_the_fray",         display: "Into the Fray",         class: "titan", subclass: "strand", fragslots: 2, img: images.into_the_fray},

        //warlock
        {id: 101, name: "chaos_accelerant",      display: "Chaos Accelerant",      class: "warlock", subclass: "void",   fragslots: 1, img: images.chaos_accelerant},
        {id: 201, name: "child_of_the_old_gods", display: "Child of the Old Gods", class: "warlock", subclass: "void",   fragslots: 2, img: images.child_of_the_old_gods},
        {id: 301, name: "feed_the_void",         display: "Feed the Void",         class: "warlock", subclass: "void",   fragslots: 2, img: images.feed_the_void},
        {id: 111, name: "heat_rises",            display: "Heat Rises",            class: "warlock", subclass: "solar",  fragslots: 2, img: images.heat_rises},
        {id: 211, name: "icarus_dash",           display: "Icarus Dash",           class: "warlock", subclass: "solar",  fragslots: 2, img: images.icarus_dash},
        {id: 311, name: "touch_of_flame",        display: "Touch of Flame",        class: "warlock", subclass: "solar",  fragslots: 2, img: images.touch_of_flame},
        {id: 121, name: "arc_soul",              display: "Arc Soul",              class: "warlock", subclass: "arc",    fragslots: 2, img: images.arc_soul},
        {id: 221, name: "electrostatic_mind",    display: "Electrostatic Mind",    class: "warlock", subclass: "arc",    fragslots: 2, img: images.electrostatic_mind},
        {id: 321, name: "lightning_surge",       display: "Lightning Surge",       class: "warlock", subclass: "arc",    fragslots: 2, img: images.lightning_surge},
        {id: 131, name: "bleak_watcher",         display: "Bleak Watcher",         class: "warlock", subclass: "stasis", fragslots: 2, img: images.bleak_watcher},
        {id: 231, name: "frostpulse",            display: "Frostpulse",            class: "warlock", subclass: "stasis", fragslots: 2, img: images.frostpulse},
        {id: 331, name: "glacial_harvest",       display: "Glacial Harvest",       class: "warlock", subclass: "stasis", fragslots: 2, img: images.glacial_harvest},
        {id: 431, name: "iceflare_bolts",        display: "Iceflare Bolts",        class: "warlock", subclass: "stasis", fragslots: 2, img: images.iceflare_bolts},
        {id: 141, name: "mindspun_invocation",   display: "Mindspun Invocation",   class: "warlock", subclass: "strand", fragslots: 2, img: images.mindspun_invocation},
        {id: 241, name: "weavers_call",          display: "Weaver's Call",         class: "warlock", subclass: "strand", fragslots: 2, img: images.weavers_call},

        //hunter
        {id: 102, name: "stylish_executioner",   display: "Stylish Executioner",   class: "hunter", subclass: "void",   fragslots: 2, img: images.stylish_executioner},
        {id: 202, name: "trappers_ambush",       display: "Trapper's Ambush",      class: "hunter", subclass: "void",   fragslots: 1, img: images.trappers_ambush},
        {id: 302, name: "vanishing_step",        display: "Vanishing Step",        class: "hunter", subclass: "void",   fragslots: 2, img: images.vanishing_step},
        {id: 112, name: "gunpowder_gamble",      display: "Gunpowder Gamble",      class: "hunter", subclass: "solar",  fragslots: 1, img: images.gunpowder_gamble},
        {id: 212, name: "knock_em_down",         display: "Knock Em Down",         class: "hunter", subclass: "solar",  fragslots: 2, img: images.knock_em_down},
        {id: 312, name: "on_your_mark",          display: "On Your Mark",          class: "hunter", subclass: "solar",  fragslots: 3, img: images.on_your_mark},
        {id: 122, name: "flow_state",            display: "Flow State",            class: "hunter", subclass: "arc",    fragslots: 2, img: images.flow_state},   
        {id: 222, name: "lethal_current",        display: "Lethal Current",        class: "hunter", subclass: "arc",    fragslots: 2, img: images.lethal_current},
        {id: 322, name: "tempest_strike",        display: "Tempest Strike",        class: "hunter", subclass: "arc",    fragslots: 2, img: images.tempest_strike},
        {id: 132, name: "grim_harvest",          display: "Grim Harvest",          class: "hunter", subclass: "stasis", fragslots: 3, img: images.grim_harvest},
        {id: 232, name: "shatterdive",           display: "Shatterdive",           class: "hunter", subclass: "stasis", fragslots: 1, img: images.shatterdive},
        {id: 332, name: "touch_of_winter",       display: "Touch of Winter",       class: "hunter", subclass: "stasis", fragslots: 2, img: images.touch_of_winter},
        {id: 432, name: "winters_shroud",        display: "Winter's Shroud",       class: "hunter", subclass: "stasis", fragslots: 2, img: images.winters_shroud},
        {id: 142, name: "ensearing_slam",        display: "Ensearing Slam",        class: "hunter", subclass: "strand", fragslots: 2, img: images.ensearing_slam},
        {id: 242, name: "widows_silk",           display: "Widow's Silk",          class: "hunter", subclass: "strand", fragslots: 2, img: images.widows_silk},
    ],

    //ID is chosen by subclass, number in subclass
    fragments: [

        //void
        {id: 10, name: "echo_of_cessation",      display: "Echo of Cessation",        subclass: "void",   img: images.echo_of_cessation},
        {id: 20, name: "echo_of_dialation",      display: "Echo of Dialation",        subclass: "void",   img: images.echo_of_dialation},
        {id: 30, name: "echo_of_domineering",    display: "Echo of Domineering",      subclass: "void",   img: images.echo_of_domineering},
        {id: 40, name: "echo_of_exchange",       display: "Echo of Exchange",         subclass: "void",   img: images.echo_of_exchange},
        {id: 50, name: "echo_of_expulsion",      display: "Echo of Expulsion",        subclass: "void",   img: images.echo_of_expulsion},
        {id: 60, name: "echo_of_harvest",        display: "Echo of Harvest",          subclass: "void",   img: images.echo_of_harvest},
        {id: 70, name: "echo_of_instability",    display: "Echo of Instability",      subclass: "void",   img: images.echo_of_instability},
        {id: 80, name: "echo_of_leeching",       display: "Echo of Leeching",         subclass: "void",   img: images.echo_of_leeching},
        {id: 90, name: "echo_of_obscurity",      display: "Echo of Obscurity",        subclass: "void",   img: images.echo_of_obscurity},
        {id: 100, name: "echo_of_persistance",    display: "Echo of Persistance",      subclass: "void",   img: images.echo_of_persistance},
        {id: 110, name: "echo_of_provision",      display: "Echo of Provision",        subclass: "void",   img: images.echo_of_provision},
        {id: 120, name: "echo_of_remnants",       display: "Echo of Remnants",         subclass: "void",   img: images.echo_of_remnants},
        {id: 130, name: "echo_of_reprisal",       display: "Echo of Reprisal",         subclass: "void",   img: images.echo_of_reprisal},
        {id: 140, name: "echo_of_starvation",     display: "Echo of Starvation",       subclass: "void",   img: images.echo_of_starvation},
        {id: 150, name: "echo_of_undermining",    display: "Echo of Undermining",      subclass: "void",   img: images.echo_of_undermining},
        {id: 160, name: "echo_of_vigilance",      display: "Echo of Vigilance",        subclass: "void",   img: images.echo_of_vigilance},

        //solar
        {id: 11, name: "ember_of_ashes",          display: "Ember of Ashes",          subclass: "solar",  img: images.ember_of_ashes},
        {id: 21, name: "ember_of_benevolence",    display: "Ember of Benevolence",    subclass: "solar",  img: images.ember_of_benevolence},
        {id: 31, name: "ember_of_beams",          display: "Ember of Beams",          subclass: "solar",  img: images.ember_of_beams},
        {id: 41, name: "ember_of_blistering",     display: "Ember of Blistering",     subclass: "solar",  img: images.ember_of_blistering},
        {id: 51, name: "ember_of_char",           display: "Ember of Char",           subclass: "solar",  img: images.ember_of_char},
        {id: 61, name: "ember_of_combustion",     display: "Ember of Combustion",     subclass: "solar",  img: images.ember_of_combustion},
        {id: 71, name: "ember_of_empyrian",       display: "Ember of Empyrian",       subclass: "solar",  img: images.ember_of_empyrian},
        {id: 81, name: "ember_of_eruption",       display: "Ember of Eruption",       subclass: "solar",  img: images.ember_of_eruption},
        {id: 91, name: "ember_of_mercy",          display: "Ember of Mercy",          subclass: "solar",  img: images.ember_of_mercy},
        {id: 101, name: "ember_of_resolve",        display: "Ember of Resolve",        subclass: "solar",  img: images.ember_of_resolve},
        {id: 111, name: "ember_of_searing",        display: "Ember of Searing",        subclass: "solar",  img: images.ember_of_searing},
        {id: 121, name: "ember_of_singeing",       display: "Ember of Singeing",       subclass: "solar",  img: images.ember_of_singeing},
        {id: 131, name: "ember_of_solace",         display: "Ember of Solace",         subclass: "solar",  img: images.ember_of_solace},
        {id: 141, name: "ember_of_tempering",      display: "Ember of Tempering",      subclass: "solar",  img: images.ember_of_tempering},
        {id: 151, name: "ember_of_torches",        display: "Ember of Torches",        subclass: "solar",  img: images.ember_of_torches},
        {id: 161, name: "ember_of_wonder",         display: "Ember of Wonder",         subclass: "solar",  img: images.ember_of_wonder},

        //arc
        {id: 12, name: "spark_of_amplitude",      display: "Spark of Amplitude",      subclass: "arc",    img: images.spark_of_amplitude},
        {id: 22, name: "spark_of_beacons",        display: "Spark of Beacons",        subclass: "arc",    img: images.spark_of_beacons},
        {id: 32, name: "spark_of_brilliance",     display: "Spark of Brilliance",     subclass: "arc",    img: images.spark_of_brilliance},
        {id: 42, name: "spark_of_discharge",      display: "Spark of Discharge",      subclass: "arc",    img: images.spark_of_discharge},
        {id: 52, name: "spark_of_feedback",       display: "Spark of Feedback",       subclass: "arc",    img: images.spark_of_feedback},
        {id: 62, name: "spark_of_focus",          display: "Spark of Focus",          subclass: "arc",    img: images.spark_of_focus},
        {id: 72, name: "spark_of_frequency",      display: "Spark of Frequency",      subclass: "arc",    img: images.spark_of_frequency},
        {id: 82, name: "spark_of_haste",          display: "Spark of Haste",          subclass: "arc",    img: images.spark_of_haste},
        {id: 92, name: "spark_of_instinct",       display: "Spark of Instinct",       subclass: "arc",    img: images.spark_of_instinct},
        {id: 102, name: "spark_of_ions",           display: "Spark of Ions",           subclass: "arc",    img: images.spark_of_ions},
        {id: 112, name: "spark_of_magnitude",      display: "Spark of Magnitude",      subclass: "arc",    img: images.spark_of_magnitude},
        {id: 122, name: "spark_of_momentum",       display: "Spark of Momentum",       subclass: "arc",    img: images.spark_of_momentum},
        {id: 132, name: "spark_of_recharge",       display: "Spark of Recharge",       subclass: "arc",    img: images.spark_of_recharge},
        {id: 142, name: "spark_of_resistance",     display: "Spark of Resistance",     subclass: "arc",    img: images.spark_of_},
        {id: 152, name: "spark_of_shock",          display: "Spark of Shock",          subclass: "arc",    img: images.spark_of_shock},
        {id: 162, name: "spark_of_volts",          display: "Spark of Volts",          subclass: "arc",    img: images.spark_of_volts},

        //stasis
        {id: 13, name: "whisper_of_bonds",        display: "Whisper of Bonds",        subclass: "stasis", img: images.whisper_of_bonds},
        {id: 23, name: "whisper_of_chains",       display: "Whisper of Chains",       subclass: "stasis", img: images.whisper_of_chains},
        {id: 33, name: "whisper_of_conduction",   display: "Whisper of Conduction",   subclass: "stasis", img: images.whisper_of_conduction},
        {id: 43, name: "whisper_of_durance",      display: "Whisper of Durance",      subclass: "stasis", img: images.whisper_of_durance},
        {id: 53, name: "whisper_of_fissures",     display: "Whisper of Fissures",     subclass: "stasis", img: images.whisper_of_fissures},
        {id: 63, name: "whisper_of_fractures",    display: "Whisper of Fractures",    subclass: "stasis", img: images.whisper_of_fractures},
        {id: 73, name: "whisper_of_hedrons",      display: "Whisper of Hedrons",      subclass: "stasis", img: images.whisper_of_hedrons},
        {id: 83, name: "whisper_of_hunger",       display: "Whisper of Hunger",       subclass: "stasis", img: images.whisper_of_hunger},
        {id: 93, name: "whisper_of_impetus",      display: "Whisper of Impetus",      subclass: "stasis", img: images.whisper_of_impetus},
        {id: 103, name: "whisper_of_refraction",   display: "Whisper of Refraction",   subclass: "stasis", img: images.whisper_of_refraction},
        {id: 113, name: "whisper_of_rending",      display: "Whisper of Rending",      subclass: "stasis", img: images.whisper_of_rending},
        {id: 123, name: "whisper_of_rime",         display: "Whisper of Rime",         subclass: "stasis", img: images.whisper_of_rime},
        {id: 133, name: "whisper_of_shards",       display: "Whisper of Shards",       subclass: "stasis", img: images.whisper_of_shards},
        {id: 143, name: "whisper_of_torment",      display: "Whisper of Torment",      subclass: "stasis", img: images.whisper_of_torment},

        //strand
        {id: 14, name: "thread_of_ascent",        display: "Thread of Ascent",        subclass: "strand", img: images.thread_of_ascent},
        {id: 24, name: "thread_of_binding",       display: "Thread of Binding",       subclass: "strand", img: images.thread_of_binding},
        {id: 34, name: "thread_of_continuity",    display: "Thread of Continuity",    subclass: "strand", img: images.thread_of_continuity},
        {id: 44, name: "thread_of_evolution",     display: "Thread of Evolution",     subclass: "strand", img: images.thread_of_evolution},
        {id: 54, name: "thread_of_finality",      display: "Thread of Finality",      subclass: "strand", img: images.thread_of_finality},
        {id: 64, name: "thread_of_fury",          display: "Thread of Fury",          subclass: "strand", img: images.thread_of_fury},
        {id: 74, name: "thread_of_generation",    display: "Thread of Generation",    subclass: "strand", img: images.thread_of_generation},
        {id: 84, name: "thread_of_isolation",     display: "Thread of Isolation",     subclass: "strand", img: images.thread_of_isolation},
        {id: 94, name: "thread_of_mind",          display: "Thread of Mind",          subclass: "strand", img: images.thread_of_mind},
        {id: 104, name: "thread_of_propogation",   display: "Thread of Propogation",   subclass: "strand", img: images.thread_of_propogation},
        {id: 114, name: "thread_of_rebirth",       display: "Thread of Rebirth",       subclass: "strand", img: images.thread_of_rebirth},
        {id: 124, name: "thread_of_transmutation", display: "Thread of Transmutation", subclass: "strand", img: images.thread_of_transmutation},
        {id: 134, name: "thread_of_warding",       display: "Thread of Warding",       subclass: "strand", img: images.thread_of_warding},
        {id: 144, name: "thread_of_wisdom",        display: "Thread of Wisdom",        subclass: "strand", img: images.thread_of_wisdom},
    ]
  }

  export default data