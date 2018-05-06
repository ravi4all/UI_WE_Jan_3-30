var obj = {
    id : 0,
    itemList : [],

    addItem : function(name,price,desc){
        this.id++;
        var item = new Item(this.id,name,price,desc);
        this.itemList.push(item);
        console.log(this.itemList);
    },

    toggleItem : function(id){
        var toggleList = this.itemList.filter(function(x){
            return x.id == id;
        });
        toggleList[0].selected = !toggleList[0].selected;
        console.log(toggleList);
    },

    deleteItem : function(){
        this.itemList = this.itemList.filter(function(x){
            return x.selected == false;
        })
    }

}