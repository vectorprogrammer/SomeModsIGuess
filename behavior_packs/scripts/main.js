import { system, world, BlockComponentRegistry } from "@minecraft/server";
import "./pale_oak_growth_drops";
import "./ore_regeneration";
import {NetheriteCrafterComponent} from "./netherite_crafter_components";
system.beforeEvents.worldInitialize.subscribe(async({ blockTypeRegistry }) => {
    blockTypeRegistry.registerCustomComponent(
        "convertedjava:netherite_crafter_logic",
        new NetheriteCrafterComponent()
    );
    console.log("Scripting API first step initialized")
});
world.afterEvents.worldIntialize.subscribe(()=>{
    world.sendMessage("Scripting API fully initalized");
})
