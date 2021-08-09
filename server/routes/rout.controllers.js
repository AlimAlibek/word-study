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
        }
        
    }

// /api/setdata    ///////////////////////////////////////////////////////////////////////
    async setdata(req, res) {
        try {
            const {group, groupName} = req.body;
            const {userId} = req.user;

            if (await Words.findOne({owner: userId, groupName})) {
                if (group) {
                    await Words.findOneAndUpdate({owner: userId, groupName}, {group: group})
                } else {
                    await Words.findOneAndRemove({owner: userId, groupName});
                }
                
            } else {
                if (!group) {
                    return;
                }
                const newWords = new Words({groupName, group, owner: userId});
                await newWords.save();
            }

            res.status(201).json({message: "cписок слов обновлён"});

        } catch (e) {
            res.status(500).json({message: "ошибка сервера"})
        }
        
    }

// /api/getdata     ////////////////////////////////////////////////////////////////////////////
    async getdata(req, res) {
        try {
            const {userId} = req.user;
            if (!userId) {
                return res.status(400).json({message: "отсутствует авторизация"});
            }
            if (!await User.findOne({_id: userId})) {
                return res.status(400).json({message: "пользователь не найден"})
            }
            const data = await Words.find({owner: userId});
            if (!data.length) {
                return res.status(400).json({message: "слова не найдены"})
            }
            
            const groups = data.map(group => {
                return {group: group.group, groupName: group.groupName}
            })

            const groupsObj = {}
            groups.forEach(group => {
                groupsObj[group.groupName] = group.group;
            })

            res.json(groupsObj);

        } catch (e) {
            res.status(500).json({message: "ошибка сервера"})
        }
        
    }
}


module.exports = new Controllers();