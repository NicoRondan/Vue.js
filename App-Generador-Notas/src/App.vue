<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="form">
      <div class="form-group">
        <label>Title</label>
        <input type="text" v-model="note.title" class="form-control">
      </div>
      <div class="form-group">
        <label>Text</label>
        <textarea v-model="note.text" class="form-control"></textarea>
      </div>
      <button class="btn btn-primary" @click="addNote">Save</button>
    </div>
    <div class="col-sm-12">
      <div class="col-sm-4 note" v-for="(note, index) in notes" :key="index">
        <div class="card">
          <div class="card-block">
            <div class="card-title">{{note.title}}</div>
            <div class="card-subtitle mb-2 text-mutted">{{note.date}}</div>
            <p class="card-text">{{note.text}}</p>
          </div>
          <button class="close" @click="removeNote(index)">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Note Management',
      note: {
        title: '',
        text: ''
      },
      notes: [
        {
          title: 'Go to the cinema',
          text: 'examine the premiere movies',
          date: new Date(Date.now()).toLocaleDateString()
        }
      ]
    }
  },
  methods: {
    addNote: function() {
      let {text, title} = this.note;
      this.notes.push({
        title,
        text,
        date: new Date(Date.now()).toLocaleString()
      });
    },
    removeNote: function(index) {
      this.notes.splice(index, 1);
    }
  }
}
</script>

<style>
  .form{
    text-align: left;
  }

  .card{
    text-align: left;
    border: 1px solid #2c3e50;
    border-radius: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .note{
    padding: 5px;
  }

</style>
