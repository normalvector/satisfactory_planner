# Satisfactory Planner

## The Factory Must Expand To Meet The Growing Needs Of The Factory

This is a notebook application designed so [Satisfactory](https://www.satisfactorygame.com/) players can keep a notebook on what their factory is doing and have their inputs and outputs tracked inline with their notes, updating the inventory as it goes on.

At present this is a quick and nasty test application, and only has the recipe data sufficient for a simple starter iron factory, so is more suitable for testing rather than being something you should absolutely rely on.

When you first start the application you'll have a description of a simple starter iron factory which is intended to demonstrate the features included at present.

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

## ToDo
* Different verbosity for production lines
* Confirmation of things such as resetting MD/Recipes
* Allow plurals and aliases for recipes
* All standard recipes in JSON
* Filter inventory to only list certain items
* Import/Export settings to JSON file for local store
* Deploy build onto Github pages

## Stuff

This is [MIT Licensed](https://opensource.org/licenses/MIT) and is written by Paul Golds.