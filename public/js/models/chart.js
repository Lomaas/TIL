window.ChartModel = Backbone.Model.extend({
    url : "team/Tromsø/finalthird",

    parse : function(resp){
        console.log(resp);

        return resp;
    }
});