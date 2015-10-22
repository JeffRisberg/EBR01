import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    status: DS.attr('string'),
    startDate: DS.attr('date'),

    formattedStartDate: function () {
        var date = this.get('startDate');

        return moment(date).format('LL');
    }.property('startDate')
});