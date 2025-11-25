import User from '../model/userModel.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email }); 
        
        if (userExist) {
            return res.status(400).json({ message: "Користувач вже існує" }); 
        } 

       const hashedPassword = await bcrypt.hash(password, 12);
 
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword  
        }); 

        const savedData = await newUser.save(); 

        res.status(200).json({ message: "Користувача успішно додано", savedData});  

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }) 

        if(!user) {
            return res.status(400).json({ message: "Користувача не знайдено" });
        } 

        const isPassCorrect = await bcrypt.compare(password, user.password);  
        if(!isPassCorrect) {
            res.status(400).json({ message: "Невірний пароль!" }); 
        }
        res.status(200).json({ message: "Успішний вхід!" , user});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
} 