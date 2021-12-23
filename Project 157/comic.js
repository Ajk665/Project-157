AFRAME.registerComponent("comic", {
    init: function(){
        this.placesContainer = this.el;
        this.CreateCards()
    },
    CreateCards: function(){
        const thumbnailRef = [
            {
                id: "Superman",
                title: "Superman",
                url: "../assets/thumbnails/superman.jpg"
            },
            {
                id: "Spiderman",
                title: "Spiderman",
                url: "../assets/thumbnails/spiderman.png"
            },
            {
                id: "Captain-Aero",
                title: "Captain Aero",
                url: "../assets/thumbnails/captain_aero.png"
            },
            {
                id: "Outer-Space",
                title: "Outer Space",
                url: "../assets/thumbnails/outer_space.png"
            },
        ]
        let previousXPosition = -60;
        for(var item of thumbnailRef){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = {x: posX, y: posY, z: posZ};
            previousXPosition = posX;

            const borderEl = this.createBorder(position, item.id);
            const thumbnail = this.createThumbnail(item);
            borderEl.appendChild(thumbnail);
            const titleEl = this.createTitle(position, item);
            borderEl.appendChild(titleEl);
            this.placesContainer.appendChild(borderEl);
        }
    },
    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id); 
        entityEl.setAttribute("visible", true); 
        entityEl.setAttribute("geometry", { primitive: "ring", radiusInner: 9, radiusOuter: 10, }); 
        entityEl.setAttribute("position", position); entityEl.setAttribute("material", { color: "#0077CC", opacity: 1, }); 
        return entityEl;
    },
    createThumbnail: function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true); 
        entityEl.setAttribute("geometry", { primitive: "circle", radius: 9}); 
        entityEl.setAttribute("material",{src: item.url});
        return entityEl;
    },
    createTitle: function(position, item){
        const entityEl = document.createElement("a-entity"); 
        entityEl.setAttribute("text", { font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title, }); 
        const elPosition = position; elPosition.y = -20; entityEl.setAttribute("position", elPosition); 
        entityEl.setAttribute("visible", true); 
        return entityEl;
    }
})