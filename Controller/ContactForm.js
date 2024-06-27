const Contact = require("../Module/Contact");

//<================CreateForm=================>//

const contactForm = async (req, res) => {
    try {
        const { username, email, phone, msg } = req.body;

        if (!username || !email || !phone || !msg) {
            return res.status(400).json({ 
                message: "All fields are required"
            });
        }

        const response = { username, email, phone, msg };
        await Contact.create(response);
        return res.status(200).json({ 
            message: "Message sent successfully"
        });
    } catch (error) {
        console.log(`This error is coming when contact form is working: ${error}`);
        return res.status(500).json({ 
            message: "Internal Server Error"
        });
    }
};


//<===============GetAllContact====================>//

const GetAllcontact = async (req, res) => {
    try {
        const alluser = await Contact.find();
        return res.status(200).json({
            alluser,
        });
    } catch (error) {
        console.log(`This error is coming when getting all users: ${error}`);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};



//<====================Update User Data==================>//

const UpdateUserDetails= async(req,res,next)=>{
    try{
        const id = req.params.id;
        const updateuserdate = req.body;
        
        const updateData = await Contact.updateOne({_id:id},{$set:updateuserdate});

        res.status(200).json(updateData);

    }catch(error){
        next(error);
    }
}


const GetSingleContact = async (req, res) => {
    try {
        const id = req.params.id;
        const singleContact = await Contact.findById(id);
        
        if (!singleContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ singleContact });
    } catch (error) {
        console.error(`This error is coming when single user fetch: ${error}`);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//<==============Delet Contact==================>//

const Deletcontact = async(req,res,next)=>{

    try{
    const id = req.params.id;
    await Contact.deleteOne({_id:id});

    res.status(200).json({message:"User delet successfully"});
    }catch(error){
        next(error);
    }
  
};



module.exports = { contactForm, GetAllcontact,Deletcontact,UpdateUserDetails,GetSingleContact };
