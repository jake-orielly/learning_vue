Vue.component('menu-item', {
    props: ['item'],
    template: '<li><span class="clickable" v-on:click="purchase">{{ item.name }}</span>, ${{item.price}}</li>',
    methods: {
        purchase: function() {
            app.status_message = "You purchased a " + this.item.name + " cupcake!";
            if(!(this.item.name in app.inventory))
                app.inventory[this.item.name] = {name:this.item.name,amount:0};
            app.inventory[this.item.name].amount += 1;
            app.total_cost += this.item.price;
        }
    }
});

var app = new Vue({ 
    el: '#app',
    data: {
        welcome_message: 'Weclome to the Store!',
        status_message: '',
        total_cost: 0,
        flavors: [
            {name:'Vanilla',price:3},
            {name:'Chocolate',price:5},
            {name:'Pumpkin',price:7},
            {name:'Red Velvet',price:7}
        ],
        inventory: {}
    }
});