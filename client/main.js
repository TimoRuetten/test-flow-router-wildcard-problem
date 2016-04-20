import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './main.html';


FlowRouter.route('/:wildcard(.*)', {
  name: 'root',
  action(params) {
    console.log('Route params:', params);
    BlazeLayout.render('hello');
  }
});


Template.hello.events({
  'click .set-params-as-string'() {
    const words = [Fake.word(), Fake.word()];
    FlowRouter.setParams({
      wildcard: words.join('/')
    });
  },
  'click .set-params-as-array'() {
    const words = [Fake.word(), Fake.word()];
    FlowRouter.setParams({
      wildcard: words
    });
  }
});
