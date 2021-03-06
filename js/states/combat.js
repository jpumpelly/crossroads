XRoads.Combat = function () { };

XRoads.Combat.prototype = {
    preload: function () {
        XRoads.Map.preload(this.game);
        XRoads.CM = this.creeps = new XRoads.CreepManager(this.game);
        XRoads.CombatPlayer = new CombatPlayer(this.game);
        XRoads.CombatPlayer.preload();
        XRoads.Behaviors = new XRoads.Behaviors(this.game);
        XRoads.Behaviors.preload();
    },

    create: function () {
        XRoads.Map.create();
        XRoads.Grid.create(this.game);
        XRoads.GridNodes.create(XRoads.Grid.getColumns(), XRoads.Grid.getRows(), 16);
        this.creeps.populate();
        XRoads.CombatPlayer.create();
        XRoads.Behaviors.create();
        this.game.stage.smoothed = false;
        this.game.stage.backgroundColor = '#000000';
        // Hax0rz for IE
        if (this.game.context.msImageSmoothingEnabled) {
            this.game.context.msImageSmoothingEnabled = false;
        }
    },

    update: function () {
        XRoads.CombatPlayer.update();
    },

    render: function () {

    }
};