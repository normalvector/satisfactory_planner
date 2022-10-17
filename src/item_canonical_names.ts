// List sourced from https://satisfactory-calculator.com/en/items
const ItemNames = [
    // Ores
    'Bauxite', 'Caterium Ore', 'Coal', 'Copper Ore', 'Iron Ore', 'Limestone', 'Raw Quartz', 'S.A.M Ore', 'Sulfur', 'Uranium',

    // Ingots
    'Aluminium Ingot', 'Caterium Ingot', 'Copper Ingot', 'Iron Ingot', 'Steel Ingot',

    // Minerals
    'Aluminium Scrap', 'Concrete', 'Copper Powder', 'Petroleum Coke', 'Polymer Resin', 'Quartz Crystal', 'Silica',

    // Aliens
    'Alien Protein', 'Organic Data Capsule',

    // Liquids
    'Alumina Solution', 'Crude Oil', 'Fuel', 'Heavy Oil Residue', 'Liquid Biofuel', 'Nitric Acid', 'Sulfuric Acid', 'Turbo Fuel', 'Water',

    // Gas
    'Nitrogen Gas',

    // Standard Parts
    'Alcad Aluminium Sheet', 'Aluminium Casing', 'Battery', 'Cooling System', 'Copper Sheet', 'Encased Industrial Beam', 'Fabric', 'Fused Modular Frame', 'Heat Sink', 'Heavy Modular Frame', 'Iron Plate', 'Iron Rod', 'Modular Frame', 'Motor', 'Plastic', 'Reinforced Iron Plate', 'Rotor', 'Rubber', 'Screw', 'Stator', 'Steel Beam', 'Steel Pipe', 'Turbo Motor',

    // Electronics
    'AI Limiter', 'Cable', 'Circuit Board', 'High-Speed Connector', 'Quickwire', 'Wire',

    // Communications
    'Computer', 'Crystal Oscillator', 'Quantum Computer', 'Radio Control Unit', 'Superposition Oscillator', 'Supercomputer',

    // Containers
    'Empty Canister', 'Empty Fluid Tank', 'Packaged Alumina Solution', 'Packaged Nitric Acid', 'Packaged Nitrogen Gas', 'Packaged Sulfuric Acid', 'Packaged Water', 'Pressure Conversion Cube',

    // Fuels
    'Biomass', 'Compacted Coal', 'Flower Petals', 'Leaves', 'Mycelia', 'Packaged Heavy Oil Residue', 'Packaged Fuel', 'Packaged Liquid Biofuel', 'Packaged Oil', 'Packaged Turbofuel', 'Plutonium Fuel Rod', 'Soild Biofuel', 'Uranium Fuel Rod', 'Wood',

    // Consumed
    'Beacon', 'Color Cartridge', 'Gas Filter', 'Black Pwower', 'Iodine Infused Filter', 'Smokeless Powder',

    // Ammo
    'Cluster Nobelisk', 'Explosive Rebar', 'Gas Nobelisk', 'Homing Rifle Ammo', 'Iron Rebar', 'Nobelisk', 'Nuke Nobelisk', 'Pulse Nobelisk', 'Rifle Ammo', 'Shatter Rebar', 'Stun Rebar', 'Turbo Rifle Ammo',

    // Nuclear
    'Electromagnetic Control Rod', 'Encased Plutonium Cell', 'Encased Uranium Cell', 'Non-fissile Uranium', 'Plutonium Pallet',

    // Waste
    'Plutonium Waste', 'Uranium Waste',

    // Special
    'Adaptive Control Unit', 'Assembly Director System', 'Automated Wiring', 'Blue Power Slug', 'FICSIT Coupon', 'Magnetic Field Generator', 'Modular Engine', 'Nuclear Pasta', 'Power Shard', 'Purple Power Slug', 'Smart Plating', 'Thermal Propulsion Rocket', 'Yellow Power Slug', 'Versatile Framework'
]
/*
const ItemAlternateNames = {
    // Ores
    'Bauxite': ['bauxites'],
    'Caterium Ore': ['caterium ores'],
    'Coal': ['coals'],
    'Copper Ore': ['copper ores'],
    'Iron Ore': ['iron ores'],
    'Limestone': ['limestones'],
    'Raw Quartz': ['raw quartzes'],
    'S.A.M. Ore': ['s.a.m. ores', 'sam ore', 'sam ores'],
    'Sulfur': ['sulfurs'],
    'Uranium': ['uraniums'],

    // Ingots
    'Aluminium Ingot': ['aluminium ingots'],
    'Caterium Ingot': ['caterium ingots'],
    'Copper Ingot': ['copper ingots'],
    'Iron Ingot': ['iron ingots'],
    'Steel Ingot': ['steel ingots'],

    // Minerals
    'Aluminium Scrap': ['aluminium scraps'],
    'Concrete': ['concretes'],
    'Copper Powder': ['copper powders'],
    'Petroleum Coke': ['petroleum cokes'],
    'Polymer Resin': ['polymer resins'],
    'Quartz Crystal': ['quartz crystals'],
    'Silica': ['silicas'],

    // Aliens
    'Alien Protein': ['alien proteins'],
    'Organic Data Capsule': ['organic data capsules'],

    // Liquids
    'Alumina Solution': ['alumina solutions'],
    'Crude Oil': ['crude oils'],
    'Fuel': ['fuels'],
    'Heavy Oil Residue': ['heavy oil residues'],
    'Liquid Biofuel': ['liquid biofuels'],
    'Nitric Acid': ['nitric acids'],
    'Sulfuric Acid': ['sulfuric acids'],
    'Turbofuel': ['turbofuels', 'turbo fuel', 'turbo fuels'],
    'Water': ['waters'],

    // Gas
    'Nitrogen Gas': ['nitrogen gases'],

    // Standard parts
    'Alclad Aluminium Sheet': ['alcad aluminium sheets'],
    'Aluminium Casing': ['aluminium casings'],
    'Copper Sheet': ['copper sheets'],
    'Encased Industrial Beam': ['encased industrial beams'],
    'Fabric': ['fabrics'],
    'Fused Modular Frame': ['fused modular frames'],
    'Heavy Modular Frame': ['heavy modular frames'],
    'Iron Plate': ['iron plates'],
    'Iron Rod': ['iron rods'],
    'Modular Frame': ['modular frames'],
    'Plastic': ['plastics'],
    'Rubber': ['rubbers'],
    'Reinforced Iron Plate': ['reinforced iron plates'],
    'Screw': ['screws'],
    'Steel Beam': ['steel beams'],
    'Steel Pipe': ['steel pipes'],

    // Industrial parts
    'Battery': ['batteries'],
    'Cooling System': ['cooling systems'],
    'Heat Sink': ['heat sinks'],
    'Motor': ['motor'],
    'Rotor': ['rotors'],
    'Stator': ['stators'],
    'Turbo Motor': ['turbo motors', 'turbomotor', 'turbomotors'],

    // Electronics
    'AI Limiter': ['ai limiters'],
    'Cable': ['cables'],
    'High-Speed Connector': ['high speed connectors', 'highspeed connector', 'highspeed connectors'],
    'Quickwire': ['quickwires', 'quick wire', 'quick wires'],
    'Wire': ['wires'],

    // Communications
    'Computer': ['computers'],
    'Crystal Oscillator': ['crystal oscillators'],
    'Quantum Computer': ['quantum computers', 'quantumcomputer', 'quantumcomputers'],
    'Radio Control Unit': ['radio control units'],
    'Supercomputer': ['supercomputers', 'super computer', 'super computers'],
    'Superposition Oscillator': ['super position oscillators', 'superposition oscillator', 'superposition oscillators'],

    // Containers
    'Empty Canister': ['empty canisters', 'empty cannister', 'empty cannisters'],
    'Empty Fluid Tank': ['empty fluid tanks'],
    'Packaged Water': ['packaged waters'],
    'Packaged Alumina Solution': ['packaged alumina solution'],
    'Pressure Conversion Cube': ['pressure conversion cubes'],
    'Packaged Sulfuric Acid': ['packaged sulfur']
}
*/
class ItemCanonicalNames {

}

export default ItemCanonicalNames
