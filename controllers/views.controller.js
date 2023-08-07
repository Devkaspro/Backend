const { ViewModel } = require("../model/view.model")


module.exports.getViews=async(req,res)=>{
    try {
       const views=await ViewModel.findOne({}).sort({createdAt:1});
       res.status(200).send(views);
    } catch (error) {
        console.log(error)
    }
}