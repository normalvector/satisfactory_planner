import { RecipeJson } from "./recipe"
import Recipe from './recipe'

// TODO: Not including Alien Protein ingredients- no way to automate Remains?
const StandardRecipeJson: RecipeJson[] = [
    {
        name: 'Adaptive Control Unit',
        produces: {
            'Adaptive Control Unit': 2
        },
        ingredients: {
            'Automated Wiring': 15,
            'Circuit Board': 10,
            'Heavy Modular Frame': 2,
            'Computer': 1
        },
        time: 120,
        machine: 'Manufacturer'
    },
    {
        name: 'AI Limiter',
        ingredients: {
            'Copper Sheet': 5
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Alclad Aluminium Sheet',
        produces: {
            'Alclad Aluminium Sheet': 3
        },
        ingredients: {
            'Aluminium Ingot': 3,
            'Copper Ingot': 1
        },
        time: 6,
        machine: 'Assembler'
    },
    // TODO: How to add this?
    {
        name: 'Hog Remains',
        machine: 'Manual',
        time: 60
    },
    {
        name: 'Hog Protein',
        produces: {
            'Alien Protein': 1
        },
        ingredients: {
            'Hog Remains': 1
        },
        time: 3,
        machine: 'Constructor'
    },
    {
        name: 'Splitter Remains',
        machine: 'Manual',
        time: 60
    },
    {
        name: 'Splitter Protein',
        produces: {
            'Alien Protein': 1
        },
        ingredients: {
            'Splitter Remains': 1
        },
        time: 3,
        machine: 'Constructor'
    },
    {
        name: 'Hatcher Remains',
        machine: 'Manual',
        time: 60
    },
    {
        name: 'Hatcher Protein',
        produces: {
            'Alien Protein': 1
        },
        ingredients: {
            'Hatcher Remains': 1
        },
        time: 3,
        machine: 'Constructor'
    },
    {
        name: 'Stinger Remains',
        machine: 'Manual',
        time: 60
    },
    {
        name: 'Stinger Protein',
        produces: {
            'Alien Protein': 1
        },
        ingredients: {
            'Stinger Remains': 1
        },
        time: 3,
        machine: 'Constructor'
    },
    {
        name: 'Aluminium Casing',
        produces: {
            'Aluminium Casing': 2
        },
        ingredients: {
            'Aluminium Ingot': 3
        },
        time: 2,
        machine: 'Constructor'
    },
    {
        name: 'Alcad Casing',
        produces: {
            'Aluminium Casing': 15
        },
        ingredients: {
            'Aluminium Ingot': 20,
            'Copper Ingot': 10
        },
        time: 8,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Aluminium Ingot',
        produces: {
            'Aluminium Ingot': 4
        },
        ingredients: {
            'Aluminium Scrap': 6,
            'Silica': 5
        },
        time: 4,
        machine: 'Foundry'
    },
    {
        name: 'Pure Aluminium Ingot',
        produces: {
            'Aluminium Ingot': 1
        },
        ingredients: {
            'Aluminium Scrap': 2
        },
        time: 2,
        machine: 'Smelter',
        isAlternate: true
    },
    {
        name: 'Aluminium Scrap',
        produces: {
            'Aluminium Scrap': 6,
            'Water': 2
        },
        ingredients: {
            'Alumina Solution': 4,
            'Coal': 2
        },
        time: 1,
        machine: 'Refinery'
    },
    {
        // TODO: Is this the right name to use?
        name: 'Electrode Aluminium Scrap',
        produces: {
            'Aluminium Scrap': 20,
            'Water': 7
        },
        ingredients: {
            'Alumina Solution': 12,
            'Petroleum Coke': 4
        },
        time: 4,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Instant Scrap',
        produces: {
            'Aluminium Scrap': 30,
            'Water': 5
        },
        ingredients: {
            'Bauxite': 15,
            'Coal': 10,
            'Sulfuric Acid': 5,
            'Water': 6
        },
        time: 6,
        machine: 'Blender',
        isAlternate: true
    },
    {
        name: 'Assembly Director System',
        ingredients: {
            'Adaptive Control Unit': 2,
            'Supercomputer': 1
        },
        time: 80,
        machine: 'Assembler'
    },
    {
        name: 'Automated Wiring',
        ingredients: {
            'Stator': 1,
            'Cable': 20
        },
        time: 24,
        machine: 'Assembler'
    },
    {
        name: 'Automated Speed Wiring',
        produces: {
            'Automated Wiring': 4
        },
        ingredients: {
            'High-Speed Connector': 1,
            'Stator': 2,
            'Wire': 40
        },
        time: 32,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Battery',
        produces: {
            'Battery': 1,
            'Water': 1.5
        },
        ingredients: {
            'Sulfuric Acid': 2.5,
            'Alumina Solution': 2,
            'Aluminium Casing': 1
        },
        time: 3,
        machine: 'Blender'
    },
    {
        name: 'Classic Battery',
        produces: {
            'Battery': 4
        },
        ingredients: {
            'Sulfur': 6,
            'Alclad Aluminium Sheet': 7,
            'Plastic': 8,
            'Wire': 12
        },
        time: 8,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Bauxite',
        machine: 'Miner',
        time: 60
    },
    {
        name: 'Beacon',
        ingredients: {
            'Iron Plate': 3,
            'Iron Rod': 1,
            'Wire': 15,
            'Cable': 2
        },
        time: 8,
        machine: 'Manufacturer'
    },
    {
        name: 'Crystal Beacon',
        produces: {
            'Beacon': 20
        },
        ingredients: {
            'Steel Beam': 4,
            'Steel Pipe': 16,
            'Crystal Oscillator': 1
        },
        time: 120,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Biomass (Leaves)',
        produces: {
            'Biomass': 5
        },
        ingredients: {
            'Leaves': 10
        },
        time: 5,
        machine: 'Constructor'
    },
    {
        name: 'Biomass (Wood)',
        produces: {
            'Biomass': 20
        },
        ingredients: {
            'Wood': 4
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Biomass (Mycelia)',
        produces: {
            'Biomass': 10,
        },
        ingredients: {
            'Mycelia': 10
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Biomass (Alien Protein)',
        produces: {
            'Biomass': 100
        },
        ingredients: {
            'Alien Protein': 1
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Black Powder',
        produces: {
            'Black Powder': 2
        },
        ingredients: {
            'Coal': 1,
            'Sulfur': 1,
        },
        time: 4,
        machine: 'Assembler'
    },
    {
        name: 'Fine Black Powder',
        produces: {
            'Black Powder': 4
        },
        ingredients: {
            'Sulfur': 2,
            'Compacted Coal': 1
        },
        time: 16,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Cable',
        ingredients: {
            'Wire': 2
        },
        time: 2,
        machine: 'Constructor'
    },
    {
        name: 'Coated Cable',
        produces: {
            'Cable': 9
        },
        ingredients: {
            'Wire': 5,
            'Heavy Oil Residue': 2
        },
        time: 8,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Insulated Cable',
        produces: {
            'Cable': 20
        },
        ingredients: {
            'Wire': 9,
            'Rubber': 6
        },
        time: 12,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Quickwire Cable',
        produces: {
            'Cable': 11
        },
        ingredients: {
            'Quickwire': 3,
            'Rubber': 2
        },
        time: 24,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Caterium Ingot',
        ingredients: {
            'Caterium Ore': 3
        },
        time: 4,
        machine: 'Smelter'
    },
    {
        name: 'Pure Caterium Ingot',
        produces: {
            'Caterium Ingot': 1
        },
        ingredients: {
            'Caterium Ore': 2,
            'Water': 2
        },
        time: 5,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Caterium Ore',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Circuit Board',
        ingredients: {
            'Copper Sheet': 2,
            'Plastic': 4
        },
        time: 8,
        machine: 'Assembler'
    },
    {
        name: 'Electrode Circuit Board',
        produces: {
            'Circuit Board': 1
        },
        ingredients: {
            'Rubber': 6,
            'Petroleum Coke': 9
        },
        time: 12,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Silicon Circuit Board',
        produces: {
            'Circuit Board': 5
        },
        ingredients: {
            'Copper Sheet': 11,
            'Silica': 11
        },
        time: 24,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Caterium Circuit Board',
        produces: {
            'Circuit Board': 7
        },
        ingredients: {
            'Plastic': 10,
            'Quickwire': 30
        },
        time: 48,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Coal',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Color Cartridge',
        produces: {
            'Color Cartridge': 10
        },
        ingredients: {
            'Flower Petals': 5
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Compacted Coal',
        produces: {
            'Compacted Coal': 5
        },
        ingredients: {
            'Coal': 5,
            'Sulfur': 5
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Computer',
        ingredients: {
            'Circuit Board': 10,
            'Cable': 9,
            'Plastic': 18,
            'Screw': 52
        },
        time: 24,
        machine: 'Manufacturer'
    },
    {
        name: 'Crystal Computer',
        produces: {
            'Computer': 3
        },
        ingredients: {
            'Circuit Board': 8,
            'Crystal Oscillator': 3
        },
        time: 64,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Caterium Computer',
        produces: {
            'Computer': 1,
        },
        ingredients: {
            "Circuit Board": 7,
            "Quickwire": 28,
            "Rubber": 12
        },
        time: 16,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Concrete',
        ingredients: {
            'Limestone': 3
        },
        time: 4,
        machine: 'Constructor',
    },
    {
        name: 'Rubber Concrete',
        produces: {
            'Concrete': 9
        },
        ingredients: {
            'Limestone': 10,
            'Rubber': 2
        },
        time: 12,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Wet Concrete',
        produces: {
            'Concrete': 4
        },
        ingredients: {
            'Limestone': 6,
            'Water': 5,
        },
        time: 3,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Fine Concrete',
        produces: {
            'Concrete': 10
        },
        ingredients: {
            'Silica': 3,
            'Limestone': 12
        },
        time: 3,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Cooling System',
        ingredients: {
            'Heat Sink': 2,
            'Rubber': 2,
            'Water': 5,
            'Nitrogen Gas': 25,
        },
        time: 10,
        machine: 'Blender'
    },
    {
        name: 'Cooling Device',
        produces: {
            'Cooling System': 2
        },
        ingredients: {
            'Heat Sink': 5,
            'Motor': 1,
            'Nitrogen Gas': 24
        },
        time: 32,
        machine: 'Blender',
        isAlternate: true
    },
    {
        name: 'Copper Ingot',
        ingredients: {
            'Copper Ore': 1
        },
        time: 2,
        machine: 'Smelter'
    },
    {
        name: 'Copper Alloy Ingot',
        produces: {
            'Copper Ingot': 20
        },
        ingredients: {
            'Copper Ore': 10,
            'Iron Ore': 5
        },
        time: 12,
        machine: 'Foundry',
        isAlternate: true
    },
    {
        name: 'Pure Copper Ingot',
        produces: {
            'Copper Ingot': 15
        },
        ingredients: {
            'Copper Ore': 6,
            'Water': 4
        },
        time: 24,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Copper Ore',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Copper Powder',
        produces: {
            'Copper Powder': 5
        },
        ingredients: {
            'Copper Ingot': 30
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Copper Sheet',
        ingredients: {
            'Copper Ingot': 2
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Steamed Copper Sheet',
        produces: {
            'Copper Sheet': 3,
        },
        ingredients: {
            'Copper Ingot': 3,
            'Water': 3
        },
        time: 6,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Crude Oil',
        time: 60,
        machine: 'Oil Extractor'
    },
    {
        name: 'Crystal Oscillator',
        ingredients: {
            'Quartz Crystal': 36,
            'Reinforced Iron Plate': 5
        },
        time: 120,
        machine: 'Manufacturer'
    },
    {
        name: 'Insulate Crystal Oscillator',
        produces: {
            'Crystal Oscillator': 1
        },
        ingredients: {
            'Quartz Crystal': 10,
            'Rubber': 7,
            'AI Limiter': 1
        },
        time: 32,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Electromagnetic Control Rod',
        produces: {
            'Electromagnetic Control Rod': 2
        },
        ingredients: {
            'Stator': 3,
            'AI Limiter': 2
        },
        time: 30,
        machine: 'Assembler'
    },
    {
        name: 'Electromagnetic Control Rod Alternate',
        produces: {
            'Electromagnetic Control Rod': 2
        },
        ingredients: {
            'Stator': 2,
            'High-Speed Connector': 1
        },
        time: 15,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Empty Canister',
        produces: {
            'Empty Canister': 4
        },
        ingredients: {
            'Plastic': 2
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Steel Canister',
        produces: {
            'Empty Canister': 2
        },
        ingredients: {
            'Steel Ingot': 3
        },
        time: 3,
        machine: 'Constructor',
        isAlternate: true
    },
    {
        name: 'Coated Iron Canister',
        produces: {
            'Empty Canister': 4
        },
        ingredients: {
            'Iron Plate': 2,
            'Copper Sheet': 1
        },
        time: 4,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Packaged Alumina Solution',
        produces: {
            'Packaged Alumina Solution': 2
        },
        ingredients: {
            'Alumina Solution': 2,
            'Empty Canister': 2
        },
        time: 1,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Alumina Solution',
        produces: {
            'Alumina Solution': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Alumina Solution': 2
        },
        time: 1,
        machine: 'Packager'
    },
    {
        name: 'Packaged Oil',
        produces: {
            'Packaged Oil': 2
        },
        ingredients: {
            'Crude Oil': 2,
            'Empty Canister': 2
        },
        time: 4,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Oil',
        produces: {
            'Crude Oil': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Oil': 2
        },
        time: 2,
        machine: 'Packager'
    },
    {
        name: 'Package Fuel',
        produces: {
            'Packaged Fuel': 2
        },
        ingredients: {
            'Fuel': 2,
            'Empty Canister': 2
        },
        time: 3,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Fuel',
        produces: {
            'Fuel': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Fuel': 2
        },
        time: 2,
        machine: 'Packager'
    },
    {
        name: 'Package Heavy Oil Residue',
        produces: {
            'Packaged Heavy Oil Residue': 2
        },
        ingredients: {
            'Heavy Oil Residue': 2,
            'Empty Canister': 2
        },
        time: 4,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Heavy Oil Residue',
        produces: {
            'Heavy Oil Residue': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Heavy Oil Residue': 2
        },
        time: 6,
        machine: 'Packager'
    },
    {
        name: 'Package Liquid Biofuel',
        produces: {
            'Packaged Liquid Biofuel': 2
        },
        ingredients: {
            'Liquid Biofuel': 2,
            'Empty Canister': 2
        },
        time: 3,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Liquid Biofuel',
        produces: {
            'Liquid Biofuel': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Liquid Biofuel': 2
        },
        time: 2,
        machine: 'Packager'
    },
    {
        name: 'Packaged Sulfuric Acid',
        produces: {
            'Packaged Sulfuric Acid': 2
        },
        ingredients: {
            'Sulfuric Acid': 2,
            'Empty Canister': 2
        },
        time: 3,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Sulfuric Acid',
        produces: {
            'Sulfuric Acid': 1,
            'Empty Canister': 1
        },
        ingredients: {
            'Packaged Sulfuric Acid': 2
        },
        time: 1,
        machine: 'Packager'
    },
    {
        name: 'Package Turbofuel',
        produces: {
            'Packaged Turbofuel': 2
        },
        ingredients: {
            'Turbofuel': 2,
            'Empty Canister': 2
        },
        time: 6,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Turbofuel',
        produces: {
            'Turbofuel': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Turbofuel': 2
        },
        time: 6,
        machine: 'Packager'
    },
    {
        name: 'Package Water',
        produces: {
            'Packaged Water': 2
        },
        ingredients: {
            'Water': 2,
            'Empty Canister': 2
        },
        time: 2,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Water',
        produces: {
            'Water': 2,
            'Empty Canister': 2
        },
        ingredients: {
            'Packaged Water': 2,
        },
        time: 1,
        machine: 'Packager'
    },
    {
        name: 'Empty Fluid Tank',
        ingredients: {
            'Aluminium Ingot': 1
        },
        time: 1,
        machine: 'Constructor'
    },
    {
        name: 'Packaged Nitric Acid',
        ingredients: {
            'Nitric Acid': 1,
            'Empty Fluid Tank': 1
        },
        time: 2,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Nitric Acid',
        produces: {
            'Nitric Acid': 1,
            'Empty Fluid Tank': 1
        },
        ingredients: {
            'Packaged Nitric Acid': 1
        },
        time: 3,
        machine: 'Packager'
    },
    {
        name: 'Packaged Nitrogen Gas',
        ingredients: {
            'Nitrogen Gas': 4,
            'Empty Fluid Tank': 1
        },
        time: 1,
        machine: 'Packager'
    },
    {
        name: 'Unpackage Nitrogen Gas',
        produces: {
            'Nitrogen Gas': 4,
            'Empty Fluid Tank': 1
        },
        ingredients: {
            'Packaged Nitrogen Gas': 1
        },
        time: 1,
        machine: 'Packager'
    },
    {
        name: 'Encased Industrial Beam',
        ingredients: {
            'Steel Beam': 4,
            'Concrete': 5
        },
        time: 10,
        machine: 'Assembler'
    },
    {
        name: 'Encased Industril Pipe',
        produces: {
            'Encased Industrial Beam': 1
        },
        ingredients: {
            'Steel Pipe': 7,
            'Concrete': 5
        },
        time: 15,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Encased Plutonium Cell',
        ingredients: {
            'Plutonium Pallet': 2,
            'Concrete': 4
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Instant Plutonium Cell',
        produces: {
            'Encased Plutonim Cell': 20
        },
        ingredients: {
            'Non-fissile Uranium': 150,
            'Aluminium Casing': 20
        },
        time: 120,
        machine: 'Particle Accelerator'
    },
    {
        name: 'Encased Uranium Cell',
        produces: {
            'Encased Uranium Cell': 5,
            'Sulfuric Acid': 2
        },
        ingredients: {
            'Uranium': 10,
            'Concrete': 3,
            'Sulfuric Acid': 8
        },
        time: 12,
        machine: 'Blender'
    },
    {
        name: 'Infused Uranium Cell',
        produces: {
            'Encased Uranium Cell': 4
        },
        ingredients: {
            'Uranium': 5,
            'Silica': 3,
            'Sulfur': 5,
            'Quickwire': 15
        },
        time: 12,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Fabric',
        ingredients: {
            'Mycelia': 1,
            'Biomass': 5
        },
        time: 4,
        machine: 'Assembler'
    },
    {
        name: 'Polyester Fabric',
        produces: {
            'Fabric': 1
        },
        ingredients: {
            'Polymer Resin': 1,
            'Water': 1
        },
        time: 2,
        machine: 'Assembler'
    },
    {
        name: 'Flower Petals',
        time: 60,
        machine: 'Manual'
    },
    {
        name: 'Fused Modular Frame',
        ingredients: {
            'Heavy Modular Frame': 1,
            'Aluminium Casing': 50,
            'Nitrogen Gas': 25
        },
        time: 40,
        machine: 'Blender'
    },
    {
        name: 'Heat-Fused Frame',
        produces: {
            'Fused Modular Frame': 1
        },
        ingredients: {
            'Heavy Modular Frame': 1,
            'Aluminium Ingot': 50,
            'Nitric Acid': 8,
            'Fuel': 10
        },
        time: 20,
        machine: 'Blender'
    },
    {
        name: 'Gas Filter',
        ingredients: {
            'Coal': 5,
            'Rubber': 2,
            'Fabric': 2
        },
        time: 8,
        machine: 'Manufacturer'
    },
    {
        name: 'Iodine Infused Filter',
        ingredients: {
            'Gas Filter': 1,
            'Quickwire': 8,
            'Aluminium Casing': 1
        },
        time: 16,
        machine: 'Manufacturer'
    },
    {
        name: 'Heat Sink',
        ingredients: {
            'Alclad Aluminium Sheet': 5,
            'Copper Sheet': 3
        },
        time: 8,
        machine: 'Assembler'
    },
    {
        name: 'Heat Exchanger',
        produces: {
            'Heat Sink': 1
        },
        ingredients: {
            'Aluminium Casing': 3,
            'Rubber': 3
        },
        time: 6,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Heavy Modular Frame',
        ingredients: {
            'Modular Frame': 5,
            'Steel Pipe': 15,
            'Encased Industrial Beam': 5,
            'Screw': 100
        },
        time: 30,
        machine: 'Manufacturer'
    },
    {
        name: 'Heavy Flexible Frame',
        produces: {
            'Heavy Modular Frame': 1
        },
        ingredients: {
            'Modular Frame': 5,
            'Encased Industrial Beam': 3,
            'Rubber': 20,
            'Screw': 104
        },
        time: 16,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Heavy Encased Frame',
        produces: {
            'Heavy Modular Frame': 3
        },
        ingredients: {
            'Modular Frame': 8,
            'Encased Industrial Beam': 10,
            'Steel Pipe': 36,
            'Concrete': 22
        },
        time: 64,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'High-Speed Connector',
        ingredients: {
            'Quickwire': 56,
            'Cable': 10,
            'Circuit Board': 1
        },
        time: 16,
        machine: 'Manufacturer'
    },
    {
        name: 'Silicon High-Speed Connector',
        produces: {
            'High-Speed Connector': 2
        },
        ingredients: {
            'Quickwire': 60,
            'Silica': 25,
            'Circuit Board': 2
        },
        time: 40,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Iron Ingot',
        ingredients: {
            'Iron Ore': 1
        },
        time: 2,
        machine: 'Smelter'
    },
    {
        name: 'Pure Iron Ingot',
        produces: {
            'Iron Ingot': 13
        },
        ingredients: {
            'Iron Ore': 7,
            'Water': 4
        },
        time: 12,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Iron Alloy Ingot',
        produces: {
            'Iron Ingot': 5
        },
        ingredients: {
            'Iron Ore': 2,
            'Copper Ore': 2
        },
        time: 6,
        machine: 'Foundry',
        isAlternate: true
    },
    {
        name: 'Iron Ore',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Iron Plate',
        produces: {
            'Iron Plate': 2
        },
        ingredients: {
            'Iron Ingot': 3
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Coated Iron Plate',
        produces: {
            'Iron Plate': 15
        },
        ingredients: {
            'Iron Ingot': 10,
            'Plastic': 2
        },
        time: 12,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Steel Coated Plate',
        produces: {
            'Iron Plate': 18
        },
        ingredients: {
            'Steel Ingot': 3,
            'Plastic': 2
        },
        time: 24,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Iron Rod',
        ingredients: {
            'Iron Ingot': 1
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Steel Rod',
        produces: {
            'Iron Rod': 4
        },
        ingredients: {
            'Steel Ingot': 1
        },
        time: 5,
        machine: 'Constructor',
        isAlternate: true
    },
    {
        name: 'Leaves',
        time: 60,
        machine: 'Manual'
    },
    {
        name: 'Limestone',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Magnetic Field Generator',
        produces: {
            'Magnetic Field Generator': 2
        },
        ingredients: {
            'Versatile Framework': 5,
            'Electromagnetic Control Rod': 2,
            'Battery': 10
        },
        time: 120,
        machine: 'Manufacturer'
    },
    {
        name: 'Modular Engine',
        ingredients: {
            'Motor': 2,
            'Rubber': 15,
            'Smart Plating': 2
        },
        time: 60,
        machine: 'Manufacturer'
    },
    {
        name: 'Modular Frame',
        produces: {
            'Modular Frame': 2
        },
        ingredients: {
            'Reinforced Iron Plate': 3,
            'Iron Rod': 12
        },
        time: 60,
        machine: 'Assembler'
    },
    {
        name: 'Bolted Frame',
        produces: {
            'Modular Frame': 2
        },
        ingredients: {
            'Reinforced Iron Plate': 3,
            'Screw': 56
        },
        time: 24,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Steeled Frame',
        produces: {
            'Modular Frame': 3
        },
        ingredients: {
            'Reinforced Iron Plate': 3,
            'Steel Pipe': 10
        },
        time: 60,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Motor',
        ingredients: {
            'Rotor': 2,
            'Stator': 2
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Rigour Motor',
        produces: {
            'Motor': 6
        },
        ingredients: {
            'Rotor': 3,
            'Stator': 3,
            'Crystal Oscillator': 1
        },
        time: 48,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Electric Motor',
        produces: {
            'Motor': 2
        },
        ingredients: {
            'Electromagnetic Control Rod': 1,
            'Rotor': 2
        },
        time: 16,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Mycelia',
        time: 60,
        machine: 'Manual'
    },
    {
        name: 'Cluster Nobelisk',
        ingredients: {
            'Nobelisk': 3,
            'Smokeless Powder': 4
        },
        time: 24,
        machine: 'Assembler'
    },
    {
        name: 'Gas Nobelisk',
        ingredients: {
            'Nobelisk': 1,
            'Biomass': 10
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Nobelisk',
        ingredients: {
            'Steel Pipe': 2,
            'Black Powder': 2
        },
        time: 6,
        machine: 'Assembler'
    },
    {
        name: 'Nuke Nobelisk',
        ingredients: {
            'Nobelisk': 5,
            'Encased Uranium Cell': 20,
            'Smokeless Powder': 10,
            'AI Limiter': 6
        },
        time: 120,
        machine: 'Manufacturer'
    },
    {
        name: 'Pulse Nobelisk',
        ingredients: {
            'Nobelisk': 5,
            'Crystal Oscillator': 1
        },
        time: 60,
        machine: 'Assembler'
    },
    {
        name: 'Seismic Nobelisk',
        ingredients: {
            'Black Powder': 8,
            'Steel Pipe': 8,
            'Crystal Oscillator': 1
        },
        time: 40,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Non-fissile Uranium',
        produces: {
            'Non-fissile Uranium': 20,
            'Water': 6
        },
        ingredients: {
            'Uranium Waste': 15,
            'Silica': 10,
            'Nitric Acid': 6,
            'Sulfuric Acid': 6
        },
        time: 24,
        machine: 'Blender'
    },
    {
        name: 'Fertile Uranium',
        produces: {
            'Non-fissule Uranium': 20,
            'Water': 80
        },
        ingredients: {
            'Uranium': 5,
            'Uranium Waste': 5,
            'Nitric Acid': 3,
            'Sulfuric Acid': 5
        },
        time: 12,
        machine: 'Blender',
        isAlternate: true
    },
    {
        name: 'Nuclear Pasta',
        ingredients: {
            'Copper Powder': 200,
            'Pressure Conversion Cube': 1
        },
        time: 120,
        machine: 'Particle Accelerator'
    },
    {
        name: 'Organic Data Capsule',
        ingredients: {
            'Alien Protein': 1
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Petroleum Coke',
        produces: {
            'Petroleum Coke': 12
        },
        ingredients: {
            'Heavy Oil Residue': 4
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Plastic',
        produces: {
            'Plastic': 2,
            'Heavy Oil Residue': 1
        },
        ingredients: {
            'Crude Oil': 3
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Residual Plastic',
        produces: {
            'Plastic': 2
        },
        ingredients: {
            'Polymer Resin': 6,
            'Water': 2
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Recycled Plastic',
        produces: {
            'Plastic': 12
        },
        ingredients: {
            'Rubber': 6,
            'Fuel': 6
        },
        time: 12,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Plutonium Fuel Rod',
        ingredients: {
            'Encased Plutonium Cell': 30,
            'Steel Beam': 18,
            'Electromagnetic Control Rod': 6,
            'Heat Sink': 10
        },
        time: 240,
        machine: 'Manufacturer'
    },
    {
        name: 'Plutonium Fuel Unit',
        produces: {
            'Plutonium Fuel Rod': 1
        },
        ingredients: {
            'Encased Plutonium Cell': 20,
            'Pressure Conversion Cube': 1
        },
        time: 120,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Plutonium Pallet',
        produces: {
            'Plutonium Pallet': 30
        },
        ingredients: {
            'Non-fissile Uranium': 100,
            'Uranium Waste': 25
        },
        time: 60,
        machine: 'Particle Accelerator'
    },
    {
        name: 'Plutonium Waste',
        produces: {
            'Plutonium Waste': 10
        },
        ingredients: {
            'Plutonium Fuel Rod': 1,
            'Water': 3000
        },
        time: 600,
        machine: 'Nuclear Power Plant'
    },
    {
        name: 'Fuel',
        produces: {
            'Fuel': 4,
            'Polymer Resin': 3
        },
        ingredients: {
            'Crude Oil': 6
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Heavy Oil Residue',
        produces: {
            'Heavy Oil Residue': 4,
            'Polymer Resin': 2
        },
        ingredients: {
            'Crude Oil': 3
        },
        time: 6,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Polymer Resin',
        produces: {
            'Polymer Resin': 13,
            'Heavy Oil Residue': 2
        },
        ingredients: {
            'Crude Oil': 6
        },
        time: 6,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Power Shard (1)',
        produces: {
            'Power Shard': 1
        },
        ingredients: {
            'Blue Power Slug': 1
        },
        time: 8,
        machine: 'Constructor'
    },
    {
        name: 'Blue Power Slug',
        time: 60,
        machine: 'Manual'
    },
    {
        name: 'Power Shard (2)',
        produces: {
            'Power Shard': 2
        },
        ingredients: {
            'Yellow Power Slug': 1
        },
        time: 8,
        machine: 'Constructor'
    },
    {
        name: 'Yellow Power Slug',
        time: 60,
        machine: 'Manual'
    },
    {
        name: 'Power Shard (3)',
        produces: {
            'Power Shard': 5
        },
        ingredients: {
            'Purple Power Slug': 1
        },
        time: 8,
        machine: 'Constructor'
    },
    {
        name: 'Purple Power Slug',
        time: 60,
        machine: 'Manual'
    },
    {
        name: 'Pressure Conversion Cube',
        ingredients: {
            'Fused Modular Frame': 1,
            'Radio Control Unit': 2
        },
        time: 60,
        machine: 'Assembler'
    },
    {
        name: 'Quartz Crystel',
        produces: {
            'Quartz Crystal': 3
        },
        ingredients: {
            'Raw Quartz': 5
        },
        time: 8,
        machine: 'Constructor'
    },
    {
        name: 'Pure Quartz Crystal',
        produces: {
            'Quartz Crystal': 7
        },
        ingredients: {
            'Raw Quartz': 9,
            'Water': 5
        },
        time: 8,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Quickwire',
        produces: {
            'Quickwire': 5
        },
        ingredients: {
            'Caterium Ingot': 1
        },
        time: 5,
        machine: 'Constructor'
    },
    {
        name: 'Fused Quickwire',
        produces: {
            'Quickwire': 12
        },
        ingredients: {
            'Caterium Ingot': 1,
            'Copper Ingot': 5
        },
        time: 8,
        machine: 'Assembler'
    },
    {
        name: 'Radio Control Unit',
        produces: {
            'Radio Control Unit': 2
        },
        ingredients: {
            'Aluminium Casing': 32,
            'Crystal Oscillator': 1,
            'Computer': 1
        },
        time: 48,
        machine: 'Manufacturer'
    },
    {
        name: 'Radio Control System',
        produces: {
            'Radio Control Unit': 3
        },
        ingredients: {
            'Crystal Oscillator': 1,
            'Circuit Board': 10,
            'Aluminium Casing': 60,
            'Rubber': 30
        },
        time: 40,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Radio Connection Unit',
        produces: {
            'Radio Control Unit': 1
        },
        ingredients: {
            'Heat Sink': 4,
            'High-Speed Connector': 2,
            'Quartz Crystal': 12
        },
        time: 16,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Raw Quartz',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Explosive Rebar',
        ingredients: {
            'Iron Rebar': 2,
            'Smokeless Powder': 2,
            'Steel Pipe': 2
        },
        time: 12,
        machine: 'Manufacturer'
    },
    {
        name: 'Iron Rebar',
        ingredients: {
            'Iron Rod': 1
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Shatter Rebar',
        ingredients: {
            'Iron Rebar': 2,
            'Quartz Crystal': 3
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Stun Rebar',
        ingredients: {
            'Iron Rebar': 1,
            'Quickwire': 5
        },
        time: 6,
        machine: 'Assembler'
    },
    {
        name: 'Reinforced Iron Plate',
        ingredients: {
            'Iron Plate': 6,
            'Screw': 12
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Advanced Iron Plate',
        produces: {
            'Reinforced Iron Plate': 1
        },
        ingredients: {
            'Iron Plate': 3,
            'Rubber': 1
        },
        time: 16,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Bolted Iron Plate',
        produces: {
            'Reinforced Iron Plate': 3
        },
        ingredients: {
            'Iron Plate': 18,
            'Screw': 50
        },
        time: 12,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Stitched Iron Plate',
        produces: {
            'Reinforced Iton Plate': 3
        },
        ingredients: {
            'Iron Plate': 10,
            'Wire': 20
        },
        time: 32,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Hunting Rifle Ammo',
        produces: {
            'Hunting Rifle Ammo': 10
        },
        ingredients: {
            'Rifle Ammo': 20,
            'High-Speed Connector': 1
        },
        time: 24,
        machine: 'Assembler'
    },
    {
        name: 'Rifle Ammo',
        produces: {
            'Rifle Ammo': 15
        },
        ingredients: {
            'Copper Sheet': 3,
            'Smokeless Powder': 2
        },
        time: 12,
        machine: 'Assembler'
    },
    // TODO: Two recipes with the same base name
    {
        name: 'Turbo Rifle Ammo (Manufacturer)',
        produces: {
            'Turbo Rifle Ammo': 50
        },
        ingredients: {
            'Rifle Ammo': 25,
            'Aluminium Casing': 3,
            'Packaged Turbofuel': 3
        },
        time: 12,
        machine: 'Manufacturer'
    },
    {
        name: 'Turbo Rifle Ammo (Blender)',
        produces: {
            'Turbo Rifle Ammo': 50
        },
        ingredients: {
            'Rifle Ammo': 25,
            'Aluminium Casing': 3,
            'Turbofuel': 3
        },
        time: 12,
        machine: 'Blender'
    },
    {
        name: 'Rotor',
        ingredients: {
            'Iron Rod': 5,
            'Screw': 25
        },
        time: 15,
        machine: 'Assembler'
    },
    {
        name: 'Copper Rotor',
        produces: {
            'Rotor': 3
        },
        ingredients: {
            'Copper Sheet': 6,
            'Screw': 52
        },
        time: 16,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Steel Rotor',
        produces: {
            'Rotor': 1
        },
        ingredients: {
            'Steel Pipe': 2,
            'Wire': 6
        },
        time: 12,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Rubber',
        produces: {
            'Rubber': 2,
            'Heavy Oil Residue': 2
        },
        ingredients: {
            'Crude Oil': 3
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Residual Rubber',
        produces: {
            'Rubber': 2
        },
        ingredients: {
            'Polymer Resin': 4,
            'Water': 4
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Recycled Rubber',
        produces: {
            'Rubber': 12
        },
        ingredients: {
            'Plastic': 6,
            'Fuel': 6
        },
        time: 12,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'SAM Ore',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Screw',
        produces: {
            'Screw': 4
        },
        ingredients: {
            'Iron Rod': 1
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Cast Screw',
        produces: {
            'Screw': 20
        },
        ingredients: {
            'Iron Ingot': 5
        },
        time: 24,
        machine: 'Constructor',
        isAlternate: true
    },
    {
        name: 'Steel Screw',
        produces: {
            'Screw': 52
        },
        ingredients: {
            'Steel Beam': 1
        },
        time: 12,
        machine: 'Constructor',
        isAlternate: true
    },
    {
        name: 'Alumina Solution',
        produces: {
            'Alumina Solution': 12,
            'Silica': 5
        },
        ingredients: {
            'Bauxite': 12,
            'Water': 18
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Silica',
        produces: {
            'Silica': 5
        },
        ingredients: {
            'Raw Quartz': 3
        },
        time: 8,
        machine: 'Constructor'
    },
    {
        name: 'Cheap Silica',
        produces: {
            'Silica': 7
        },
        ingredients: {
            'Raw Quartz': 3,
            'Limestone': 5
        },
        time: 15,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Smart Plating',
        ingredients: {
            'Reinforced Smart Plating': 1,
            'Rotor': 1
        },
        time: 30,
        machine: 'Assembler',
    },
    {
        name: 'Plastic Smart Plating',
        produces: {
            'Smart Plating': 2
        },
        ingredients: {
            'Reinforced Iron Plate': 1,
            'Rotor': 1,
            'Plastic': 3
        },
        time: 24,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Smokeless Powder',
        produces: {
            'Smokeless Powder': 2
        },
        ingredients: {
            'Black Powder': 2,
            'Heavy Oil Residue': 1
        },
        time: 6,
        machine: 'Refinery'
    },
    {
        name: 'Solid Biofuel',
        produces: {
            'Solid Biofuel': 4
        },
        ingredients: {
            'Biomass': 8
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Stator',
        ingredients: {
            'Steel Pipe': 3,
            'Wire': 8
        },
        time: 12,
        machine: 'Assembler'
    },
    {
        name: 'Quickwire Stator',
        produces: {
            'Stator': 2
        },
        ingredients: {
            'Steel Pipe': 4,
            'Quickwire': 15
        },
        time: 15,
        machine: 'Assembler'
    },
    {
        name: 'Steel Beam',
        ingredients: {
            'Steel Ingot': 4
        },
        time: 4,
        machine: 'Constructor'
    },
    {
        name: 'Steel Ingot',
        produces: {
            'Steel Ingot': 3
        },
        ingredients: {
            'Iron Ore': 3,
            'Coal': 3
        },
        time: 4,
        machine: 'Foundry'
    },
    {
        name: 'Coke Steel Ingot',
        produces: {
            'Steel Ingot': 20
        },
        ingredients: {
            'Iron Ore': 15,
            'Petroleum Coke': 15
        },
        time: 12,
        machine: 'Foundry',
        isAlternate: true
    },
    {
        name: 'Compacted Steel Ingot',
        produces: {
            'Steel Ingot': 10
        },
        ingredients: {
            'Iron Ore': 6,
            'Compacted Coal': 3
        },
        time: 16,
        machine: 'Foundry',
        isAlternate: true
    },
    {
        name: 'Solid Steel Ingot',
        produces: {
            'Steel Ingot': 3
        },
        ingredients: {
            'Iron Ingot': 2,
            'Coal': 2
        },
        time: 3,
        machine: 'Foundry',
        isAlternate: true
    },
    {
        name: 'Steel Pipe',
        produces: {
            'Steel Pipe': 2
        },
        ingredients: {
            'Steel Ingot': 3
        },
        time: 6,
        machine: 'Constructor'
    },
    {
        name: 'Sulfur',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Supercomputer',
        ingredients: {
            'Computer': 2,
            'AI Limiter': 2,
            'High-Speed Connector': 3,
            'Plastic': 28
        },
        time: 32,
        machine: 'Manufacturer'
    },
    {
        name: 'OC Supercomputer',
        produces: {
            'Supercomputer': 1
        },
        ingredients: {
            'Radio Control Unit': 3,
            'Cooling System': 3
        },
        time: 20,
        machine: 'Assembler',
        isAlternate: true
    },
    {
        name: 'Super-State Computer',
        produces: {
            'Supercomputer': 2
        },
        ingredients: {
            'Computer': 3,
            'Electromagnetic Control Rod': 2,
            'Battery': 20,
            'Wire': 45
        },
        time: 50,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Thermal Propulsion Rocket',
        produces: {
            'Thermal Production Rocket': 2
        },
        ingredients: {
            'Modular Engine': 5,
            'Turbo Motor': 2,
            'Cooling System': 6,
            'Fused Modular Frame': 2
        },
        time: 120,
        machine: 'Manufacturer'
    },
    {
        name: 'Turbo Motor',
        ingredients: {
            'Cooling System': 4,
            'Radio Control Unit': 2,
            'Motor': 4,
            'Rubber': 24
        },
        time: 32,
        machine: 'Manufacturer'
    },
    {
        name: 'Turbo Electric Motor',
        produces: {
            'Turbo Motor': 3
        },
        ingredients: {
            'Motor': 7,
            'Radio Control Unit': 9,
            'Electromagnetic Control Rod': 5,
            'Rotor': 7
        },
        time: 64,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Turbo Pressure Motor',
        produces: {
            'Turbo Motor': 2
        },
        ingredients: {
            'Motor': 4,
            'Pressure Conversion Cube': 1,
            'Packaged Nitrogen Gas': 24,
            'Stator': 8
        },
        time: 32,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Turbofuel',
        produces: {
            'Turbofuel': 5
        },
        ingredients: {
            'Fuel': 6,
            'Compacted Coal': 4
        },
        time: 16,
        machine: 'Refinery'
    },
    {
        name: 'Turbo Heavy Fuel',
        produces: {
            'Turbofuel': 4
        },
        ingredients: {
            'Heavy Oil Residue': 5,
            'Compacted Coal': 4
        },
        time: 8,
        machine: 'Refinery',
        isAlternate: true
    },
    {
        name: 'Turbo Blend Fuel',
        produces: {
            'Turbofuel': 6
        },
        ingredients: {
            'Fuel': 2,
            'Heavy Oil Residue': 4,
            'Sulfur': 3,
            'Petroleum Coke': 3
        },
        time: 8,
        machine: 'Blender',
        isAlternate: true
    },
    {
        name: 'Uranium',
        time: 60,
        machine: 'Miner'
    },
    {
        name: 'Uranium Fuel Rod',
        ingredients: {
            'Encased Uranium Cell': 50,
            'Encased Industrial Beam': 3,
            'Electromagnetic Control Rod': 5
        },
        time: 150,
        machine: 'Manufacturer'
    },
    {
        name: 'Uranium Fuel Unit',
        produces: {
            'Uranium Fuel Rod': 3
        },
        ingredients: {
            'Encased Uranium Cell': 100,
            'Electromagnetic Control Rod': 10,
            'Crystal Oscillator': 3,
            'Beacon': 6
        },
        time: 300,
        machine: 'Manufacturer',
        isAlternate: true
    },
    {
        name: 'Uranium Waste',
        produces: {
            'Uranium Waste': 50
        },
        ingredients: {
            'Uranium Fuel Rod': 1,
            'Water': 1500
        },
        time: 300,
        machine: 'Nuclear Power Plant'
    },
    {
        name: 'Versatile Framework',
        produces: {
            'Versatile Framework': 2
        },
        ingredients: {
            'Modular Frame': 1,
            'Steel Beam': 12
        },
        time: 24,
        machine: 'Assembler'
    },
    {
        name: 'Flexible Framework',
        produces: {
            'Versatile Framework': 2
        },
        ingredients: {
            'Modular Frame': 1,
            'Steel Beam': 6,
            'Rubber': 8
        },
        time: 16,
        machine: 'Manufacturer',
        isAlternate: true
    }
]

export {
    //    StandardRecipes,
    StandardRecipeJson
}