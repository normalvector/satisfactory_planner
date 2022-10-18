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

## Modular Frame Factory
The last thing we're building is the [Modular Frame](https://satisfactory.fandom.com/wiki/Modular_Frame) Factory. As this is an early game factory we're only going to be running the Assembler at quarter speed.

+0.25 Modular Frame

### Inventory After Modular Frame Factory
This is what remains in the main inventory after the Modular Frame Factory. We're starting to see decimals as we're running production at partial speeds here.

InventorySummary

---

## Final Inventory
This is the final summary of what's coming out of all of the factories and can be used
as a quick summary of where we have excess and what's needed to run at full capacity.

InventorySummary
`

export {
    basic_ingredients
}