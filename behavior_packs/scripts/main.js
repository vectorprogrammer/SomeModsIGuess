import { world } from "@minecraft/server";
import "./pale_oak_growth_drops";
world.afterEvents.worldIntialize.subscribe(()=>{
    world.sendMessage("Scripting API initalized");
});
