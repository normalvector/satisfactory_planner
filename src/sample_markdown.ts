const basic_ingredients = `
# Satisfactory Summary

# Test Raw/Local

+1000 Iron Rod !raw
+2000 Iron Rod !raw local

### After Raw (Main)
InventorySummary

### After Raw (Local)
InventorySummary !local

+10 Screw

## Iron Miner Sources
These are the basic iron sources, the three miners near the Iron Factory.

### Miner 1
This is the **impure** miner on the first node
+ 60 Iron Ore

### Miner 2
+ 120 Iron Ore

### Miner 3
+ 60 Iron Ore

+ 1020 Iron Ore

## Inventory After Miners
InventorySummary

## Smelter

+ 380 Iron Ingot

We're also porting some ingots from other factories.
TODO: Allow raw

## Before Add
InventorySummary

+50000 Iron Ingot !raw

## After Add
InventorySummary

## Constructors

Just some simple constructors, all in a nice layout

+ 120 Iron Plate
+ 100 Iron Rod
+ 23 Unknown Item

## Assemblers

LocalInventory

InventorySummary

+ 57 Screw ! local

InventorySummary

+ 7 Reinforced Iron Plate


InventorySummary

+ 2 Rotor
+ 1 Modular Frame

## Final Inventory
InventorySummary
`

export {
    basic_ingredients
}