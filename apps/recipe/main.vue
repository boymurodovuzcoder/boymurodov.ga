Vue.component("LIST", {
  
  template: 
  `<div class="container">

            <div class="row">
            
              <div class="col-md list">
                <div class="sec head exception">A List of Recipes</div>
                <ul>
                   <li v-for="(recipe, index) in computedList" :key="recipe.id" :class="[{activeRecipe: selected === recipe}, {martop:true}]" >
                   
                      <!-- Creates the bootstrap modal where the image will appear -->
                      <div v-if="recipe.src">
                        <a href="#" id="pop" onclick="$(this).next().modal('show');">
                          <img id="imageresource" :src="recipe.src" :alt="recipe.name.length>10 ? recipe.name.substring(0,10) : recipe.name">
                      </a>

                      <div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">{{recipe.name.length>16 ? recipe.name.substring(0,16) + ".." : recipe.name}}</h4>
                              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                              
                            </div>
                            <div class="modal-body">
                              <img :src="recipe.src" id="imagepreview" style="width: 100%; height: 100%;" :alt="recipe.name" @click="showRecipe(recipe)">
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>




                       <div class="detail"  @click="showRecipe(recipe)">
                           <div class="name">
                               {{recipe.name.length>14 ? recipe.name.substring(0,14) + ".." : recipe.name}} 
                           </div>
                           <span class="timeAdd">{{recipe.addedTime}}</span>
                       </div>
                       <!--<i class="fas fa-trash trash" @click="removeElement(index)"></i>-->
                       <div class="btn-group dropleft">
                        <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" @click="edit(index)">Edit</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal" @click="toBeDeleted(index)">Delete</a>
                        </div>
                        </div>
                       

                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">{{recipe.name.length>18 ? recipe.name.substring(0,18) + ".." : nameforname}}</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  Are you sure to delete this recipe?
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: #fff83156; border: none; color: black;">No</button>
                                  <button type="button" @click="removeElement(index, recipe)" data-toggle="modal" data-target="#exampleModal2" data-dismiss="modal" class="btn btn-primary" style="background-color: gainsboro ; border: none; color: black;">Yes</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  Recipe <span class="badge badge-secondary">{{deletingName}}</span> Successfully Deleteted.
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: gainsboro ; border: none; color: black;">Ok</button>
                                </div>
                              </div>
                            </div>
                          </div>

                   </li> 
                </ul>
              </div>
              <div class="col-md SelectedRecipe">
                <div class="sec head">Selected Recipe</div>

                    <div class="selected" v-if="selected.id!=undefined">

                      <div v-if="selected.src!=''" class="containerImg">
                        <img :src="selected.src"  class="image rounded">
                        <div class="overlay rounded">{{selected.addedTime}}</div>
                      </div>
                      <div v-else class="containerImg">
                        <img :src="selected.src"  class="image rounded" style="padding-top:4.3rem; margin-bottom:1rem;">
                        <div class="overlay rounded">{{selected.addedTime}}</div>
                      </div>


                        <div class="detail">
                            <div class="name">
                                {{selected.name}} 
                            </div>
                            <span class="r">
                                Recipe:
                            </span> <br>
                            <span v-html="selected.recipe" class="textFormat">
                            </span>
                            
                        </div>
                    </div>
                    </div>
              </div>
              <div v-if="this.$root.computedList == ''" class="notFound">No Recipe Found</div>
            </div>
            
          </div>`,
  computed: {
    nameforname: function() {
      if (this.$root.recipeslist[this.$root.toBeDeletedIndex] == undefined) {
        console.log("nothing special")
      } else {
        return this.$root.recipeslist[this.$root.toBeDeletedIndex].name;
      }
    },
    recipeslist: function(){
      return this.$root.recipeslist;
    },
    selected: function(){
      return this.$root.selected;
    },
    computedList: function(){
      return this.$root.computedList;
    },
    deletingName: function() {
      return this.$root.deletingName;
    }
  },
  methods: {
    showRecipe(recipe) {
      this.$root.showRecipe(recipe);
    },
    toBeDeleted(index) {
      this.$root.toBeDeletedIndex = index
    },
    removeElement(index, recipe) {
      this.$root.removeElement(index, recipe);
    },
    edit(index) {
        console.log(index)
        this.$root.currentcomp = "EDITELEMENT";
        this.$root.editElementIndex = index
    }
  },
})

