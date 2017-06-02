class GoatsService {

    constructor($http ,MsgService ,configuration ,$timeout) {
        "ngInject";
        this.$http = $http;
        this.MsgService = MsgService;
        this.$timeout = $timeout;

        this.updatedGoat = {};
        this.isUpdating = false;
        this.config = configuration;



        //by default add one goat
        this.goats = [
            {
                name: "Goat 1",
                age: 23,
                about: "I'm a demo goat, and this is my bio",
                photo: "../resources/goat.jpg",
                selected : false
            },
            {
                name: "Goat 2",
                age: 20,
                about: "I'm a demo2 goat, and this is my bio2",
                photo: "../resources/goat.jpg",
                selected :false
            },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },
            // {
            //     name: "Goat 2",
            //     age: 20,
            //     about: "I'm a demo2 goat, and this is my bio2",
            //     photo: "../resources/goat.jpg",
            //     selected :false
            // },


        ];

        // simulate focus changed !!!
        // this.$timeout(()=> {
        //     this.goats[0].selected = true;
        // }, 8000);
    }

    getGoats() {
        return this.goats;
    }

    createGoat(goat) {
        const {name, age, about, photo} = goat;
        const tempGoat = {about, photo, name, age};
        this.goats.push(tempGoat);
        this.MsgService.broadcast('goatAdded',tempGoat);
    }

    storeUpdatedGoat(goat) {
        this.updatedGoat = goat;
        this.isUpdating = true;
        console.log(this.updatedGoat);
    }

    isUpdateMode() {
        return this.isUpdating;
    }

}

export default GoatsService;