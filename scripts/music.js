Events.run(Trigger.update, () => {
    //me when i steal haznobrain's code
    const unit = Groups.unit.find(e =>
        e.type.name == "eclipse" &&
        e.team != Vars.player.team &&
        e.hasEffect(StatusEffects.boss)
                    )
    if (unit){
        let skibidiToiler = Vars.tree.loadMusic("boss2");
    Reflect.invoke(Vars.control.sound,"stop",[]) Reflect.invoke(Vars.control.sound,"playOnce",[Musics.boss2],Music);
    }
})
