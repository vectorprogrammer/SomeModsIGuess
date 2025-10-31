scoreboard players add @a timer 1
execute if score @a timer matches 20 run function ore_respawn_run
execute if score @a timer matches 20 run scoreboard players set@ timer 0
