# Satisfactory Planner

**The planner itself is [here](https://normalvector.github.io/satisfactory_planner/)**

## The Factory Must Expand To Meet The Growing Needs Of The Factory

This is a notebook application designed so [Satisfactory](https://www.satisfactorygame.com/) players can keep a notebook on what their factory is doing and have their inputs and outputs tracked inline with their notes, updating the inventory as it goes on.

At present this is a quick and nasty test application, and only has the recipe data sufficient for a simple starter iron factory, so is more suitable for testing rather than being something you should absolutely rely on.

When you first start the application you'll have a description of a simple starter iron factory which is intended to demonstrate the features included at present.

## Basic Use
The intent of this is to let you describe your factory in plain language and track the production and consumption of items with a few simple techniques in order to quickly see what you have in excess, or where you need to focus production.

The top of the page has three tabs:

* *Edit* is where you edit the notes
* *Review* displays a nicely rendered version of the notes, including all of the inventory levels being tracked
* *Recipes* allows you to view (and edit) the recipes available. Currently there aren't many recipes, only a few basic iron ones, but eventually the plan is that if you're using mods you can add their recipes here to make them available in your notes.

## Notebook Syntax
The notebook is using [Markdown](https://www.markdownguide.org/basic-syntax/) with a few extensions added to it. All Markdown features are available from typography such as headers to links and so forth.

### Production
Each production machine in the factory can have its recipes added to the notes by using a line starting with a '+' and including the count and name of the recipe.

The count is the number of machines running the recipe, not the amount of items being produced, and so ```+10 Screw``` means ten Constructors are making 40x Screws every minute. If you're underclocking machines then you can use decimals for the number of machines such as ```+0.5 Computer```.

This notation is also used for mining with the count being the amount of ore being mined.

```markdown
# A Starter Miner

+60 Iron Ore
+60 Iron Ingot
```

### Inventory Summary
After doing some production you'll want to see how this affects the inventory in order to see which items you have an excess of and which you need to produce more of.

To do this put ```InventorySummary``` on a line by itself and the output will include a complete list of what's in the inventory.

### Raw
Sometimes you want to only produce a note about a portion of a factory and have items bought in from parts which aren't documented. Here we use a syntax similar to Production but add ```!raw``` to the end and use the actual item count rather than the number of machines.

As an example if we were bring in 240 Screws per minute we'd use ```+1000 Screw !raw```.

### Local Inventory
Often you'll end up building the components as part of the factory area instead of bringing them in, particularly in the case of things such as Wire which take up more space on belts than the material they're built from.

To do this the application keeps two separate inventories, the main one as used above and one local to the factory part being built. The general rule for which inventory to use is that local is only used when the production is dedicated to a part of the factory and any excess isn't passed onto other parts.

To use this local inventory put ```ResetLocalInventory``` at the start of the factory's description and it'll clear out any existing local inventory and set everything up ready. Production which goes to the local inventory can be marked with ```!local``` such as ```4x Screw !local``` to notes that 4x Constructors are feeding into the local inventory. This can also be combined with ```!raw``` to mark that a resource is being bought straight into the factory part and is being used locally such as ```240x Screw !local !raw```.

To view the current content of this local inventory we use ```InventorySummary !local```.

## Sample Markdown
This is a simple example of this being used to document a starter iron factory, and is the standard Markdown loaded into the application at the start.

```markdown
# Satisfactory Summary
This is intended as a sample summary for a basic early-game iron factory in order to show how the system works.

---

## Mining and Smelting
We've tapped three nodes near our starting location and have started to smelt some of the results.

*For the Miners we use the amount of resource being produced, and for the Smelters (and all other production) we use the number of machines*

+60 Iron Ore
+60 Iron Ore
+30 Iron Ore

+5 Iron Ingot

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

Here we have a negative amount of iron rods and so know there's a problem and we need to
produce more of them.

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

Again we have a negative number of Iron Rods due to needing to ramp up their production.

InventorySummary
```
## ToDo
* Include the amount of time taken to produce things
* Different verbosity for production lines
* Confirmation of things such as resetting MD/Recipes
* Allow plurals and aliases for recipes
* All standard recipes in JSON
* Filter inventory to only list certain items
* Import/Export settings to JSON file for local store
* Deploy build onto Github pages
* Inline calculator
* Record the type of machine used for recipes
* Track power usage
* Check recipes don't refer to unknown ingredients

## Stuff

This is [MIT Licensed](https://opensource.org/licenses/MIT) and is written by Paul Golds.