Vue.component("ADD", {
  template: `
  <div class="container">
  <form>
    <div v-for="item in items" class="sec">
    <div class="form-group">
    <div v-if="!item.image">
      <div class="headerFormText liitlerightpad" style="margin-bottom: 0.5rem;">Select an image for your new Recipe</div>
      <input type="file" @change="onFileChange(item, $event)" class="btn btn-color form-control liitlerightpad" >
    </div>
    <div v-else>
      <img :src="item.image" class="form-control imgh liitlerightpad"/>
      <button @click="removeImage(item)" class="btn btn-color form-control">Remove image</button>
    </div>
  </div>
  
  <div class="form-group">
    <div class="headerFormText liitlerightpad">Enter name of Recipe:</div>
    <input type="text" @input="typing = false" class="form-control liitlerightpad" v-model="name" id="formGroupExampleInput" placeholder="Input name" required>
  </div>

  <div class="form-group">
    <label class="headerFormText liitlerightpad" for="exampleFormControlTextarea1">Enter Detail of Recipe</label>
    <textarea @input="typing = false" class="form-control" id="exampleFormControlTextarea1" rows="10" v-model="detailRecipe" required placeholder="Enter Recipe"></textarea>
  </div>

  <button type="button" @click="Validation(item)" style="color:black;" class="btn btn-secondary btn-lg btn-block btn-color">Add new Recipe</button>
  <div v-if="!isActive" class="alert alert-danger success" role="alert" style="margin-top: 1rem;">
    Name and Detail of Recipe are required
  </div>
  <div v-else-if="isActive === 'name'" class="alert alert-danger success" role="alert" style="margin-top: 1rem;">
    Name is required
  </div>
  <div v-else-if="isActive === 'detailRecipe'" class="alert alert-danger success" role="alert" style="margin-top: 1rem;">
    Detail of Recipe is required
  </div>
  <div v-show="typing" v-else-if="isActive==true" class="alert alert-success success" role="alert" style="margin-top: 1rem;">
  New Recipe Successfully Added!
  </div>

  </form>
  </div>

  </div>

  
  `,
  data() {
    return {
      items: [
       {
         image: false,
       },
    ],
    typing: false,
    name: "",
    detailRecipe: "",
    isActive: "False",
    newRecipe: {
      src:"",
      name: "",
      addedTime: "",
      recipe: "",
      id: 0,
    }
    }
  },
  methods: {
    onFileChange(item, e) {
      this.typing = false
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(item, files[0]);
      
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
        this.newRecipe.src = item.image;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (item) {
      item.image = false; 
      this.newRecipe.src = "";
    },
    Validation: function(item) {
      if ((this.name == "") && (this.detailRecipe =="")) {
        this.isActive = false
      } else if (this.name == "") {
        this.isActive = "name"
      } else if (this.detailRecipe == ""){
        this.isActive = "detailRecipe"
      } else {
        this.typing = true,
        this.isActive = true
        this.newRecipe.name = this.name
        this.newRecipe.recipe = this.detailRecipe
        this.$root.nextid += 1
        this.newRecipe.id = this.$root.nextid 

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = 'Added on ' +  mm + '-' + dd + '-' + yyyy;
        
        
        this.$root.nextid += 1
        this.$root.recipeslist.unshift({
          src: this.newRecipe.src,
          name: this.newRecipe.name,
          addedTime: today,
          recipe: this.newRecipe.recipe,
          id: this.$root.nextid,
        })

        localStorage.removeItem('recipeslist')
        localStorage.setItem('recipeslist', JSON.stringify(this.$root.recipeslist))
        this.$root.recipeslist = JSON.parse(localStorage.getItem('recipeslist'))
        
        this.name = ""
        this.detailRecipe = ""
        item.image = false
        this.newRecipe.src = ""
        
      }
    }
  }
})

Vue.component("searchcomp", {
  template :
  `
  <input v-model="query" @input="queryF" class="form-control mr-sm-2" type="search" placeholder="Search recipe" aria-label="Search">
  `,
  data() {
    return {
      query: "",
    }
  },
  methods: {
    queryF: function() {
      this.$root.queryText = this.query
    }
  },
})

Vue.component("EDITELEMENT", {
    template: `
    <div class="container">
        <div v-for="item in items" class="sec">
            <div class="form-group">
            <div v-if="!item.image">
            <div class="headerFormText liitlerightpad" style="margin-bottom: 0.5rem;">Upload New Image</div>
            <input type="file" @change="onFileChange(item, $event)" class="btn btn-color form-control liitlerightpad" >
            </div>
            <div v-else>
            <img :src="item.image" class="form-control imgh liitlerightpad"/>
            <button @click="removeImage(item)" class="btn btn-color form-control">Remove image</button>
            </div>
        </div>
        <div class="form-group">
            <div class="headerFormText liitlerightpad">Enter name of Recipe:</div>
            <input type="text" @input="type($event)" class="form-control liitlerightpad" v-model="changingRecipe.name" id="formGroupExampleInput" placeholder="Input name" required>
        </div>
        <div class="form-group">
            <label class="headerFormText liitlerightpad" for="exampleFormControlTextarea1">Enter Detail of Recipe</label>
            <textarea @input="type($event)" class="form-control" id="exampleFormControlTextarea1" rows="10" v-model="changingRecipe.recipe" required></textarea>
        </div>
        <button type="button" data-toggle="modal" data-target="#exampleModal3" style="color:black;" class="btn btn-secondary btn-lg btn-block btn-color" >Update Changes</button>



      <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">{{changingRecipe.name.length>18 ? changingRecipe.name.substring(0,18) + ".." : recipe.name}}</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  Do you wan to update all changes?
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: #fff83156; border: none; color: black;">No</button>
                                  <button type="button" @click="Validation()" data-toggle="modal" data-target="#exampleModal4" data-dismiss="modal" class="btn btn-primary" style="background-color: gainsboro ; border: none; color: black;">Yes</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  Recipe Successfully Updated.
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: gainsboro ; border: none; color: black;">Ok</button>
                                </div>
                              </div>
                            </div>
                          </div>


        <div v-if="typing" class="alert alert-success success" role="alert" style="margin-top: 1rem;">
            Changes Updated Successfully!
        </div>
    </div>
    `,
    data: function () {
        return {
            typing: false,
            src: false,
            changed: false,
            changedName: false,
            changedRecipe: false,
            name: "",
            recipe: "",
            items: [
            {
                image: false,
            },
            ],
        }
    },
    computed: {
        changingRecipe: function() {
            return {
                name: this.$root.recipeslist[this.$root.editElementIndex].name,
                recipe: this.$root.recipeslist[this.$root.editElementIndex].recipe,
                
            }
        },
    },
    methods: {
        onFileChange(item, e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(item, files[0]);
        },
        type(e) {
            if (e.target.tagName == "INPUT") {
                this.name = e.target.value;
                this.changedName = true;
            } else {
                this.recipe = e.target.value
                this.changedRecipe = true;
            }
            this.typing = false;
        },

        createImage(item, file) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = (e) => {
            item.image = e.target.result;
            this.src = item.image;
            this.typing = false;
            this.changed = true;
            
        };
        reader.readAsDataURL(file);
        },

        removeImage: function (item) {
            this.src = "";
            item.image = false; 
            this.typing = false;
            this.changed = true;
            
            
        },

        Validation: function() {
            this.typing = true;
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            today = 'Updated on ' + today.replace(/\b0/g, '');
            if (this.changed) {
                this.$root.recipeslist[this.$root.editElementIndex].src = this.src;
            }
            if (this.changedName) {
                this.$root.recipeslist[this.$root.editElementIndex].name = this.name;
            }
            if (this.changedRecipe) {
                this.$root.recipeslist[this.$root.editElementIndex].recipe = this.recipe;
            }
            this.$root.recipeslist[this.$root.editElementIndex].addedTime = today;

            localStorage.removeItem('recipeslist')
            localStorage.setItem('recipeslist', JSON.stringify(this.$root.recipeslist))
            this.$root.recipeslist = JSON.parse(localStorage.getItem('recipeslist'))
            
            this.changed = false;
            this.changedName = false;
            this.changedRecipe = false;
            this.items.image = false;
        }
    } 
})

