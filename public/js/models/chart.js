window.ChartModel = Backbone.Model.extend({
    initialize : function(props){
        console.log(props);
        this.url = props.url;
    },

    parse : function(resp){
        console.log(resp);

        return resp;
    }
});