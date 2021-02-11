const Message = require('../../../model/message');

// Retrieve all messages in the database.
const getMessages = async (req, res) =>{
  try{
    const messages = await Message.find();  
    res.send({
        sucess: true,
        message: "Messages retrieved successfully",
        messages
    });

  }  catch(e){
    res.send({
        success: false,
        message: e.message || "Something happened messages couldn't be retrirved"
    })
  }
};

// Create a new message that is kept in the database.
const createMessage = async (req, res) =>{
    const newMessage = new Message(req.body);
try{
    await newMessage.save();
    res.send({
        success: true,
        message: "Message successfully created",
        newMessage
    })
} catch(e) {
    res.send({
        success: false,
        message: e.message || "Message not created"
    })
}
    

}

module.exports = {getMessages, createMessage};