var app = new Vue({
  el: "#app",
  data: {
    recipeslist: "",
    selected: {},
    currentcomp: "LIST",
    queryText:"",
    editElementIndex: 0,
    deletingName: "",
    nextid: 3,
    toBeDeletedIndex: 0
  },
  created() {
    var defaultRecipeslist = [
    {
      src:"food/cake.jpg",
      name: "Cake",
      addedTime: "Added on 8-18-2020",
      recipe: "Directions. Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners. In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Bake for 30 to 40 minutes in the preheated oven.",
      id: 1,
    },
    {
      src:"food/Pie.jpg",
      name: "Pie",
      addedTime: "Added on 8-18-2020",
      recipe: "Apple Crumble Make Apple Pie, adding 1 extra tablespoon flour to the filling. Off the heat, add 1/2 cup sour cream and 1/2 teaspoon nutmeg. Omit the top crust. Mix 1/2 cup flour, 1 cup oats, 3/4 cup each chopped walnuts and brown sugar, 6 tablespoons melted butter and a pinch of salt.",
      id: 2,
    },
    {
      src:"food/pizza.jpg",
      name: "Pizza",
      addedTime: "Added on 8-18-2020",
      recipe: "Ingredients. 1 1/2 cups (355 ml) warm water (105°F-115°F) 1 package (2 1/4 teaspoons) of active dry yeast. 3 3/4 cups (490 g) bread flour. 2 tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven) 2 teaspoons salt. 1 teaspoon sugar.",
      id: 3,
    },
    ]
    if (!localStorage.getItem('beforeEntered')) {
      localStorage.setItem('recipeslist', JSON.stringify(defaultRecipeslist))
      this.recipeslist = defaultRecipeslist
      localStorage.setItem('beforeEntered', 'true')
      console.log('welcome!')
    } else {
      this.recipeslist = JSON.parse(localStorage.getItem('recipeslist'))
      console.log('welcome again!')
    }
  },
  methods: {
    showRecipe(recipe) {
      this.selected = recipe;
    },
    removeElement(index, recipe) {
      if (this.recipeslist[this.toBeDeletedIndex].id == this.selected.id) {
        this.selected = {}
      }
      this.deletingName = this.recipeslist[this.toBeDeletedIndex].name;
      this.recipeslist.splice(this.toBeDeletedIndex,1)

      localStorage.removeItem('recipeslist')
      localStorage.setItem('recipeslist', JSON.stringify(this.recipeslist))
      this.recipeslist = JSON.parse(localStorage.getItem('recipeslist'))
    },
    
  },
  computed: {
    computedList: function () {
      var vm = this
      return this.recipeslist.filter(function (item) {
        return ((item.name.toLowerCase().indexOf(vm.queryText.toLowerCase()) !== -1) || (item.recipe.toLowerCase().indexOf(vm.queryText.toLowerCase()) !== -1))
      })
    },
  },
  
})