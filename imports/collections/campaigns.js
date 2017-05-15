import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'campaigns.insert': function(){
        return Campaigns.insert({
            //Use DAte object for better queries
            createdAt: new Date(),
            name: '',
            content: '',
            sharedWith: [],
            ownerId:this.userId
        }); 
    },

    'campaigns.remove': function(bin) {
    	return Campaigns.remove(bin);
    },

    'campaigns.update': function(bin, content){
    	return Campaigns.update(bin._id, { $set: { content }});
    },

    'campaigns.share': function(bin, email){
        return Campaigns.update(bin._id, { $push: { sharedWith: email}});
    }
});



export const Campaigns = new Mongo.Collection('campaigns');