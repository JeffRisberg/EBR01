import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        createCampaign(name) {
            const campaign = this.get('store').createRecord('campaign', {
                name,
                startDate: Date.now()
            });
            campaign.save();
        }
    }
});