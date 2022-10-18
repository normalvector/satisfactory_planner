const basic_ingredients = `
# Satisfactory Summary
This is intended as a sample summary for a basic early-game iron factory in order to show how the system works.

---

## Mining and Smelting
We've tapped three nodes near our starting location and have started to smelt some of the results.

+60 Iron Ore
+60 Iron Ore
+30 Iron Ore

+90 Iron Ingot

### Inventory After Mining and Smelting
InventorySummary

--- 

## Basic Constructors
The first set of things we make are the basics, the plates and rods.

+3 Iron Plate
+4 Iron Rod

### Inventory After Basic Constructors
InventorySummary

---

## Rotor Factory
We now build a simple [rotor](https://satisfactory.fandom.com/wiki/Rotor) factory and, for efficiency, we make the screws locally
instead of passing them into the main factory and aren't returning them to the main
bus.

ResetLocalInventory

+8 Screw !local

+1 Rotor

### Inventory After Rotor Factory
This is what remains in the main inventory after the rotor factory, it doesn't include
the screws as they were made local to the factory and not returned to the main inventory.

InventorySummary

### Local Inventory From Rotor Factory
This is the excess from the rotor factory, it'll either be backlog or could be thrown in a Sink.

InventorySummary !local

---

## Reinforced Plate Factory
For our [Reinforced Plate](https://satisfactory.fandom.com/wiki/Reinforced_Iron_Plate) Factory we'll do things slightly differently and will be importing the screws from an (undocumented) screw factory directly into our local storage by using the '!raw' specifier.

ResetLocalInventory

+200 Screw !local raw
+1 Reinforced Iron Plate

### Inventory After Reinforced Plate Factory
This is what remains in the main inventory after the rotor factory, it doesn't include
the screws as they were made local to the factory and not returned to the main inventory.

We can see there's a negative amount of Iron Rods which indicates there's going to be a shortage of them and we should increase the number of them we're producing.

InventorySummary

### Local Inventory From Reinforced Plate Factory
This is the excess from the reinforced plate factory, it'll either be backlog or could be thrown in a Sink.

InventorySummary !local

---

+1000 Iron Rod !raw
+2000 Iron Rod !raw local

### After Raw (Main)
InventorySummary

### After Raw (Local)
InventorySummary !local

+10 Screw !local

+20 Screw

### After Screw (Main)
InventorySummary

### After Screw (Local)
InventorySummary !local

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