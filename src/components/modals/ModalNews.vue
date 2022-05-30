<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if='idPost'
          color="rgb(0, 82, 204)"
          depressed
          elevation="3"
          v-bind="attrs"
          v-on="on"
          class="white--text"
          @click="dialog = true"
        >Edit</v-btn>
        <v-btn
          v-else
          color="#42b983"
          depressed
          elevation="3"
          v-bind="attrs"
          v-on="on"
          class="white--text"
          @click="dialog = true"
        >Add new</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span v-if="idPost" class="text-h5">Edit post</span>
          <span v-else class="text-h5">Add new</span>
        </v-card-title>
        <v-card-text>
          <v-container class="modal-container">
            <v-row>
              <v-col v-show="idPost" cols="12">
                <div
                  class="body-1 text-left"
                >Current post: {{ idPost }}</div>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  required
                  v-model="post.title"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  label="Content"
                  required
                  v-model="post.content"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="onSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    idPost: Number,
    dataPost: Object
  },

  data: () => ({
    dialog: false,
    post: {
      id: '',
      title: '',
      content: '',
    }
  }),

  created() {
    this.checkPost()
  },

  methods: {
    ...mapMutations(['ADD_POST', 'UPDATE_POST']),

    checkPost() {
      if(this.idPost) {
        this.post = this.dataPost;
        return true;
      } else return false
    },

    onSubmit() {
      this.dialog = false;
      if(this.checkPost()) {
        this.UPDATE_POST(this.post);
      } else {
        this.post.id = Math.random();
        this.ADD_POST(this.post);
        this.post = {}
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.modal-container
  padding-left: 0!important
  padding-right: 0!important
</style>