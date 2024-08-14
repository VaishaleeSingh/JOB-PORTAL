export const updateUserCOntroller = async (req,res,next) => {
    const {name,email,lastname,location} = req.body
    if(!name || !lastname || !location) {
        next('Please Provide All Fields')
    }
    const user = await userModels.findOne({_id: req.user.userId})
    user.name = name
    user.lastname = lastname
    user.email = email
    user.location = location

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token,
    });
};