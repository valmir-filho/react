const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const jwtSecret = process.env.JWT_SECRET;
// Generate user token.
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: '7d',
    });
};
// Register an user and sign in.
const register = async (req, res) => {
    const { name, email, password } = req.body;
    // check if an user exists.
    const user = await User.findOne({ email });

    if (user) {
        res.status(422).json({ errors: ['😵‍💫 Erro! Email já cadastrado! Por favor, utilize outro.'] });
        return;
    }

    // Generate password hash.
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    // Create an user.
    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
    });

    // If an user was created sucessfully, return the token.
    if (!newUser) {
        res.status(422).json({
            errors: ['😵‍💫 Erro! Por favor, tente novamente mais tarde.'],
        });
        return;
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id),
    });
};
// Get logged in user.
const getCurrentUser = async (req, res) => {
    const user = req.user;

    res.status(200).json(user);
};
// Sign an user in.
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check if an user exists.
    if (!user) {
        res.status(404).json({ errors: ['😵‍💫 Erro! Usuário não encontrado!'] });
        return;
    }

    // Check if password matches.
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({ errors: ['😵‍💫 Erro! Senha inválida!'] });
        return;
    }

    // Return an user with token.
    res.status(200).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id),
    });
};
// Update an user.
const update = async (req, res) => {
    const { name, password, bio } = req.body;
    let profileImage = null;

    if (req.file) {
        profileImage = req.file.filename;
    }

    const reqUser = req.user;
    const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select('-password');

    if (name) {
        user.name = name;
    }

    if (password) {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        user.password = passwordHash;
    }

    if (profileImage) {
        user.profileImage = profileImage;
    }

    if (bio) {
        user.bio = bio;
    }

    await user.save();

    res.status(200).json(user);
};
// Get an user by id.
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(mongoose.Types.ObjectId(id)).select('-password');

    // Check if an user exists.
    if (!user) {
        res.status(404).json({ errors: ['😵‍💫 Erro! Usuário não encontrado!'] });
        return;
    }

    res.status(200).json(user);
};

module.exports = {
    register,
    getCurrentUser,
    login,
    update,
    getUserById,
};