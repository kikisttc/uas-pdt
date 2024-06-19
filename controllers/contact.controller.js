const Contact = require('../models/contact.model')

const whenGetAll = async(req, res) => {  //Read all data 
    const data = await Contact.find()
    res.render('index', {data})
};


const whenGetOne = async(req, res) => { //Read one data
    const data = await Contact.findById(req.params.id)
    res.render('edit',{data})
};


const whenPost = async (req, res) => { //Post data
    const data = new Contact({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber
    })

    try {
        const dataToSave = await data.save()
        // res.status(201).send(dataToSave)
        res.redirect("/contacts");
    } catch (error) {
        res.status(400).send({message: error.message})
    }
};


const whenPut = async(req, res) => {  //Put Data
    const id = req.params.id
    const updateData = req.body
    const option = {new : true}


    try {
        const result = await Contact.findByIdAndUpdate(id, updateData, option)
        // res.status(200).send({
        //     message: 'Update Successfully',
        //     data: result
        // })

        res.redirect("/contacts");
        
    } catch (error) {
        res.send({message: error.message})
    }
   
};



const whenDelete = async(req, res) => { //Delete data

    const id = req.params.id;

    try {
      const data = await Contact.findByIdAndDelete(id);
    //   res.status(200).send({
    //     message: `Data with id ${data.id} Successfully Deleted`,
    //   });

      res.redirect('/contacts')
    } catch (error) {
      res.send({ message: error.message });
    }
};

module.exports = { whenGetAll, whenGetOne, whenPost, whenPut, whenDelete };
