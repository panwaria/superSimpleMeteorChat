Template.chatInputTemplate.events({
  'keydown #chatInput' : function (e) {
    if(e.keyCode==13){
      Messages.insert({
        msg: $(e.target).val(),
        time: Date.now()
      });
      $(e.target).val('')
    }
  }
});
Template.messagesTemplate.messages = function(){
  return Messages.find({},{sort:{time: -1}});
};

