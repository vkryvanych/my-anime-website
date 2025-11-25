import Contact from "../model/Contact.js";

export const createContact = async(req, res) => {
    try {
        const { username, email, message } = req.body;
        const newContact = new Contact({
            username,
            email,
            message
        }); 

        const savedContact = await newContact.save(); 
        res.status(200).json({ message: "Повідомлення успішно надіслано!", contact: savedContact })

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}