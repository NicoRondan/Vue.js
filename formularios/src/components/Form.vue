<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <h1>Contact Form</h1>
                    <hr>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" class="form-control" placeholder="Name" v-model="personData.name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" class="form-control" placeholder="Email" v-model="personData.email">
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label><br>
                        <textarea id="message" cols="60" rows="5" class="form-control" v-model="message"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="sendmail">
                            <input type="checkbox" value="sendemail" id="sendemail" v-model="optionMail"> Send Email
                        </label>&nbsp;&nbsp;
                        <label for="sendcopy">
                            <input type="checkbox" value="sendcopy" id="sendcopy" v-model="optionMail"> Send a Copy
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="male">
                            <input type="radio" value="M" id="male" v-model="genre"> Male
                        </label>&nbsp;&nbsp;
                        <label for="female">
                            <input type="radio" value="F" id="female" v-model="genre"> Female
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="schedule">Schedule</label>
                        <select id="schedule" class="form-control" v-model="schedule">
                            <option v-for="item in scheduleData" :key="item" :selected="item == 'Morning'"> {{ item }} </option>
                        </select>
                    </div>
                    <button class="btn btn-primary" @click.prevent="send">Send Data</button>
                </div>
            </div>
        </form> <br>
        <div class="row" v-if="sent">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3>Entered Data</h3>
                    </div>
                    <div class="panel-body">
                        <p>Name: {{ personData.name }}</p>
                        <p>Email: {{ personData.email }}</p>
                        <p style="white-space:pre">Message: <br> {{ message }}</p>
                        <p>Shipment Option:
                            <ul>
                                <li v-for="item in optionMail" :key="item"> {{ item }}</li>    
                            </ul>    
                        </p>
                        <p>Genre: {{ genre }}</p>
                        <p>Schedule: {{schedule}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form',
    data () {
        return {
            personData: {
                name: '',
                email: ''
            },
            message: 'Message Test',
            optionMail: [],
            genre: 'M',
            schedule: 'Morning',
            scheduleData: ['Morning', 'Afternoon', 'Night'],
            sent: false  
        }
    },
    methods: {
        send (){
            this.sent = true;
        }
    }
}
</script>

<style>

</style>