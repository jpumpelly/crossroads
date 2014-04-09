﻿XRoads.CreepManager = function (game) {
    this.game = game;
};

XRoads.CreepManager.prototype = {
    populate: function () {
        var type, x, y
          , types = ['werewolf', 'swamp', 'vamp', 'frank', 'mummy'];

        for (var i = 0; i < 60; i++) {
            type = types[Math.floor(Math.random() * 5)];
            x = Math.floor(Math.random() * XRoads.Grid.getColumns());
            y = Math.floor(Math.random() * XRoads.Grid.getRows());

            this._add(type, x, y);
        }
    },

    update: function () {
        for (var i = this._creeps.length - 1; i >= 0; i--) {
            this._creeps[i].update();
        }
    },

    render: function () {
        for (var i = this._creeps.length - 1; i >= 0; i--) {
            this._creeps[i].render();
        }
    },

    _add: function (type, x, y) {
        this._creeps.push(new XRoads.Creep(type, x, y));
    },

    _creeps: []
};
