const User = require("../mongoModels/User");
const Words = require("../mongoModels/Words");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {jwtSecret} =require("../config/config");

class Controllers {

// /api/registr    ///////////////////////////////////////////////////////////////////////////
    async registr(req, res) {
        try {
            const {name, password} = req.body;
            if (!name.length) {
                return res.status(400).json({message: "имя не может быть пустым"})
            }
            if (password.length < 6) {
                return res.status(400).json({message: "минимальная длинна пароля 6 символов"})
            }

            const condidate = await User.findOne({name});
            if (condidate) {
                return res.status(400).json({message: `пользователь ${name} уже существует, придумайте другое имя!`})
            }

            const hashPassword = await bcrypt.hashSync(password, 4);

            const user = new User({name, password: hashPassword});
            await user.save();
            
            res.status(201).json({message: `Пользователь "${name}" успешно создан`})

        } catch (e) {
            res.status(500).json({message: "что то пошло не так попробуйте снова"})
            console.log(`Registr error ... ${e.message}`)
        }
        
    }

// /api/login    /////////////////////////////////////////////////////////////////////////
    async login(req, res) {
        try {
            const {name, password} = req.body;
            if (!name) {
                return res.status(400).json({message: "имя не может быть пустым"})
            }

            const user = await User.findOne({name});
            if (!user) {
                return res.status(400).json({message: `прользователь "${name}" не найден `})
            };

            const validPassword = await bcrypt.compareSync(password, user.password);
            if(!validPassword) {
                return res.status(400).json({message: `неверные учётные данные`});
            }

            const token = await jwt.sign(
                {userId: user._id},
                jwtSecret,
                {expiresIn: "72h"}
            )

            res.json({token})


        } catch (e) {
            res.status(500).json({message: "что-то не получилось попробуйте снова"})
            console.log(`Login error ... ${e.message}`)
        }
        
    }

// /api/setdata    ///////////////////////////////////////////////////////////////////////
    async setdata(req, res) {
        try {
            const data = req.body;
            const {userId} = req.user;
            
            const newWords = new Words({words: data, owner: userId});
            if (await Words.findOne({owner: userId})) {
                await Words.findOneAndUpdate({owner: userId}, {words: data});
            } else {
                await newWords.save();
            }

            res.status(201).json({message: "cписок слов обновлён"});

        } catch (e) {
            res.status(500).json({message: "ошибка сервера"})
            console.log(`Setdata error ... ${e.message}`)
        }
        
    }

// /api/getdata     ////////////////////////////////////////////////////////////////////////////
    async getdata(req, res) {
        try {
            const {userId} = req.user;
            if (!userId) {
                return res.status(400).json({message: "отсутствует авторизация"});
            }
            const data = await Words.findOne({owner: userId});
            if (!data) {
                return res.status(400).json({message: "слова не найдены"})
            }

            res.json(data.words);


        } catch (e) {
            res.status(500).json({message: "ошибка сервера"})
            console.log(`Getdata error ... ${e.message}`)
        }
        
    }
}


module.exports = new Controllers();